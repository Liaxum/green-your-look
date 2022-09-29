<template>
	<v-dialog id="lrDialog" v-model="dialog" max-width="950" persistent>
		<v-toolbar color="secondary">
			<v-tabs v-model="tab" centered>
				<v-tab key="1" id="Connexion">
					Connexion
				</v-tab>
				<v-tab key="2">
					Inscription
				</v-tab>
			</v-tabs>
			<v-spacer/>
			<v-btn icon @click.native="dialog = false">
				<v-icon>mdi-close</v-icon>
			</v-btn>
		</v-toolbar>

		<v-tabs-items v-model="tab">
			<LoginForm key="1" @logged="dialog = false;"/>
			<RegisterForm key="2" @register="dialog = false"/>
		</v-tabs-items>
	</v-dialog>
</template>

<script>
	import LoginForm from "../login_register/LoginForm.vue";
	import RegisterForm from "../login_register/RegisterForm.vue";
	export default {
		created() {},
		name: "LoginRegister",
		data() {
			return {
				tab: null,
				dialog: false,
			};
		},
		methods: {
			open() {
				this.dialog = true;
			}
		},
		components: {
			LoginForm,
			RegisterForm,
		},
	};
</script>

<style scoped>
.v-tabs {
	padding-left: 48px;
}
</style>
