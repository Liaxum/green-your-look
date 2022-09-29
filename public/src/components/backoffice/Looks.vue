<template>
	<v-card flat>
		<v-card-text>
			<v-data-table
				fixed-header
				:headers="headers"
				:items="stateLooks"
			>
				<template #header.action>
					<v-btn
						color="green"
						icon
						fab
						@click="update()"
					>
						<v-icon>mdi-reload</v-icon>
					</v-btn>
				</template>
				<template #item.action>
					<v-btn fab icon color="orange">
						<v-icon> mdi-pencil </v-icon>
					</v-btn>
					<v-btn icon flab color="red">
						<v-icon> mdi-delete </v-icon>
					</v-btn>
				</template>
			</v-data-table>
		</v-card-text>
		<v-card-actions>
			<v-spacer />
			<v-btn color="primary" @click="dialog = true"
				>Ajouter un look</v-btn
			>
		</v-card-actions>
	</v-card>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "Looks",
		created() {
			this.update();
		},
		data() {
			return {
				dialog: false,
				headers: [
					{
						text: "Nom",
						value: "name",
					},
					{
						text: "",
						value: "action",
						sortable: false,
						width: "20%",
					},
				],
			};
		},
		computed: {
			...mapGetters(["stateLooks"]),
		},
		methods: {
			...mapActions(["getLooks"]),
			async update() {
				// this.$root.$overlay.show();
				await this.getLooks();
				this.$root.$overlay.hide();
			},
		},
	};
</script>

<style></style>
