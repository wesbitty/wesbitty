import BlurImage from '../BlurImage'

import type { MdxCardData } from '~/types'

interface CardProps {
  data: MdxCardData
}

export default function Card({ data }: CardProps) {
  return (
    <a href={`https://${data.url}`} target="_blank" rel="noreferrer">
      <div className="ease hidden rounded-2xl border-2 border-gray-100 bg-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl lg:block">
        <div className="overflow-hidden rounded-t-2xl">
          <BlurImage
            alt={data.name ?? 'Card Thumbnail'}
            width={500}
            height={400}
            className="h-64 w-full object-cover"
            src={`/examples/${data.image}`}
            placeholder="blur"
            blurDataURL={data.imageBlurhash ?? undefined}
          />
        </div>
        <div className="h-36 py-6 px-5">
          <h3 className="font-cal truncate text-2xl font-bold tracking-wide">{data.name}</h3>
          <p className="mt-3 text-base italic leading-snug text-gray-800">{data.description}</p>
        </div>
      </div>
      <div className="ease flex h-36 items-center overflow-hidden rounded-xl border-2 border-gray-100 bg-white transition-all duration-200 focus:border-black active:border-black md:h-48 lg:hidden">
        <div className="relative h-full w-2/5">
          <BlurImage
            alt={data.name ?? 'Card thumbnail'}
            width={500}
            height={400}
            className="h-full object-cover"
            src={`/examples/${data.image}`}
            placeholder="blur"
            blurDataURL={data.imageBlurhash ?? undefined}
          />
        </div>
        <div className="w-3/5 py-6 px-5">
          <h3 className="font-cal my-0 truncate text-xl font-bold tracking-wide">{data.name}</h3>
          <p className="mt-3 text-sm font-normal italic leading-snug text-gray-800">
            {data.description}
          </p>
        </div>
      </div>
    </a>
  )
}
