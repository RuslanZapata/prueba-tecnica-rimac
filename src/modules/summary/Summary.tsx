import "../../sass/modules/summary/_summary.scss";
import BackIcon from "../../assets/BackIcon";
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate()

  return (
    <div className="summary">
      <a className="summary__back" onClick={() => navigate(-1)}><BackIcon /> Volver</a>
      <h2 className="summary__title">Resumen del seguro</h2>
      <SummaryCard />
    </div>
  )
}

export default Summary