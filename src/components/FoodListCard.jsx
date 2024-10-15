import { Card } from "flowbite-react";

export default function FoodListCard(props) {
    const {foodName, foodDescription, price} = props;
    return (
        <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {foodName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {foodDescription}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                ${price}
            </p>
        </Card>
    );
}