import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_URL;

export async function getAllFood() {
    return await axios.get(`${baseUrl}/food`).then((response) => {
        return response.data;
    });
}

export async function getFoodById(id) {
    return await axios.get(`${baseUrl}/food/${id}`).then((response) => {
        return response.data;
    })
}

export async function postFood(food) {
    return await axios.post(`${baseUrl}/food`, food).then((response) => {
        return response.data;
    })
}

export async function putFood(id, food) {
    return await axios.put(`${baseUrl}/food/${id}`, food).then((response) => {
        return response.data;
    })
}

export async function deleteFood(id) {
    return await axios.delete(`${baseUrl}/food/${id}`).then((response) => {
        return response.data;
    })
}