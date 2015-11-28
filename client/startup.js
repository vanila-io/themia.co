Meteor.startup(function()
{
	var i = setInterval(function()
	{
		if(!orion.dictionary.isReady())
			return;

		if(!orion.dictionary.get('seo.ga'))
			return;

		clearInterval(i);

		var gaScript = 'https://www.google-analytics.com/analytics.js';
		DocHead.loadScript(gaScript, function()
		{
			ga('create', orion.dictionary.get('seo.ga'), 'auto');
			ga('send', 'pageview');
		});
	}, 100);
});