import styled from 'styled-components';

export const ProductCardsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: space-between;
  column-gap: 20px;
  row-gap: 80px;

  @media screen and (max-width: 682px) {
    justify-content: center;
  }
`;

export const UserHeaderContainer = styled.section`
  display: flex;
  gap: 12px;
`;

export const AccountPaperContainer = styled.div`
  padding-top: 40px;
  display: grid;
  place-items: center;
`;

export const Form = styled.form`
  display: grid;
  row-gap: 16px;
`;

export const HelperErrorText = styled.p`
  color: #d32f2f;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin-top: 3px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`;

export const FooterStyle = styled.footer`
  width: 100%;
  height: 80px;
  position: relative;
  bottom: 0;
  color: #fff;
  background-color: #1976d2;
`;

export const ShoppingCartList = styled.ul`
  padding: 24px 0px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 592px);
  column-gap: 28px;
  row-gap: 32px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 516px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

export const ShoppingCartItemList = styled.li`
  max-width: 592px;
  padding: 4px 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 16px;
  border-radius: 4px;

  @media screen and (max-width: 516px) {
    grid-template-columns: 1fr;
    max-width: 260px;
  }
`;

export const ShoppingCartImage = styled.img`
  width: 260px;
  height: auto;
  border-radius: 4px;
`;

export const ShoppingCartDescription = styled.section`
  display: grid;
  grid-template-rows: 0.8fr 0.2fr 2fr;
`;

export const ShoppingCartActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  align-items: flex-start;
  column-gap: 4px;
`;
