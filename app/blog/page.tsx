import { posts } from "#site/content"

import { sortPosts } from "@/lib/utils"
import { PostItem } from "@/components/post-item"

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))

  return (
    <div className="container mx-auto w-full px-8 py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-black lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            My ramblings on all things web dev.
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      {sortedPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {sortedPosts.map((post) => {
            const { date, title, slug, description } = post

            return (
              <li key={post.slug}>
                <PostItem
                  date={date}
                  title={title}
                  slug={slug}
                  description={description}
                />
              </li>
            )
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </div>
  )
}
