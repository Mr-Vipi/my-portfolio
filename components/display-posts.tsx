"use client"

import { useSearchParams } from "next/navigation"
import { Post } from "#site/content"

import { PostItem } from "./post-item"

type DisplayPostsProps = {
  sortedPosts: Array<Post>
  postPerPage: number
}

export function DisplayPosts({
  sortedPosts,
  postPerPage,
}: Readonly<DisplayPostsProps>) {
  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get("page")) || 1

  const displayPosts = sortedPosts.slice(
    (currentPage - 1) * postPerPage,
    currentPage * postPerPage
  )

  return displayPosts?.length > 0 ? (
    <ul className="flex flex-col">
      {displayPosts.map((post) => {
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
  )
}
