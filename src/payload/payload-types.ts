/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    blogs: Blog;
    media: Media;
    users: User;
    redirects: Redirect;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    settings: Settings;
    header: Header;
    footer: Footer;
  };
}
export interface Page {
  id: string;
  title: string;
  publishedAt?: string | null;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: 'blogs' | null;
        limit?: number | null;
        selectedDocs?:
          | {
              relationTo: 'blogs';
              value: string | Blog;
            }[]
          | null;
        populatedDocs?:
          | {
              relationTo: 'blogs';
              value: string | Blog;
            }[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
  )[];
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface Media {
  id: string;
  alt: string;
  caption?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface Blog {
  id: string;
  title: string;
  publishedAt?: string | null;
  author: string;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: 'blogs' | null;
        limit?: number | null;
        selectedDocs?:
          | {
              relationTo: 'blogs';
              value: string | Blog;
            }[]
          | null;
        populatedDocs?:
          | {
              relationTo: 'blogs';
              value: string | Blog;
            }[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
  )[];
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface User {
  id: string;
  name?: string | null;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface Redirect {
  id: string;
  from: string;
  to?: {
    type?: ('reference' | 'custom') | null;
    reference?:
      | ({
          relationTo: 'pages';
          value: string | Page;
        } | null)
      | ({
          relationTo: 'blogs';
          value: string | Blog;
        } | null);
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface Settings {
  id: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface Header {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface Footer {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}