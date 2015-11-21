Themes.attachSchema(new SimpleSchema({
  name: {
    type: 'String'
  },
  githubOwner: {
    type: 'String'
  },
  githubRepository: {
    type: 'String'
  },
  demoUrl: {
    type: 'url'
  },
  thumbnail: orion.attribute('image'),
  description: {
    type: "Text",
    label: 'Description',
    optional: false
  },
  category : orion.attribute('hasOne',{
    label: 'Category'
  },{
    collection: Categories,
    titleField: 'name',
    publicationName: 'theme-has-one-category'
  }),
  createdBy: orion.attribute('createdBy')
}));
