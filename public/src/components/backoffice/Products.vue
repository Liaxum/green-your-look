<template>
	<v-card flat>
		<v-card-text>
			<v-data-table
				fixed-header
				:headers="headers"
				:items="stateProducts"
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
	</v-card>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "Products",
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
						text: "Description",
						value: "description",
					},
					{
						text: "Prix",
						value: "price",
					},
					{
						text: "Stock",
						value: "stock",
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
			...mapGetters(["stateProducts"]),
		},
		methods: {
			...mapActions(["getProducts", "deleteProducts"]),
			async update() {
				// this.$root.$overlay.show();
				await this.getProducts();
				this.$root.$overlay.hide();
			},
		},
	};
</script>

<style></style>
