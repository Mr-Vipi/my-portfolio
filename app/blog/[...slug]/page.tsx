import { notFound } from "next/navigation"
import { posts } from "#site/content"

import { MDXContent } from "@/components/mdx-content"

import "@/styles/mdx.css"

type PostPageProps = {
  params: Promise<{ slug: string[] }>
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = (await params)?.slug?.join("/")
  return posts.find((post) => post.slugAsParams === slug)
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage(props: Readonly<PostPageProps>) {
  const params = props.params
  const post = await getPostFromParams(params)

  if (!post?.published) {
    notFound()
  }

  return (
    <article className="container prose m-auto w-full max-w-3xl px-8 py-6 dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description ? (
        <p className="mt-0 text-xl text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  )
}
