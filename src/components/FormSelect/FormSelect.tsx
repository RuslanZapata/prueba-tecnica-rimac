import "../../sass/components/formSelect/_formSelect.scss";

const FormSelect = (props) => {
  const { onChange, name, errorMessage, defaultValue, label, opciones, selectorWidth = false } = props;

  return (
    <div className={`formSelect ${selectorWidth ? 'width50' : ''}`}>
      <select onChange={onChange} className="formSelect__inp" defaultValue={defaultValue} name={name}>
        {opciones.map((item)=>{
          return <option key={item.value} value={item.value}>{item.label}</option>
        })}
      </select>
      <label className="formSelect__lbl">{label}</label>
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormSelect;
