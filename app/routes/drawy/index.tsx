import type { MetaFunction } from "@remix-run/react";
import { createDrawy } from "drawy";

const SettingsPanel: React.FC = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Settings</h2>
			<p className="text-gray-700">
				Adjust your preferences and settings here.
			</p>
		</div>
	);
};

const ProfilePanel = () => {
	const { open } = useDrawy();

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Profile</h2>
			<p className="text-gray-700 mb-4">
				View and edit your profile information.
			</p>
			<button
				type="button"
				onClick={() => open("settings")}
				className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
			>
				Open Settings Panel
			</button>
		</div>
	);
};

const ExampleBasic = () => {
	const { open } = useDrawy();

	return (
		<div className="w-full max-w-md bg-white shadow-md rounded-md p-6">
			<h3 className="text-xl font-bold mb-4 text-gray-800">Basic Panel</h3>
			<p className="text-gray-600 mb-4">
				Click the button to open a side panel.
			</p>
			<button
				type="button"
				onClick={() => open("settings")}
				className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
			>
				Open Settings Panel
			</button>
		</div>
	);
};

const ExampleStack = () => {
	const { open } = useDrawy();

	return (
		<div className="w-full max-w-md bg-white shadow-md rounded-md p-6">
			<h3 className="text-xl font-bold mb-4 text-gray-800">Panel Stack</h3>
			<p className="text-gray-600 mb-4">
				Open panels from within panels to create a stack.
			</p>
			<button
				type="button"
				onClick={() => open("profile")}
				className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
			>
				Open Profile Panel
			</button>
		</div>
	);
};

const NotificationsPanel = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Notifications</h2>
			<p className="text-gray-700">Manage your notification preferences.</p>
		</div>
	);
};

const panels = {
	settings: <SettingsPanel />,
	profile: <ProfilePanel />,
	notifications: <NotificationsPanel />,
};

const { DrawyProvider, useDrawy } = createDrawy(panels);

const LandingPage = () => {
	return (
		<DrawyProvider>
			<div className="min-h-screen bg-gray-50 flex flex-col">
				<header className="bg-white shadow">
					<div className="container mx-auto px-4 py-6 flex items-center justify-between">
						<div className="text-2xl font-bold text-gray-800">Drawy</div>
						<nav>
							<a
								href="https://github.com/gonzarascon/drawy"
								className="text-gray-600 hover:text-gray-800 mx-4"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</nav>
					</div>
				</header>

				<main className="container mx-auto px-4 py-12 flex-grow">
					<section className="text-center">
						<h1 className="text-4xl font-bold text-gray-800 mb-6">
							Simplify Side Panels with Drawy
						</h1>
						<p className="text-xl text-gray-600 mb-8">
							A minimalist React library for managing side panels effortlessly.
						</p>
						<a
							href="#examples"
							className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700"
						>
							View Examples
						</a>
					</section>

					<section id="examples" className="mt-16">
						<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
							Live Examples
						</h2>
						<div className="flex flex-col items-center space-y-12">
							<ExampleBasic />

							<ExampleStack />
						</div>
					</section>
				</main>
			</div>
		</DrawyProvider>
	);
};

export default LandingPage;

export const meta: MetaFunction = () => {
	return [
		{ title: "Drawy —  Simple Side Panels for React" },
		{
			property: "og:title",
			content: "Drawy —  Simple Side Panels for React",
		},
		{
			name: "description",
			content:
				"The minimalist React library for managing side panels effortlessly.",
		},
	];
};
