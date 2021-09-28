import React from "react";
import { StyleSheet, Text, View } from "react-native";
const CategoriesScreen = ({ navigation }) => {
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
	}
})

export default CategoriesScreen;
