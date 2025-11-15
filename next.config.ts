import type { NextConfig } from "next"
import { build } from "velite"

const nextConfig = async (): Promise<NextConfig> => {
  const isDev = process.argv.includes("dev")
  const isBuild = process.argv.includes("build")
  if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = "1"
    await build({ watch: isDev, clean: !isDev })
  }

  return {
    /* config options here */
    basePath: "/my-portfolio",
    output: "export",
    typedRoutes: true,
    allowedDevOrigins: ["192.168.1.42"],
  }
}

export default nextConfig
