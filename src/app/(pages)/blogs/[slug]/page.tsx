import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Blog } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { Blocks } from '../../../_components/Blocks'
import { BlogHero } from '../../../_heros/BlogHero'
import { generateMeta } from '../../../_utilities/generateMeta'

// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../../../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

export default async function Blog({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let blog: Blog | null = null

  try {
    blog = await fetchDoc<Blog>({
      collection: 'blogs',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
  }

  if (!blog) {
    notFound()
  }

  const { layout, enablePremiumContent } = blog

  return (
    <React.Fragment>
      <BlogHero blog={blog} />
      <Blocks blocks={layout} />
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const blogs = await fetchDocs<Blog>('blogs')
    return blogs?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let blog: Blog | null = null

  try {
    blog = await fetchDoc<Blog>({
      collection: 'blogs',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  return generateMeta({ doc: blog })
}
