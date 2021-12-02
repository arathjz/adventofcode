import input from './input'
import { getSonarBeepDepthMeasurementCount } from "./part-one";

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