import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 2px 2px 2px 1px #48529944;
`;

export const NavbarBrand = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const NavbarLink = styled.li`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: #002EFF;
    text-decoration: none !important;
    

    &:hover {
      background-color: #F3F5FF;
      padding: 15px;
      border-radius: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    a {
      font-size: 16px;
      color: #0C0C0C;
      
    }

    &:hover {
      text-decoration: underline !important;
    }
  }

`;