import { Metadata } from './Metadata'

const generateRssItem = (post: any): string => `
<item>
  <guid>https://wesbitty.com/blog/${post.url}</guid>
  <title>${post.title}</title>
  <link>https://wesbitty.com/blog/${post.url}</link>
  <description>${post.description}</description>
  <publication>${new Date(post.date).toUTCString()}</publication>
</item>
`

export const generateRss = (posts: any[]): string => {
  return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog - Wesbitty Inc</title>
      <link>https://wesbitty.com</link>
      <description>The Wesbitty Blog | Updates, Tips, Ideas, Trends to help developers build application's</description>
      <language>${Metadata.Locale}</language>
      <lastModified>${new Date(posts[0].date).toUTCString()}</lastModified>
      <atom:link href="https://wesbitty.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`
}
