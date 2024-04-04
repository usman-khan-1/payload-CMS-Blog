import type { Blog } from '../payload-types'

export const blog2: Partial<Blog> = {
  title: 'Blog 2',
  slug: 'blog-2',
  _status: 'published',
  author: 'Author Name',
  meta: {
    title: 'Blog 1',
    description: 'This is the second blog.',
    image: '{{IMAGE}}',
  },
  hero: {
    type: 'lowImpact',
    links: null,
    richText: [
      {
        children: [
          {
            text: 'BLog 2',
          },
        ],
        type: 'h1',
      },
    ],
    media: null,
  },
  layout: [
    {
      blockType: 'content',
      columns: [
        {
          size: 'twoThirds',
          richText: [
            {
              children: [
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac ex vel sapien eleifend consequat. Duis ut ipsum a felis finibus dignissim. Mauris at aliquam velit. Quisque vel nunc rutrum, bibendum',
                },
              ],
            },
          ],
          link: {
            reference: null,
            url: '',
            label: '',
          },
        },
      ],
    },
  ],
}
