import styled from 'styled-components';


export const FormBody  = styled.div `
background-color: #fff
`;

export const FormTitle  = styled.h1 `
font-family: barlow;
font-size: 56px;
line-height: 65px;
color: #002EFF;
font-weight: 400;
@media screen and (max-width: 768px) {
font-size:30px;
line-height: 30px;
}
`;
export const TitleBold = styled.b `
font-family: barlow;
font-size: 56px;
line-height: 65px;
color: #002EFF;
font-weight: 600;
@media screen and (max-width: 768px) {
  font-size:30px;
  line-height: 30px;
  }
`;

export const ContainerTitle  = styled.div `

display: flex;
flex-wrap: wrap;
padding: 30px 165px 0px 165px;
align-content: center;
align-items: center;
justify-content: space-around;
@media screen and (max-width: 768px) {
  padding: 30px 10px 0px 10px;
  flex-wrap: nowrap;
}
`;

export const separador  = styled.hr `
width: 100%;
height:1px;
background-color: #f3f5ff;
margin-top: 65px;

`;

export const ContainerForm = styled.div`
    position: relative;
    width: 825px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      width: 100%;
      align-items: center;
    }
`;

export const ContainerVehiculo = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

`;

export const FormSection = styled.div`
    display: flex;
    width: 825px;
    @media screen and (max-width: 768px) {
      width: 100%
    }
`;

export const InputBox = styled.div`
display: inline;
`;


