Template.thumbnails.helpers({
  themes: function(){
    console.log("Inside theme helper.");

    var themes = Themes.find();
    console.log('There is ' + themes.count() + ' themes.');

    return themes;
  },
  'themeUrl': function(url){
  	if(!url)
  		return;

  	return FlowRouter.url('/theme/' + url);
  }
});
