
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newMeal: undefined;
      feedback: {
        inTheDiet: boolean;
      };
      mealDetail:{
        mealId: string;
      };
      editMeal: {
        mealId: string;
      };
    }
  }
}