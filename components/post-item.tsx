import Link from "next/link"
import { Calendar } from "lucide-react"

import { cn, formatDate } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

type PostItemProps = {
  slug: string
  title: string
  date: string
  description?: string
}
export function PostItem({
  date,
  slug,
  title,
  description,
}: Readonly<PostItemProps>) {
  return (
    <article className="flex flex-col gap-2 border-b py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex items-center justify-between">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="flex items-center gap-1 text-sm font-medium sm:text-base">
            <Calendar className="size-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read More...
        </Link>
      </div>
    </article>
  )
}
