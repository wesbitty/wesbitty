import localFont from "next/font/local"
import { Inter, Lora, Work_Sans } from "next/font/google"

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const cal = localFont({
  src: [
    {
      path: './fonts/CustomFont-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CustomFont-Book.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-cal',
  display: 'swap',
})

export const calTitle = localFont({
  src: [
    {
      path: './fonts/CustomFont-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/CustomFont-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-title',
  display: 'swap',
})
export const lora = Lora({
  variable: '--font-title',
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
})
export const work = Work_Sans({
  variable: '--font-title',
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
})

export const fontMapper = {
  'font-cal': calTitle.variable,
  'font-lora': lora.variable,
  'font-work': work.variable,
}
