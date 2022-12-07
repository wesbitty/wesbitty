const generateRssItem = (post: any): string => `
<item>
  <guid>https://wesbitty.com/blog/${post.url}</guid>
  <title>${post.title}</title>
  <link>https://wesbitty.com/blog/${post.url}</link>
  <description>${post.description}</description>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>
`

export const generateRss = (posts: any[]): string => {
  return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog | Wesbitty, Inc.</title>
      <link>https://wesbitty.com</link>
      <description>Latest articles, Ideas & Updates - Wesbitty, Inc.</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://wesbitty.com/blog/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`
}
