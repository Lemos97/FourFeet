import ApiResult from '../components/ApiResult'
import { apibaseurl } from '../../config'

export async function login({ name, age, side }) {
    try {
        const url = apibaseurl;

        const response = await fetch(url + '/login?' + name + '&' + age + '&' + side, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: name,
                Age: age,
                PredominantSide: side
            }),
            credentials: 'same-origin'
        });

        const result = await ApiResult.fromFetchResponse(response, { expectedStatusCodes: [200] });

        return result;

    } catch (e) {
        console.error('Login API Error', e);
        return new ApiResult(null, e);
    }
}
