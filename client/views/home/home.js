Template.home.onCreated(function()
{
	SEO.set(
	{
		title: orion.dictionary.get('seo.title', 'Themia.co'),
		description: orion.dictionary.get('seo.description'),
		meta: 
		{
			'property="og:type"': 'website',
			'property="og:title"': orion.dictionary.get('seo.title', 'Themia.co'),
			'property="og:description"': orion.dictionary.get('seo.description'),
			'property="og:url"': FlowRouter.url(''),
			'property="og:image"': 'og.png' //OG IMAGE HERE
		}
	});

	setTimeout(function()
	{
		SEO.set(
		{
			title: orion.dictionary.get('seo.title', 'Themia.co'),
			description: orion.dictionary.get('seo.description'),
			meta: 
			{
				'property="og:type"': 'website',
				'property="og:title"': orion.dictionary.get('seo.title', 'Themia.co'),
				'property="og:description"': orion.dictionary.get('seo.description'),
				'property="og:url"': FlowRouter.url(''),
				'property="og:image"': 'og.png' //OG IMAGE HERE
			}
		});
	}, 500);
});