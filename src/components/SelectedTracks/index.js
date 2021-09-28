import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SelectedTracks = (props) => {
	const { title, active, handlePress } = props;

	return (
		<View elevation={1} style={[styles.container, styles.shadowProp]}>
			<View style={styles.imageView}>
				<Icon name={"chevron-up"} size={20} />
			</View>
			<View style={styles.textView}>
				<Text style={styles.artisteName}>
					{active ? title : "No track selected"}
				</Text>
			</View>
			<View style={styles.iconView}>
				<TouchableOpacity
					onPress={() => {
						title !== "" ? handlePress() : null;
					}}
				>
					{active ? (
						<Icon name={"pause-circle-outline"} size={20} />
					) : (
						<Icon name={"play"} size={20} />
					)}
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#DDFEFD",
	},
	shadowProp: {
		shadowColor: "#171717",
		shadowOffset: { width: -1, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	imageView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	tinyLogo: {
		width: 50,
		height: 50,
		borderRadius: 50,
	},
	textView: {
		flex: 4,
		height: 60,
		width: 60,
		padding: 8,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	artisteName: {
		color: "black",
		fontWeight: "bold",
	},
	iconView: {
		justifyContent: "center",
		alignItems: "center",
		height: 60,
		width: 60,
		flex: 1,
	},
});

export default SelectedTracks;
