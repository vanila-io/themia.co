Template.theme.helpers({
	theme: function()
	{
		var cat = Categories.findOne({canonicalName: FlowRouter.current().params.category});

		if(!cat)
		{
			return FlowRouter.go('/404');
		}

		var theme = Themes.findOne({category: cat._id, canonicalName: FlowRouter.current().params.name});

		if(!theme)
		{
			return FlowRouter.go('/404');
		}

		var seoTitle = theme.title + ' theme for ' + cat.name;
		var seoDescription = $('<p>').html(theme.description.slice(0, 155)).text();

		SEO.set(
		{
			title: seoTitle,
			description: seoDescription,
			meta:
			{
				'property="og:title"': seoTitle,
				'property="og:description"': seoDescription,
				'property="og:url"': FlowRouter.url(FlowRouter.current().path),
				'property="og:image"': theme.image ? FlowRouter.url(theme.image.url) : ''
			}
		});

		return theme;
	}
});

Template.theme.onCreated(function()
{
	this.subscribe('categories');
	this.subscribe('themes');
});