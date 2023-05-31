import { MainNavItem, SidebarNavItem } from 'types/nav'

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Playground',
      href: '/examples',
    },
    {
      title: 'Figma',
      href: '/docs/figma',
    },
    {
      title: 'GitHub',
      href: 'https://github.com/wesbitty/ui',
      external: true,
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/wesbitty',
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: 'Api Reference',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
          items: [],
        },
        {
          title: 'CLI',
          href: '/docs/cli',
          items: [],
        },
      ],
    },
    {
      title: 'Community',
      items: [
        {
          title: 'Figma',
          href: '/docs/figma',
          items: [],
        },
      ],
    },
    {
      title: 'Products',
      items: [
        {
          title: '@wesbitty/ui',
          href: '/docs/ui',
          label: 'New',
          items: [],
        },
        {
          title: 'wesjet',
          href: '/docs/wesjet',
          items: [],
        },
      ],
    },
  ],
}
