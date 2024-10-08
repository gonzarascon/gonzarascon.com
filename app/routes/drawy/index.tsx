import type { MetaFunction } from "@remix-run/react";
import { createDrawy } from "drawy";

import { motion } from "framer-motion";
import { ChevronRight, Github } from "lucide-react";
import Prism from "prismjs";
import prismcss from "prismjs/themes/prism-tomorrow.css?url";
import "prismjs/components/prism-jsx";
import type { LinksFunction } from "@remix-run/node";
import { useEffect } from "react";

const SettingsPanel: React.FC = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">I&apos;m stacked</h2>
			<p className="text-gray-700">
				You can stack multiple panels on top of each other.
			</p>
		</div>
	);
};

const ProfilePanel = () => {
	const { open } = useDrawy();

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">A simple drawer</h2>
			<p className="text-gray-700 mb-4">
				Fully customizable and easy to use, you choose what components to render
			</p>
			<button
				type="button"
				onClick={() => open("settings")}
				className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
			>
				You can stack them!
			</button>
		</div>
	);
};

const Hero = () => {
	const { open } = useDrawy();
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="text-center space-y-8"
		>
			<h1 className="text-4xl max-w-xl mx-auto sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
				<span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
					Drawy
				</span>
				. simple side panel management for the day-to-day
			</h1>
			<p className="mt-3 mx-auto text-base sm:text-lg md:text-xl text-gray-500">
				A lightweight, fully-typed React library for effortless management of
				side panels and drawers.
			</p>
			<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
				<button
					type="button"
					onClick={() => open("profile")}
					className="w-full sm:w-auto shadow-xl flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
				>
					Try it!
					<ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
				</button>
				<a
					href="https://github.com/gonzarascon/drawy"
					target="_blank"
					rel="noopener noreferrer"
					className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
				>
					<Github className="mr-2 h-5 w-5" />
					View on GitHub
				</a>
			</div>
		</motion.div>
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

const FeatureList = () => {
	const features = [
		"Fully typed",
		"Easy integration",
		"SSR friendly",
		"Lightweight",
		"Customizable",
		"Stack multiple panels",
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			className="mt-16"
		>
			<h2 className="text-2xl font-bold text-center mb-8">Key Features</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{features.map((feature) => (
					<div
						key={feature}
						className="bg-white p-4 rounded-lg shadow-md flex items-center"
					>
						<ChevronRight className="text-blue-500 mr-2" />
						<span>{feature}</span>
					</div>
				))}
			</div>
		</motion.div>
	);
};

const { DrawyProvider, useDrawy } = createDrawy(panels);

const LandingPage = () => {
	useEffect(() => {
		Prism.highlightAll();
	});

	return (
		<DrawyProvider>
			<div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
				<div className="max-w-7xl w-full space-y-8">
					<Hero />
					<FeatureList />

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-70 animate-pulse" />
						</div>
						<div className="relative mb-16">
							<h3 className="text-2xl font-bold">First, setup Drawy:</h3>
							<pre className="text-left p-4 sm:p-6 bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-gray-700">
								<code className="language-jsx !text-xs">
									{`import React from 'react';
import { createDrawy } from 'drawy';
import SettingsPanel from './SettingsPanel';
import ProfilePanel from './ProfilePanel';
import MainComponent from './MainComponent';

export const panels = {
  settings: SettingsPanel,
  profile: ProfilePanel,
};

export const { DrawyProvider, useDrawy } = createDrawy(panels);

const App: React.FC = () => (
  <DrawyProvider>
    <MainComponent />
  </DrawyProvider>
);

export default App;`}
								</code>
							</pre>
						</div>
						<div className="relative">
							<h3 className="text-2xl font-bold">Then, just use it!</h3>
							<pre className="text-left p-4 sm:p-6 bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-gray-700">
								<code className="language-jsx !text-xs">
									{`import React from 'react';
import { useDrawy } from './app';

const MainComponent: React.FC = () => {
  const { open } = useDrawy();

  return (
    <div className="p-4">
      <button
        onClick={() => open('settings')}
        className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
      >
        Open Settings
      </button>
      <button
        onClick={() => open('profile')}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Open Profile
      </button>
    </div>
  );
};

export default MainComponent;`}
								</code>
							</pre>
						</div>
					</motion.div>
					<footer className="text-center text-xs text-gray-600">
						<span>
							Made with love, AI, and hope of making things easier by{" "}
							<a
								href="https://github.com/gonzarascon"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400"
							>
								@gonzarascon
							</a>
						</span>
					</footer>
				</div>
			</div>
		</DrawyProvider>
	);
};

export default LandingPage;

export const meta: MetaFunction = () => {
	return [
		{
			title: "Drawy - Simple Side Panels for React | Lightweight & Fully-Typed",
		},
		{
			property: "og:title",
			content:
				"Drawy - Simple Side Panels for React | Lightweight & Fully-Typed",
		},
		{
			name: "description",
			content:
				"Drawy is a lightweight, fully-typed React library for effortless management of side panels and drawers. Easy integration, SSR friendly, and customizable.",
		},
		{
			property: "og:description",
			content:
				"Drawy is a lightweight, fully-typed React library for effortless management of side panels and drawers. Easy integration, SSR friendly, and customizable.",
		},
		{
			name: "keywords",
			content:
				"React, side panels, drawers, typescript, SSR, lightweight, customizable",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content: "https://gonzarascon.tech/drawy",
		},
		{
			name: "twitter:title",
			content:
				"Drawy - Simple Side Panels for React | Lightweight & Fully-Typed",
		},
		{
			name: "twitter:description",
			content:
				"Drawy is a lightweight, fully-typed React library for effortless management of side panels and drawers. Easy integration, SSR friendly, and customizable.",
		},
	];
};

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: prismcss },
	{ rel: "icon", href: "/drawy.png", type: "image/png" },
];
