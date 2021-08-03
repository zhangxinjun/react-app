import React, { useState } from 'react'
import FormDate from '../../components/FormData'


export default function Login (props) {
  const [formDataList] = useState([
    { type: 'input', name: 'name', label: '姓名', placeholder: '请填写姓名', maxLength: 10, rules: [{ required: true, message: '请填写姓名' }] },
    { type: 'input', name: 'pwd', label: '密码', placeholder: '请填写密码', maxLength: 10, rules: [{ required: true, message: '请填写姓名' }] }])
  const getFormChildValue = (value) => {
    console.log(props, '---');
    login(value)
  }

  const login = (value) => {
    setTimeout(() => {
      sessionStorage.setItem('user', 'demo')
      props.history.push('/home')
    }, 500)
  }

  return (
    <div>
      <FormDate formDataList={formDataList} colwidth={24} getFormChildValue={getFormChildValue}></FormDate>
    </div>
  )
}
