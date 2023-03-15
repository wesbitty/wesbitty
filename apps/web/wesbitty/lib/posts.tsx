import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { generateReadingTime } from './helpers'
import { DocumentGen } from 'wesjet/core'
import { Metadata } from '../utils/schemas/Metadata'

export const contentDirPath = '[blog]'

export const urlFromFilePath = (doc: DocumentGen): string => {
  return doc._raw.flattenedPath.replace(/pages\/?/, '')
}

const FILENAME_SUBSTRING = 11

type Directories = '[blog]' | 'PostsField'

export const getSortedPosts = (
  directory: Directories,
  limit?: number,
  tags?: any
) => {
  const postDirectory = path.join(process.cwd(), directory)

  const fileNames = fs.readdirSync(postDirectory)

  let allPostsData = fileNames.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const fullPath = path.join(postDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
    const formattedDate = new Date(data.date).toLocaleDateString(
      `${Metadata.Locale}`,
      options
    )
    const readingTime = generateReadingTime(content)

    let url = ''
    if (directory === '[blog]') {
      const dates = getDatesFromFileName(filename)
      url = `${dates.year}/${dates.month}/${dates.day}/${slug.substring(
        FILENAME_SUBSTRING
      )}`
    } else {
      url = `/${directory.replace('_', '')}/${slug}`
    }

    const frontmatter = {
      ...data,
      date: formattedDate,
      readingTime,
      url: url,
    }
    return {
      slug,
      ...frontmatter,
    }
  })

  allPostsData = allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })

  if (tags) {
    allPostsData = allPostsData.filter((post: any) => {
      const found = tags.some((tag: any) => post.tags.includes(tag))
      return found
    })
  }

  if (limit) allPostsData = allPostsData.slice(0, limit)

  return allPostsData
}

export const getAllPostSlugs = (directory: Directories) => {
  const postDirectory = path.join(process.cwd(), directory)
  const fileNames = fs.readdirSync(postDirectory)
  const files = fileNames.map((filename) => {
    const dates =
      directory === '[blog]'
        ? getDatesFromFileName(filename)
        : {
            year: '2021',
            month: '04',
            day: '02',
          }

    return {
      params: {
        ...dates,
        slug: filename
          .replace('.mdx', '')
          .substring(directory === '[blog]' ? FILENAME_SUBSTRING : 0),
      },
    }
  })

  return files
}

export const getPostdata = async (slug: string, directory: string) => {
  const postDirectory = path.join(process.cwd(), directory)
  const fullPath = path.join(postDirectory, `${slug}.mdx`)
  const postContent = fs.readFileSync(fullPath, 'utf8')

  return postContent
}

export const getAllCategories = (directory: Directories) => {
  const posts = getSortedPosts(directory)
  let categories: any = []

  posts.map((post: any) => {
    post.tags.map((tag: string) => {
      if (!categories.includes(tag)) return categories.push(tag)
    })
  })

  return categories
}

const getDatesFromFileName = (filename: string) => {
  const year = filename.substring(0, 4)
  const month = filename.substring(5, 7)
  const day = filename.substring(8, 10)

  return {
    year,
    month,
    day,
  }
}
