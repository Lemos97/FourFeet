import ApiResult from '../components/ApiResult'
import { apibaseurl } from '../config'

export async function progressiveExercise({ progressive }) {
    try {
        const url = apibaseurl;

        const response = await fetch(url + '/exercise?progressive=' + progressive, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({
            //     Name: name,
            //     Age: age,
            //     PredominantSide: side
            // }),
            credentials: 'same-origin'
        });

        const result = await ApiResult.fromFetchResponse(response, { expectedStatusCodes: [200] });

        return result;

    } catch (e) {
        console.error('Progressive API Error', e);
        return new ApiResult(null, e);
    }
}

export async function individualExercise({ difficulty, level }) {
    try {
        const url = apibaseurl;

        const response = await fetch(url + '/exercise?difficulty=' + difficulty + '&level=' + level, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({
            //     Name: name,
            //     Age: age,
            //     PredominantSide: side
            // }),
            credentials: 'same-origin'
        });

        const result = await ApiResult.fromFetchResponse(response, { expectedStatusCodes: [200] });

        return result;

    } catch (e) {
        console.error('Individual API Error', e);
        return new ApiResult(null, e);
    }
}
