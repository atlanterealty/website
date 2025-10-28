// Sanity CMS Schema for Atlante Realty Website
// Copy and paste this into your Sanity project's schema files

// ==========================================
// BLOG CATEGORY SCHEMA
// ==========================================
export const blogCategory = {
  name: 'blogCategory',
  title: 'Blog Category',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    {
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required().max(50)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(200)
    },
    {
      name: 'color',
      title: 'Category Color',
      type: 'string',
      options: {
        list: [
          {title: 'Primary (Market Insights)', value: 'primary'},
          {title: 'Accent (Company News)', value: 'accent'},
          {title: 'Secondary (Community)', value: 'secondary'},
          {title: 'Muted (General)', value: 'muted'}
        ]
      },
      initialValue: 'muted'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
}

// ==========================================
// BLOG POST SCHEMA
// ==========================================
export const blogPost = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  icon: () => '📝',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(120)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'Brief summary of the article (used in previews and SEO)',
      validation: Rule => Rule.required().min(50).max(300)
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: Rule => Rule.required()
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        }
      ]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'blogCategory'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'agent'}, {type: 'teamMember'}],
      description: 'Select from Agents or Team Members'
    },
    {
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
      description: 'Set to true to make this post visible on the website'
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
      }
    },
    {
      name: 'metaTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Title for search engines (leave blank to use post title)',
      validation: Rule => Rule.max(60)
    },
    {
      name: 'metaDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines (leave blank to use excerpt)',
      validation: Rule => Rule.max(160)
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      category: 'category.title',
      image: 'featuredImage',
      published: 'isPublished'
    },
    prepare(selection) {
      const {title, author, category, image, published} = selection
      return {
        title,
        subtitle: `${category || 'Uncategorized'} • ${author || 'No author'} • ${published ? '✅ Published' : '⏳ Draft'}`,
        media: image
      }
    }
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    }
  ]
}

// ==========================================
// AGENT SCHEMA
// ==========================================
export const agent = {
  name: 'agent',
  title: 'Real Estate Agent',
  type: 'document',
  icon: () => '👥',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required(),
      placeholder: 'e.g., Senior Real Estate Agent'
    },
    {
      name: 'profileImage',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 6,
      validation: Rule => Rule.required().min(100).max(800),
      description: 'Professional background and experience'
    },
    {
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.min(1).max(5),
      description: 'Areas of expertise (e.g., Luxury Homes, Waterfront Properties)'
    },
    {
      name: 'licenseNumber',
      title: 'License Number',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'email',
      validation: Rule => Rule.required()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required(),
      placeholder: '(772) 555-0123'
    },
    {
      name: 'serviceArea',
      title: 'Service Area',
      type: 'string',
      validation: Rule => Rule.required(),
      placeholder: 'e.g., Vero Beach, Sebastian, Indian River County'
    },
    {
      name: 'yearsExperience',
      title: 'Years of Experience',
      type: 'number',
      validation: Rule => Rule.required().min(0).max(50)
    },
    {
      name: 'totalSales',
      title: 'Total Sales Achievement',
      type: 'string',
      placeholder: 'e.g., $50M+, 500+ Units Managed',
      description: 'Sales volume or other achievement metrics'
    },
    {
      name: 'calendlyLink',
      title: 'Calendly Booking Link',
      type: 'url',
      description: 'Link for clients to schedule appointments'
    },
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url'
        }
      ],
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'isActive',
      title: 'Active Agent',
      type: 'boolean',
      initialValue: true,
      description: 'Set to false to hide from public listings'
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (leave blank for alphabetical)'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'profileImage',
      active: 'isActive'
    },
    prepare(selection) {
      const {title, subtitle, media, active} = selection
      return {
        title,
        subtitle: `${subtitle} ${active ? '✅' : '❌ Inactive'}`,
        media
      }
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [
        {field: 'displayOrder', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    }
  ]
}

// ==========================================
// TEAM MEMBER SCHEMA (Leadership/Management)
// ==========================================
export const teamMember = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon: () => '👔',
  description: 'Leadership and key staff members for the About page',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Position/Title',
      type: 'string',
      validation: Rule => Rule.required(),
      placeholder: 'e.g., Founder & CEO, Director of Operations'
    },
    {
      name: 'credentials',
      title: 'Credentials',
      type: 'string',
      placeholder: 'e.g., Licensed Real Estate Broker, MBA, Real Estate Expert',
      description: 'Professional credentials and certifications'
    },
    {
      name: 'profileImage',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().min(50).max(400),
      description: 'Brief professional background for the About page'
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required(),
      description: 'Order in which to display on About page (1 = first)'
    },
    {
      name: 'isActive',
      title: 'Show on Website',
      type: 'boolean',
      initialValue: true,
      description: 'Set to false to hide from About page'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'profileImage',
      order: 'displayOrder',
      active: 'isActive'
    },
    prepare(selection) {
      const {title, subtitle, media, order, active} = selection
      return {
        title,
        subtitle: `${subtitle} • Order: ${order || 'Not set'} ${active ? '✅' : '❌ Hidden'}`,
        media
      }
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [
        {field: 'displayOrder', direction: 'asc'}
      ]
    }
  ]
}

// ==========================================
// SCHEMA TYPES ARRAY (for sanity.config.js)
// ==========================================
export const schemaTypes = [
  blogCategory,
  blogPost,
  agent,
  teamMember
]

// ==========================================
// USAGE INSTRUCTIONS
// ==========================================
/*
To use this schema in your Sanity project:

1. Copy the individual schema objects into separate files in your schemas folder:
   - schemas/blogCategory.js
   - schemas/blogPost.js  
   - schemas/agent.js
   - schemas/teamMember.js

2. In your sanity.config.js file, import and add to schema types:
   
   import { blogCategory } from './schemas/blogCategory'
   import { blogPost } from './schemas/blogPost'
   import { agent } from './schemas/agent'
   import { teamMember } from './schemas/teamMember'
   
   export default defineConfig({
     // ... other config
     schema: {
       types: [blogCategory, blogPost, agent, teamMember],
     },
   })

3. Or use the exported schemaTypes array:
   
   import { schemaTypes } from './schemas'
   
   export default defineConfig({
     // ... other config
     schema: {
       types: schemaTypes,
     },
   })

WEBSITE INTEGRATION:
- Blog Categories: Used for categorizing and filtering blog posts
- Blog Posts: Full blog system with rich content, SEO fields, and publishing workflow
- Agents: Real estate agent profiles with specialties, contact info, and social links
- Team Members: Leadership team for the About page with credentials and bios

FEATURES INCLUDED:
- Rich text editing with images
- SEO optimization fields
- Image management with alt text
- Publish/draft workflow
- Display ordering
- Active/inactive status
- Social media integration
- Comprehensive validation rules
- Preview configurations
*/