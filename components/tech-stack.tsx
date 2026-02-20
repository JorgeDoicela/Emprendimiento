import { Icons } from "@/components/icons"

export function TechStack() {
    return (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 items-center opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100">
            <div className="flex flex-col items-center gap-2">
                <Icons.logo className="h-10 w-10" />
                <span className="text-sm font-medium">Next.js 13</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icons.react className="h-10 w-10 text-primary" />
                <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icons.ts className="h-10 w-10 text-primary" />
                <span className="text-sm font-medium">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icons.prisma className="h-10 w-10 text-primary" />
                <span className="text-sm font-medium">Prisma</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icons.tailwind className="h-10 w-10 text-primary" />
                <span className="text-sm font-medium">Tailwind</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Icons.db className="h-10 w-10 text-primary" />
                <span className="text-sm font-medium">PostgreSQL</span>
            </div>
        </div>
    )
}
