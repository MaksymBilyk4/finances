export const DAY_ENTITY_REQ_URL = "/days";
export const EXPENSE_ENTITY_REQ_URL = "/expenses";
export const EMPLOYER_ENTITY_REQ_URL = "/employers";
export const SALARY_ENTITY_REQ_URL = "/salary";

export const API = {
    MAPPING: {
        findAll: (entity) => `${entity}`,
        getAll: (entity) => `${entity}/all`,
        getAllPageable: (entity, pageNumber, pageSize) => `${entity}?pageNumber=${pageNumber}&pageSize=${pageSize}`,
        getById: (id, entity) => `${entity}/${id}`,
        create: (entity) => `${entity}`,
        deleteById: (id, entity) => `${entity}/${id}`,
        updateById: (id, entity) => `${entity}/${id}`,
        getByDate: (date, entity) => `${entity}/${date}`,
        getByPeriod: (start, end, entity) => `${entity}/date?start=${start}&end=${end}`
    },
    EMPLOYER: {
        findByName: (name) => `${EMPLOYER_ENTITY_REQ_URL}/?name=${name}`
    }
}