Template.thumbnails.helpers({
  themes: function(){
    console.log("Inside theme helper.");

    var themes = Themes.find();
    console.log('There is ' + themes.count() + ' themes.');

    return themes;
  },
  getCategoryFromId: function(_id){
  	if(!_id)
  		return;
  	
  	return Categories.findOne(_id).name;
  }
});
