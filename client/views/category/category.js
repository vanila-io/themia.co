Template.category.helpers(
{
	themes: function() 
	{
		var cat = Categories.findOne({canonicalName: FlowRouter.current().params.category});

		if(!cat)
			return FlowRouter.go('/404');

		var themes = Themes.find({category: cat._id});
		return themes;
	},
	categoryName: function()
	{
		return Categories.findOne({canonicalName: FlowRouter.current().params.category}).name;
	}
});

Template.category.onCreated(function()
{
	this.subscribe('Categories');
	this.subscribe('Themes');
});