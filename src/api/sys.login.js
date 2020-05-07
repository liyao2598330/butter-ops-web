import request from '@/plugin/axios'

export function accountLogin (data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}
