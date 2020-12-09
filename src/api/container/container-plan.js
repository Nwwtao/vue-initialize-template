import axios from 'axios';
export default {
    getTableData (body) {
        return axios({
            url: '/api/container_plan/pageWithData',
            method: 'post',
            data: body
        });
    },
    getTableDataByStauts (body) {
        return axios({
            url: '/api/container_plan/page',
            method: 'post',
            data: body
        });
    },
    addTableData (body) {
        return axios({
            url: '/api/container_plan/save',
            method: 'post',
            data: body
        });
    },
    containerPlanDetails (body) {
        return axios({
            url: '/api/container_plan_details/page',
            method: 'post',
            data: body
        });
    },
    containerPlanExoprt (body) {
        return axios({
            url: '/api/container_plan/download',
            method: 'post',
            data: body,
            responseType: 'blob'
        });
    },
    deletePlanTableData (body) {
        return axios({
            url: '/api/container_plan/deleteMore',
            method: 'delete',
            data: body
        });
    },
    applyContainerPlan(body) {
        return axios({
            url: '/api/container_plan/approve/apply',
            method: 'post',
            data: body
        });
    },
    cancelContainerPlan(body) {
        return axios({
            url: '/api/container_plan/approve/cancel',
            method: 'post',
            data: body
        });
    }
};
