import { useContext } from "react";
import { PlanContext } from "./usePlan";

export const usePlan = () => {
  const context = useContext(PlanContext)

  if (context === undefined) {
    throw new Error('usePlan must be used within a CartProvider')
  }

  return context
}