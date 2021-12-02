import input from './input'
import { SubmarineAction, SubmarineData } from './types'

const INITIAL_STATE = {
  horizontal: 0,
  depth: 0,
  aim: 0,
}

interface State {
  horizontal: number
  depth: number
  aim: number
}

const partOneReducer = (state: State, submarineData: SubmarineData): State => {
  const [action, value] = submarineData;
  

  switch(action) {
    case SubmarineAction.Forward:
      return {
        ...state,
        horizontal: state.horizontal + value,
      }
    case SubmarineAction.Down:
      return {
        ...state,
        depth: state.depth + value,
      }
    case SubmarineAction.Up:
      return {
        ...state,
        depth: state.depth - value,
      }
    default:
      return state
  }    
}

const partTwoReducer = (state: State, submarineData: SubmarineData): State => {
  const [action, value] = submarineData;
  
  switch(action) {
    case SubmarineAction.Forward:
      return {
        ...state,
        horizontal: state.horizontal + value,
        depth: state.depth + (state.aim * value),
      }
    case SubmarineAction.Down:
      return {
        ...state,
        aim: state.aim + value,
      }
    case SubmarineAction.Up:
      return {
        ...state,
        aim: state.aim - value,
      }
    default:
      return state
  }    
}


const getHorizontalPositionAndDepth = (
  data: SubmarineData[],
  reducer: (state: State, submarineData: SubmarineData) => State
): number => {
  const { horizontal, depth } = data.reduce(reducer, INITIAL_STATE)

  return horizontal * depth
}


/** ------------ PART ONE -------------- */
// getHorizontalPositionAndDepth(input, partOneReducer)


/** ------------ PART TWO -------------- */
// getHorizontalPositionAndDepth(input, partTwoReducer)
