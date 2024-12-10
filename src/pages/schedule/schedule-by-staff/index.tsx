import React from 'react';
import '../../../styles/common-style.css';
import './style.css';
import { Staff_Card } from './staff/staff-card';
import { Page } from '../../../components/page';
import { Class_Card } from './class/class-card';

const Staff_Schedule: React.FC = () => {
  // const navigate = useNavigate();

  // const handleNavigation = (path: string) => {
  //   navigate(path);
  // };

  return (
    <Page title="staff-schedule">
      <div className="staff-schedule-page">
        <div className="staff-content">
          <h1 className="staff-title">Schedule By Staff</h1>
          <Staff_Card />
        </div>
        <div className="class-detail">
          <h1 className="detail-title">Class detail</h1>
          <Class_Card />
        </div>
      </div>
    </Page>
  );
};

export default Staff_Schedule;
