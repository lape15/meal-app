import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter(
    (favMeal) => favMeal.id === "m1" || favMeal.id === "m2"
  );

  return <MealList data={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};
export default FavoritesScreen;
