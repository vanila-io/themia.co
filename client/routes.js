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

RouterLayer.route('/posts/:_id', {
	name: 'post',
	template: 'post',
	layout: 'layout'
});

RouterLayer.route('/404', {
	name: '404',
	template: '404',
	layout: 'layout'
});

RouterLayer.route('/:category/:name', {
	name: 'theme',
	template: 'theme',
	layout: 'layout'
});
