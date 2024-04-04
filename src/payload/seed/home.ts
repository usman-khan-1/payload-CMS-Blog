import type { Page } from '../payload-types'

export const home: Partial<Page> = {
  title: 'Home',
  slug: 'home',
  _status: 'published',
  meta: {
    title: 'Test Task',
  },
  hero: {
    type: 'highImpact',
    richText: [],
    media: '{{IMAGE_1}}',
  },
  layout: [
    {
      blockName: 'Archive Block',
      blockType: 'archive',
      introContent: [
        {
          type: 'h4',
          children: [
            {
              text: 'Blogs',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'The blogs displayed below',
            },
          ],
        },
      ],
      populateBy: 'collection',
      relationTo: 'blogs',
    },
  ],
}
