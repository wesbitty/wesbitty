import { escape } from '../utils/htmlEscaper'


const generateRssItem = (post: any): string => `
  <item>
    <guid>https://wesbitty.com/blog/${post.url}</guid>
    <title>${escape(post.title)}</title>
    <link>https://wesbitty.com/blog/${post.url}</link>
    ${post.description && `<description>${escape(post.description)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetadata.email} (${siteMetadata.author})</author>
    ${post.tags && post.tags.map((t: any) => `<category>${t}</category>`).join('')}
  </item>
`

export const generateRss = (posts: any[]): string => {
  return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(siteMetadata.title)}</title>
      <link>${siteMetadata.siteUrl}/blog</link>
      <description>${escape(siteMetadata.description)}</description>
      <language>${siteMetadata.language}</language>
      <managingEditor>${siteMetadata.email} (${siteMetadata.author})</managingEditor>
      <webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata.siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`
}