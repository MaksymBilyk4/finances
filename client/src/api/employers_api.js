import {$api} from "./index";
import {API, EMPLOYER_ENTITY_REQ_URL} from "./API_URLS";

export const findAll = async () => {
    return await $api.get(API.MAPPING.findAll(EMPLOYER_ENTITY_REQ_URL));
}

export const findById = async (id) => {
    return await $api.get(API.MAPPING.getById(id, EMPLOYER_ENTITY_REQ_URL))
}

export const create = async (employer) => {
    return await $api.post(API.MAPPING.create(EMPLOYER_ENTITY_REQ_URL), employer);
}

export const deleteById = async (id) => {
    return await $api.delete(API.MAPPING.deleteById(id, EMPLOYER_ENTITY_REQ_URL))
}

export const findByName = async (name) => {
    return await $api.get(API.EMPLOYER.findByName(name));
}