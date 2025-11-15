"use client"

import { ComponentPropsWithRef, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.X className="mr-2 size-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="mt-3 flex flex-col gap-3">
          <MobileLink href="/blog" onOpenChange={setOpen}>
            Blog
          </MobileLink>
          <MobileLink href="/about" onOpenChange={setOpen}>
            About
          </MobileLink>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.bluesky}
            target="_blank"
            rel="noopener noreferrer"
          >
            Bluesky
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}

type MobileLinkProps = ComponentPropsWithRef<typeof Link> & {
  onOpenChange?: (open: boolean) => void
}

export function MobileLink({
  children,
  onOpenChange,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      onClick={() => {
        onOpenChange?.(false)
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
