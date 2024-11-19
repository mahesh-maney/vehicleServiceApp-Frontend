import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/vehicle-service';

export const fetchRecords = (queryParams) => {
    return axios.get(`${BASE_URL}/search`, { params: queryParams });
};

export const addRecord = (data) => {
    return axios.post(BASE_URL, data);
};

export const updateRecord = (id, data) => {
    return axios.put(`${BASE_URL}/${id}`, data);
};

export const deleteRecord = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};
