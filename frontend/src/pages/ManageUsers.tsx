import React from 'react';
import { Search, Mail, Filter, Eye, Lock, Unlock, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './ManageUsers.css';

const mockUsers = [
    {
        id: '#1024',
        name: 'Nguyễn Văn An',
        email: 'an.nguyen@example.com',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        postsCount: 12,
        joinDate: '12/05/2023',
        status: 'Hoạt động'
    },
    {
        id: '#1025',
        name: 'Lê Thị Bình',
        email: 'binh.le@example.com',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        postsCount: 0,
        joinDate: '15/05/2023',
        status: 'Bị khóa'
    },
    {
        id: '#1026',
        name: 'Trần Minh Quân',
        email: 'quan.tran@example.com',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        postsCount: 5,
        joinDate: '20/05/2023',
        status: 'Hoạt động'
    },
    {
        id: '#1027',
        name: 'Hoàng Lan Anh',
        email: 'lananh.h@example.com',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        postsCount: 2,
        joinDate: '22/05/2023',
        status: 'Hoạt động'
    }
];

const ManageUsers: React.FC = () => {
    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h1 className="admin-page-title">Quản lý người dùng</h1>
            </div>

            <Card padding="lg" className="admin-filter-card">
                <div className="filter-grid">
                    <div className="filter-input-wrapper">
                        <Search size={18} className="filter-icon" />
                        <input type="text" placeholder="Tìm theo tên..." className="filter-input" />
                    </div>
                    <div className="filter-input-wrapper">
                        <Mail size={18} className="filter-icon" />
                        <input type="text" placeholder="Tìm theo email..." className="filter-input" />
                    </div>
                    <div className="filter-input-wrapper">
                        <Filter size={18} className="filter-icon" />
                        <select className="filter-select">
                            <option value="all">Tất cả trạng thái</option>
                            <option value="active">Hoạt động</option>
                            <option value="locked">Bị khóa</option>
                        </select>
                    </div>
                    <Button leftIcon={<Search size={18} />} className="admin-btn-primary h-full">
                        Tìm kiếm
                    </Button>
                </div>
            </Card>

            <Card padding="none" className="admin-table-card mt-6">
                <div className="table-responsive">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NGƯỜI DÙNG</th>
                                <th>EMAIL</th>
                                <th>SỐ BÀI</th>
                                <th>NGÀY THAM GIA</th>
                                <th>TRẠNG THÁI</th>
                                <th className="text-center">HÀNH ĐỘNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockUsers.map((user) => (
                                <tr key={user.id}>
                                    <td className="text-muted font-medium">{user.id}</td>
                                    <td>
                                        <div className="user-cell">
                                            <img src={user.avatar} alt={user.name} className="user-avatar" />
                                            <span className="font-semibold text-main">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="text-muted">{user.email}</td>
                                    <td className="text-center font-medium">{user.postsCount}</td>
                                    <td className="text-muted">{user.joinDate}</td>
                                    <td>
                                        <span className={`status-pill ${user.status === 'Hoạt động' ? 'status-active' : 'status-locked'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons-cell">
                                            <button className="action-btn text-blue bg-blue-light hover:bg-blue hover:text-white" title="Xem chi tiết">
                                                <Eye size={16} />
                                            </button>
                                            {user.status === 'Hoạt động' ? (
                                                <button className="action-btn text-red bg-red-light hover:bg-red hover:text-white" title="Khóa tài khoản">
                                                    <Lock size={16} />
                                                </button>
                                            ) : (
                                                <button className="action-btn text-green bg-green-light hover:bg-green hover:text-white" title="Mở khóa">
                                                    <Unlock size={16} />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="table-pagination">
                    <div className="pagination-info">
                        Hiển thị 1 đến 4 trong 48 người dùng
                    </div>
                    <div className="pagination-controls">
                        <button className="page-btn"><ChevronLeft size={16} /></button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <span className="page-dots">...</span>
                        <button className="page-btn">12</button>
                        <button className="page-btn"><ChevronRight size={16} /></button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ManageUsers;
