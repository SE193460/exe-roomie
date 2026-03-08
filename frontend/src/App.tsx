import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';
import HomePage from './pages/HomePage';
import SearchPosts from './pages/SearchPosts';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import RoommateCriteria from './pages/RoommateCriteria';
import SuitableRoommates from './pages/SuitableRoommates';
import MyPosts from './pages/MyPosts';
import CreatorProfile from './pages/CreatorProfile';
import Chat from './pages/Chat';
import AdminDashboard from './pages/AdminDashboard';
import ManageUsers from './pages/ManageUsers';
import ApprovePosts from './pages/ApprovePosts';
import ReportManagement from './pages/ReportManagement';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<SearchPosts />} />
          <Route path="posts/create" element={<CreatePost />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="criteria" element={<RoommateCriteria />} />
          <Route path="roommates" element={<SuitableRoommates />} />
          <Route path="my-posts" element={<MyPosts />} />
          <Route path="profile" element={<CreatorProfile />} />
          <Route path="chat" element={<Chat />} />
          {/* Add other user routes here later */}
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="posts" element={<ApprovePosts />} />
          <Route path="reports" element={<ReportManagement />} />
          {/* Add other admin routes here later */}
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
