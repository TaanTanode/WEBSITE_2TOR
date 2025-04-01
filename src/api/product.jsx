import axios from "axios";

export const createProduct = async (token, form) => {
    return axios.post('https://client-2-tor-api.vercel.app/api/product', form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const listProduct = async (count = 20) => {
    return axios.get('https://client-2-tor-api.vercel.app/api/products/' + count)
}

export const readProduct = async (token, id) => {
    return axios.get('https://client-2-tor-api.vercel.app/api/product/' + id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteProduct = async (token, id) => {
    return axios.delete('https://client-2-tor-api.vercel.app/api/product/' + id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateProduct = async (token, id, form) => {
    return axios.put('https://client-2-tor-api.vercel.app/api/product/' + id, form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const uploadFiles = async (token, form) => {
    // console.log('form API frontend', form)
    return axios.post('https://client-2-tor-api.vercel.app/api/images', {
        image: form
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const removeFiles = async (token, public_id) => {
    // console.log('form API frontend', form)
    return axios.post('https://client-2-tor-api.vercel.app/api/removeimages', {
        public_id
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const searchFilters = async (arg) => {
    return axios.post('https://client-2-tor-api.vercel.app/api/search/filters', arg)
}


export const listProductBy = async (sort, order, limit) => {
    return axios.post('https://client-2-tor-api.vercel.app/api/productby',
        {
            sort,
            order,
            limit,
        }
    )
}