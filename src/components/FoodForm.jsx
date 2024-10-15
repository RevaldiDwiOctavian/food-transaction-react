import InputText from "./InputText.jsx";
import {Button} from "flowbite-react";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as service from "../services/FoodApiService.js";

export default function FoodForm(props) {
    const {formValue, isEdit = false} = props;
    const [formData, setFormData] = useState(formValue);
    const navigate = useNavigate();

    useEffect(() => {
        setFormData(formValue);
    }, [formValue]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!isEdit) {
                await service.postFood({
                    foodName: formData.food_name,
                    description: formData.description,
                    price: formData.price,
                });
            } else {
                await service.putFood(formData.food_id, {
                    foodName: formData.food_name,
                    description: formData.description,
                    price: formData.price,
                });
            }
            navigate('/food');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 min-w-full px-80">
            <InputText
                id="food_name"
                name="food_name"
                type="text"
                label="Food Name"
                placeholder="e.g Seblak"
                value={formData?.food_name}
                onChange={handleChange}
            />
            <InputText
                id="description"
                name="description"
                type="text"
                label="Description"
                placeholder="e.g This is a food"
                value={formData?.description}
                onChange={handleChange}
            />
            <InputText
                id="price"
                name="price"
                type="number"
                label="Price"
                placeholder="e.g 15000"
                value={formData?.price}
                onChange={handleChange}
            />
            <div className="flex flex-row gap-5 min-w-full justify-end">
                <Button color="gray">
                    <Link to='/food'>Cancel</Link>
                </Button>
                <Button color="green" type="submit">Submit</Button>
            </div>
        </form>
    );
}