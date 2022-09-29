<template>
	<v-dialog v-model="dialogAdd">
		<v-card>
			<v-toolbar color="primary" dark>
				<v-toolbar-title> {{title}} </v-toolbar-title>
				<v-spacer />
				<v-btn icon fab @click="cancel"><v-icon>mdi-close</v-icon></v-btn>
			</v-toolbar>
			<v-card-text>
				<v-form>
					<v-text-field label="Nom de la catégorie" v-model="form.name"/>
				</v-form>
			</v-card-text>
			<v-card-actions style="justify-content: right">
				<v-btn dark color="red" @click="cancel">Annuler</v-btn>
				<v-btn @click="edit ? update() : submit()">Valider</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		name: "AddEditCategory",
		props: {
			dialog: { require: true, type: Boolean },
			edit: { require: true, type: Number},
		},
		data() {
			return {
				form: {
					name: ''
				}
			}
		},
		computed: {
			dialogAdd: {
				get() {
					return this.dialog;
				},
				set(value) {
					this.$emit("update:dialog", value);
				},
			},
			title() {
				return this.edit ? "Modification d'une catégorie" : "Ajout d'une catégorie";
			}
		},
		methods: {
			...mapActions(["createCategory", "updateCategory"]),
			cancel() {
				this.dialogAdd = false;
				this.$emit('update:edit', null);
			},
			async submit() {
				try {
					await this.createCategory(this.form);
					this.cancel();
				} catch (e) {
					console.log(e);
				}
			},
			async update() {
				console.log(this.edit);
				try {
					await this.updateCategory({form: this.form, id: this.edit});
					this.cancel();
				} catch (e) {
					console.log(e);
				}
			}
		},
	};
</script>

<style></style>
