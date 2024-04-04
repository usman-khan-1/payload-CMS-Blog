import type { Blog } from '../payload-types'

export const blog3: Partial<Blog> = {
  title: 'Blog 3',
  slug: 'blog-3',
  _status: 'published',
  author: 'Author Name',
  meta: {
    title: 'Blog 3',
    description: 'This is the third blog.',
    image: '{{IMAGE}}',
  },
  hero: {
    type: 'lowImpact',
    links: null,
    richText: [
      {
        children: [
          {
            text: 'BLog 3',
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
