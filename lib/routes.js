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
	layout: 'layoutHomepage'
});

RouterLayer.route('/404', {
	name: '404',
	template: '404',
	layout: 'layoutGlobal'
});

RouterLayer.route('/:category/:name', {
	name: 'theme',
	template: 'theme',
	layout: 'layoutGlobal'
});

RouterLayer.route('/:category',
{
	name: 'category',
	template: 'category',
	layout: 'layoutGlobal'
});