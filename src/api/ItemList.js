import api from '.'

export const getAll = async () => {
  const response = await api.get('/product')
  return response.data.data.data
}
export const create = async (dataProduct) => {
  const response = await api.post('/product', dataProduct)
  return response.data.data
}

export const destroy  = async (id) => {
  await api.delete(`/product/${id}`)
  return true;
}
