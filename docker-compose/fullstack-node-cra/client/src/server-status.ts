import axios from 'axios';

const getApiHttp = () => {

    let config = {
        baseURL: 'http://localhost:9000/',
        timeout: 60 * 1 * 1000, // 1 minute
        withCredentials: true
    }

    return axios.create(config);
}

export const getServerStatus = async (): Promise<any> => {

    try {
        const request = getApiHttp()

        const contents = await request({
            method: 'GET',
            url: `status`
        });

        const serverStatus: boolean = (contents && contents.data) ? true : false;

        console.log(serverStatus);

        return serverStatus;

    } catch (err) {
        console.log(err);
    }

}