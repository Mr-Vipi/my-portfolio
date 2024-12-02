import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { ModeToggle } from "./mode-toggle"
import { buttonVariants } from "./ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 w-full max-w-screen-2xl items-center px-8">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "hidden w-10 px-0 sm:inline-flex"
                )}
              >
                <Icons.GitHub className="size-4" />
                <span className="sr-only">Bluesky</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.bluesky}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "hidden w-10 px-0 sm:inline-flex"
                )}
              >
                <Icons.BlueSky className="size-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  )
}
