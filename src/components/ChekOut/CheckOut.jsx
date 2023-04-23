import React, {  useState, useContext } from 'react';
import { userContext } from "../../context/cartContext"
import "./CheckOut.css"

 

const UserForm = () => {

const [exito, setExito] = useState(false);  
const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: '',
});

const { checkOut, setCheck } = useContext(userContext);



function generateRandomNumber() {
  const min = 100000; 
  const max = 999999; 
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}




const handleSubmit = (event) => {
    event.preventDefault();

    if(userData.firstName == ''){
      alert('Ingrese un nombre!')
      return
    }

    if(userData.lastName == ''){
      alert('Ingrese un apellido!')
      return
    }
    if(userData.email == ''){
      alert('Ingrese un mail!')
      return
    }

    if (userData.email !== userData.confirmEmail) {
      alert('Las direcciones de correo electrónico no coinciden');
      return;
    }

    const newUser = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      email: userData.email,
    };

    

    setCheck(newUser);
    if(newUser.firstName  == ''){
      setExito(false);
    }else{ 
      setExito(true);
    }

    


    setUserData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      confirmEmail: '',
    });
};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const checkUser = checkOut.map(item => item)

return (
  <>
  <h1 className='titulo3'>Datos personales</h1>
  <div className='formComp'>
    <form className='much' onSubmit={handleSubmit}>
          <div className='cajaInp'>
            <label>
              Nombre:
              <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} />
            </label>
            <label>
              Apellido:
              <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} />
            </label>
            <label>
              Teléfono:
              <input type="text" name="phone" value={userData.phone} onChange={handleChange} />
            </label>
            <label>
              Correo electrónico:
              <input type="email" name="email" value={userData.email} onChange={handleChange} />
            </label>
            <label>
              Confirmar correo electrónico:
              <input type="email" name="confirmEmail" value={userData.confirmEmail} onChange={handleChange} />
            </label>
          </div>
            <button className='bt' type="submit">Enviar</button>
    </form>
    <div className='ultimo'>{exito && <p>Se generó la orden con éxito. ID N°: {generateRandomNumber()}</p>}</div>
  </div>   
</>
  );
};

export default UserForm;