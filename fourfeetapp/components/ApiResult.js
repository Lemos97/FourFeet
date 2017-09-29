async function getDataFromResponse(res) {
    try {
        // switch (res.headers['Content-Type']) {
        //     case 'application/json':
        const data = await res.json();

        return data;

        // }

        // return null;
    } catch (e) {
        console.warn('Unexpected error getting data', e);
        return null;
    }
}

export default class ApiResult {
    /**
     *
     * @param {<T>} value
     * @param {Error} error
     */
    constructor(value = null, error = null) {
        if (value != null && error != null) {
            throw new TypeError('Use either value or error, not both');
        }

        this._value = value;
        this._error = error;
    }

    /**
     *
     * @param {Response} res
     */
    static async fromFetchResponse(res, { expectedStatusCodes = [200], expectedContentType = 'application/json' } = {}) {

        if (!res.ok || expectedStatusCodes.indexOf(res.status) === -1) {
            console.log('Response NOK or status', res.status, 'not in expected list:', expectedStatusCodes)
            const err = new Error("API Error");

            err.statusCode = res.status;
            err.statusText = res.statusText;

            err.data = await getDataFromResponse(res, expectedContentType);

            return new ApiResult(null, err);
        }

        return new ApiResult(
            await getDataFromResponse(res),
            null
        );
    }

    get value() {
        if (this.hasError) {
            throw new Error('Error occurred, see error property.');
        }

        return this._value;
    }

    get error() {
        return this._error;
    }

    get isSuccess() {
        return this._error == null;
    }

    get hasError() {
        return this._error != null;
    }

    valueOrElse(onError) {
        if (this.hasError) {
            return onError();
        }

        return this._value;
    }
}
