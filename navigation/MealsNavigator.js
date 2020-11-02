import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";
import { createAppContainer } from "react-navigation";

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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "#ffffff" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
