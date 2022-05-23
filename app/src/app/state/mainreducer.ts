import { ViewStatus, JourneyData, StepData,  UiState, AppState, DataState } from './app.state';
import journeydataReducer from './journeys/reducers/journey.data.reducer'
import stepdataReducer from './steps/reducers/step.data.reducer'
import mainUiReducer from './mainUiReducer'
import { combineReducers } from 'redux'

export const initialUiState: UiState = {
  viewStatus: ViewStatus.Initial,
  currentStep: 0,
}

const initialJourneyData: JourneyData = {
  title: " ",
  journeyId: "",
  sections: [],
}
const initialStepData: StepData = {
  steps: [
      {
      title: "DASGG",
      sections: "AFHTDJQTJQETJHNRAZGZ",
      }
  ],
}
export const initialDataState: DataState = {
  journeyData: initialJourneyData,
  stepData: initialStepData,
}

export const initialState: AppState = {
  uiState: initialUiState,
  dataState: initialDataState,
};


export function appReducer(state = initialState, action)  {
    console.log(action)
    return {
      uiState: mainUiReducer(state.uiState, action),
      dataState: dataReducer(state.dataState, action)
    }
  }
  
  export function dataReducer(state, action)  {
    return {
      journeyData: journeydataReducer(state.journeyData , action),
      stepData: stepdataReducer(state.stepData, action)
    }
  }
  
