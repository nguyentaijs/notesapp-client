import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get("/notes");
}

const get = (id) => {
    return httpClient.get(`/notes/${id}`);
}

const remove = (id) => {
    return httpClient.delete(`/notes/${id}`);
}

const create = (data) => {
    return httpClient.post("/notes", data);
}

export default {getAll, get, create, remove};