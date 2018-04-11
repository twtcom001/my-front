import request from '@/utils/request'
export function getPlant(params) {
  return request({
    url: '/api/v2.1/plant',
    method: 'get',
    params
  })
}
export function addPlant(data) {
  return request({
    url: '/api/v2.1/plant',
    method: 'post',
    data
  })
}
export function editPlant(data) {
  return request({
    url: '/api/v2.1/plant/' + data.id,
    method: 'put',
    data
  })
}
export function delPlant(url) {
  return request({
    url,
    method: 'get'
  })
}
export function getPlant_type() {
  return request({
    url: '/api/v2.0/dict/plant',
    method: 'get'
  })
}