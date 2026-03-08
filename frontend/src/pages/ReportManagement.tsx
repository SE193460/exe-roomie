import React from 'react';
import { Search, Filter, Eye, CheckCircle, FileText } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import '../pages/ManageUsers.css'; // Reusing common admin table styles
import './ReportManagement.css';

const mockReports = [
    {
        id: '#BC-9042',
        reporter: 'Lê Văn Hùng',
        target: { name: 'Phòng trọ Thủ Đức gần ĐHQG', id: 'P-5512 (Bài đăng)' },
        type: 'Lừa đảo',
        date: '24/05/2024',
        status: 'Chưa xử lý'
    },
    {
        id: '#BC-9041',
        reporter: 'Nguyễn Mai Anh',
        target: { name: 'Trần Quốc Toản', id: 'U-3392 (Người dùng)' },
        type: 'Spam',
        date: '23/05/2024',
        status: 'Đang xử lý'
    },
    {
        id: '#BC-9040',
        reporter: 'Phạm Thành Đạt',
        target: { name: 'Tìm nữ ở ghép Quận 7', id: 'P-5501 (Bài đăng)' },
        type: 'Nội dung không phù hợp',
        date: '22/05/2024',
        status: 'Đã xử lý'
    },
    {
        id: '#BC-9039',
        reporter: 'Bùi Thu Trang',
        target: { name: 'Nguyễn Kim Oanh', id: 'U-2210 (Người dùng)' },
        type: 'Khác',
        date: '21/05/2024',
        status: 'Chưa xử lý'
    }
];

const ReportManagement: React.FC = () => {
    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h1 className="admin-page-title">Quản lý báo cáo vi phạm</h1>
                <p className="text-muted text-sm mt-1">Xem và xử lý các báo cáo từ người dùng về bài đăng hoặc tài khoản vi phạm.</p>
            </div>

            <Card padding="lg" className="admin-filter-card">
                <div className="filter-grid text-sm">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-muted uppercase tracking-wider">LOẠI BÁO CÁO</label>
                        <div className="filter-input-wrapper">
                            <select className="filter-select pl-4">
                                <option value="all">Tất cả</option>
                                <option value="scam">Lừa đảo</option>
                                <option value="spam">Spam</option>
                                <option value="inappropriate">Nội dung không phù hợp</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-muted uppercase tracking-wider">TRẠNG THÁI</label>
                        <div className="filter-input-wrapper">
                            <select className="filter-select pl-4">
                                <option value="all">Tất cả</option>
                                <option value="pending">Chưa xử lý</option>
                                <option value="processing">Đang xử lý</option>
                                <option value="resolved">Đã xử lý</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 md:col-span-2 lg:col-span-1">
                        <label className="text-xs font-semibold text-muted uppercase tracking-wider">TÌM KIẾM</label>
                        <div className="filter-input-wrapper">
                            <input type="text" placeholder="ID bài đăng / Tên user..." className="filter-input pl-4" />
                        </div>
                    </div>

                    <div className="flex items-end mt-4 lg:mt-0">
                        <Button leftIcon={<Filter size={18} />} className="admin-btn-primary bg-orange-500 hover:bg-orange-600 w-full h-[42px]">
                            Lọc kết quả
                        </Button>
                    </div>
                </div>
            </Card>

            <Card padding="none" className="admin-table-card mt-6">
                <div className="table-responsive">
                    <table className="admin-table report-management-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NGƯỜI BÁO CÁO</th>
                                <th>ĐỐI TƯỢNG BỊ BÁO CÁO</th>
                                <th>LOẠI VI PHẠM</th>
                                <th>NGÀY BÁO</th>
                                <th>TRẠNG THÁI</th>
                                <th className="text-center">HÀNH ĐỘNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockReports.map((report) => (
                                <tr key={report.id}>
                                    <td className="font-semibold text-main">{report.id}</td>
                                    <td>
                                        <div className="font-medium text-main">{report.reporter}</div>
                                    </td>
                                    <td>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-main">{report.target.name}</span>
                                            <span className="text-xs text-muted">ID: {report.target.id}</span>
                                        </div>
                                    </td>
                                    <td className="text-main">{report.type}</td>
                                    <td className="text-muted">{report.date}</td>
                                    <td>
                                        <span className={`status-pill ${report.status === 'Chưa xử lý' ? 'status-pending' :
                                                report.status === 'Đang xử lý' ? 'status-processing' :
                                                    'status-resolved'
                                            }`}>
                                            {report.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons-cell justify-center gap-3">
                                            <button className="icon-action text-slate-600 hover:text-blue-600 transition-colors" title="Xem chi tiết">
                                                <Eye size={20} />
                                            </button>
                                            <button className="icon-action text-slate-600 hover:text-orange-500 transition-colors" title="Lịch sử xử lý">
                                                <FileText size={20} />
                                            </button>
                                            <button className="icon-action text-slate-600 hover:text-green-600 transition-colors" title="Đánh dấu đã xử lý">
                                                <CheckCircle size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="table-pagination">
                    <div className="pagination-info">
                        Hiển thị 1 đến 4 của 24 báo cáo
                    </div>
                    <div className="pagination-controls">
                        <button className="page-btn active bg-orange-500 hover:bg-orange-600 border-orange-500">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <span className="page-dots">...</span>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ReportManagement;
