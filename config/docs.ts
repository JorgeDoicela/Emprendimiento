import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentación",
      href: "/docs",
    },
    {
      title: "Guías",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Comenzando",
      items: [
        {
          title: "Introducción",
          href: "/docs",
        },
      ],
    },
    {
      title: "Documentación",
      items: [
        {
          title: "Introducción",
          href: "/docs/documentation",
        },
        {
          title: "Contentlayer",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Componentes",
          href: "/docs/documentation/components",
        },
        {
          title: "Bloques de Código",
          href: "/docs/documentation/code-blocks",
        },
        {
          title: "Guía de Estilo",
          href: "/docs/documentation/style-guide",
        },
        {
          title: "Búsqueda",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "Introducción",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Crea el tuyo",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Escribiendo Posts",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Panel de Control",
      items: [
        {
          title: "Introducción",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Diseños",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Componentes de Servidor",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Autenticación",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Base de Datos con Prisma",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Rutas API",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Sitio de Marketing",
      items: [
        {
          title: "Introducción",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Estructura de Archivos",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Tailwind CSS",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Tipografía",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}
