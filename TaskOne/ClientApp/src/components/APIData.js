export function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST', 
    }).then(response => response.json()) 
}

export function deleteData(url) {
    return fetch(url,
        {
            cache: 'no-cache', 
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                //'content-type': 'application/json'
            },
            method: 'DELETE',
        }
    ).then(response => {
        if (response.status != 200)
            return null;
        else 
            return response.json();
    }) // parses response to JSON
}


//// PUT: api/Customers/5  route id body 
export function putData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'PUT',
    }).then(response => {
        if (response.status == 204)
            return true;
        else return false;
    })
}


export function getDataById(url) {
    return fetch(url, {
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
        },
        method: 'GET',
    }).then(response => {
        if (response.status == 200)
            return response.json();
        else return null;
    })
}

export function getData(url) {
    return fetch(url, {
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
        },
        method: 'GET',
    }).then(response => response.json());
}