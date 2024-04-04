import React, { Fragment } from 'react'
import Link from 'next/link'

import { Blog } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import { formatDateTime } from '../../_utilities/formatDateTime'

import classes from './index.module.scss'

export const BlogHero: React.FC<{
  blog: Blog
}> = ({ blog }) => {
  const { id, title, meta: { image: metaImage, description } = {}, publishedAt } = blog

  return (
    <Fragment>
      <Gutter className={classes.blogHero}>
        <div className={classes.content}>
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.meta}>
            {publishedAt && (
              <Fragment>
                {' on '}
                {formatDateTime(publishedAt)}
              </Fragment>
            )}
          </p>
          <div>
            <p className={classes.description}>
              {`${description ? `${description} ` : ''}To edit this blog, `}
              <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/blogs/${id}`}>
                navigate to the admin dashboard
              </Link>
              {'.'}
            </p>
          </div>
        </div>
        <div className={classes.media}>
          <div className={classes.mediaWrapper}>
            {!metaImage && <div className={classes.placeholder}>No image</div>}
            {metaImage && typeof metaImage !== 'string' && (
              <Media imgClassName={classes.image} resource={metaImage} fill />
            )}
          </div>
          {metaImage && typeof metaImage !== 'string' && metaImage?.caption && (
            <RichText content={metaImage.caption} className={classes.caption} />
          )}
        </div>
      </Gutter>
    </Fragment>
  )
}
