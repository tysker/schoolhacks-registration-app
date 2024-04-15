import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import AppLayout from './ui/AppLayout.tsx';
import Workshop from './ui/pages/Workshop.tsx';
import Error from './features/error/Error.tsx';
import WorkshopList from './ui/pages/WorkshopList.tsx';
import Confirmation from './ui/pages/Confirmation.tsx';
import {
    workshopsLoader,
    workshopLoader,
} from './services/routerLoaderFunctions.ts';
import {signUpUser} from './services/routerActionFunctions.ts';
import SchoolHack from './ui/pages/SchoolHack.tsx';
import {Route} from "react-router";


function App() {


    const router = createBrowserRouter(createRoutesFromElements(
            <Route errorElement={<Error/>} element={<AppLayout/>}>
                <Route index element={<Navigate replace to="/schoolhack" />} />
                <Route path="/schoolhack" element={<SchoolHack />} />
                <Route path="/workshops" loader={workshopsLoader} element={<WorkshopList />} />
                <Route path="/:id" action={signUpUser} loader={({params}) => workshopLoader(params.id!)} element={<Workshop />} />
                <Route path="/confirmation" element={<Confirmation />} />
            </Route>
    ))


    return <RouterProvider router={router}></RouterProvider>
}

export default App;
