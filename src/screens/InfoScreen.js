import React from "react";
import { Text, View } from "react-native";
const InfoScreen = ({ navigation }) => {
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
