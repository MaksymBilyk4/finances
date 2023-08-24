import {$api} from "./index";
import {API, SALARY_ENTITY_REQ_URL} from "./API_URLS";

export const findAll = async ()  => {
    return await $api.get(API.MAPPING.findAll(SALARY_ENTITY_REQ_URL));
}

export const findById = async (id) => {
    return await $api.get(API.MAPPING.getById(id, SALARY_ENTITY_REQ_URL));
}

export const create = async (salary) => {
    return await $api.post(API.MAPPING.create(SALARY_ENTITY_REQ_URL), salary);
}

export const deleteById = async (id) => {
    return await $api.delete(API.MAPPING.deleteById(id, SALARY_ENTITY_REQ_URL));
}

export const findByPeriod = async (start, end) => {
    return await $api.get(API.MAPPING.getByPeriod(start, end, SALARY_ENTITY_REQ_URL))
}