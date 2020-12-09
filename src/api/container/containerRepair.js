import axios from 'axios';

export default {
    getTableData(body) {
        return axios({
            url: '/api/container_fix_apply/page',
            method: 'post',
            data: body
        });
    },
    delTableData(body) {
        return axios({
            url: '/api/container_fix_apply',
            method: 'delete',
            data: body
        });
    },
    saveAllData(body) {
        return axios({
            url: '/api/container_fix_apply/save',
            method: 'post',
            data: body
        });
    },
    getTableDataById(id) {
        return axios({
            url: '/api/container_fix_apply/' + id,
            method: 'get'
        });
    },
    applyContainerFix(body) {
        return axios({
            url: '/api/container_fix_apply/approve/apply',
            method: 'post',
            data: body
        });
    },
    cancelContainerFix(body) {
        return axios({
            url: '/api/container_fix_apply/approve/cancel',
            method: 'post',
            data: body
        });
    },
    getContainerFixFee(containerNo) {
        return axios({
            url: '/api/container_fix_apply/selectSaleShipFee/' + containerNo,
            method: 'get'
        });
    }
};
