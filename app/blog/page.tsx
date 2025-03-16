import { Suspense } from "react"
import { posts } from "#site/content"

import { sortPosts } from "@/lib/utils"
import { DisplayPosts } from "@/components/display-posts"
import { QueryPagination } from "@/components/query-pagination"

const POST_PER_PAGE = 5

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))
  const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE)

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
      <Suspense>
        <DisplayPosts sortedPosts={sortedPosts} postPerPage={POST_PER_PAGE} />
        <QueryPagination totalPages={totalPages} className="mt-4 justify-end" />
      </Suspense>
    </div>
  )
}
