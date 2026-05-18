import { defineType, defineField } from 'sanity'

export const postSchema = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publicado el',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Resumen corto',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Imagen de portada',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Contenido',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Etiquetas',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt' },
  },
})
