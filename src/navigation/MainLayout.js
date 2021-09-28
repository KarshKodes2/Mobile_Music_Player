import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

//Screens
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import InfoScreen from "../screens/InfoScreen";

// Screen Navigation Names
const homeRoute = "Home";
const categoriesRoute = "Categories";
const infoRoute = "Info";

const Tab = createBottomTabNavigator();

const MainLayout = (props) => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName={homeRoute}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						let routeName = route.name;

						if (routeName === homeRoute) {
							iconName = focused ? "musical-notes" : "musical-notes-outline";
						} else if (routeName === categoriesRoute) {
							iconName = focused ? "list" : "list-outline";
						} else if (routeName === infoRoute) {
							iconName = focused ? "book" : "book-outline";
						}

						return <Icon name={iconName} size={size} color={color} />;
					},
					headerShown: false,
					tabBarActiveTintColor: "#63D1CC",
					tabBarInactiveTintColor: "#666666",
					tabBarLabelStyle: {
						paddingBottom: 10,
						fontSize: 12,
					},
					tabBarStyle: [
						{
							display: "flex",
							padding: 10,
							height: 70,
						},
						null,
					],
				})}
			>
				<Tab.Screen name={homeRoute} component={HomeScreen} />
				<Tab.Screen name={categoriesRoute} component={CategoriesScreen} />
				<Tab.Screen name={infoRoute} component={InfoScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default MainLayout;
