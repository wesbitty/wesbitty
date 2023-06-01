import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const generateReadingTime = (text: string) => {
  const wordsPerMinute = 200
  const noOfWords = text.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return `${readTime} minute read`
}

export function capitalize(word: string) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase()
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
