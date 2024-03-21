import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  banner: {
    js: "'use client'",
  },
  clean: true,
  splitting: false,
  sourcemap: true,
  format: ["cjs", "esm"],
  external: ["react"],
  target: "es2020",
  dts: true,
  ...options,
}));
