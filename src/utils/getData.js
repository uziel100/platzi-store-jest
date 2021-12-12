const getData = (api) => {
	return fetch(api)
        .then((res) => res.json())
        .then((response) => response)
        .catch((error) => error);
};


export {
    getData
}