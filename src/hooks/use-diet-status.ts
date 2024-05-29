import { useCallback, useState } from "react";
import { mealsGetDietRate } from "@storage/meals/meals-get-diet-rate";
import { useFocusEffect } from "@react-navigation/native";

type DietStatus = 'POSITIVE' | 'NEGATIVE';

export function useDietStatus() {
  const [dietRate, setDietRate] = useState<number>(0);

  const positiveCase = dietRate >= 60;
  const dietStatus: DietStatus = positiveCase ? 'POSITIVE' : 'NEGATIVE';
  const dietRateInPercent = `${dietRate.toFixed(2)}%`.replace('.', ',');

  useFocusEffect(
    useCallback(() => {
      mealsGetDietRate()
      .then(rate => {
        setDietRate(rate)
      })
      .catch(error => console.log('useDietStatus', error));
    }, [])
  );

  return {
    dietStatus,
    dietRate: dietRateInPercent
  }
}