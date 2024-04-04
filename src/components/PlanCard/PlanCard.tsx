import IcHomeLight from "../../assets/IcHomeLight"
import IcHospitalLight from "../../assets/IcHospitalLight"
import "../../sass/components/planCard/_planCard.scss";

const PlanCard = ({plan, onChangePlan}) => {
  return (
    <div className="plan-card">
      <p className={`plan-card__recommended ${plan.name === 'Plan en Casa y Clínica' ? '' : 'nobackground'}`}>{plan.name === 'Plan en Casa y Clínica' ? 'Plan recomendado' : ''}</p>
      <div className="plan-card__Headboard">
        <div className="plan-card__Headboard__head">
          <h4 className="plan-card__Headboard__head__title">{plan.name}</h4>
          <p className="plan-card__Headboard__head__cost-plan">COSTO DEl PLAN.</p>
          <p className="plan-card__Headboard__head__cost">${plan.price} al mes</p>
        </div>
        {plan.name === 'Plan en Casa y Clínica' ? <IcHospitalLight /> : <IcHomeLight />}
      </div>
      <ul className="plan-card__list">
        {plan.description.map((description, index) => {
          return (
            <li key={index} className="plan-card__list-info">{description}</li>
          )
        })}
      </ul>
      <button onClick={()=> onChangePlan(plan)}>Seleccionar Plan</button>
    </div>
  )
}

export default PlanCard