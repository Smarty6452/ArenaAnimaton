import React from "react";
import { Modal, Form, Input, TimePicker, Button, Row, Col, DatePicker } from "antd";


const PeriodModal = ({ visible, onCancel, onAddPeriod }) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  const handleAdd = () => {
   alert("success")
  };

  return (
    <Modal
      visible={visible}
      title="Add Period"
      centered
      onCancel={handleCancel}
      footer={[
       
        <Button key="add" type="primary" onClick={handleAdd}>
          Add Period
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Period Name"
          name="periodName"
          rules={[{ required: true, message: "Please enter the period name" }]}
        >
          <Input placeholder="Enter period name" className="period-name-input" />
        </Form.Item>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Start Time"
              name="startTime"
              rules={[{ required: true, message: "Please select the start time" }]}
            >
              <TimePicker className="time-picker" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="End Time"
              name="endTime"
              rules={[{ required: true, message: "Please select the end time" }]}
            >
              <TimePicker className="time-picker" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="days-report">
              <div className="day-circle">S</div>
              <div className="day-circle">M</div>
              <div className="day-circle">T</div>
              <div className="day-circle">W</div>
              <div className="day-circle">Th</div>
              {/* Add more days here */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
<div className="calendar-container">


          <span className="from">From</span>
            <div className="calendar">
            <DatePicker className="date-picker" />
            </div>
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default PeriodModal;
