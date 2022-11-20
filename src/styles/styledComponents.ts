import styled from 'styled-components';

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
