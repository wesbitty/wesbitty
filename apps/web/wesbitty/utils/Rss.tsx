import { Post } from 'wesjet/static'

const generateRssItem = (post: Post): string => `
<item>
  <guid>https://wesbitty.org/blog/${post.slug}</guid>
  <title>${post.title}</title>
  <link>https://wesbitty.org/blog/${post.slug}</link>
  <description>${post.description}</description>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>
`

export const generateRss = (posts: any[]): string => {
  return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog - Wesbitty</title>
      <link>https://wesbitty.org</link>
      <description>Latest news from Wesbitty</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://wesbitty.org/blog/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`
}
