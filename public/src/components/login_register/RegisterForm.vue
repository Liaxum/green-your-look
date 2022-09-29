<template>
	<v-tab-item>
		<v-card centered>
			<v-card-text class="text-center">
				<v-form ref="register">
					<v-row>
						<v-col>
							<v-text-field
								v-model="
									registerForm.mail
								"
								type="mail"
								label="E-mail"
								:rules="[
									rules.required,
									rules.mail,
								]"
							/>
						</v-col>
						<v-col>
							<v-text-field
								v-model="
									registerForm.name
								"
								type="mail"
								label="Nom"
								:rules="[
									rules.required,
								]"
							/>
						</v-col>
					</v-row>
					<v-row>
						<v-col class="wrap emojies">
							<v-text-field
								v-model="
									registerForm.password
								"
								type="password"
								label="Mots de passe"
								:rules="[
									rules.required,
									rules.min,
								]"
							/>
							<password-meter
								:password="
									registerForm.password
								"
							/>
						</v-col>
						<v-col>
							<v-text-field
								type="password"
								label="Confirmation du mots de passe"
								:rules="[
									rules.required,
									rules.same,
								]"
							/>
						</v-col>
					</v-row>
				</v-form>
			</v-card-text>
			<v-card-actions>
				<v-spacer />
				<v-btn color="primary" @click="submitRegister">
					Inscription
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-tab-item>
</template>

<script>
	import { mapActions } from "vuex";
	import PasswordMeter from "vue-simple-password-meter";

	export default {
		name: "RegisterForm",
		data() {
			return {
				errorRegister: false,
				registerForm: {
					mail: "",
					password: "",
					name: "",
				},
				rules: {
					required: (v) =>
						!!v || "Ne peut pas être vide.",
					mail: (value) => {
						const pattern =
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						return (
							pattern.test(value) ||
							"E-mail invalid."
						);
					},
					min: (v) =>
						v.length > 8 ||
						"Le mots doit faire minimum 8 caracteres",
					same: (v) =>
						v ==
							this.registerForm
								.password ||
						"Doivent être identique",
				},
			};
		},
		methods: {
			...mapActions(["register"]),
			async submitRegister() {
				this.$root.$overlay.show("Inscription");
				if (this.$refs.register.validate()) {
					try {
						await this.register(this.registerForm);
						this.errorRegister = false;
						this.$emit('register', true);
						this.$router.push("/");
					} catch (e) {
						this.errorRegister = true;
					}
				}
				this.$root.$overlay.hide();
			},
		},
		components: {
			PasswordMeter,
		},
	};
</script>

<style lang="scss">
	.wrap {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		position: relative;
	}

	.emojies {
		.po-password-strength-bar {
			border-radius: 2px;
			transition: all 0.2s linear;
			position: absolute;
			right: 10px;
			font-size: 20px;
			margin-top: auto;
			top: 30px;
			width: auto;
			background-color: transparent !important;
		}

		.po-password-strength-bar.risky {
			&:before {
				content: "😱";
			}
		}

		.po-password-strength-bar.guessable {
			&:before {
				content: "😣";
			}
		}

		.po-password-strength-bar.weak {
			&:before {
				content: "🤨";
			}
		}

		.po-password-strength-bar.safe {
			&:before {
				content: "🙂";
			}
		}

		.po-password-strength-bar.secure {
			&:before {
				content: "😁";
			}
		}
	}
</style>
