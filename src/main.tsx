import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './sass/index.scss'
import { UserPlanProvider } from "./core/contexts/usePlan.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserPlanProvider>
    <App />
  </UserPlanProvider>,
)
