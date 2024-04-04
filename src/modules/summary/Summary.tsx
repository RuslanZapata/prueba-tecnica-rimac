import "../../sass/modules/summary/_summary.scss";
import BackIcon from "../../assets/BackIcon";
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import { usePlan } from "../../core/hook/plan.hook";
import { useNavigate } from "react-router-dom";
import { Plan } from "../../core/interfaces/plan.interface";

const Summary = () => {
  const { plan } = usePlan()
  const navigate = useNavigate()

  console.log({ plan })

  return (
    <div className="summary">
      <a className="summary__back" onClick={() => navigate(-1)}><BackIcon /> Volver</a>
      <h2 className="summary__title">Resumen del seguro</h2>
      <SummaryCard plan={plan} />
    </div>
  )
}

export default Summary