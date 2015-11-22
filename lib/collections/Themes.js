Themes.attachSchema(new SimpleSchema({
  title: {
    type: 'String'
  },
  type:{
    type: 'boolean',
    label: 'Type',
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "Paid", value: 'paid'},
          {label: "Free", value: 'free'},
        ];
      }
    }
  },
  downloadUrl: {
    type: 'url',
    label: "Download URL"
  },
  previewUrl: {
    type: 'url',
    label: "Preview URL"
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
