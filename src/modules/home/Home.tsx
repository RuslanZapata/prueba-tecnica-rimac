import { useCallback, useEffect, useState } from 'react';
import FormInput from "../../components/FormInput/FormInput";
import FormSelect from "../../components/FormSelect/FormSelect";
import family from '../../assets/family.png'
import "../../sass/modules/home/_home.scss";
import { useNavigate } from 'react-router-dom';
import { DocumentNumberHook } from '../../core/hook/home/documentNumber.hook';
import { PhoneHook } from '../../core/hook/home/phone.hook';
import { DocumentHook } from '../../core/hook/home/typeDocument.hook';
import { usePlan } from "../../core/hook/plan.hook";
import { getUsersServiceApi } from '../../core/service/user';

const Home = () => {
  const navigate = useNavigate()
  const { addCustomer, addUser } = usePlan()
  const [values, setValues] = useState({
    typeDocument: "",
    documentNumber: "",
    phone: "",
    PrivacyPolicy: false,
    CommercialCommunicationsPolicy: false,
  });

  const typeDocument = DocumentHook()
  const phone = PhoneHook()
  const documentNumber = DocumentNumberHook();

  const handlenClick = useCallback(() => {
    navigate('/seleccion-plan', { state: { back: '/' } })
  }, [navigate])

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'checkbox') {
      setValues({ ...values, [e.target.name]: e.target.checked });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  }, [setValues, values])


  const onChangeSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value, typeDocument: e.target.name });
  }, [setValues, values])

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (addCustomer) {
      addCustomer(values)
    }
    handlenClick()
  }, [addCustomer, handlenClick, values])

  const saveUser = useCallback(async () => {
    try {
      const responce = await getUsersServiceApi()
      if (addUser) {
        addUser({ ...responce, age: 25 })
      }
    } catch (err) {
      console.log('ERROR: ', err)
      return true
    }
  }, [addUser])

  useEffect(() => {
    saveUser()
  }, [])

  return (
    <div className='home'>
      <div className='home__banner'>
        <img className='home__banner__img' src={family} alt="" />
      </div>
      <form onSubmit={handleSubmit} className='home__from'>
        <p className='home__from__text'>Seguro Salud Flexible</p>
        <h3 className='home__from__subtitle'>Creado para ti y tu familia</h3>
        <p className='home__from__description'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>

        <div style={{ width: '100%', display: 'flex' }}>
          <FormSelect
            onChange={onChangeSelect}
            selectorWidth
            {...typeDocument}
          />

          <FormInput
            entranceWidth
            {...documentNumber}
            onChange={onChange}
          />
        </div>

        <FormInput
          {...phone}
          onChange={onChange}
        />

        <div className='home__from__termsConditions'>
          <label className='home__from__termsConditions__lbl' htmlFor="PrivacyPolicy">
            <input onChange={onChange} className='home__from__termsConditions__inp' type="checkbox" name="PrivacyPolicy" id="PrivacyPolicy" />
            Acepto lo Política de Privacidad
          </label>
        </div>

        <div className='home__from__termsConditions'>
          <label className='home__from__termsConditions__lbl' htmlFor="CommercialCommunicationsPolicy">
            <input onChange={onChange} className='home__from__termsConditions__inp' type="checkbox" name="CommercialCommunicationsPolicy" id="CommercialCommunicationsPolicy" />
            Acepto la Política Comunicaciones Comerciales
          </label>
        </div>
        <a>Aplican Términos y Condiciones.</a>
        <button type='submit' className='home__from__button'>
          Cotiza aquí
        </button>
      </form>
    </div>
  )
}

export default Home