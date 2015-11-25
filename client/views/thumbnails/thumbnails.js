Template.thumbnails.helpers({
  themes: function(){
    console.log("Inside theme helper.");

    var themes = Themes.find();
    console.log('There is ' + themes.count() + ' themes.');

    return themes;
  },
  getCategoryFromId: function(_id){
  	return Categories.findOne(_id).name;
  }
});
