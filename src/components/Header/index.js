import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<View style={{ flex: 1 }}></View>
			<View style={styles.imageView}>
				<Image
					style={styles.tinyLogo}
					source={require("../../../assets/BT.png")}
				/>
				<Text
					style={{
						textAlign: "center",
						color: "white",
						fontWeight: "700",
						fontSize: 20,
					}}
				>
					100 Songs of Ben TOMOLOJU
				</Text>
			</View>
			<View style={{ flex: 1 }}>
				<View style={styles.navIcons}>
					<TouchableOpacity>
						<Icon name={"share-social"} size={25} color={"white"} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Icon name={"ellipsis-vertical"} size={25} color={"white"} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		height: 200,
		backgroundColor: "#63D1CC",
	},
	imageView: {
		flex: 2,
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
		paddingTop: 15,
	},
	tinyLogo: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: "#63D1CC",
	},
	navIcons: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		padding: 10,
		backgroundColor: "#63D1CC",
	},
});

export default Header;
