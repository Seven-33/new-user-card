import axios from 'axios'

const getUser = () => {
  const response = axios.get('https://jsonplaceholder.typicode.com/users')
  return response
}

export { getUser }
