import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Tracks = (props) => {
	const { title, active, handlePress } = props;
	return (
		<View elevation={3} style={[styles.container, styles.shadowProp]}>
			<View style={styles.imageView}>
				<Image
					style={styles.tinyLogo}
					source={require("../../../assets/artiste.png")}
				/>
			</View>
			<View style={styles.textView}>
				<Text style={styles.artisteName}>{title}</Text>
			</View>
			<View style={styles.iconView}>
				<TouchableOpacity onPress={handlePress}>
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
		marginTop: 4,
		marginBottom: 4,
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 8,
	},
	shadowProp: {
		shadowColor: "#171717",
		shadowOffset: { width: -1, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	imageView: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
		borderBottomLeftRadius: 8,
		borderTopLeftRadius: 8,
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
		backgroundColor: "#02A09A",
	},
	artisteName: {
		color: "white",
		fontWeight: "bold",
	},
	iconView: {
		justifyContent: "center",
		alignItems: "center",
		height: 60,
		width: 60,
		backgroundColor: "#63D1CC",
		flex: 1,
		borderBottomRightRadius: 8,
		borderTopRightRadius: 8,
	},
});

export default Tracks;
