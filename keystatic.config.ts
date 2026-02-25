import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'claus-source',
      name: 'bertermann.art',
    },
  },
  ui: {
    brand: {
      name: 'Bertermann.art',
    },
  },
  server: {
    url: process.env.KEYSTATIC_URL || 'https://bertermann-art.netlify.app',
  },
  collections: {
    artworks: collection({
      label: 'Artworks',
      slugField: 'title',
      path: 'src/content/artworks/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ 
          name: { label: 'Title' },
        }),
        year: fields.text({ label: 'Year' }),
        materials: fields.text({ label: 'Materials' }),
        size: fields.text({ label: 'Size' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Figurative', value: 'figurative' },
            { label: 'Abstract', value: 'abstract' },
          ],
          defaultValue: 'figurative',
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Available', value: 'available' },
            { label: 'Sold', value: 'sold' },
            { label: 'Reserved', value: 'reserved' },
          ],
          defaultValue: 'available',
        }),
        price: fields.text({ label: 'Price' }),
        image: fields.text({ label: 'Main Image URL' }),
        imageName: fields.text({ label: 'Image Name' }),
        altText: fields.text({ label: 'Alt Text' }),
        orderIndex: fields.integer({ label: 'Order Index' }),
        caption: fields.text({ label: 'Caption', multiline: true }),
        keywords: fields.text({ label: 'Keywords' }),
        additionalImages: fields.array(
          fields.object({
            url: fields.text({ label: 'Image URL' }),
            name: fields.text({ label: 'Image Name' }),
          }),
          {
            label: 'Additional Images',
            itemLabel: (props) =>
              props.fields.name.value || 'Image',
          }
        ),
        content: fields.document({
          label: 'Description',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
    carousel: collection({
      label: 'Carousel',
      slugField: 'title',
      path: 'src/content/carousel/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        image: fields.text({ label: 'Image URL' }),
        order: fields.integer({ label: 'Order', defaultValue: 0 }),
      },
    }),
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishDate: fields.date({ label: 'Publish Date' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        featuredImage: fields.text({ label: 'Featured Image URL' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
    bio: collection({
      label: 'Bio',
      slugField: 'title',
      path: 'src/content/bio/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
        }),
        portrait: fields.text({ label: 'Portrait Image URL' }),
      },
    }),
  },
});
