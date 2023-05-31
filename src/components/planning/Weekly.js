import React, { useState } from "react";
import { Row, Col, Button, Calendar, DatePicker } from "antd";
import {
  MdOutlineAddBox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import PeriodModal from "../Modal/AddPeriodModal";

const Weekly = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const handleAddPeriod = (values) => {
    // Handle the logic for adding a period here
    console.log("Period added:", values);
    hideModal();
  };

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; // Days of the week

  // Dummy data for events
  const events = [
    { day: "Mon", title: "Event 1", date: "25" },
    { day: "Tue", title: "Event 2", date: "26" },
    { day: "Wed", title: "Event 3", date: "27" },
    // Add more events here...
  ];

  return (
    <div className="weekly">
      <div className="weekly-header">
        <Row className="align-items-center">
          <Col sm={24}>
            <div className="weakly-header-wrap">
              <div className="date">
                April 23 - 24{" "}
                <span className="today">
                  {" "}
                  <MdKeyboardArrowLeft className="arrow-icon" />
                  Today
                  <MdKeyboardArrowRight className="arrow-icon" />
                </span>
              </div>

              <div className="text-end">
                <Button
                  variant="primary"
                  className="add-period-button"
                  onClick={showModal}
                >
                  <MdOutlineAddBox className="add-period-icon" />
                  Add Period
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="weekly-content">
      <Calendar />
      </div>

      <PeriodModal
        visible={modalVisible}
        onCancel={hideModal}
        onAddPeriod={handleAddPeriod}
      />
    </div>
  );
};

export default Weekly;
