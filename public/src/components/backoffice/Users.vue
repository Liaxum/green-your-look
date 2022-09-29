<template>
	<v-card flat>
		<v-card-text>
			<v-data-table
				fixed-header
				:headers="headers"
				:items="items"
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
	export default {
		name: "Users",
		props: {
			admin: { required: true, type: "boolean" },
		},
		data() {
			return {
				items: [
					{
						id: 0,
						name: "Test",
					},
				],
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
	};
</script>

<style></style>
