import MainLayout from "../../layouts/MainLayout.jsx";
import TransactionForm from "../../components/TransactionForm.jsx";
import {useEffect, useState} from "react";
import * as foodService from "../../services/FoodApiService.js";
import * as util from "../../utils/Utility.js";
import * as customerService from "../../services/CustomerApiService.js";
import * as transactionService from "../../services/TransactionApiService.js";
import {useNavigate} from "react-router-dom";

export default function CreateTransactionPage() {
    const [foodData, setFoodData] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const navigate = useNavigate();

    const fetchFoodData = async () => {
        try {
            const response = await foodService.getAllFood();
            const formattedFood = response.map((item) =>
                util.convertToSelectionObject(item.food_id, item.food_name + " - " + item.price)
            );
            setFoodData(formattedFood);
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    };

    const fetchCustomerData = async () => {
        try {
            const response = await customerService.getAllCustomer();
            const formattedCustomer = response.map((item) =>
                util.convertToSelectionObject(item.customer_id, item.first_name + " " + item.last_name)
            );
            setCustomerData(formattedCustomer);
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
    };

    const handleSubmit = async (formData) => {
        try {
            console.log(formData)
            await transactionService.postTransaction({
                customerId: parseInt(formData.customer_id),
                foodId: parseInt(formData.food_id),
                quantity: parseInt(formData.quantity),
            }).then(() => {
                navigate('/transaction');
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    useEffect(() => {
        fetchFoodData();
        fetchCustomerData();
    }, []);
    return (
        <MainLayout>
            <div className="flex flex-col min-w-full px-80 gap-32">
                <div className="flex justify-center items-center">
                    <h1 className="text-xl font-bold">Create Transaction</h1>
                </div>
                <TransactionForm customerData={customerData} foodData={foodData} onSubmit={handleSubmit}/>
            </div>
        </MainLayout>
    )
}