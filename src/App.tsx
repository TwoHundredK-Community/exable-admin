import React from 'react';
import BaseLayout from './pages/layout';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'mobx-react';
import { Login } from './pages/login';
import { CourseManage } from './pages/course-manage';
import { CourseEdit } from './pages/course-edit';
import { KinAudition } from './pages/kin-audition';
import { KinList } from './pages/kin-list';
import { AdminList } from './pages/admin-list';
import { ResourceManage } from './pages/resource';
import { KnowledgeManage } from './pages/knowledge-manage';
import { NewsManage } from './pages/news-manage';
import { Account } from './pages/account';
import { ParticipantProfilePage } from './pages/participant-profile';
import NoMatch from './pages/no-match';
import { StaffSchedule } from './pages/staff-schedule';
import SchedulePage from './pages/schedule';
import Register from './pages/register/register';

export default function App() {
  return (
    <React.StrictMode>
      <GoogleOAuthProvider clientId="159397984904-j2na55s5l8emvi4mgv2lb28tmlj6mdfh.apps.googleusercontent.com">
        <Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<BaseLayout />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/course" element={<CourseManage />} />
                <Route path="/participants/:id" element={<ParticipantProfilePage />} />
                <Route path="/course/:id" element={<CourseEdit />} />
                <Route path="/audit" element={<KinAudition />} />
                <Route path="/kin" element={<KinList />} />
                <Route path="/admin" element={<AdminList />} />
                <Route path="/resource" element={<ResourceManage />} />
                <Route path="/knowledge" element={<KnowledgeManage />} />
                <Route path="/news" element={<NewsManage />} />
                <Route path="/account" element={<Account />} />
                <Route path="/staff_schedule" element={<StaffSchedule />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
}

