import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar';

import { ContainerForm, ContainerTitle, FormTitle, TitleBold,ContainerVehiculo} from '../styled-components/FormStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addSeller, addVehicle, initializeTable } from '../redux/slices/tableSlice';
import { BtnSubmit, ContainerLorem, InputContainer, LoremP, LoremTitle } from './InputFieldElements';
import { Link } from 'react-router-dom';
import InputField from './InputField';

const initialState = {
  seller: {
    name: '',
    rut: '',
  },
  vehicle: {
    brand: '',
    model: '',
    licensePlate: '',
    price: '',
  },
};

const FormContainer = () => {
  const dispatch = useDispatch();
  const tableState = useSelector((state) => state.table);
  const [nom, setNom] = useState('');
  const [rut, setRut] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');


  // Estado local del formulario
  const [localFormState, setLocalFormState] = useState(initialState);

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      const sellers = tableState.form.sellers; 
      if (sellers.length > 0) {
        const lastAddedSeller = sellers[sellers.length - 1];

        dispatch(addVehicle({
          id: Date.now(),
          sellerId: lastAddedSeller.id,
          ...localFormState.vehicle,
        }));
      } else {
        console.error('Error: sellers array is empty');
      }

      setLocalFormState(initialState);
      setFormSubmitted(false);
    }
  }, [formSubmitted, tableState.form.sellers, dispatch, localFormState]);

// variable local
  const [optionList, setOPtionList] = useState('');

// metodo para guardar marca seleccionada en el estado local
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

// listado con marcas
  const marcas = [{
    id: 1,
    name: 'Toyota',
  },{
    id: 2,
    name: 'Hyundai',
  }
  ];



  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!nom || !rut || !licensePlate || !model || !brand || !price) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (!/^[a-zA-Z ]+$/.test(nom)) {
      alert('El nombre solo puede contener letras y espacios');
      return;
    }

    if (!/^[0-9]+$/.test(rut)) {
      alert('El Rut solo puede contener números');
      return;
    }

    const seller = {
      id: Date.now(),
      nom: nom,
      rut: rut,
      licensePlate: licensePlate,
      model: model,
      brand: brand,
      price: price,
    }

    const vehicle ={
      id: Date.now(),

    }
    console.log(seller);
    dispatch(addSeller({seller}));
    console.log(vehicle);
    dispatch(addVehicle({vehicle}));


    setFormSubmitted(true);
  };

  console.log('nom: ' + nom)

  return (
    <form onSubmit={handleSubmit}>
      <NavBar />
      <ContainerTitle>
        <FormTitle>Formulario <TitleBold>de Prueba</TitleBold></FormTitle>
        <img className="imgSize"src='src\assets\Illustration.png' alt="Illustration" />
      </ContainerTitle>
      <hr />
      <ContainerLorem>
        <LoremTitle>Nuevo formulario</LoremTitle>
        <LoremP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the bed industry's standard dummy text ever since.</LoremP>
      </ContainerLorem>

      <ContainerForm>

      <InputContainer>
      <h2>Datos del vendedor: </h2>
      <div className='dflex'>
      <InputField label="Nombre" type="text"  placeholder="Nombre" value={nom} onChange={e => setNom(e.target.value)} required />
      <InputField label="Rut" type="number" placeholder="Rut" value={rut} onChange={e => setRut(e.target.value)} />
      </div>
      </InputContainer>

      <div>
      <h2>Datos del vehículo: </h2>
      <ContainerVehiculo>
        <InputField label=' Patente del vehículo' name="licensePlate" value={licensePlate}  onChange={e => setLicensePlate(e.target.value)}/>
        <InputField placeholder='' label="Modelo" name="model" value={model}  onChange={e => setModel(e.target.value)} />
{/*         <select id="dropdown" label="marca vehículo" value={optionList} onChange={handleOptionChange}>
        {marcas.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select> */}
        <InputField label='Marca del vehículo' type="text" name="brand" id="brand" value={brand} onChange={e => setBrand(e.target.value)} />
        <InputField placeholder=' 'type="number"label="Precio"name="price"value={price} onChange={e => setPrice(e.target.value)}/>
      </ContainerVehiculo>
    </div>

      </ContainerForm>
      <div className='containerButton'>
       <BtnSubmit type="submit" onClick={(e)=>handleSubmit(e)}>
         <Link className='btn-submit' to="tables">
         Submit
         </Link>
       </BtnSubmit>
      </div>
    </form>

  );
};

export default FormContainer;
