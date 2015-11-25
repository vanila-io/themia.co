Themes = new orion.collection('themes', {
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      {data: 'githubOwner', title: 'Github owner'},
      {data: 'githubRepository',title:'Github repository'},
      {data: 'demoUrl',title: 'Demo URL'},
      {data: 'type',title: "Theme type"},
      orion.attributeColumn('image','thumbnail','Thumbnail'),
      orion.attributeColumn('createdBy','createdBy','Created by'),
      orion.attributeColumn('hasOne','category','Category')
    ]
  }
});
