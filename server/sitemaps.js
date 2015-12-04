// Each theme have a page
// Each category have a page

sitemaps.add('/sitemap.xml', function()
{
	var out = [];
	var categories = Categories.find().fetch();

	_.each(categories, function(category)
	{
		out.push(
		{
			page: category.canonicalName
		});
	});

	var themes = Themes.find().fetch();

	_.each(themes, function(theme)
	{
		var category = Categories.findOne(theme.category);

		out.push(
		{
			page: category.canonicalName + '/' + theme.canonicalName
		});
	});

	return out;
});