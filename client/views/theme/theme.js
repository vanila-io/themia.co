Template.theme.helpers({
	theme: function()
	{
		return Session.get('theme');
	}
});

Template.theme.onCreated(function()
{
	var cat = Categories.findOne({canonicalName: FlowRouter.current().params.category});

	if(!cat)
	{
		FlowRouter.go('/404');
	}

	var theme = Themes.findOne({category: cat._id, canonicalName: FlowRouter.current().params.name});

	if(!theme)
	{
		FlowRouter.go('/404');
	}

	Session.set('theme', theme);

	var seoTitle = theme.title + ' - ' + orion.dictionary.get('seo.title');
	var seoDescription = theme.description.slice(0, 155);

	SEO.set(
	{
		title: seoTitle,
		description: seoDescription,
		meta:
		{
			'property="og:title"': seoTitle,
			'property="og:description"': seoDescription,
			'property="og:url"': FlowRouter.url(FlowRouter.current().path),
			'property="og:image"': theme.image
		}
	});
});