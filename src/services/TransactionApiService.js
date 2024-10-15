import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_URL;

export async function getAllTransaction() {
    return await axios.get(`${baseUrl}/transaction`).then((response) => {
        return response.data;
    });
}

export async function getTransactionById(id) {
    return await axios.get(`${baseUrl}/transaction/${id}`).then((response) => {
        return response.data;
    })
}

export async function postTransaction(transaction) {
    return await axios.post(`${baseUrl}/transaction`, transaction).then((response) => {
        return response.data;
    })
}

export async function putTransaction(id, transaction) {
    return await axios.put(`${baseUrl}/transaction/${id}`, transaction).then((response) => {
        return response.data;
    })
}

export async function deleteTransaction(id) {
    return await axios.delete(`${baseUrl}/transaction/${id}`).then((response) => {
        return response.data;
    })
}