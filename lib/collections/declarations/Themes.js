Themes = new orion.collection('themes', {
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      {data: 'githubOwner', title: 'Github owner'},
      {data: 'githubRepository',title:'Github repository'},
      {data: 'demoUrl',title: 'Demo URL'},
      orion.attributeColumn('image','thumbnail','Thumbnail'),
      orion.attributeColumn('createdBy','createdBy','Created by'),
      orion.attributeColumn('hasOne','category','Category')
    ]
  }
});

Themes.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  image: orion.attribute('image', {
    label: 'Image',
    optional: true
  }),
  description: {
    type: "Text",
    label: 'Description',
    optional: false
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
  category : orion.attribute('hasOne',{
    label: 'Category'
  },{
    collection: Categories,
    titleField: 'name',
    publicationName: 'theme-has-one-category'
  }),
  createdBy: orion.attribute('createdBy')
}));
