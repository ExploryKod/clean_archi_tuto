import {AppDispatch, AppGetState } from "@taotask/modules/store/store";
//  On récup directement le formulaire depuis le getState ici
// Analyser : const x = () => () => {} >>> currying (a function that return a function so maintaining the state of the first param
// See: https://dev.to/earthboundmisfit/multiple-arrow-operators-in-a-single-function-551d
// In Redux, we call it a connect() function : https://react-redux.js.org/api/connect
export const reserve = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    return
}