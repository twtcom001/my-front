import request from '@/utils/request'
export function getUser(params) {
  return request({
    url: '/api/v2.0/users',
    method: 'get',
    params
  })
}
export function addUser(data) {
  return request({
    url: '/api/v2.0/users',
    method: 'post',
    data
  })
}
export function editUser(data) {
  return request({
    url: '/api/v2.0/users/' + data.id,
    method: 'put',
    data
  })
}
export function delUser(url) {
  return request({
    url,
    method: 'get'
  })
}
