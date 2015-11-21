Categories.attachSchema(new SimpleSchema({
  categoryName: {
    type: 'String',
  },
  createdBy: orion.attribute('createdBy')
}));
