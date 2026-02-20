import { Project } from "@/types/project"

export const projects: Project[] = [
    {
        title: "SaaS Enterprise ERP",
        description:
            "Una solución ERP integral para grandes empresas, con análisis en tiempo real, gestión de inventario e informes automatizados.",
        authors: ["Karen Mendoza", "Jorge Doicela"],
        techStack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
        link: "https://example.com/erp",
        github: "https://github.com/example/erp",
    },
    {
        title: "AI-Powered CRM",
        description:
            "Sistema de CRM integrado con OpenAI para proporcionar insights inteligentes y respuestas automatizadas de soporte.",
        techStack: ["React", "Python", "FastAPI", "OpenAI API"],
        link: "https://example.com/crm",
    },
    {
        title: "E-Learning Platform",
        description:
            "Sistema de gestión de aprendizaje (LMS) interactivo con transmisión de video, seguimiento del progreso y gamificación.",
        techStack: ["Vue.js", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/example/lms",
    },
]
