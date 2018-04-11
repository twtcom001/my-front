import request from '@/utils/request'
export function getAddress(params) {
  return request({
    url: '/api/v2.1/address',
    method: 'get',
    params
  })
}
export function addAddress(data) {
  return request({
    url: '/api/v2.1/address',
    method: 'post',
    data
  })
}
export function editAddress(data) {
  return request({
    url: '/api/v2.1/address/' + data.id,
    method: 'put',
    data
  })
}
export function delAddress(url) {
  return request({
    url,
    method: 'get'
  })
}
export function getAddress_type() {
  return request({
    url: '/api/v2.0/dict/address',
    method: 'get'
  })
}