import { createContext, useReducer, ReactNode } from "react";
import { planReducer, planInitialState } from "./reducers/plan";
import { DataCustomer, DataPlan, DataUser, Plan } from "../interfaces/plan.interface";

interface Props {
    children?: ReactNode
}


export const PlanContext = createContext()

function usePlanReducer () {
  const [state, dispatch] = useReducer(planReducer, planInitialState)

  const addToPlan = (product:DataPlan) => dispatch({
    type: 'ADD_TO_PLAN',
    payload: product
  })

  const addUser = (product:DataUser) => dispatch({
    type: 'ADD_USER',
    payload: product
  })

  const addCustomer = (product:DataCustomer) => dispatch({
    type: 'ADD_CUSTOMER',
    payload: product
  })
  
  const clearPlan = () => dispatch({
    type: 'CLEAR_PLAN',
  })

  return {state, addToPlan, addUser, addCustomer, clearPlan}
}

// La dependencia de usar Context
// es MINIMA
export function UserPlanProvider ({children}:Props) {
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
