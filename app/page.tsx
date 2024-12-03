import Link from "next/link"
import { posts } from "#site/content"

import { siteConfig } from "@/config/site"
import { cn, sortPosts } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { PostItem } from "@/components/post-item"

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5)

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:mt-10 md:pb-12 lg:py-32">
        <div className="container mx-auto flex w-full flex-col gap-4 px-8 text-center">
          <h1 className="text-balance text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl">
            Hello, I&apos;m Jul
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-muted-foreground sm:text-lg">
            Welcome to my blog template. Built using tailwind, shadcn, velite
            and Nextjs 14.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-60 flex w-full max-w-4xl flex-col space-y-6 px-8 py-6 lg:py-10">
        <h2 className="text-center text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t">
              <PostItem
                date={post.date}
                slug={post.slug}
                title={post.title}
                description={post.description}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
