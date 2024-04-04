import { useState } from "react";
import "../../sass/components/formInput/_formInput.scss";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, entranceWidth = false, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className={`formInput ${entranceWidth ? 'width50' : ''}`}>
      <input
        className="formInput__inp"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <label className="formInput__lbl">{label}</label>
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
