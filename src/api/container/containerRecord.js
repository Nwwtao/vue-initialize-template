import axios from 'axios';

export default {
    // ---------商务模块接口--------
    selectPage (query) {
        return axios({
            url: '/api/container_base/page',
            method: 'post',
            data: query
        });
    },
    insertContainerRecord (body) {
        return axios({
            url: '/api/container_base',
            method: 'post',
            data: body
        });
    },
    deleteContainerRecords (body) {
        return axios({
            url: '/api/container_base',
            method: 'delete',
            data: body
        });
    },
    selectContainerRecordByPrimaryKey(id) {
        return axios({
            url: '/api/container_base/' + id,
            method: 'get'
        });
    },
    saveContainerRecord (body) {
        return axios({
            url: '/api/container_base/save',
            method: 'post',
            data: body
        });
    },
    exportTemplate(body) {
        return axios({
            url: '/api/container_base/excel',
            method: 'post',
            data: body,
            responseType: 'blob'
        });
    },
    exportExcelData(body) {
        return axios({
            url: '/api/container_base/excelData',
            method: 'post',
            data: body,
            responseType: 'blob'
        });
    },
    updateBatchRent(body) {
        return axios({
            url: '/api/container_base/updateBatchRent',
            method: 'post',
            data: body
        });
    },
    exportFeeData(body) {
        return axios({
            url: '/api/container_base/exportContainerLeaseInfo',
            method: 'post',
            data: body,
            responseType: 'blob'
        });
    }
};
