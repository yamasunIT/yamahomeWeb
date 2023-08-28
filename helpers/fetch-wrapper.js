export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method: method
        };
        if (body) {
            requestOptions.headers = {'Content-Type': 'application/json'};
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(url, requestOptions).then(handleResponse);
    }
}

async function handleResponse(response) {
    // check for error response
    if (!response.ok) {
        if ([401, 403].includes(response.status)) {
        }

        // get error message from body or default to response status
        const error = response.statusText;
        return Promise.reject(error);
    } else {
        const data = await response.json();
        return data;
    }
}
