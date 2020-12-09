import axios from 'axios';

export default {
    boxDetail(body) {
        return axios({
            url: 'api/container_lease/save',
            method: 'post',
            data: body
        });
    },
    getBoxInformation (body, cancelToken) {
        return axios({
            url: 'api/container_lease/page',
            method: 'post',
            data: body,
            cancelToken
        });
    },
    getBoxDetailInformation (body) {
        return axios({
            url: 'api/container_lease_rate/page',
            method: 'post',
            data: body
        });
    },
    deleteBoxInformation (lCord) {
        return axios({
            url: 'api/container_lease/' + lCord,
            method: 'delete'
        });
    },
    getOneBoxInformation (lCord) {
        return axios({
            url: 'api/container_lease/' + lCord,
            method: 'get'
        });
    },
    deleteMoreInfomation(body) {
        return axios({
            url: '/api/container_lease/deleteMore',
            method: 'delete',
            data: body
        });
    },
    getDetailsChild(body) {
        return axios({
            url: '/api/container_lease_rate_detail/page',
            method: 'post',
            data: body
        });
    }

};
