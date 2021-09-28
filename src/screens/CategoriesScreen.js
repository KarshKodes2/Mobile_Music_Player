import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
const CategoriesScreen = ({ navigation }) => {
	Alert.alert("Categories", "No Categories Available yet...");
	return (
		<View style={styles.container}>
			<Text>No Categories Available yet</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
});

export default CategoriesScreen;
