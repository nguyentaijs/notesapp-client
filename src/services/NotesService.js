import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get("/notes");
}

const get = (id) => {
    return httpClient.get(`/notes/${id}`);
}

const update = (note) => {
    return httpClient.put(`/notes`, note);
}

const remove = (id) => {
    return httpClient.delete(`/notes/${id}`);
}

const create = (note) => {
    return httpClient.post("/notes", note);
}

export default {getAll, get, create, remove, update};