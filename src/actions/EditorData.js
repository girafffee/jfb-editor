class EditorData {
	constructor( type, label ) {
		this.type = type;
		this.label = label;
		this.source = {};
		this.__labels = {};
		this.__help_messages = {};
		this.__gateway_attrs = {};
		this.__messages = {};
	}

	setSource( config ) {
		this.source = config;
	}

	setLabels( config ) {
		this.__labels = config;

		return this;
	}

	setHelp( config ) {
		this.__help_messages = config;

		return this;
	}

	setGatewayAttrs( config ) {
		this.__gateway_attrs = config;

		return this;
	}

	setMessages( config ) {
		this.__messages = config;

		return this;
	}

	exportAll() {
		window.jetFormActionTypes[ this.type ] = {
			...( window.jetFormActionTypes[ this.type ] || {} ),
			name: this.label
		};

		const source = this.source;
		const label = this.exportLabels();
		const help = this.exportHelp();
		const gatewayAttrs = this.exportGatewayAttrs();
		const messages = this.exportMessages();

		return { source, label, help, messages, gatewayAttrs };
	}


	exportLabels() {
		return this.getLocalizedWithFunc( '__labels', '[Empty Label]' );
	};

	exportHelp() {
		return this.getLocalizedWithFunc( '__help_messages' );
	};

	exportGatewayAttrs() {
		return this.getLocalizedWithFunc( '__gateway_attrs', [] );
	};

	exportMessages() {
		return this.getLocalizedWithFunc( '__messages', {} );
	};

	getLocalizedWithFunc( objectKey, ifEmptyReturn = '' ) {

		let action = false;

		if ( objectKey in this ) {
			action = this[ objectKey ];
		}

		if ( ! action ) {
			return () => ifEmptyReturn;
		}

		return attr => {
			if ( attr ) {
				return ( action[ attr ] ? action[ attr ] : ifEmptyReturn );
			}
			else {
				return action;
			}
		};
	};
}

export default EditorData;