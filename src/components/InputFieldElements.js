import styled from "styled-components";

export const Container = styled.div`
    position: relative;
   height: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    
`;

export const Input = styled.input`
    width: 255px;
    height: 64px;
    margin: 0 2px 10px 10px;
    border: 1px solid #002EFF;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    &:focus,{

    }
    &:not(:placeholder-shown) + span,
    &:focus + span{
        transform: translateX(30px) translateY(-35px);
        background-color: #fffff
    }
`;

export const Label = styled.span`
    
    left: 0;
    padding-left: 1rem;
    font-size: 1rem;
    color: #002EFF;
    background-color: #fff;
    pointer-events: none;
    transition: 0.6s;
    transform: translateX(-40px) translateY(10px);

`;

export const Required = styled.span`
color: red;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BtnSubmit = styled.button`
width: 148px;
height: 48px;
padding: 12px, 16px;
background-color: #002EFF;
border-radius: 30px;
border: none;

`;

export const containerButton = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-top: 30px;
@media screen and (max-width: 768px) {
    justify-content: center !important;
  }
    `;

    export const ContainerLorem = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 825px;
    margin: 0 auto;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        margin: 0 20px;
      }
    `;


    export const LoremTitle = styled.h1`
    font-size: 30px;
    line-height: 36px;
    color: #191919;
    font-weight:600;
    @media screen and (max-width: 768px) {
        padding: 30px 0 0 0;
      }
    `;

    export const LoremP = styled.h1`
    font-size: 18px;
    line-height: 21px;
    color: #191919;
    font-weight:400;
    `;