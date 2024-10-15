import MainLayout from "../../layouts/MainLayout.jsx";
import FoodForm from "../../components/FoodForm.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as service from "../../services/FoodApiService.js";

export default function EditFoodPage() {
    const {id} = useParams();
    const [data, setdata] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await service.getFoodById(id);
                setdata(response);
            } catch (error) {
                console.error('Error fetching food data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFoodData();
    }, [id]);

    if (isLoading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center min-h-screen">
                    <h2>Loading...</h2>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="flex flex-col min-w-full px-80 gap-32">
                <div className="flex justify-center items-center">
                    <h1 className="text-xl font-bold">Edit Food</h1>
                </div>
                <FoodForm formValue={data}/>
            </div>
        </MainLayout>
    );


    return (
        <MainLayout>
            <div className="flex flex-col min-w-full px-80 gap-32">
                <div className="flex justify-center items-center">
                    <h1 className="text-xl font-bold">Edit Food</h1>
                </div>
                <FoodForm formValue={data}/>
            </div>
        </MainLayout>
    )
}