// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: '/pocket-studio-booking/',
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    router: {
      // The route generator writes its temp file via rename(2); the default
      // .tanstack/tmp dir sits on a different mount than src/ in this sandbox,
      // which fails with EXDEV and silently breaks the SSR start-manifest build.
      // Keeping the tmp dir inside src/ avoids the cross-device rename.
      tmpDir: "src/.tsr-tmp",
    },
  },
});
