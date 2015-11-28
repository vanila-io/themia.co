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
        'property="og:image"': FlowRouter.url('themia-og.png') //OG IMAGE HERE
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
  },
  'themeDescription': function(Id)
  {
    var theme = Themes.findOne(Id);
    var desc = theme.description.slice(0, 100);
    return $(desc).text(); //Removing all HTML tags
  }
});

Template.thumbnails.onCreated(function()
{
  this.subscribe('themes');
  this.subscribe('categories');
});
