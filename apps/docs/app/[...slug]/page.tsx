import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { allPages } from 'wesjet/static'

import { Mdx } from '@/components/mdx-components'
import { cn } from '@/lib/helpers'
import { ChevronRight } from 'lucide-react'
import { doc } from 'prettier'
import Balancer from 'react-wrap-balancer'
import { Separator } from '@/components/ui/separator'

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: PageProps['params']) {
  const slug = params?.slug?.join('/')
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split('/'),
  }))
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <main className="relative py-6 px-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            wesbitty.org
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">{page.title}</div>
        </div>
        <Separator className="my-4 md:my-6" />
        <div className="space-y-2 mb-4 md:mb-6">
          <h1 className={cn('scroll-m-20 text-3xl font-bold tracking-tight')}>
            {page.title}
          </h1>
        </div>
        <Mdx code={page.body.code} />
      </div>
    </main>
  )
}
