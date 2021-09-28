import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
const InfoScreen = ({ navigation }) => {
	Alert.alert("Info", "More Info coming soon...");
	return (
		<View style={styles.container}>
			<Text>More Info coming soon...</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
});

export default InfoScreen;
