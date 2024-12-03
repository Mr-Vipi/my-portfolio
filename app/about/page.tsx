import { siteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function AboutPage() {
  return (
    <div className="container mx-auto w-full max-w-6xl px-8 py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-black lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="flex min-w-48 max-w-48 flex-col gap-2">
          <Avatar className="size-48">
            <AvatarImage
              src={`${siteConfig.basePath}/avatar.png`}
              alt={siteConfig.author}
            />
            <AvatarFallback>JG</AvatarFallback>
          </Avatar>
          <h2 className="break-words text-center text-2xl font-bold">
            {siteConfig.author}
          </h2>
          <p className="break-words text-center text-muted-foreground">
            Software Developer
          </p>
        </div>
        <div className="py-4 text-lg text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          veritatis facere eveniet dolore voluptatibus iusto quis nulla itaque
          ex culpa! Alias, odio quibusdam? Voluptate, dolore mollitia, doloribus
          iusto velit dignissimos modi tenetur, fuga commodi officia quaerat
          natus inventore nostrum deleniti. Natus ipsa esse nemo cupiditate,
          veritatis quia, adipisci delectus vero alias sed beatae itaque impedit
          facere minus! Deserunt, distinctio repellendus. Veritatis, quam,
          obcaecati deserunt, corporis laudantium quasi voluptatibus ipsam
          placeat dolores sapiente alias officiis. Veniam dignissimos error
          repudiandae explicabo quasi. Cum magnam, pariatur corrupti dicta iusto
          quam ratione earum! Natus, laudantium quo mollitia eaque doloremque
          numquam expedita saepe fugit qui!
        </div>
      </div>
    </div>
  )
}
