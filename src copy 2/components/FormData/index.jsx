import React from 'react'
import { Space, Form, Input, Button, Select, DatePicker, Radio, Row, Col } from 'antd'

const { Option } = Select
const { TextArea } = Input
export default function FormDate (props) {
  const { formDataList, deitDat, getFormChildValue, addModalCancel, children, formDirection, colwidth, tailLayout } = props
  const [addAndEditFromRef] = Form.useForm()
  addAndEditFromRef.setFieldsValue(deitDat)
  console.log(props);
  // 校验通过执行
  const onFinishSubmit = (values) => {
    console.log(values, '校验通过的values')
    getFormChildValue(values)

  };
  // 表单重置事件
  const onReset = () => {
    addAndEditFromRef.resetFields();
    addModalCancel()
  };
  // 整个form表单中的某一项的值改变的时候的函数
  const valueChange = (changedValues, allValues) => {
    console.log(changedValues, allValues)
  }
  return (
    <>
      <Form layout={{ labelCol: { span: 4 }, wrapperCol: { span: 16 } }} form={addAndEditFromRef} initialValues={deitDat} preserve={false} name="control-ref" onFinish={onFinishSubmit} onValuesChange={valueChange} >
        <Row gutter={24}>
          {
            formDataList.map((item, index) => {
              // eslint-disable-next-line default-case
              switch (item.type) {
                case 'input':
                  return <Col span={colwidth} key={index}> <Form.Item
                    key={index}
                    name={item.name}
                    label={item.label}
                    rules={item.rules}
                  >
                    <Input placeholder={item.placeholder} maxLength={item.maxLength} />
                  </Form.Item></Col>
                case 'select':
                  return <Col span={colwidth} key={index}> <Form.Item
                    key={index}
                    name={item.name}
                    label={item.label}
                    rules={item.rules}
                  >
                    <Select
                      placeholder={item.placeholder}
                      allowClear
                    >
                      {item.options.map(el => <Option key={el.value} value={el.value}>{el.label}</Option>)}
                    </Select>
                  </Form.Item></Col>
                case 'radio':
                  return <Col span={colwidth} key={index}> <Form.Item
                    key={index}
                    name={item.name}
                    label={item.label}
                    rules={item.rules}
                  >
                    <Radio.Group>
                      {
                        item.options.map(el => <Radio key={el.value} value={el.value}>{el.label}</Radio>)
                      }
                    </Radio.Group>
                  </Form.Item></Col>
                case 'datePick':
                  return <Col span={colwidth} key={index}> <Form.Item
                    key={index}
                    name={item.name}
                    label={item.label}
                    rules={item.rules}
                  >
                    <DatePicker style={{ width: '100%' }} placeholder={item.placeholder} format={'YYYY-MM-DD'} />
                  </Form.Item></Col>
                case 'textArea':
                  return <Col span={colwidth} key={index}> <Form.Item
                    key={index}
                    name={item.name}
                    label={item.label}
                    rules={item.rules}
                  >
                    <TextArea placeholder={item.placeholder} maxLength={item.maxLength} />
                  </Form.Item></Col>
              }
            })
          }
        </Row>
        <Form.Item style={{ display: children ? 'block' : 'none' }}>
          {children}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button htmlType="button" onClick={onReset}>取消</Button>
            <Button type="primary" htmlType="submit">提交</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}
