Categories.attachSchema(new SimpleSchema({
  name: {
    type: 'String',
  },
  createdBy: orion.attribute('createdBy')
}));
