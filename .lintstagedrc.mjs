import { relative } from "node:path"

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => `"${relative(process.cwd(), f)}"`)
    .join(" ")}`

const prettierCommand = "prettier --write"

const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}": [prettierCommand, buildEslintCommand],
  "*.{json,css,md}": [prettierCommand],
}

export default lintStagedConfig
