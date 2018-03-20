import request from '@/utils/request'
export function getDict(params) {
  return request({
    url: '/api/v2.0/dict',
    method: 'get',
    params
  })
}
export function addDict(data) {
  return request({
    url: '/api/v2.0/dict',
    method: 'post',
    data
  })
}
export function editDict(data) {
  return request({
    url: '/api/v2.0/dict/' + data.id,
    method: 'put',
    data
  })
}
export function delDict(url) {
  return request({
    url,
    method: 'get'
  })
}
