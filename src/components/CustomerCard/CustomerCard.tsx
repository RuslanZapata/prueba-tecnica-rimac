import IcAddUserLight from "../../assets/IcAddUserLight"
import IcProtectionLight from "../../assets/IcProtectionLight"
// import RadioCheck from "../../assets/RadioCheck-on"
import "../../sass/components/customerCard/_customerCard.scss";

const CustomerCard = ({ isChecked, onChange, title, description, whoUser }) => {
  
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