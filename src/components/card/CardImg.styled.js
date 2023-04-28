import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const CardImg = styled(Card.Img)`
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
