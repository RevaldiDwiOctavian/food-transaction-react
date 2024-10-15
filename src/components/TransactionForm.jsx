import InputText from "./InputText.jsx";
import {Button} from "flowbite-react";
import {Link} from "react-router-dom";
import SelectInput from "./SelectInput.jsx";
import {useEffect, useState} from "react";

export default function TransactionForm(props) {
    const {formValue, foodData, customerData, isUpdate, onSubmit} = props;
    const [formData, setFormData] = useState(formValue);


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

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 min-w-full px-80">
            <SelectInput
                id="customer"
                name="customer_id"
                label="Customer"
                data={customerData}
                disabled={isUpdate}
                value={formData?.customer_id}
                onChange={handleChange}
            />
            <SelectInput
                id="food"
                name="food_id"
                label="Food"
                data={foodData}
                value={formData?.food_id}
                onChange={handleChange}
            />
            <InputText
                id="quantity"
                name="quantity"
                type="number"
                label="Quantity"
                placeholder="e.g 5"
                value={formData?.quantity}
                onChange={handleChange}
            />
            <div className="flex flex-row gap-5 min-w-full justify-end">
                <Button color="gray"><Link to='/transaction'>Cancel</Link></Button>
                <Button color="green" type="submit">Submit</Button>
            </div>
        </form>
    );
}
