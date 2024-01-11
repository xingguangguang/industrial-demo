import { RouterProvider, createBrowserRouter, Router, Route, useRoutes, Switch } from 'react-router-dom';
import routes from './routes';
import Loading from './components/Loading';
import { Suspense } from 'react';

function App() {
  const router = createBrowserRouter(routes);
  return (
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </Suspense>
  );
}

export default App;
