import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const Section = styled(Container)`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-align-items: center;
  }
`;
