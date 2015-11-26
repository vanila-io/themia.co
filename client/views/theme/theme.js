Template.theme.helpers({
	theme: function()
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

		return theme;
	}
});