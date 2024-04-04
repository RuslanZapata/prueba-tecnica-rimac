import "../../sass/modules/planSelection/_planSelection.scss";
import BackIcon from "../../assets/BackIcon";
import PlanCard from "../../components/PlanCard/PlanCard";
import CustomerCard from "../../components/CustomerCard/CustomerCard";
import { useCallback, useEffect, useState } from "react";
import { getPlansServiceApi } from "../../core/service/plans";
import { usePlan } from "../../core/hook/plan.hook";
import { useNavigate } from "react-router-dom";
import { DataPlan } from "../../core/interfaces/plan.interface";

const PlanSelection = () => {
  const navigate = useNavigate()
  const [forWhom, setForWhom] = useState('')
  const [plansList, setPlansList] = useState<DataPlan[]>()
  const { addToPlan } = usePlan()

  const userMy = [
    {
      title: 'Para mi',
      description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
      whoUser: 'meUser'
    },
    {
      title:
        'Para alguien más',
      description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
      whoUser: 'heUser'
    },
  ]

  const handlenClick = useCallback(() => {
    navigate('/resumen', { state: { back: '/' } })
  }, [navigate])

  const onChangePlan = useCallback((plan:DataPlan) => {
    if (addToPlan) {
    addToPlan({
      ...plan,
      user: forWhom === 'meUser' ? 'meUser' : 'heUser',
      price: forWhom === 'meUser' ? plan.price : (plan.price as number) * 0.95
    })
  }
    handlenClick()
  }, [forWhom, addToPlan, handlenClick])

  const onChangeCustomerCard = useCallback((whoUser: string) => {
    if (forWhom === whoUser) {
      setForWhom('')
    } else {
      setForWhom(whoUser)
    }
  }, [forWhom, setForWhom]);

  const listPlans = useCallback(async () => {
    try {
      const responce = await getPlansServiceApi()
      setPlansList(responce)
    } catch (err) {
      console.log('ERROR: ', err)
      return true
    }
  }, [setPlansList])

  useEffect(() => {
    listPlans()
  }, [])

  return (
    <div className="plan-selection">
      <a className="plan-selection__back" onClick={() => navigate(-1)}><BackIcon /> Volver</a>
      <div className="plan-selection__title">
        <h2>Rocío ¿Para quién deseas cotizar?</h2>
        <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
      </div>

      <div className="plan-selection__for-whom">
        {userMy.map((item, index) => {
          return <CustomerCard
            onChange={onChangeCustomerCard}
            key={index}
            title={item.title}
            description={item.description}
            whoUser={item.whoUser}
            isChecked={forWhom === item.whoUser}
          />
        })}
      </div>
      {forWhom && (
        <div className="plan-selection__container">
          {
            plansList?.map((plan, index) => {
              return <PlanCard forWhom={forWhom} key={index} onChangePlan={onChangePlan} plan={plan} />
            })
          }
        </div>
      )}
    </div>
  )
}

export default PlanSelection