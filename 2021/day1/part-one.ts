import input from './input'

export const getSonarBeepDepthMeasurementCount = (input: number[]): number => {
  let higherValue;
  let count = 0;

  for (const value of input) {
    if (higherValue < value) count += 1;
    higherValue = value;
  }

  return count;
}

getSonarBeepDepthMeasurementCount(input)
