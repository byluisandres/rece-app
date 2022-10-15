import ApiService from './ApiService'

const CategoryService = {
    url: '/api/categories',

    async index(context) {
        return ApiService.get(this.url + '?' + ApiService.params(context));
    },
    async store(data) {
        return ApiService.post(this.url, data);
    },
    async show(id) {
        return ApiService.get(this.url + '/' + id);
    },
    async update(data) {
        return ApiService.post(this.url + '/' + data.id, data);
    },
    async delete(id) {
        return ApiService.delete(this.url + '/' + id);
    }

}

export default CategoryService;