import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Users, FileText, CheckSquare, Slash } from 'lucide-react';
import Card from '../components/ui/Card';
import './AdminDashboard.css';

// Mock Data
const postsData = [
    { name: 'Th 2', value: 400 },
    { name: 'Th 3', value: 600 },
    { name: 'Th 4', value: 550 },
    { name: 'Th 5', value: 400 },
    { name: 'Th 6', value: 700 },
    { name: 'Th 7', value: 500 },
    { name: 'CN', value: 800 },
];

const usersData = [
    { name: 'Th 1', value: 200 },
    { name: 'Th 2', value: 300 },
    { name: 'Th 3', value: 600 },
    { name: 'Th 4', value: 400 },
    { name: 'Th 5', value: 750 },
    { name: 'Th 6', value: 500 },
];

const recentPosts = [
    { id: 1, title: 'Phòng trọ Quận 1 giá rẻ', author: 'Nguyễn Văn A', time: '2 phút trước' },
    { id: 2, title: 'Tìm nữ ở ghép Bình Thạnh', author: 'Trần Thị B', time: '15 phút trước' },
    { id: 3, title: 'Căn hộ mini Full nội thất', author: 'Lê Hoàng C', time: '1 giờ trước' },
    { id: 4, title: 'Share phòng Master Quận...', author: 'Phạm Minh D', time: '2 giờ trước' },
    { id: 5, title: 'Trọ sv gần ĐH Kinh Tế', author: 'Vũ Anh E', time: '3 giờ trước' },
];

const recentUsers = [
    { id: 1, name: 'Minh Khôi', email: 'khoi.minh@gmail.com', status: 'Hoạt động', initial: 'M' },
    { id: 2, name: 'Thùy Dương', email: 'duongthuy.88@yahoo.com', status: 'Hoạt động', initial: 'T' },
    { id: 3, name: 'Gia Bảo', email: 'giabacao_99@gmail.com', status: 'Chờ xác minh', initial: 'G' },
    { id: 4, name: 'Kim Ngân', email: 'ngan.k@outlook.com', status: 'Hoạt động', initial: 'K' },
    { id: 5, name: 'Đức Toàn', email: 'toan_duc_le@gmail.com', status: 'Hoạt động', initial: 'Đ' },
];

const AdminDashboard: React.FC = () => {
    return (
        <div className="admin-dashboard">
            {/* Metric Cards */}
            <div className="metric-cards">
                <Card className="metric-card" padding="md">
                    <div className="metric-header">
                        <div className="metric-icon" style={{ backgroundColor: '#ebf8ff', color: '#3182ce' }}>
                            <Users size={20} />
                        </div>
                        <span className="metric-trend up">+12%</span>
                    </div>
                    <p className="metric-title">Tổng số người dùng</p>
                    <h3 className="metric-value">12,450</h3>
                    <p className="metric-subtext">vs tháng trước</p>
                </Card>

                <Card className="metric-card" padding="md">
                    <div className="metric-header">
                        <div className="metric-icon" style={{ backgroundColor: '#fff5f5', color: '#e53e3e' }}>
                            <FileText size={20} />
                        </div>
                        <span className="metric-trend up">+8%</span>
                    </div>
                    <p className="metric-title">Tổng số bài đăng</p>
                    <h3 className="metric-value">3,210</h3>
                    <p className="metric-subtext">vs tháng trước</p>
                </Card>

                <Card className="metric-card" padding="md">
                    <div className="metric-header">
                        <div className="metric-icon" style={{ backgroundColor: '#ffedd5', color: '#ea580c' }}>
                            <CheckSquare size={20} />
                        </div>
                        <span className="metric-badge warning">Cần xử lý</span>
                    </div>
                    <p className="metric-title">Số bài chờ duyệt</p>
                    <h3 className="metric-value">45</h3>
                    <p className="metric-subtext">Đang đợi quản trị viên</p>
                </Card>

                <Card className="metric-card" padding="md">
                    <div className="metric-header">
                        <div className="metric-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                            <Slash size={20} />
                        </div>
                        <span className="metric-trend down">-2%</span>
                    </div>
                    <p className="metric-title">Người dùng bị khóa</p>
                    <h3 className="metric-value">12</h3>
                    <p className="metric-subtext">Vi phạm quy tắc cộng đồng</p>
                </Card>
            </div>

            {/* Charts */}
            <div className="charts-grid">
                <Card className="chart-card">
                    <div className="chart-header">
                        <h3>Số bài đăng theo thời gian</h3>
                        <select className="chart-select">
                            <option>7 ngày qua</option>
                            <option>30 ngày qua</option>
                        </select>
                    </div>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={postsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorPosts" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ea580c" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#ea580c" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="value" stroke="#ea580c" strokeWidth={3} fillOpacity={1} fill="url(#colorPosts)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card className="chart-card">
                    <div className="chart-header">
                        <h3>Số người đăng ký theo tháng</h3>
                        <select className="chart-select">
                            <option>Năm 2024</option>
                            <option>Năm 2023</option>
                        </select>
                    </div>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={usersData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="value" fill="#fed7aa" radius={[4, 4, 0, 0]} activeBar={{ fill: '#ea580c' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>

            {/* Tables Lists */}
            <div className="lists-grid">
                <Card className="list-card">
                    <div className="list-header">
                        <h3>Bài đăng mới nhất</h3>
                        <a href="#" className="list-link">Xem tất cả</a>
                    </div>
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>TIÊU ĐỀ</th>
                                    <th>NGƯỜI ĐĂNG</th>
                                    <th>THỜI GIAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentPosts.map(post => (
                                    <tr key={post.id}>
                                        <td className="font-medium text-main">{post.title}</td>
                                        <td className="text-muted">{post.author}</td>
                                        <td className="text-muted text-sm">{post.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                <Card className="list-card">
                    <div className="list-header">
                        <h3>Người dùng mới nhất</h3>
                        <a href="#" className="list-link">Xem tất cả</a>
                    </div>
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>NGƯỜI DÙNG</th>
                                    <th>EMAIL</th>
                                    <th>TRẠNG THÁI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentUsers.map(user => (
                                    <tr key={user.id}>
                                        <td>
                                            <div className="user-cell">
                                                <div className="user-avatar-small">{user.initial}</div>
                                                <span className="font-medium text-main">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="text-muted">{user.email}</td>
                                        <td>
                                            <span className={`status-badge ${user.status === 'Hoạt động' ? 'success' : 'warning'}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;
