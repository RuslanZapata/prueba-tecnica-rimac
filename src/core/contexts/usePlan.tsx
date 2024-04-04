import { createContext, useReducer } from "react";
import { planReducer, planInitialState } from "./reducers/plan";

export const PlanContext = createContext()

function usePlanReducer () {
  const [state, dispatch] = useReducer(planReducer, planInitialState)

  const addToPlan = product => dispatch({
    type: 'ADD_TO_PLAN',
    payload: product
  })

  const addUser = product => dispatch({
    type: 'ADD_USER',
    payload: product
  })

  const addCustomer = product => dispatch({
    type: 'ADD_CUSTOMER',
    payload: product
  })
  
  const clearPlan = product => dispatch({
    type: 'CLEAR_PLAN',
    payload: product
  })

  return {state, addToPlan, addUser, addCustomer, clearPlan}
}

// La dependencia de usar Context
// es MINIMA
export function UserPlanProvider ({children}) {
  const {state, addToPlan, addUser, addCustomer, clearPlan} = usePlanReducer()

  return (
    <PlanContext.Provider value={{
      plan: state,
      addToPlan,
      addUser,
      addCustomer,
      clearPlan
    }}>
      {children}
    </PlanContext.Provider>
  )

}
