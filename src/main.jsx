import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import FoodPage from "./pages/foods/food.jsx";
import CustomerPage from "./pages/customers/customer.jsx";
import TransactionPage from "./pages/transactions/transaction.jsx";
import CreateCustomerPage from "./pages/customers/CreateCustomerPage.jsx";
import EditCustomerPage from "./pages/customers/EditCustomerPage.jsx";
import CreateFoodPage from "./pages/foods/CreateFoodPage.jsx";
import App from "./App.jsx";
import CreateTransactionPage from "./pages/transactions/CreateTransactionPage.jsx";
import EditTransactionPage from "./pages/transactions/EditTransactionPage.jsx";
import EditFoodPage from "./pages/foods/EditFoodPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/food',
        element: <FoodPage />,
    },
    {
        path: '/food/create',
        element: <CreateFoodPage />,
    },
    {
        path: '/food/edit/:id',
        element: <EditFoodPage />,
    },
    {
        path: '/customer',
        element: <CustomerPage />,
    },
    {
        path: '/customer/create',
        element: <CreateCustomerPage />
    },
    {
        path: '/customer/edit/:id',
        element: <EditCustomerPage />
    },
    {
        path: '/transaction',
        element: <TransactionPage />,
    },
    {
        path: '/transaction/create',
        element: <CreateTransactionPage />,
    },
    {
        path: '/transaction/edit/:id',
        element: <EditTransactionPage />,
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
