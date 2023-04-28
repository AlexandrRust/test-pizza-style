import { CardPizza } from 'components/card/CardPizza.styled';
import { CardButtonBox } from 'components/cardButtonBox/CardButtonBox.styled';
import { Section } from 'components/section/Section.styled';
import { Button, Card, CardImg, Container } from 'react-bootstrap';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productsOperations, productsSelectors } from 'redux/products';

const CartPages = () => {
  const dispath = useDispatch();
  const cartList = useSelector(productsSelectors.getCartList);
  const total = cartList.reduce((sum, card) => {
    return sum + card.quantity * card.price;
  }, 0);
  const removeCard = element => {
    dispath(productsOperations.removePizzaCard(element));
  };
  const clearCard = () => {
    dispath(productsOperations.clearPizzaCard([]));
  };
  const minusQuantity = elem => {
    const currentCart = cartList.find(elemCart => elem.id === elemCart.id);
    dispath(
      productsOperations.minusPizzaCard({
        ...elem,
        quantity: currentCart.quantity - 1,
      })
    );
  };
  const plusQuantity = elem => {
    const currentCart = cartList.find(elemCart => elem.id === elemCart.id);
    dispath(
      productsOperations.plusPizzaCard({
        ...elem,
        quantity: currentCart.quantity + 1,
      })
    );
  };
  return (
    <>
      {cartList.length === 0 ? (
        <Section>
          <h3>
            Please, choose pizza <Link to={'/'}>here</Link>
          </h3>
        </Section>
      ) : (
        <Section>
          {cartList.map(elem => (
            <CardPizza key={elem.id}>
              <CardImg variant="top" src={elem.image} />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>{elem.description}</Card.Text>

                <CardButtonBox>
                  {cartList.find(elemCart => elem.id === elemCart.id) && (
                    <>
                      <Button variant="secondary">
                        <FiMinus onClick={() => minusQuantity(elem)} />
                      </Button>

                      <span
                        style={{
                          width: '25px',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {elem.quantity}
                      </span>
                      <Button variant="secondary">
                        <FiPlus onClick={() => plusQuantity(elem)} />
                      </Button>
                      <Card.Text>
                        Price: {elem.price * elem.quantity} UAH
                      </Card.Text>
                    </>
                  )}
                </CardButtonBox>
                <Button
                  onClick={() => removeCard(elem)}
                  style={{ marginTop: '20px' }}
                  variant="secondary"
                >
                  Remove
                </Button>
              </Card.Body>
            </CardPizza>
          ))}
          <Container
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'end',
            }}
          >
            <h4 style={{ textAlign: 'end' }}>Total: {total} UAH</h4>
            <Button
              style={{ textAlign: 'end' }}
              variant="secondary"
              onClick={clearCard}
            >
              Make an order
            </Button>
          </Container>
        </Section>
      )}
    </>
  );
};

export default CartPages;
