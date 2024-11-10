import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const loader = () => {
	return {
		jsonLD: {
			"@context": "https://schema.org",
			"@type": "Person",
			name: "Gonzalo Rascon",
			url: "https://gonzarascon.com",
			sameAs: [
				"https://github.com/gonzarascon",
				"https://substack.com/@gonzalorascon",
			],
		},
	};
};

export const meta: MetaFunction = () => {
	return [
		{ title: "Gonzalo Rascon - Fullstack developer" },
		{
			name: "description",
			content:
				"Personal website of Gonzalo Rascon, showcasing projects and articles by @gonzarascon",
		},
		{
			name: "keywords",
			content: "Gonzalo Rascon, web development, design, projects, articles",
		},
		{ name: "author", content: "Gonzalo Rascon" },
		{ property: "og:title", content: "Gonzalo Rascon - Fullstack developer" },
		{
			property: "og:description",
			content:
				"Personal website of Gonzalo Rascon, showcasing projects and articles by @gonzarascon",
		},
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://gonzarascon.tech" },
		{ name: "twitter:creator", content: "@gonzarascon" },
		{ name: "twitter:title", content: "Gonzalo Rascon - Fullstack developer" },
		{
			name: "twitter:description",
			content:
				"Personal website of Gonzalo Rascon, showcasing projects and articles by @gonzarascon",
		},
	];
};

import { GithubIcon, NewspaperIcon } from "lucide-react";
import posthog from "posthog-js";

export default function Component() {
	const projects = [
		{ title: "Drawy", href: "/drawy" },
		{ title: "TCG Generator", href: "/tcg-generator" },
	];

	return (
		<div className="min-h-screen bg-gray-100 font-serif">
			<div className="p-8">
				<h1 className="mb-8 text-center text-3xl font-bold text-slate-700">
					Gonza Rascon
				</h1>

				<div className="mb-8 flex justify-center space-x-4 font-sans font-light">
					<a
						href="https://substack.com/@gonzalorascon"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center text-gray-600 hover:text-gray-900"
					>
						<NewspaperIcon className="mr-2 h-5 w-5" />
						Substack
					</a>
					<a
						href="https://github.com/gonzarascon"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center text-gray-600 hover:text-gray-900"
					>
						<GithubIcon className="mr-2 h-5 w-5" />
						GitHub
					</a>
				</div>
			</div>

			<div
				className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
				aria-hidden="true"
			/>

			<div className="p-8">
				<div className="mx-auto max-w-md">
					<h2 className="mb-4 text-xl font-medium text-gray-700 font-sans">
						My stuff
					</h2>
					<ul className="space-y-2">
						{projects.map((project) => (
							<li key={project.href}>
								<Link
									to={project.href}
									className="block rounded-md py-2 px-4 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
									onClick={() => {
										posthog.capture("project_clicked", {
											project: project.title,
										});
									}}
								>
									{project.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
