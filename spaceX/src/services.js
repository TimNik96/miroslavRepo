import axios from 'axios'

export const getAllLaunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches')
}