import IcAddUserLight from "../../assets/IcAddUserLight"
import IcProtectionLight from "../../assets/IcProtectionLight"
// import RadioCheck from "../../assets/RadioCheck-on"
import "../../sass/components/customerCard/_customerCard.scss";
import type { CustomerCard } from "../../core/interfaces/customerCard.interface";

const CustomerCard: React.FC<CustomerCard> = (props) => {
  const { isChecked, onChange, title, description, whoUser } = props
  return (
    <div className="customer-card">
      <div>
        <input
          onChange={()=>onChange(whoUser)}
          type="checkbox"
          name="whoUser"
          checked={isChecked}
        />
      </div>
      {whoUser === 'meUser' ? <IcProtectionLight /> : <IcAddUserLight />}

      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default CustomerCard