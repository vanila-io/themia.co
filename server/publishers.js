console.log(Themes.find().count());
Meteor.publish("themes", function(){
  return Themes.find();
});
