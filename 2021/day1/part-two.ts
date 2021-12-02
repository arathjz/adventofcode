import input from './input'
import { getSonarBeepDepthMeasurementCount } from "./part-one";

/**
  Assuming js has dynamic arrays by default. This solution is O(n), but worst case O(n ^ 2) if dealing with static arrays.
  This solution could be improved by not storing values in the values array, and instead taking the same approach for solution part-one.
 */

const getSlidingWindowsMeasurementCount = (input: number[]) => {
  const values = [];

  input.forEach((value, idx) => {
    const secondNextValue = input[idx + 2] || 0
    const nextValue = input[idx + 1] || 0
    const sumOfThreeValues = value + nextValue + secondNextValue

    if (secondNextValue !== 0 && nextValue !== 0) values.push(sumOfThreeValues)
  })
  

  return getSonarBeepDepthMeasurementCount(values)  
}

getSlidingWindowsMeasurementCount(input)