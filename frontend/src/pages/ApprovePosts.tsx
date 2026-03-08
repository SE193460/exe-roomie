import React from 'react';
import { Search, Filter, Eye, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import '../pages/ManageUsers.css'; // Reusing common admin table styles
import './ApprovePosts.css';

const mockPosts = [
    {
        id: '#0482',
        title: 'Tìm nam ở ghép căn hộ Vinhomes Central Park',
        author: 'Nguyễn Văn A',
        area: 'Bình Thạnh, HCM',
        price: '4,500,000đ',
        date: '12/10/2023',
        status: 'Chờ duyệt'
    },
    {
        id: '#0481',
        title: 'Phòng trọ giá rẻ cho SV gần ĐH Bách Khoa',
        author: 'Trần Thị B',
        area: 'Quận 10, HCM',
        price: '2,800,000đ',
        date: '11/10/2023',
        status: 'Đã duyệt'
    },
    {
        id: '#0479',
        title: 'Nhà nguyên căn 3PN tìm thêm bạn nữ',
        author: 'Lê Hoàng C',
        area: 'Cầu Giấy, Hà Nội',
        price: '3,200,000đ',
        date: '10/10/2023',
        status: 'Từ chối'
    },
    {
        id: '#0478',
        title: 'Cần người ở ghép chung cư Scenic Valley',
        author: 'Phạm Minh D',
        area: 'Quận 7, HCM',
        price: '5,000,000đ',
        date: '10/10/2023',
        status: 'Chờ duyệt'
    }
];

const ApprovePosts: React.FC = () => {
    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h1 className="admin-page-title">Duyệt bài đăng</h1>
            </div>

            <Card padding="lg" className="admin-filter-card">
                <div className="filter-grid text-sm">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-muted uppercase tracking-wider">TRẠNG THÁI</label>
                        <div className="filter-input-wrapper">
                            <select className="filter-select pl-4">
                                <option value="pending">Chờ duyệt</option>
                                <option value="approved">Đã duyệt</option>
                                <option value="rejected">Từ chối</option>
                                <option value="all">Tất cả</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-muted uppercase tracking-wider">NGƯỜI ĐĂNG</label>
                        <div className="filter-input-wrapper">
                            <input type="text" placeholder="Tên người đăng..." className="filter-input pl-4" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-muted uppercase tracking-wider">KHU VỰC</label>
                        <div className="filter-input-wrapper">
                            <input type="text" placeholder="Quận, huyện..." className="filter-input pl-4" />
                        </div>
                    </div>

                    <div className="flex items-end">
                        <Button leftIcon={<Filter size={18} />} className="admin-btn-primary w-full h-[42px]">
                            Lọc
                        </Button>
                    </div>
                </div>
            </Card>

            <Card padding="none" className="admin-table-card mt-6">
                <div className="table-responsive">
                    <table className="admin-table approve-posts-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th className="title-col">TIÊU ĐỀ BÀI ĐĂNG</th>
                                <th>NGƯỜI ĐĂNG</th>
                                <th>KHU VỰC</th>
                                <th>GIÁ</th>
                                <th>NGÀY ĐĂNG</th>
                                <th>TRẠNG THÁI</th>
                                <th className="text-center">HÀNH ĐỘNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockPosts.map((post) => (
                                <tr key={post.id}>
                                    <td className="text-muted font-medium">{post.id}</td>
                                    <td className="font-semibold text-main whitespace-normal max-w-[200px] leading-snug">
                                        {post.title}
                                    </td>
                                    <td className="text-muted">{post.author}</td>
                                    <td className="text-muted whitespace-normal max-w-[120px]">{post.area}</td>
                                    <td className="font-semibold text-blue-600">{post.price}</td>
                                    <td className="text-muted">{post.date}</td>
                                    <td>
                                        <span className={`status-pill ${post.status === 'Chờ duyệt' ? 'status-pending' :
                                                post.status === 'Đã duyệt' ? 'status-active' :
                                                    'status-rejected'
                                            }`}>
                                            {post.status}
                                        </span>
                                    </td>
                                    <td>
                                        {post.status === 'Chờ duyệt' ? (
                                            <div className="action-buttons-cell justify-center">
                                                <button className="action-btn text-gray-500 hover:text-blue hover:bg-blue-light" title="Xem chi tiết">
                                                    <Eye size={18} />
                                                </button>
                                                <button className="action-btn text-green hover:bg-green hover:text-white mx-1" title="Duyệt">
                                                    <Check size={18} />
                                                </button>
                                                <button className="action-btn text-red hover:bg-red hover:text-white" title="Từ chối">
                                                    <X size={18} />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="text-center text-muted font-medium text-xs">N/A</div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="table-pagination">
                    <div className="pagination-info">
                        Hiển thị 1-10 trong số 48 kết quả
                    </div>
                    <div className="pagination-controls">
                        <button className="page-btn"><ChevronLeft size={16} /></button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <span className="page-dots">...</span>
                        <button className="page-btn">5</button>
                        <button className="page-btn"><ChevronRight size={16} /></button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ApprovePosts;
