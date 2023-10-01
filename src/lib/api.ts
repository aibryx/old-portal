export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const makeRequest = async (
	url: string | URL,
	method: string,
	headers?: undefined | HeadersInit,
	body?: undefined | string
) => {
	return await fetch(url, {
		method,
		headers,
		body,
		credentials: 'include',
	});
};

export const encodeEmpty = () => {
	return { headers: undefined, body: undefined };
};

export const encodeJson = (record: object) => {
	return { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) };
};

export const makeWriteRequest = async (
	apiUrl: string,
	options: { headers: undefined; body: undefined } | { headers: HeadersInit; body: string },
	method = 'POST'
) => {
	const url = `${API_BASE_URL}/${apiUrl}`;
	const { headers, body } = options;
	return await makeRequest(url, method, headers, body);
};

export const buildUrl = (apiUrl: string, record: object) => {
	const url = new URL(`${API_BASE_URL}/${apiUrl}`);
	Object.entries(record).forEach(([field, value]) => url.searchParams.set(field, value));
	return url;
};

const makeReadRequest = async (apiUrl: string, record: object) => {
	const url = buildUrl(apiUrl, record);
	return await makeRequest(url, 'GET');
};
