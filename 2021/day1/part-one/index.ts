import input from './input'

const getSonarBeepDepthMeasurementCount = (input: number[]) => {
  let higherValue;
  let count = 0;

  for (const value of input) {
    if (higherValue < value) count += 1;
    higherValue = value;
  }

  return count;
}

getSonarBeepDepthMeasurementCount(input)