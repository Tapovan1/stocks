import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

// Stock Items API
export const getStockItems = () => api.get('/stock')
export const getStockItem = (id) => api.get(`/stock/${id}`)
export const createStockItem = (data) => api.post('/stock', data)
export const updateStockItem = (id, data) => api.put(`/stock/${id}`, data)
export const deleteStockItem = (id) => api.delete(`/stock/${id}`)

export default api