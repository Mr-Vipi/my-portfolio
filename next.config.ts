import type { NextConfig } from "next"

const isDev = process.argv.includes("dev")
const isBuild = process.argv.includes("build")
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1"
  import("velite").then((v) => v.build({ watch: isDev, clean: !isDev }))
}

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/my-portfolio",
  output: "export",
  reactStrictMode: true,
}

export default nextConfig
