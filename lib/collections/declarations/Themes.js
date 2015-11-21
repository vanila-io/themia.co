Themes =  new orion.collection('themes',{
  singularName: 'theme',
  pluralName: 'themes',
  title: 'themes',
  link : {
    title: 'Themes'
  },
  tabular: {
    columns: [
      {data: 'name', title: 'Name'},
      {data: 'githubOwner', title: 'Github owner'},
      {data: 'githubRepository',title:'Github repository'},
      {data: 'demoUrl',title: 'Demo URL'},
      orion.attributeColumn('image','thumbnail','Thumbnail'),
      orion.attributeColumn('createdBy','createdBy','Created by'),
      orion.attributeColumn('hasOne','category','Category')
    ]
  }
});
