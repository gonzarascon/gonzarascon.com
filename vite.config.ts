import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
			basename: "/",
			buildDirectory: "build",
			ignoredRouteFiles: ["**/*.css"],
			routes(defineRoutes) {
				return defineRoutes((route) => {
					route("/", "routes/index.tsx", { index: true });
					route("/drawy", "routes/drawy/index.tsx", { index: true });
					route("/tcg-generator", "routes/tcg-generator/layout.tsx", () => {
						route("", "routes/tcg-generator/index.tsx", { index: true });
						// route("generate", "routes/tcg-generator/api/generate.ts");
					});
				});
			},
		}),
		tsconfigPaths(),
	],
});
