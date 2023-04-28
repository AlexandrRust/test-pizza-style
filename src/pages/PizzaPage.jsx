import { Section } from 'components/section/Section.styled';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productsOperations, productsSelectors } from 'redux/products';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { CardButtonBox } from 'components/cardButtonBox/CardButtonBox.styled';
import { CardPizza } from 'components/card/CardPizza.styled';
import { CardImg } from 'components/card/CardImg.styled';
const PizzaPage = () => {
  const dispath = useDispatch();
  const pizzaList = useSelector(productsSelectors.getPizzaList);
  const cart = useSelector(productsSelectors.getCartList);
  useEffect(() => {
    dispath(productsOperations.getPizzaList());
  }, [dispath]);
  const handleClick = elem => {
    dispath(productsOperations.addPizzaCard({ ...elem, quantity: 1 }));
  };
  const minusQuantity = elem => {
    const currentCart = cart.find(elemCart => elem.id === elemCart.id);
    dispath(
      productsOperations.minusPizzaCard({
        ...elem,
        quantity: currentCart.quantity - 1,
      })
    );
  };
  const plusQuantity = elem => {
    const currentCart = cart.find(elemCart => elem.id === elemCart.id);
    dispath(
      productsOperations.plusPizzaCard({
        ...elem,
        quantity: currentCart.quantity + 1,
      })
    );
  };
  return (
    <Section>
      {pizzaList.map(elem => (
        <CardPizza key={elem.id}>
          <CardImg variant="top" src={elem.image} />
          <Card.Body>
            <Card.Title>{elem.title}</Card.Title>
            <Card.Text>{elem.description}</Card.Text>
            <Card.Text>Price: {elem.price} UAH</Card.Text>
            <CardButtonBox>
              <Button variant="secondary" onClick={() => handleClick(elem)}>
                Add to cart
              </Button>

              {cart.find(elemCart => elem.id === elemCart.id) && (
                <>
                  <Button variant="secondary">
                    <FiPlus onClick={() => plusQuantity(elem)} />
                  </Button>
                  <Button variant="secondary">
                    <FiMinus onClick={() => minusQuantity(elem)} />
                  </Button>
                </>
              )}
            </CardButtonBox>
          </Card.Body>
        </CardPizza>
      ))}
    </Section>
  );
};

export default PizzaPage;
