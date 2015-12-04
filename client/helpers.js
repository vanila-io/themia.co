UI.registerHelper('getCategoryFromId', function(_id)
{
	if(!_id)
		return;

	var cat = Categories.findOne(_id);

	if(!cat)
		return;

	return cat.name;
});

UI.registerHelper('pageUrl', function()
{
	return FlowRouter.url(FlowRouter.current().path);
});

shorterText = function(text)
{
    text = $('<p>').html(text).text(); //Removing all HTML tags
    return text.slice(0, 100) + '...';
}

UI.registerHelper('shorterText', function(text)
{
	return shorterText(text);
});