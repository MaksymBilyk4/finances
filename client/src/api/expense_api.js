import {$api} from "./index";
import {API, EXPENSE_ENTITY_REQ_URL} from "./API_URLS";


export const findAllPageable = async (number, size) => {
    return await $api.get(API.MAPPING.getAllPageable(EXPENSE_ENTITY_REQ_URL, number, size));
};

export const findAll = async () => {
    return await $api.get(API.MAPPING.getAll(EXPENSE_ENTITY_REQ_URL));
}

export const findById = async(id) => {
    return await $api.get(API.MAPPING.getById(id, EXPENSE_ENTITY_REQ_URL));
}

export const create = async (day) => {
    return await $api.post(API.MAPPING.create(EXPENSE_ENTITY_REQ_URL), day);
}

export const update = async (updatedDay, id) => {
    return await $api.put(API.MAPPING.updateById(id, EXPENSE_ENTITY_REQ_URL), updatedDay);
}

export const deleteById = async (id) => {
    return await $api.delete(API.MAPPING.deleteById(id, EXPENSE_ENTITY_REQ_URL));
}

export const findByDate = async (date) => {
    return await $api.get(API.MAPPING.getByDate(date, EXPENSE_ENTITY_REQ_URL));
}

export const findByPeriod = async (start, end) => {
    return await $api.get(API.MAPPING.getByPeriod(start, end, EXPENSE_ENTITY_REQ_URL))
}