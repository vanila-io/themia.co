// Template.themeThumbnails.onCreated
Template.thumbnails.helpers({
  themes: function(){
    console.log("inside theme helper");
    var themes = Themes.find();
    // console.log(themes);
    console.log(themes.count());
    return themes;
  },
});
