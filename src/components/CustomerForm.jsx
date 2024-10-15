import InputText from "./InputText.jsx";
import {Button} from "flowbite-react";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function CustomerForm(props) {
    const {formValue, onSubmit} = props;
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
            <InputText
                id="firstName"
                name="first_name"
                type="text"
                label="First Name"
                placeholder="e.g John"
                value={formData?.first_name}
                onChange={handleChange}
            />
            <InputText
                id="lastName"
                name="last_name"
                type="text"
                label="Last Name"
                placeholder="e.g Doe"
                value={formData?.last_name}
                onChange={handleChange}
            />
            <InputText
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="e.g johndoe@example.com"
                value={formData?.email}
                onChange={handleChange}
            />
            <InputText
                id="phone"
                name="phone_number"
                type="text"
                label="Phone Number"
                placeholder="e.g +621234567899"
                value={formData?.phone_number}
                onChange={handleChange}
            />
            <InputText
                id="address"
                name="address"
                type="text"
                label="Address"
                placeholder="e.g St. Example, example, 40002"
                value={formData?.address}
                onChange={handleChange}
            />
            <div className="flex flex-row gap-5 min-w-full justify-end">
                <Button color="gray"><Link to='/customer'>Cancel</Link></Button>
                <Button type="submit" color="green">Submit</Button>
            </div>
        </form>
    );
}