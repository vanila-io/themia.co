Categories.attachSchema(new SimpleSchema({
  name: {
    type: 'String',
  },
  canonicalName: {
  	type: String,
  	label: 'Canonical name',
  	optional: false
  },
  createdBy: orion.attribute('createdBy')
}));
