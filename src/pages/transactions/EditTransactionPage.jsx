import MainLayout from "../../layouts/MainLayout.jsx";
import TransactionForm from "../../components/TransactionForm.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as service from "../../services/TransactionApiService.js";
import * as foodService from "../../services/FoodApiService.js";
import * as util from "../../utils/Utility.js";
import * as customerService from "../../services/CustomerApiService.js";

export default function EditTransactionPage() {
    const {id} = useParams();
    const [data, setdata] = useState();
    const [foodData, setFoodData] = useState([]);
    const [customerData, setCustomerData] = useState([]);

    const navigate = useNavigate();

    const fetchTransactionData = async () => {
        try {
            const response = await service.getTransactionById(id);
            setdata(response);
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    };

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

    useEffect(() => {
        fetchTransactionData()
        fetchFoodData();
        fetchCustomerData();
    }, []);

    const handleSubmit = async (formData) => {
        try {
            await service.putTransaction(id, {
                foodId: parseInt(formData.food_id),
                quantity: parseInt(formData.quantity),
            }).then(() => {
                navigate('/transaction');
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <MainLayout>
            <div className="flex flex-col min-w-full px-80 gap-32">
                <div className="flex justify-center items-center">
                    <h1 className="text-xl font-bold">Update Transaction</h1>
                </div>
                <TransactionForm formValue={data} customerData={customerData} foodData={foodData} onSubmit={handleSubmit}/>
            </div>
        </MainLayout>
    )
}