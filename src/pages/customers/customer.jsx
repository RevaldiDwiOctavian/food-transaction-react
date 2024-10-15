import MainLayout from "../../layouts/MainLayout.jsx";
import {DataTable} from "../../components/DataTable.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import * as service from "../../services/CustomerApiService.js";

export default function CustomerPage() {
    const headers = ['No', 'Name', 'Email', 'Phone', 'Address'];
    const [data, setData] = useState([]);

    const fetchCustomerData = async () => {
        try {
            const response = await service.getAllCustomer();
            setData(response);
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    };

    useEffect(() => {
        fetchCustomerData();
    }, []);

    const onDelete = async (id) => {
        try {
            await service.deleteCustomer(id).then(() => {
                fetchFoodData();
            });
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    }

    return (
        <MainLayout>
            <div className="flex flex-col w-full px-96 gap-5">
                <Link to="/customer/create" className="rounded bg-green-500 w-36 p-1 text-white text-center">Create Customer</Link>
                <DataTable header={headers} data={data} type='customer' onDelete={onDelete}/>
            </div>
        </MainLayout>
    );
}