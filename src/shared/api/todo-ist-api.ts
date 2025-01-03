import axios from 'axios'

const baseURL =  'https://api.todoist.com/rest/v2/';

export const todoIstApi = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
}});
