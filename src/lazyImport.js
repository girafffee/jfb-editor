const components = {
	'@wordpress/i18n': ['__'],
	'@wordpress/components': [
		'Button',
		'ButtonGroup',
		'Card',
		'CardBody',
		'CardHeader',
		'ToggleControl',
	],
	'@wordpress/element': [
		'useState',
		'useEffect',
	]
};


async function getComponents( namespace ) {
	const vendor = await import( namespace );
	const response = {};

	components[ namespace ].forEach( item => {
		response[ item ] = vendor[ item ];
	} )

	return response;
}

export { getComponents };