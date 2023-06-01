import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.ts',
    'pages/*.tsx',
    'pages/**/*.tsx',
    '!pages/404.tsx',
    '[Posts]/**/*.mdx',
    '!pages/index.tsx',
    '!pages/app',
    '!pages/_sites',
    '!pages/_*.tsx',
    '!pages/*/index.tsx',
    '!pages/api',
  ])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .filter((page) => !page.includes('_document.tsx'))
          .map((page) => {
            const path = page
              .replace('.tsx', '')
              .replace('.mdx', '')
              .replace('pages', '')
              .replace('blog/[slug]', 'blog')
              .replace('[Posts]', '')

            let route = path === '/index' ? '' : path

            if (route.includes('/blog/')) {
              const _route = route.replace('/blog/', '')

              let split = _route.split('')

              route = '/blog/' + split.join('')
            }

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
