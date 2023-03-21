import { Metadata } from './Metadata'
import { Post } from 'wesjet/jetpack'

export const generateRss = (rss: any[]): string => {
  return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${Metadata.Name}</title>
      <Link>${Metadata.Url}</link>
      <description>${Metadata.Description}</description>
      <language>${Metadata.Language}</language>
      <atom:link href="https://wesbitty.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${rss.map(blogRss).join('')}
    </channel>
  </rss>
`
}

const blogRss = (post: Post): string => `
<item>
  <title>${post.title}</title>
  <Link>https://wesbitty.com${post.slug}</link>
  <description>${post.description}</description>
  <publication>${new Date(post.date).toUTCString()}</publication>
</item>
`
