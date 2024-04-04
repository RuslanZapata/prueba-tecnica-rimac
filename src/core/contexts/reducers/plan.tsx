export const planInitialState = JSON.parse(window.localStorage.getItem('plan')) || {
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
export const updateLocalStorage = state => {
  window.localStorage.setItem('plan', JSON.stringify(state))
}

export const planReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case PLAN_ACTION_TYPES.ADD_TO_PLAN: {
      const newState = { ...state, dataPlan: actionPayload }
      updateLocalStorage(newState)
      return newState
    }

    case PLAN_ACTION_TYPES.ADD_USER: {
      const newState = { ...state, dataUser: actionPayload }
      updateLocalStorage(newState)
      return newState
    }

    case PLAN_ACTION_TYPES.ADD_CUSTOMER: {
      const newState = { ...state, dataCustomer: actionPayload }
      updateLocalStorage(newState)
      return newState
    }

    case PLAN_ACTION_TYPES.CLEAR_PLAN: {
      updateLocalStorage([])
      return []
    }
  }

  return state
}