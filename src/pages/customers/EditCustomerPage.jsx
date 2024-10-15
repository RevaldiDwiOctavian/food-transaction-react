import MainLayout from "../../layouts/MainLayout.jsx";
import CustomerForm from "../../components/CustomerForm.jsx";
import {useNavigate, useParams} from "react-router-dom";
import * as service from "../../services/CustomerApiService.js";
import {useEffect, useState} from "react";


export default function EditCustomerPage() {
    const {id} = useParams();
    const [data, setdata] = useState();

    const navigate = useNavigate();

    const fetchFoodData = async () => {
        try {
            const response = await service.getCustomerById(id);
            setdata(response);
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    };

    useEffect(() => {
        fetchFoodData();
    }, []);

    const handleSubmit = async (formData) => {
        try {
            await service.putCustomer(id, {
                firstName: formData.first_name,
                lastName: formData.last_name,
                email: formData.email,
                phoneNumber: formData.phone_number,
                address: formData.address,
            }).then(() => {
                navigate('/customer');
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    
    return (
        <MainLayout>
            <div className="flex flex-col min-w-full px-80 gap-32">
                <div className="flex justify-center items-center">
                    <h1 className="text-xl font-bold">Edit Customer</h1>
                </div>
                <CustomerForm onSubmit={handleSubmit} formValue={data}/>
            </div>
        </MainLayout>
    )
}