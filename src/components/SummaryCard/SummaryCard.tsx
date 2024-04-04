import IcFamily from "../../assets/IcFamily";
import "../../sass/components/summaryCard/_summaryCard.scss";
import { usePlan } from "../../core/hook/plan.hook";


const SummaryCard = () => {
  const { plan } = usePlan()

  const {dataCustomer, dataPlan, dataUser} = plan

  return (
    <div className="summary-card">
      <div className="summary-card__containersubtitle">
        <p className="summary-card__containersubtitle__subtitle">PRECIOS CALCULADOS PARA:</p>
        <p className="summary-card__containersubtitle__nameuser"><IcFamily /> {dataUser.name} {dataUser.lastName}</p>
      </div>

      <div className="summary-card__container-responsable">
        <p className="summary-card__container-responsable__subtitle">Responsable de pago</p>
        <p className="summary-card__container-responsable__text">{dataCustomer.typeDocument === '1' ? 'DNI' : 'Carne'}: {dataCustomer.documentNumber}</p>
        <p className="summary-card__container-responsable__text">Celular: {dataCustomer.phone}</p>
      </div>
      <div className="summary-card__container-plan">
        <p className="summary-card__container-plan__subtitle">Plan elegido</p>
        <p className="summary-card__container-plan__text">{dataPlan.name}</p>
        <p className="summary-card__container-plan__text">Costo del Plan: ${dataPlan.price} al mes</p>
      </div>
    </div>
  )
}

export default SummaryCard