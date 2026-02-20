import Image from "next/image"
import Link from "next/link"
import { Project } from "@/types/project"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
    project: Project
}

export function ProjectCard({ project, className, ...props }: ProjectCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg",
                className
            )}
            {...props}
        >
            <div className="flex flex-col justify-between rounded-md p-6 h-full">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="font-bold text-2xl group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    {project.authors && (
                        <div className="flex flex-wrap gap-1 text-sm text-muted-foreground">
                            <span className="font-semibold">Autores:</span>
                            {project.authors.join(", ")}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex items-center gap-4">
                    {project.link && (
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(buttonVariants({ size: "sm" }), "w-full")}
                        >
                            Demo en Vivo
                        </Link>
                    )}
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({ variant: "outline", size: "sm" }),
                                "w-full"
                            )}
                        >
                            <Icons.gitHub className="mr-2 h-4 w-4" />
                            Código
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
