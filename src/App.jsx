import FoodListCard from "./components/FoodListCard.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import {useEffect, useState} from "react";
import * as service from "./services/FoodApiService.js";

export default function App() {
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


    return (
        <MainLayout>
            <div>
                <div className="flex flex-row flex-wrap gap-6 justify-center w-full px-96">
                    {data.map((item, i) => (
                            <FoodListCard key={i} foodName={item.food_name} foodDescription={item.description} price={item.price} />
                        ))}
                </div>
            </div>
        </MainLayout>
    );
}