import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';

import { ShoppingIcon } from 'components/shoppingIcon/ShoppingIcon.styled';
import { ShoppingIconSpan } from 'components/shoppingIcon/ShoppingIconSpan.styles';
import { useSelector } from 'react-redux';
import { productsSelectors } from 'redux/products';

const SharedLayout = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 991px)',
  });
  const cartList = useSelector(productsSelectors.getCartList);
  const allQuantity = cartList.reduce((sum, card) => {
    return sum + card.quantity;
  }, 0);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>PizzaStyle</Navbar.Brand>
          </LinkContainer>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            {isDesktopOrLaptop && (
              <Link to="/pizzaCard" style={{ position: 'relative' }}>
                <ShoppingIcon />
                {allQuantity > 0 && (
                  <ShoppingIconSpan>{allQuantity}</ShoppingIconSpan>
                )}
              </Link>
            )}

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Pizza</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pizzaCard" style={{ position: 'relative' }}>
                <Nav.Link>
                  Cart
                  {allQuantity > 0 && (
                    <ShoppingIconSpan>{allQuantity}</ShoppingIconSpan>
                  )}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Suspense
        fallback={
          <div
            style={{
              position: 'absolute',
              top: '25%',
              left: '50%',
              transform: 'translate(0, -50%)',
            }}
          >
            <Spinner animation="border" variant="secondary" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
