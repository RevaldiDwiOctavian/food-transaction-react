import MainLayout from "../../layouts/MainLayout.jsx";
import FoodForm from "../../components/FoodForm.jsx";

export default function CreateFoodPage() {
    return (
        <MainLayout>
            <div className="flex flex-col min-w-full px-80 gap-32">
                <div className="flex justify-center items-center">
                    <h1 className="text-xl font-bold">Create Food</h1>
                </div>
                <FoodForm />
            </div>
        </MainLayout>
    )
}