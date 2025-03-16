"use client"

import { usePathname, useSearchParams } from "next/navigation"

import { siteConfig } from "@/config/site"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination"

type QueryPaginationProps = {
  totalPages: number
  className?: string
}

export function QueryPagination({
  totalPages,
  className,
}: Readonly<QueryPaginationProps>) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get("page")) || 1

  const prevPage = currentPage - 1
  const nextPage = currentPage + 1

  const createPageURL = (page: number | string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    return `${siteConfig.basePath}${pathname}?${params.toString()}`
  }

  return (
    <Pagination className={className}>
      <PaginationContent>
        {prevPage > 0 ? (
          <PaginationItem>
            <PaginationPrevious href={createPageURL(prevPage)} />
          </PaginationItem>
        ) : null}

        {Array(totalPages)
          .fill("")
          .map((_, index) => (
            <PaginationItem
              className="hidden sm:inline-block"
              key={`page-button-${index + 1}`}
            >
              <PaginationLink
                isActive={currentPage === index + 1}
                href={createPageURL(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={createPageURL(nextPage)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  )
}
