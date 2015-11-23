Meteor.publish("themes", function(){
  return Themes.find();
});
