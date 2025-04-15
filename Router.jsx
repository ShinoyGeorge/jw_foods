import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import App from './src/pages/App.jsx';
import Category from './src/pages/Category.jsx';
import ProductDetails from './src/pages/ProductDetails.jsx';
import Admin from './src/pages/Admin.jsx';

const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path="/" element={<App />} />
        <Route path="top-seller" element={<Category />} />
        <Route path="top-seller/:id" element={<ProductDetails />} />
        <Route path="admin" element={<Admin />} />
    </Route>
);

const router = createBrowserRouter(routeDefinitions);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
