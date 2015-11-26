Template.thumbnails.helpers({
  themes: function(){
    console.log("Inside theme helper.");

    var themes = Themes.find();
    console.log('There is ' + themes.count() + ' themes.');

    return themes;
  },
  'themeUrl': function(catId, theme){
  	if(!catId || !theme)
  		return;

    var cat = Categories.findOne(catId);

    if(!cat)
      return;

  	return FlowRouter.url('/' + cat.canonicalName + '/' + theme);
  }
});
