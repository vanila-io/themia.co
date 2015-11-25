
Themes.attachSchema(new SimpleSchema({
  title: {
    type: String
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
  image: orion.attribute('image', {
    label: 'Image',
    optional: true
  }),
  description: {
    type: "Text",
    label: 'Description',
    optional: false
  },
  downloadUrl: {
    type: 'url',
    label: "Download URL"
  },
  previewUrl: {
    type: 'url',
    label: "Preview URL"
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
