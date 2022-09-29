<template>
	<v-row
		v-if="isMask"
		class="overlay text-center"
		align="center"
		no-gutters
	>
		<v-col>
			<div
				class="subtitle-2 font-weight-medium text-uppercase"
			>
				{{ message }}
			</div>
			<v-progress-circular
				color="primary"
				size="90"
				width="6"
				class="my-4"
				:indeterminate="true"
			/>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		data() {
			return {
				isMask: false,
				message: null,
			};
		},
		methods: {
			show(message) {
				this.isMask = true;
				this.message = message;
			},
			hide() {
				this.isMask = false;
			},
		},
	};
</script>

<style scoped>
	.overlay {
		position: absolute;
		z-index: 999;
		width: 100%;
		height: 100%;
		background: rgba(250, 250, 250, 0.5);
		top: 0;
		left: 0;
	}
</style>
