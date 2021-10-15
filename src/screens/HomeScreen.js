import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Tracks from "../components/Tracks";
import { songList } from "../middleware/Storage";
import { useState } from "react";
import SelectedTracks from "../components/SelectedTracks";
import Icon from "react-native-vector-icons/Fontisto";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
	const [list, setList] = useState(songList);
	const [selectedSong, setSelectedSong] = React.useState("");
	const [selectedId, setSelectedId] = React.useState("");
	const [activePlay, setActivePlay] = React.useState(false);
	const [isPlaying, setPlaying] = useState(false);

	const play = (id) => {
		setPlaying(true);

		list.map((item) => {
			if (item.id === id) {
				setSelectedSong(item.title);
				setSelectedId(item.id);
				setActivePlay(item.id === id);
			}
		});
	};

	const pause = (id) => {
		setPlaying(false);

		list.map((item) => {
			if (item.id === id) {
				setSelectedSong("");
				setSelectedId(item.id);
				setActivePlay(item.id === id);
			}
		});
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar
				style="dark"
				backgroundColor="#02A09A"
				translucent={false}
				hidden={false}
			/>

			<Header />

			<FlatList
				style={styles.listContainer}
				data={list}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Tracks
						title={item.title}
						active={selectedId === item.id && isPlaying}
						handlePress={() => (isPlaying ? pause(item.id) : play(item.id))}
					/>
				)}
			/>

			<View style={styles.selectedSong}>
				<View style={styles.container}>
					<Icon name={"locked"} size={20} />
					<Text
						style={{
							color: "blue",
							fontWeight: "bold",
							textAlign: "center",
							paddingTop: 5,
						}}
					>
						get access (₦1000 only)
					</Text>
				</View>

				<SelectedTracks
					active={isPlaying}
					title={selectedSong}
					handlePress={() => setPlaying(!isPlaying)}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	listContainer: {
		flex: 1,
		marginBottom: 100,
		backgroundColor: "white",
	},
	selectedSong: {
		position: "absolute",
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: "#fff",
	},
});

export default HomeScreen;
