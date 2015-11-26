// FlowRouter.route('/', {
//     name: 'index',
//     action: function() {
//         BlazeLayout.render('frontendLayout', {content: 'themeThumbnails'});
//     }
// });

/**
 * Add your routes here
 */

RouterLayer.route('/', {
	name: 'home',
	template: 'home',
	layout: 'layout'
});

RouterLayer.route('/theme/:name', {
	name: 'theme',
	template: 'theme',
	layout: 'layout'
});

RouterLayer.route('/posts/:_id', {
	name: 'post',
	template: 'post',
	layout: 'layout'
});
