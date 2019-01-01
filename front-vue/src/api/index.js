/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
const BASE_URL = '/api'
// 1、获取验证码
export const getVerificationCode = () => ajax(BASE_URL + 'user/getVerificationCode')
// 2、获取手机短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + 'user/sendcode', {phone})
// 2、密码登录
export const reqpwdLogin = (name, password, captcha) => ajax(BASE_URL + 'user/Login', {name, password, captcha}, 'POST')
