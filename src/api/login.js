import request from '@/utils/request'
export function login(username, password) {
  return request({
    url: '/api/v2.0/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
export function getInfo(token) {
  return request({
    url: '/api/v2.0/info',
    method: 'get',
    params: { token }
  })
}
export function logout() {
  return request({
    url: '/api/v2.0/logout',
    method: 'post'
  })
}
