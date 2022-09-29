<template>
	<v-dialog
		v-model="dialog"
		:max-width="options.width"
		@keydown.esc="cancel"
	>
		<v-card tile>
			<v-card-title class="pa-0">
				<v-toolbar dark :color="options.color" dense>
					<v-toolbar-title class="white--text">
						<span>{{ title }}</span>
					</v-toolbar-title>
					<v-spacer />
					<v-btn icon dark @click.native="cancel">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-toolbar>
			</v-card-title>
			<v-card-text
				v-show="!!message"
				class="py-2"
				v-html="message"
			/>

			<v-divider />

			<v-card-actions>
				<v-spacer />
				<v-btn
					ref="btnNo"
					color="grey"
					text
					class="d-block"
					@click.native="cancel"
				>
					Non
				</v-btn>
				<v-btn
					color="red darken-1"
					class="d-block"
					text
					@click.native="agree"
				>
					Oui
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		data() {
			return {
				dialog: false,
				resolve: null,
				reject: null,
				message: null,
				title: null,
				options: {
					color: "primary",
					width: 500,
				},
			};
		},
		methods: {
			open(title, message, options) {
				this.dialog = true;
				this.title = title;
				this.message = message;
				this.options = Object.assign(
					this.options,
					options
				);
				return new Promise((resolve, reject) => {
					this.resolve = resolve;
					this.reject = reject;
				});
			},
			agree() {
				this.resolve();
				this.dialog = false;
			},
			cancel() {
				this.reject();
				this.dialog = false;
			},
		},
		watch: {
			dialog(val) {
				if (val) {
					requestAnimationFrame(() => {
						this.$refs.btnNo.$el.focus();
					});
				}
			},
		},
	};
</script>
