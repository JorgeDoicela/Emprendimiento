import Link from "next/link"

import { projects } from "@/config/projects"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { TechStack } from "@/components/tech-stack"

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href="https://twitter.com/nextgen_sol"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Síguenos en Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Desarrollando Soluciones SaaS de Alto Rendimiento.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Nos especializamos en arquitecturar aplicaciones web escalables, seguras y modernas para empresas y startups.
          </p>
          <div className="space-x-4">
            <Link href="#projects" className={cn(buttonVariants({ size: "lg" }))}>
              Ver Nuestro Trabajo
            </Link>
            <Link
              href="https://github.com/nextgen-solutions"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Tecnologías
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Aprovechando las últimas tecnologías para construir sistemas robustos y eficientes.
          </p>
        </div>
        <div className="mx-auto max-w-[64rem] py-8">
          <TechStack />
        </div>
      </section>

      <section
        id="projects"
        className="container space-y-6 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proyectos Destacados
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Una selección de aplicaciones y sistemas SaaS que hemos desarrollado.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Este portafolio fue construido utilizando Contentlayer y MDX.
          </p>
        </div>
      </section>
    </>
  )
}
