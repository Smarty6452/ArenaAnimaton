import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { FaSearch } from 'react-icons/fa';
import WeeklyPlanningComponent from './Weekly';


const Header = () => {
  const [activeButton, setActiveButton] = useState('');
  const [showWeeklyPlanning, setShowWeeklyPlanning] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setShowWeeklyPlanning(buttonName === 'weeklyPlanning');
  };

  return (
    <>
      <header className="header">
        <div className="header__left">
          <Button
            type={activeButton === 'projectPlanning' ? 'primary' : 'default'}
            onClick={() => handleButtonClick('projectPlanning')}
          >
            Project Planning
          </Button>
          <Button
            type={activeButton === 'weeklyPlanning' ? 'primary' : 'default'}
            onClick={() => handleButtonClick('weeklyPlanning')}
          >
            Weekly Planning
          </Button>
          <Button
            type={activeButton === 'planningInsights' ? 'primary' : 'default'}
            onClick={() => handleButtonClick('planningInsights')}
          >
            Planning Insights
          </Button>
        </div>

        <div className="header__right">
          <Input
            placeholder="Search"
            prefix={<FaSearch className="search-icon" />}
            className="search-input"
          />
        </div>
      </header>

      <section className="planning">
        {showWeeklyPlanning && <WeeklyPlanningComponent />}
      </section>
    </>
  );
};

export default Header;
