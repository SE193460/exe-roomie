import React, { useState } from 'react';
import { Edit2, EyeOff, Share2, Eye, Trash2, Plus, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './MyPosts.css';

// Mock data
const myPosts = [
    {
        id: 1,
        title: 'Phòng trọ Studio Quận 1',
        price: '3.500.000đ/tháng',
        status: 'ĐANG HOẠT ĐỘNG',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isActive: true
    },
    {
        id: 2,
        title: 'Căn hộ cao cấp Quận 7',
        price: '4.200.000đ/tháng',
        status: 'ĐANG HOẠT ĐỘNG',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1de2d93145?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isActive: true
    },
    {
        id: 3,
        title: 'Phòng trọ Bình Thạnh',
        price: '3.000.000đ/tháng',
        status: 'ĐÃ TẠM ẨN',
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isActive: false
    },
    {
        id: 4,
        title: 'Phòng Master Phú Nhuận',
        price: '5.000.000đ/tháng',
        status: 'ĐANG HOẠT ĐỘNG',
        image: 'https://images.unsplash.com/photo-1598928506311-c55dd1b48b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isActive: true
    }
];

const MyPosts: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Tat Ca');

    const tabs = [
        { id: 'Tat Ca', label: 'Tất cả bài đăng (4)' },
        { id: 'Dang Hoat Dong', label: 'Đang hoạt động (3)' },
        { id: 'Da Tam An', label: 'Đã tạm ẩn (1)' },
        { id: 'Ban Nhap', label: 'Bản nháp' },
    ];

    return (
        <div className="myposts-page">
            <div className="container">
                <div className="page-header flex justify-between items-end">
                    <div>
                        <h1 className="page-title">Bài đăng của tôi</h1>
                        <p className="page-subtitle">Quản lý và tối ưu hóa các tin đăng cho thuê của bạn một cách dễ dàng.</p>
                    </div>
                    <Link to="/posts/create">
                        <Button leftIcon={<Plus size={18} />} className="btn-create-new shadow-md">
                            Tạo bài đăng mới
                        </Button>
                    </Link>
                </div>

                {/* Tabs */}
                <div className="tabs-container">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Posts Grid */}
                <div className="posts-management-grid mt-8">
                    {myPosts.map(post => (
                        <Card key={post.id} className={`management-card ${!post.isActive ? 'card-inactive' : ''}`} padding="none">
                            <div className="management-img-wrapper">
                                <img src={post.image} alt={post.title} className={!post.isActive ? 'img-grayscale' : ''} />
                                <div className={`status-badge ${post.isActive ? 'bg-green text-white' : 'bg-gray-600 text-white'}`}>
                                    {post.status}
                                </div>
                                {!post.isActive && (
                                    <div className="hidden-overlay">
                                        <EyeOff size={32} color="white" />
                                    </div>
                                )}
                                <button className="edit-btn-floating rounded-full bg-white p-2 shadow-sm text-gray-700 hover:text-primary-hover transition-colors absolute top-4 right-4 z-10">
                                    <Edit2 size={16} />
                                </button>
                            </div>

                            <div className="management-content">
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-price">{post.price}</p>

                                <div className="action-buttons mt-4">
                                    <Button fullWidth className={post.isActive ? '' : 'btn-disabled'} disabled={!post.isActive}>
                                        <Users size={16} className="mr-2" /> Xem ứng viên
                                    </Button>

                                    <div className="secondary-actions mt-3">
                                        {post.isActive ? (
                                            <>
                                                <Button variant="outline" className="flex-1 btn-sm">
                                                    <EyeOff size={14} className="mr-1" /> Tạm ẩn
                                                </Button>
                                                <Button variant="outline" className="flex-1 btn-sm">
                                                    <Share2 size={14} className="mr-1" /> Chia sẻ
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button variant="outline" className="flex-1 btn-sm text-primary-hover border-primary-light">
                                                    <Eye size={14} className="mr-1" /> Hiển thị lại
                                                </Button>
                                                <Button variant="outline" className="flex-1 btn-sm text-red border-red-light">
                                                    <Trash2 size={14} className="mr-1" /> Xóa tin
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}

                    {/* Add New Card Placeholder */}
                    <Link to="/posts/create" className="add-new-card">
                        <div className="add-new-content">
                            <div className="add-icon-wrapper">
                                <Plus size={32} className="text-primary-hover" />
                            </div>
                            <h3 className="font-bold text-main mb-2">Thêm bài đăng mới</h3>
                            <p className="text-sm text-muted text-center max-w-[200px]">Tạo tin đăng mới để tìm người thuê phù hợp</p>
                        </div>
                    </Link>
                </div>

                {/* Dashboard/Stats Section */}
                <div className="stats-dashboard mt-12 bg-[#0f172a] text-white rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#0f172a] to-[#1e293b] shadow-2xl relative overflow-hidden">
                    {/* Decorative background circle */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary to-transparent opacity-10 blur-3xl"></div>

                    <div className="stats-info max-w-md z-10 mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold mb-3">Hiệu quả của bạn</h2>
                        <p className="text-slate-400">Bạn đã tiếp cận được hơn 1.200 khách hàng tiềm năng trong tháng này qua 4 bài đăng.</p>
                    </div>

                    <div className="stats-numbers flex gap-8 md:gap-16 z-10">
                        <div className="stat-item text-center">
                            <div className="text-4xl font-black text-primary mb-1">1.2k</div>
                            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">LƯỢT XEM</div>
                        </div>
                        <div className="stat-item text-center">
                            <div className="text-4xl font-black text-primary mb-1">48</div>
                            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">ỨNG VIÊN</div>
                        </div>
                        <div className="stat-item text-center">
                            <div className="text-4xl font-black text-primary mb-1">85%</div>
                            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">TỶ LỆ TIN CẬY</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
