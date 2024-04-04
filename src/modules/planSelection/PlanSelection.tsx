import "../../sass/modules/planSelection/_planSelection.scss";
import BackIcon from "../../assets/BackIcon";
import PlanCard from "../../components/PlanCard/PlanCard";
import CustomerCard from "../../components/CustomerCard/CustomerCard";
import { useEffect, useState } from "react";
import { getPlansServiceApi } from "../../core/service/plans";
import { usePlan } from "../../core/contexts/plan.hook";
import { useNavigate } from "react-router-dom";

type Planes = {
  name: string
  price: number
  description: string[]
  age: number
}

const PlanSelection = () => {
  const navigate = useNavigate()
  const [forWhom, setForWhom] = useState('')
  const [plansList, setPlansList] = useState<Planes[]>()
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

  const handlenClick = () => {
    navigate('/resumen', { state: { back: '/' } })
  }

  const onChangePlan = (plan) => {
    addToPlan({ ...plan, user: forWhom?.meUser ? 'meUser' : 'heUser' })
    handlenClick()
  };

  const onChangeCustomerCard = (whoUser: string) => {
    if (forWhom === whoUser) {
      setForWhom('')
    } else {
      setForWhom(whoUser)
    }
  };

  const listPlans = async () => {
    try {
      const responce = await getPlansServiceApi()
      setPlansList(responce)
    } catch (err) {
      console.log('ERROR: ', err)
      return true
    }
  }

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
              return <PlanCard key={index} onChangePlan={onChangePlan} plan={plan} />
            })
          }
        </div>
      )}
    </div>
  )
}

export default PlanSelection