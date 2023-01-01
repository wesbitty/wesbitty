import { writeFileSync } from 'fs'
import { prettier } from 'prettier'
import { globby } from 'globby'


async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.js',
    'pages/*.tsx',
    'pages/*/*.tsx',
    'data/**/*.mdx',
    '[blog]/*.mdx',
    '!pages/index.tsx',
    '!data/*.mdx',
    '!pages/_*.js',
    '!pages/*/index.tsx',
    '!pages/api',
    '!pages/404.js',
  ])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .filter((page) => !page.includes('_document.tsx'))
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('public', '')
              .replace('schemas', '')
              .replace('[blog]', '/blog')
              .replace('.tsx', '')
              .replace('.mdx', '')
              .replace('/auth/Auth', '/auth')
              .replace('/database/Database', '/database')
              .replace('/storage/Storage', '/storage')
              .replace('/feed.xml', '')
              let route = path === '/index' ? '' : path

            if (route.includes('/blog/')) {
              // clean blog post route from string
              const _route = route.replace('/blog/', '')
              // splut the url
              let split = _route.split('')
              // target and replace the `-` between dates
              split[4] = '/'
              split[7] = '/'
              split[10] = '/'
              // reconstruct the url
              route = '/blog/' + split.join('')
            }

            return `
            <url>
            <loc>${`https://wesbitty.com${route}`}</loc>
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
  writeFileSync('schemas/sitemap.xml', formatted)
}
