const dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(utc)
dayjs.extend(advancedFormat)

const generateRssItem = (post: any): string => `
  <item>
    <guid>https://wesbitty.com/blog/${post.url}</guid>
    <title>${post.title}</title>
    <link>https://wesbitty.com/blog/${post.url}</link>
    <description>${post.description}</description>
    <pubDate>${dayjs(post.date).utc().format('ddd, DD MMM YYYY HH:hh:mm ZZ')}</pubDate>
  </item>
`

export const generateRss = (posts: any[]): string => {
  return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
    <title>Blog - Wesbitty</title>
      <link>https://wesbitty.com/blog</link>
      <description>Latest news from Wesbitty</description>
      <language>en</language>
      <lastBuildDate>${dayjs(posts[0].date)
        .utc()
        .format('ddd, DD MMM YYYY HH:hh:mm ZZ')}</lastBuildDate>
      <atom:link href="https://wesbitty.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`
}
