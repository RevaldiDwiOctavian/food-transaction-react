import MainLayout from "../../layouts/MainLayout.jsx";
import CustomerForm from "../../components/CustomerForm.jsx";
import {useNavigate} from "react-router-dom";
import * as service from "../../services/CustomerApiService.js";

export default function CreateCustomerPage() {
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        try {
            console.log(formData)
            await service.postCustomer({
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
                    <h1 className="text-xl font-bold">Create Customer</h1>
                </div>
                <CustomerForm onSubmit={handleSubmit} />
            </div>
        </MainLayout>
    )
}