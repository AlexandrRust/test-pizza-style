import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const CardPizza = styled(Card)`
  max-width: 350px;
  height: 600px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 2 - 20px);
    height: 580px;
  }
  @media screen and (min-width: 991px) {
    flex-basis: calc(100% / 2 - 20px);
    height: 580px;
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 3 - 20px);
    height: 580px;
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc(100% / 3 - 20px);
  }
`;
