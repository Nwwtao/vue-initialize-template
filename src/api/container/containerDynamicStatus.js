import axios from 'axios';

export default {
    // ---------商务模块接口--------
    selectPage (query) {
        return axios({
            url: '/api/container_dynamic_status/page',
            method: 'post',
            data: query
        });
    },
    insertContainerRecord (body) {
        return axios({
            url: '/api/container_dynamic_status',
            method: 'post',
            data: body
        });
    },
    deleteContainerRecords (body) {
        return axios({
            url: '/api/container_dynamic_status',
            method: 'delete',
            data: body
        });
    },
    selectContainerRecordByPrimaryKey(id) {
        return axios({
            url: '/api/container_dynamic_status/' + id,
            method: 'get'
        });
    },
    saveContainerRecord (body) {
        return axios({
            url: '/api/container_dynamic_status/save',
            method: 'post',
            data: body
        });
    },
    exportTemplate(body) {
        return axios({
            url: '/api/container_dynamic_status/exportTemp',
            method: 'post',
            data: body,
            responseType: 'blob'
        });
    },
    selectHistoryPage (query) {
        return axios({
            url: '/api/container_dynamic_status_history/page',
            method: 'post',
            data: query
        });
    },
};
