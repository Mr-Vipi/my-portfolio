import { defineConfig } from "cz-git"

const config = defineConfig({
  extends: ["@commitlint/config-conventional"],
  prompt: {
    useAI: false,
    useEmoji: true,
    markBreakingChangeMode: true,
    allowCustomScopes: true,
  },
})

export default config
