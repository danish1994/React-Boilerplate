import config from '../config';

export const GET = async (path) => {
    let res = await fetch(config.BaseURL + path);
    res = await res.json();
    return res;
};

export const POST = async (path, data) => {
    let res = await fetch(config.BaseURL + path, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    res = await res.json();
    return res;
};