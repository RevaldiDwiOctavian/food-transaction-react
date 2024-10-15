import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_URL;

export async function getAllCustomer() {
    return await axios.get(`${baseUrl}/customer`).then((response) => {
        return response.data;
    });
}

export async function getCustomerById(id) {
    return await axios.get(`${baseUrl}/customer/${id}`).then((response) => {
        return response.data;
    })
}

export async function postCustomer(customer) {
    return await axios.post(`${baseUrl}/customer`, customer).then((response) => {
        return response.data;
    })
}

export async function putCustomer(id, customer) {
    return await axios.put(`${baseUrl}/customer/${id}`, customer).then((response) => {
        return response.data;
    })
}

export async function deleteCustomer(id) {
    return await axios.delete(`${baseUrl}/customer/${id}`).then((response) => {
        return response.data;
    })
}