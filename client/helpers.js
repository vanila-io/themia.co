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
})