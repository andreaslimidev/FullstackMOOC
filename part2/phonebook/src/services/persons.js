import axios from 'axios'
const url = 'http://localhost:3001/persons/'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(url, newPerson)
    return request.then(response => response.data)
}

const remove = id => {
    const request = axios.delete(url.concat(id))
    return request.then(response => response.data)
}

const put = (newPerson, id) => {
    const request = axios.put(url.concat(id), newPerson)
    return request.then(res => res.data)
}


export default { create, remove, getAll, put }