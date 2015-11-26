Template.theme.helpers({
	theme: function()
	{
		return Themes.findOne({canonicalName: FlowRouter.current().params.name});
	}
});