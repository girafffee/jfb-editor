<template>
	<div class="jet-form-editor__row">
		<div :class="labelClassObject">
			{{ label }}
			<div :class="helpClassObject" v-if="this.$slots.helpLabel">
				<slot name="helpLabel"></slot>
			</div>
		</div>
		<div :class="controlClassObject">
			<slot></slot>
			<div :class="helpClassObject" v-if="this.$slots.helpControl">
				<slot name="helpControl"></slot>
			</div>
		</div>
		<div :class="helpClassObject" v-if="this.$slots.helpSide">
			&nbsp;&nbsp;&nbsp;&nbsp;<slot name="helpSide"></slot>
		</div>
	</div>
</template>

<script>

export default {
	name: 'jet-form-editor-row',
	props: {
		label: {
			type: String,
			default: ''
		},
		labelClass: {
			type: String,
			default: ''
		},
		helpClass: {
			type: String,
			default: ''
		},
		controlClass: {
			type: String,
			default: ''
		},
	},
	computed: {
		labelClassObject() {
			return this.getClass( 'defaultLabelClass', 'labelClass' )
		},
		helpClassObject() {
			return this.getClass( 'defaultHelpClass', 'helpClass' )
		},
		controlClassObject() {
			return this.getClass( 'defaultControlClass', 'controlClass' )
		}
	},
	data() {
		return {
			defaultLabelClass: 'jet-form-editor__row-label',
			defaultHelpClass: 'jet-form-editor__row-notice',
			defaultControlClass: 'jet-form-editor__row-control',
		}
	},
	methods: {
		getClass( defaultKey, propKey ) {
			return {
				[ `${ this[ defaultKey ] } ${ this[ propKey ] }` ]: this[ propKey ],
				[ this[ defaultKey ] ]: ! this[ propKey ]
			};
		}
	}
}
</script>