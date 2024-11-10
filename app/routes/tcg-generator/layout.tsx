import { Outlet } from "@remix-run/react";

function InnerRouteLayout() {
	return (
		<>
			<Outlet />
			<footer className="text-center text-xs text-gray-600 bg-gray-100 p-4">
				<span>
					Made with AI and love for pocket monsters by{" "}
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
		</>
	);
}

export default InnerRouteLayout;
