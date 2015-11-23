Site = new orion.collection('site', {
  tabular: {
    columns: [
      { data: "siteTitle", title: "title" }
    ]
  }
});

Site.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  description: {
    type: "Text",
    label: 'Description',
    optional: false
  }
}));
