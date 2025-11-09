import * as runtime from "react/jsx-runtime"
import Image from "next/image"

import { Callout } from "./callout"

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  Image,
  Callout,
}

type MdxProps = {
  code: string
}

// ✅ Create a stable custom hook — React Compiler handles this fine
function useMDXRenderer(code: string) {
  const Component = useMDXComponent(code)
  return { Component }
}

export function MDXContent({ code }: Readonly<MdxProps>) {
  const { Component } = useMDXRenderer(code)

  return <Component components={{ ...components }} />
}
