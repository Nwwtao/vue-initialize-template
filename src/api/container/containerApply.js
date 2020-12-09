import axios from 'axios';
export default {
    applyContainerApply(body) {
        return axios({
            url: '/api/container_apply/approve/apply',
            method: 'post',
            data: body
        });
    },
    getTableData (body) {
        return axios({
            url: '/api/container_apply/page',
            method: 'post',
            data: body
        });
    },
    selectByBusinessNo(body) {
        return axios({
            url: '/api/container_apply/select_by_business_no/' + body,
            method: 'get'
        });
    },
    cancelContainerApply(body) {
        return axios({
            url: '/api/container_apply/approve/cancel',
            method: 'post',
            data: body
        });
    },
    saveApplyData (body) {
        return axios({
            url: '/api/container_apply/save',
            method: 'post',
            data: body
        });
    },
    selectContainerApplyDetails(body) {
        return axios({
            url: '/api/container_apply_detail/select',
            method: 'post',
            data: body
        });
    },
    deleteTableData (body) {
        return axios({
            url: '/api/container_apply',
            method: 'delete',
            data: body
        });
    },
    singleQuery (id) {
        return axios({
            url: '/api/container_apply/' + id,
            method: 'get'
        });
    },
    applyDetailsQuery(body) {
        return axios({
            url: '/api/container_apply_detail/select',
            method: 'post',
            data: body
        });
    },
    excelExport(body) {
        return axios({
            url: '/api/container_apply/download',
            method: 'post',
            data: body,
            responseType: 'blob'
        });
    },
    getDataByOrderNo(body) {
        return axios({
            url: '/api/container_apply/select/OrderNo',
            method: 'post',
            data: body,
        });
    },
    getDocSource() {
        return axios({
            url: '/api/container_apply/getDocSource',
            method: 'get'
        });
    }
};
