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
