import { Author } from './author'

export type PostTypes = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  thumb: string
  image: string
  readingTime: string
  description: string
  url: string
  tags: []
  logo?: string
}
