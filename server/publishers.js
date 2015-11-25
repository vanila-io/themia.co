Meteor.publish("themes", function(){
  return Themes.find();
});

Meteor.publish("categories", function(){
	return Categories.find();
});
