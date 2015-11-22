Themes =  new orion.collection('themes',{
  singularName: 'theme',
  pluralName: 'themes',
  title: 'themes',
  link : {
    title: 'Themes'
  },
  tabular: {
    columns: [
      {data: 'title', title: 'Title'},
      {data: 'type',title: "Theme type"},
      orion.attributeColumn('image','thumbnail','Thumbnail'),
      orion.attributeColumn('createdBy','createdBy','Created by'),
      orion.attributeColumn('hasOne','category','Category')
    ]
  }
});
