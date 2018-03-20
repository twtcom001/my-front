import request from '@/utils/request'
export function getAccount(params) {
  return request({
    url: '/api/v2.0/account',
    method: 'get',
    params
  })
}
export function addAccount(data) {
  return request({
    url: '/api/v2.0/account',
    method: 'post',
    data
  })
}
export function editAccount(data) {
  return request({
    url: '/api/v2.0/account/' + data.id,
    method: 'put',
   	data
  })
}
export function delAccount(url) {
  return request({
    url,
    method: 'get'
  })
}
