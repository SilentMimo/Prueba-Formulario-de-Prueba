import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from './NavBar';
import { Legend, StyledTable, StyledTd, StyledTdXL, StyledTh, StyledThXL, StyledThead, StyledTr } from './TableListElements';
import { ContainerLorem, LoremP, LoremTitle } from './InputFieldElements';

export const TablesList = () => {
  // Change the state extraction to reflect your state structure
  const tableState = useSelector((state) => state.table);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tableState || !tableState.form) {
      setError({ message: 'Error: table or form object is not defined in the Redux store.' });
      return;
    }

    setIsLoading(false);

    return () => {
      setIsLoading(true);
    };
  }, [tableState]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const lastTenSeller = tableState.form.sellers.slice(-10).reverse();

  return (
    <>
      <NavBar />
      <ContainerLorem>
        <LoremTitle>Nuevo formulario</LoremTitle>
        <LoremP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the bed industry's standard dummy text ever since.</LoremP>
      </ContainerLorem>
      <StyledTable>
        <StyledThead>
          <StyledTr>
            <StyledThXL>Nombre</StyledThXL>
            <StyledTh>Rut vendedor</StyledTh>
            <StyledTh>Patente vehículo</StyledTh>
            <StyledTh>Marca vehículo</StyledTh>
            <StyledTh>Modelo vehículo</StyledTh>
            <StyledTh>Color vehículo</StyledTh>
            <StyledTh>Eliminar</StyledTh>
          </StyledTr>
        </StyledThead>
        <tbody>
          {lastTenSeller.map((seller) => {
           
            return (
              <StyledTr key={seller.id}>
                <StyledTdXL>{seller.name}</StyledTdXL>
                <StyledTd>{seller.rut}</StyledTd>
                <StyledTd>{seller.licensePlate}</StyledTd>
                <StyledTd>{seller.model}</StyledTd>
                <StyledTd>{seller.brand}</StyledTd>
                <StyledTd>Azul</StyledTd>
                <StyledTd><img src='src\assets\Eliminar.png' /></StyledTd>
              </StyledTr>
            );
          })
         }</tbody>
     
        <Legend>Mostrando registros del 1 al 10 de un total de 10 registros.</Legend>
  
      </StyledTable>

    </>
  );
};

export default TablesList;
