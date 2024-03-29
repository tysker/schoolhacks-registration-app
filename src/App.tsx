import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout.tsx';
import Workshop from './ui/pages/Workshop.tsx';
import Error from './features/error/Error.tsx';
import WorkshopList from './ui/pages/WorkshopList.tsx';
import Confirmation from './ui/pages/Confirmation.tsx';
import {
  workshopsLoader,
  workshopLoader,
} from './services/routerLoaderFunctions.ts';
import { signUpUser } from './services/routerActionFunctions.ts';
import SchoolHack from './ui/pages/SchoolHack.tsx';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <SchoolHack />,
        },
        {
          path: '/workshops',
          element: <WorkshopList />,
          loader: workshopsLoader,
          errorElement: <Error />,
        },
        {
          path: '/:id',
          element: <Workshop />,
          loader: ({ params }) => workshopLoader(params.id!),
          action: signUpUser,
          errorElement: <Error />,
        },
        {
          path: '/confirmation',
          element: <Confirmation />,
          loader: ({ params }) => ({
            name: params.name,
            email: params.email,
            workshop: params.workshop,
          }),
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
