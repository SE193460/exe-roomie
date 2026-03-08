import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { MapPin, LayoutDashboard, CheckSquare, Users, AlertTriangle, LogOut, Bell, User } from 'lucide-react';
import './AdminLayout.css';

const AdminLayout: React.FC = () => {
    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <Link to="/" className="admin-brand" style={{ textDecoration: 'none' }}>
                    <div className="admin-logo-icon">
                        <MapPin size={24} color="white" />
                    </div>
                    <div>
                        <h1 className="admin-brand-title">TimO</h1>
                        <p className="admin-brand-subtitle">ADMIN PANEL</p>
                    </div>
                </Link>

                <nav className="admin-nav">
                    <NavLink to="/admin" end className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/admin/posts" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <CheckSquare size={20} />
                        <span>Duyệt bài đăng</span>
                    </NavLink>
                    <NavLink to="/admin/users" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <Users size={20} />
                        <span>Quản lý người dùng</span>
                    </NavLink>
                    <NavLink to="/admin/reports" className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}>
                        <AlertTriangle size={20} />
                        <span>Báo cáo vi phạm</span>
                    </NavLink>
                </nav>

                <div className="admin-sidebar-footer">
                    <button className="admin-logout">
                        <LogOut size={20} />
                        <span>Đăng xuất</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="admin-content-wrapper">
                <header className="admin-header">
                    <div className="admin-header-title">
                        <h2>Tổng quan hệ thống</h2>
                        <p>Chào mừng trở lại, Admin. Đây là những gì đang diễn ra hôm nay.</p>
                    </div>
                    <div className="admin-header-actions">
                        <button className="admin-icon-btn">
                            <Bell size={20} />
                        </button>
                        <div className="admin-avatar">
                            <User size={20} color="white" />
                        </div>
                    </div>
                </header>

                <main className="admin-main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
