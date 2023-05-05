import prettier from 'prettier'
import { globby } from 'globby'
import { writeFileSync } from 'fs'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.ts',
    'pages/*.tsx',
    'pages/*/*.tsx',
    '!pages/404.tsx',
    '[Post]/**/*.mdx',
    '!pages/index.tsx',
    '!pages/*/index.tsx',
    '!pages/app',
    '!pages/_*.tsx',
    '!pages/api',
  ])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('.tsx', '')
              .replace('.mdx', '')
              .replace('pages', '')
              .replace('[Post]/blog', '/blog')
              .replace('[Post]/docs', '/docs')
              .replace('/blog/[slug]', '/blog')
              .replace('/docs/[[...slug]]', '/docs')

            const route = path === '/index' ? '' : path

            return `
            <url>
            <loc>${`https://wesbitty.org${route}`}</loc>
        </url>
            `
          })
          .join('')}
    </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted)
}

generate()
