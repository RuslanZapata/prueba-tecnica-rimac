import { Plan } from "../../interfaces/plan.interface";

type Action = {
  type: string
  payload: Plan
}

export const planInitialState:Plan = JSON.parse(window.localStorage.getItem('plan')!) || {
  dataUser: {},
  dataCustomer: {},
  dataPlan: {}
}

export const PLAN_ACTION_TYPES = {
  ADD_TO_PLAN: 'ADD_TO_PLAN',
  ADD_USER: 'ADD_USER',
  ADD_CUSTOMER: 'ADD_CUSTOMER',
  CLEAR_PLAN: 'CLEAR_PLAN'
}

// update localStorage with state for plan
export const updateLocalStorage = (state:Plan) => {
  window.localStorage.setItem('plan', JSON.stringify(state))
}

export const planReducer = (state:Plan, action:Action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case PLAN_ACTION_TYPES.ADD_TO_PLAN: {
      const newState:Plan = { ...state, dataPlan: actionPayload }
      updateLocalStorage(newState)
      return newState
    }

    case PLAN_ACTION_TYPES.ADD_USER: {
      console.log(actionPayload)
      const newState:Plan = { ...state, dataUser: actionPayload }
      updateLocalStorage(newState)
      return newState
    }

    case PLAN_ACTION_TYPES.ADD_CUSTOMER: {
      const newState:Plan = { ...state, dataCustomer: actionPayload }
      updateLocalStorage(newState)
      return newState
    }

    case PLAN_ACTION_TYPES.CLEAR_PLAN: {
      updateLocalStorage({
        dataUser: {},
        dataCustomer: {},
        dataPlan: {}
      })
      return []
    }
  }

  return state
}