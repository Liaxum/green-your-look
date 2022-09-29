<template>
	<div class="alert">
		<v-slide-x-reverse-transition group>
			<v-alert
				v-for="alert in alerts"
				:key="alert.id"
				:type="alert.type"
				:color="alert.color"
				:icon="alert.icon"
				:outlined="alert.outlined"
				:text="alert.text"
				:dense="alert.dense"
				:prominent="alert.prominent"
				:dismissible="alert.dismissible"
				@input="closeAlert(alert.id)"
			>
				{{ alert.message }}
			</v-alert>
		</v-slide-x-reverse-transition>
	</div>
</template>

<script>
	export default {
		props: {
			// Type d'affichage
			outlined: {
				type: Boolean,
				required: false,
				default: false,
			},
			text: {
				type: Boolean,
				required: false,
				default: false,
			},
			dense: {
				type: Boolean,
				required: false,
				default: false,
			},
			prominent: {
				type: Boolean,
				required: false,
				default: false,
			},
			// Ajout de la possibilité de fermer l'alerte
			dismissible: {
				type: Boolean,
				required: false,
				default: false,
			},
			// Temps d'affichage à l'écran en ms
			defaultTimeout: {
				type: Number,
				required: false,
				default: 2000,
			},
			// Maximum d'alerte afficher en même Temps
			defaultMaxAlert: {
				type: Number,
				required: false,
				default: 4,
			},
		},
		data() {
			return {
				alerts: [],
			};
		},
		computed: {},
		methods: {
			newAlert(
				message,
				{
					type = "success",
					color = "",
					icon = null,
					timeout = this.defaultTimeout,
					outlined = this.outlined,
					text = this.text,
					dense = this.dense,
					prominent = this.prominent,
					dismissible = this.dismissible,
				}
			) {
				if (this.alerts.length === this.defaultMaxAlert)
					this.alerts.shift();
				// Création d'un id unique
				const id = new Date().valueOf() + Math.random();
				this.alerts.push({
					id,
					type,
					color,
					icon,
					message,
					outlined,
					text,
					dense,
					prominent,
					dismissible,
				});
				// Si timeout = 0 on laisse l'alerte à l'écran
				if (timeout) {
					setTimeout(() => {
						this.closeAlert(id);
					}, timeout);
				}
			},
			closeAlert(id) {
				this.alerts = this.alerts.filter(
					(el) => el.id !== id
				);
			},
		},
	};
</script>

<style scoped>
	.alert {
		overflow: hidden;
		position: fixed;
		top: 120px;
		right: 0;
		margin-right: 5px;
		z-index: 999;
	}
</style>
