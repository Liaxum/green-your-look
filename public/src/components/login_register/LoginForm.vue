<template>
	<v-tab-item>
		<v-card centered>
			<v-card-text class="text-center">
				<v-form ref="login">
					<v-text-field v-model="loginForm.mail" type="mail" label="E-mail" :rules="[
						rules.required,
						rules.mail,
					]" />
					<v-text-field v-model="loginForm.password" type="password" label="Password" :rules="[rules.required]" />
				</v-form>
				<v-alert v-if="errorLogin" type="error">
					Identifiant Invalide.
				</v-alert>
			</v-card-text>
			<v-card-actions>
				<v-btn text>
					Mot de passe oublié ?
				</v-btn>
				<v-spacer />
				<v-btn color="primary" @click="submitLogin">
					Connexion
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-tab-item>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	name: "LoginForm",
	data() {
		return {
			errorLogin: false,
			loginForm: {
				mail: "",
				password: "",
			},
			rules: {
				required: (v) =>
					!!v || "Ne peut pas être vide.",
				mail: (value) => {
					const pattern =
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return (
						pattern.test(value) ||
						"E-mail invalide."
					);
				},
			},
		};
	},
	computed: {
		...mapGetters(["isAdmin"]),
	},
	methods: {
		...mapActions(["login"]),
		async submitLogin() {
			this.$root.$overlay.show("Connexion");
			if (this.$refs.login.validate()) {
				try {
					await this.login(
						this.loginForm
					);

					this.errorLogin = false;
					if (this.isAdmin) {
						this.$router.push('/backoffice');
					}
					this.$emit("logged", true);
				} catch (e) {
					console.log(e);
					this.errorLogin = true;
				}
			}
			this.$root.$overlay.hide();
		},
	},
};
</script>

<style>
</style>
