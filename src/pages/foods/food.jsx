import MainLayout from "../../layouts/MainLayout.jsx";
import {Link} from "react-router-dom";
import {DataTable} from "../../components/DataTable.jsx";
import {useEffect, useState} from "react";
import * as service from "../../services/FoodApiService.js";

export default function FoodPage() {
    const headers = ['No', 'Food Name', 'Description', 'Price'];
    const [data, setData] = useState([]);

    const fetchFoodData = async () => {
        try {
            const response = await service.getAllFood();
            setData(response);
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    };

    useEffect(() => {
        fetchFoodData();
    }, []);

    const onDelete = async (id) => {
        try {
            await service.deleteFood(id).then(() => {
                fetchFoodData();
            });
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    }

    return (
        <MainLayout>
            <div className="flex flex-col w-full px-96 gap-5">
                <Link to="/food/create" className="rounded bg-green-500 w-36 p-1 text-white text-center">Create
                    Food</Link>
                <DataTable header={headers} data={data} type='food' onDelete={onDelete}/>
            </div>
        </MainLayout>
    );
}