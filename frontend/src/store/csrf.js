import Cookies from 'js-cookie';


export const csrfFetch = async (url, options={}) => {
    options.method = options.method || 'GET';
    options.headers = options.headers || {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['content-type'] = options.headers['content-type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    }

    const res = await window.fetch(url, options);
    if (res.status >= 400) throw res;
    return res;
};

export const restoreCSRF = () => {
    return csrfFetch('/api/csrf/restore')
};


