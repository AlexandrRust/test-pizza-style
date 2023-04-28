import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import('components/layout/SharedLayout'));
const PizzaPage = lazy(() => import('pages/PizzaPage'));
const CartPages = lazy(() => import('pages/CartPages'));

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<PizzaPage />} />
            <Route path="pizzaCard" element={<CartPages />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
