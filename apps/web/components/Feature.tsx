import TextLink from './TextLink'
import { Section } from './widget/Section'
import SectionHeader from './widget/SectionHeader'
import Link from 'next/link'
import { GlassPanel } from 'ui'
import { allPosts, Post } from 'wesjet/static'

type Props = {}

export default function FeatureService({}: Props) {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <Section>
      <div className="mb-12">
        <SectionHeader
          title={'Infrastructure'}
          title_alt={' to innovate and scale with ease.'}
          paragraph={
            'See how Wesbitty empowers companies of all sizes to accelerate their growth and streamline their work.'
          }
        />
      </div>
      <div className="mx-auto mt-5 grid grid-cols-12 gap-8 lg:gap-12">
        {posts.map((post) => (
          <Link
            href={post.slug}
            key={post.title}
            passHref
            className="col-span-12 md:col-span-4"
          >
            <GlassPanel
              {...post}
              background={true}
              showIconBg={true}
              showLink={true}
              hasLightIcon
            >
              {post.description}
            </GlassPanel>
          </Link>
        ))}
      </div>
      <div className="mt-12">
        <TextLink url="/blog" label="Explore more" />
      </div>
    </Section>
  )
}
