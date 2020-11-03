import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const defaulStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "#ffffff" : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailsScreen,
  },
  {
    // mode: "modal",
    defaultNavigationOptions: defaulStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaulStackNavOptions,
  }
);
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={22} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={22} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
          activeBackgroundColor: "#f2f2f2",
        },
      });
export default createAppContainer(MealsFavTabNavigator);
