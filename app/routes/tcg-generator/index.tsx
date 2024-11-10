import type { ActionFunction } from "@remix-run/node";
import { json, useFetcher } from "@remix-run/react";
import { Download } from "lucide-react";
import posthog from "posthog-js";
import { type PokemonType, generateImage } from "./api/generate";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./components/ui/select";
import { Skeleton } from "./components/ui/skeleton";
import { Textarea } from "./components/ui/textarea";

const pokemonTypes = [
	"fire",
	"water",
	"grass",
	"electric",
	"psychic",
	"dark",
	"fighting",
	"steel",
	"fairy",
	"dragon",
	"normal",
];

export default function ModernElectricalForm() {
	const fetcher = useFetcher<typeof action>();

	const isLoading =
		fetcher.state === "loading" || fetcher.state === "submitting";

	const imageUrl = fetcher.data?.imageUrl;

	const handleDownload = () => {
		posthog.capture("download_clicked", { name: "poke-card" });
		if (!imageUrl) return;
		const link = document.createElement("a");
		link.href = imageUrl;
		link.download = "poke-card.png";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="bg-gray-100 p-4 min-h-screen">
			<div className="min-h-[80vh] flex flex-col items-center justify-center">
				<h1 className="text-3xl font-bold mb-3">Poké-card Generator</h1>
				<span className="text-lg text-gray-700 mb-8">
					Create monster cards of your own!
				</span>

				<Card className="w-full mb-8 max-w-lg">
					<CardContent className="pt-6">
						<fetcher.Form
							method="post"
							className="space-y-4"
							onSubmit={() =>
								posthog.capture("form_submitted", { name: "tcg-generator" })
							}
						>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Monster Name:
								</label>
								<Input
									type="text"
									id="name"
									name="name"
									required
									className="w-full"
									placeholder="Enter the monster name here..."
									onClick={() =>
										posthog.capture("input_clicked", { name: "name" })
									}
								/>
							</div>

							<div>
								<label
									htmlFor="pokemonType"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Pokemon Type:
								</label>
								<Select name="type" required>
									<SelectTrigger
										className="w-full"
										onClick={() =>
											posthog.capture("input_clicked", { name: "type" })
										}
									>
										<SelectValue placeholder="Select a type..." />
									</SelectTrigger>
									<SelectContent>
										{pokemonTypes.map((type) => (
											<SelectItem key={type} value={type}>
												{type}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							<div>
								<label
									htmlFor="prompt"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Describe your monster in a sentence:
								</label>
								<Textarea
									id="prompt"
									name="prompt"
									required
									className="w-full"
									placeholder="Enter your prompt here..."
									onClick={() =>
										posthog.capture("input_clicked", { name: "prompt" })
									}
								/>
							</div>

							<Button type="submit" className="w-full" disabled={isLoading}>
								Generate
							</Button>
						</fetcher.Form>
					</CardContent>
				</Card>
			</div>
			<div className="w-full max-w-md relative group mx-auto">
				{isLoading ? (
					<Skeleton className="w-[448px] h-[576px] rounded-lg bg-slate-600" />
				) : imageUrl ? (
					<>
						<img
							src={imageUrl}
							alt="Generated Poke-card"
							className="w-full rounded-lg shadow-lg"
						/>
						<Button
							className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
							size="icon"
							variant="secondary"
							onClick={handleDownload}
							aria-label="Download image"
						>
							<Download className="h-4 w-4" />
						</Button>
					</>
				) : null}
			</div>
		</div>
	);
}

export const action: ActionFunction = async ({ request }) => {
	try {
		const formData = await request.formData();
		const data = Object.fromEntries(formData.entries());
		const errors: Record<string, string> = {};

		if (!data.prompt) {
			errors.prompt = "Prompt is required";
		}

		if (Object.keys(errors).length > 0) {
			return json({ errors }, { status: 400 });
		}

		const modelResponse = (await generateImage({
			promptText: data.prompt as string,
			type: data.type as PokemonType,
			name: data.name as string,
		})) as unknown[];

		const imageUrl = modelResponse.join("");

		if (!imageUrl) {
			return json({ error: "Failed to generate image" }, { status: 500 });
		}

		return json({ imageUrl });
	} catch (error) {
		console.log(error);
		return json({ error: (error as Error).message }, { status: 500 });
	}
};
