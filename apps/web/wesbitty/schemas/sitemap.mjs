import prettier from 'prettier'
import { globby } from 'globby'
import fs from 'fs'

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.js',
    'pages/*.tsx',
    'pages/*/*.tsx',
    'wesbitty/data/**/*.mdx',
    '[post]/*.mdx',
    '!pages/index.tsx',
    '!pages/app',
    '!pages/_app.tsx',
    '!pages/_*.js',
    '!pages/*/index.tsx',
    '!pages/api',
    '!pages/404.tsx',
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
              .replace('[post]', '/blog')
              .replace('/blog/[slug]', '/blog')

            let route = path === '/index' ? '' : path

            if (route.includes('/blog/')) {
              const _route = route.replace('/blog/', '')
            }

            return `
            <url>
            <loc>${`https://wesbitty.com${route}`}</loc>
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
