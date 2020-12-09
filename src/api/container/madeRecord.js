import axios from 'axios';

export default {
    boxDetail(body) {
        return axios({
            url: '/api/container_create/save',
            method: 'post',
            data: body
        });
    },
    getBoxInformation (body) {
        return axios({
            url: '/api/container_create/page',
            method: 'post',
            data: body
        });
    },
    getBoxDetailInformation (body) {
        return axios({
            url: '/api/container_create_fee/page',
            method: 'post',
            data: body
        });
    },
    deleteBoxInformation (lCord) {
        return axios({
            url: '/api/container_create/' + lCord,
            method: 'delete'
        });
    },
    getOneBoxInformation (lCord) {
        return axios({
            url: 'api/container_create/' + lCord,
            method: 'get'
        });
    },
    deleteMoreInfomation(body) {
        return axios({
            url: '/api/container_create/deleteMore',
            method: 'delete',
            data: body
        });
    }
};
