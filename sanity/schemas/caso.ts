import { defineType, defineField } from 'sanity'

export const casoSchema = defineType({
  name: 'caso',
  title: 'Caso de Estudio',
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
    defineField({ name: 'client', type: 'string', title: 'Cliente' }),
    defineField({ name: 'sector', type: 'string', title: 'Sector' }),
    defineField({ name: 'year', type: 'number', title: 'Año' }),
    defineField({ name: 'summary', type: 'text', title: 'Resumen', rows: 3 }),
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
      name: 'metrics',
      type: 'array',
      title: 'Métricas de impacto',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Etiqueta' },
            { name: 'value', type: 'string', title: 'Valor' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client' },
  },
})
