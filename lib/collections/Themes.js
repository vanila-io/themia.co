
Themes.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  canonicalName: {
    type: String,
    label: 'Canonical name',
    optional: false
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
  description: orion.attribute('summernote', {
    type: 'Text',
    label: 'Description',
    optional: false
  }),
  downloadUrl: {
    type: 'url',
    label: "Download URL"
  },
  previewUrl: {
    type: 'url',
    label: "Preview URL"
  },
  githubOwner: {
    type: String,
    label: 'Github owner'
  },
  githubRepository: {
    type: String,
    label: 'Github repository'
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
