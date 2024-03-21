import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ["cjs", "esm"],
  external: ["react"],
  target: "node16",
  dts: false,
  ...options,
}));
