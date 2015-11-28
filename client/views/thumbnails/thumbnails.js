Template.thumbnails.helpers(
{
  themes: function()
  {
    var themes = Themes.find();

    SEO.set(
    {
      title: orion.dictionary.get('seo.title'),
      description: orion.dictionary.get('seo.description'),
      meta: 
      {
        'property="og:type"': 'website',
        'property="og:title"': orion.dictionary.get('seo.title'),
        'property="og:description"': orion.dictionary.get('seo.description'),
        'property="og:url"': FlowRouter.url(''),
        'property="og:image"': FlowRouter.url('og.png') //OG IMAGE HERE
      }
    });

    return themes;
  },
  'themeUrl': function(catId, theme)
  {
  	if(!catId || !theme)
  		return;

    var cat = Categories.findOne(catId);

    if(!cat)
      return;

  	return FlowRouter.url('/' + cat.canonicalName + '/' + theme);
  }
});

Template.thumbnails.onCreated(function()
{
  this.subscribe('themes');
  this.subscribe('categories');
});
