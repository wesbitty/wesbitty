import prettier from 'prettier'
import { globby } from 'globby'
import fs from 'fs'

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.ts',
    'pages/*.tsx',
    'pages/*/*.tsx',
    '!pages/404.tsx',
    '!wesbitty/data/**/*.mdx',
    '[Post]/*.mdx',
    '!pages/index.tsx',
    '!pages/app',
    '!pages/_app.tsx',
    '!pages/_sites.tsx',
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
              .replace('public', '')
              .replace('[Post]', '/blog')
              .replace('/blog/[slug]', '/blog')

            let route = path === '/index' ? '' : path

            if (route.includes('/blog/')) {
              const _route = route.replace('/blog/', '')
            }

            return `
            <url>
            <loc>${`https://wesbitty.org${route}`}</loc>
            <lastModified>${new Date().toUTCString()}</lastModified>
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

  fs.writeFileSync('public/sitemap.xml', formatted)
}

generateSitemap()
