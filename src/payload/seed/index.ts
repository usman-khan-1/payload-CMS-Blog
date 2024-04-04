import fs from 'fs'
import path from 'path'
import type { Payload } from 'payload'

import { blog1 } from './blog-1'
import { blog2 } from './blog-2'
import { blog3 } from './blog-3'
import { home } from './home'
import { image1 } from './image-1'
import { image2 } from './image-2'

const collections = ['media', 'pages', 'blogs']
const globals = ['header', 'settings', 'footer']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async (payload: Payload): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not

  payload.logger.info(`— Clearing media...`)

  const mediaDir = path.resolve(__dirname, '../../media')
  if (fs.existsSync(mediaDir)) {
    fs.rmdirSync(mediaDir, { recursive: true })
  }

  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all([
    ...collections.map(async collection =>
      payload.delete({
        collection: collection as 'media',
        where: {},
      }),
    ), // eslint-disable-line function-paren-newline
    ...globals.map(async global =>
      payload.updateGlobal({
        slug: global as 'header',
        data: {},
      }),
    ), // eslint-disable-line function-paren-newline
  ])

  payload.logger.info(`— Seeding demo author and user...`)

  await Promise.all(
    ['demo-author@payloadcms.com', 'demo-user@payloadcms.com'].map(async email => {
      await payload.delete({
        collection: 'users',
        where: {
          email: {
            equals: email,
          },
        },
      })
    }),
  )

  let [{ id: demoAuthorID }] = await Promise.all([
    await payload.create({
      collection: 'users',
      data: {
        email: 'demo-author@payloadcms.com',
        name: 'Demo Author',
        password: 'password',
        roles: ['admin'],
      },
    }),
    await payload.create({
      collection: 'users',
      data: {
        email: 'demo-user@payloadcms.com',
        name: 'Demo User',
        password: 'password',
        roles: ['user'],
      },
    }),
  ])

  payload.logger.info(`— Seeding media...`)

  const [image1Doc, image2Doc] = await Promise.all([
    await payload.create({
      collection: 'media',
      filePath: path.resolve(__dirname, 'image-1.jpg'),
      data: image1,
    }),
    await payload.create({
      collection: 'media',
      filePath: path.resolve(__dirname, 'image-2.jpg'),
      data: image2,
    }),
  ])

  let image1ID = image1Doc.id
  let image2ID = image2Doc.id

  if (payload.db.defaultIDType === 'text') {
    image1ID = `"${image1Doc.id}"`
    image2ID = `"${image2Doc.id}"`
    demoAuthorID = `"${demoAuthorID}"`
  }

  payload.logger.info('— Seeding blogs...')

  // Create blog1
  await payload.create({
    collection: 'blogs',
    data: JSON.parse(
      JSON.stringify({ ...blog1 })
        .replace(/"\{\{IMAGE\}\}"/g, image1ID)
        .replace(/"\{\{AUTHOR\}\}"/g, demoAuthorID),
    ),
  })

  await payload.create({
    collection: 'blogs',
    data: JSON.parse(
      JSON.stringify({ ...blog2 })
        .replace(/"\{\{IMAGE\}\}"/g, image1ID)
        .replace(/"\{\{AUTHOR\}\}"/g, demoAuthorID),
    ),
  })

  await payload.create({
    collection: 'blogs',
    data: JSON.parse(
      JSON.stringify({ ...blog3 })
        .replace(/"\{\{IMAGE\}\}"/g, image1ID)
        .replace(/"\{\{AUTHOR\}\}"/g, demoAuthorID),
    ),
  })

  payload.logger.info(`— Seeding home page...`)

  await payload.create({
    collection: 'pages',
    data: JSON.parse(JSON.stringify(home).replace(/"\{\{IMAGE_1\}\}"/g, image2ID)),
  })

  payload.logger.info(`— Seeding settings...`)

  await payload.updateGlobal({
    slug: 'settings',
    data: {},
  })

  payload.logger.info(`— Seeding header...`)

  await payload.updateGlobal({
    slug: 'header',
    data: {
      navItems: [],
    },
  })

  payload.logger.info('Seeded database successfully!')
}
