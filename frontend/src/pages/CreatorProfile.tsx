import React from 'react';
import { Camera, Edit2, Link as LinkIcon, Moon, Sun, Home, Volume2, Settings2, Hand, Flame, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './CreatorProfile.css';

const CreatorProfile: React.FC = () => {
    return (
        <div className="creator-profile-page">
            <div className="container">

                {/* Profile Header Card */}
                <Card className="profile-header-card" padding="lg">
                    <div className="profile-header-content flex-col-mobile">
                        <div className="profile-avatar-section">
                            <div className="profile-avatar-wrapper">
                                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Minh Anh" />
                                <button className="btn-edit-avatar">
                                    <Camera size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="profile-info-section">
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="profile-name">Minh Anh</h1>
                                <span className="verified-badge-pill">ĐÃ XÁC MINH</span>
                            </div>
                            <p className="profile-meta mb-4 text-muted">🎓 Sinh viên năm cuối • 22 tuổi • Nữ</p>
                            <div className="profile-budget font-bold text-primary flex items-center gap-2">
                                <span className="bg-primary-light p-1 rounded-md"><Settings2 size={16} /></span>
                                Ngân sách: 5.000.000đ/tháng
                            </div>
                        </div>

                        <div className="profile-action-section ml-auto">
                            <Button leftIcon={<Edit2 size={16} />} className="shadow-md">
                                Cập nhật hồ sơ
                            </Button>
                        </div>
                    </div>
                </Card>

                <div className="profile-content-grid">
                    {/* Main Info Columns */}
                    <div className="main-column">
                        <Card className="info-block-card" padding="lg">
                            <h2 className="block-title flex items-center gap-2 text-main font-bold mb-6">
                                <span className="text-primary"><Sun size={20} fill="currentColor" opacity={0.5} /></span>
                                LỐI SỐNG & THÓI QUEN
                            </h2>

                            <div className="traits-grid">
                                <div className="trait-item">
                                    <div className="trait-icon bg-blue-light text-blue"><Moon size={20} fill="currentColor" /></div>
                                    <div className="trait-content">
                                        <span className="trait-label">Giờ ngủ</span>
                                        <span className="trait-value font-bold">23:00 PM</span>
                                    </div>
                                </div>

                                <div className="trait-item bg-gray-50">
                                    <div className="trait-icon bg-cyan-light text-cyan"><Sun size={20} /></div>
                                    <div className="trait-content">
                                        <span className="trait-label">Giờ dậy</span>
                                        <span className="trait-value font-bold">07:00 AM</span>
                                    </div>
                                </div>

                                <div className="trait-item bg-gray-50">
                                    <div className="trait-icon bg-green-light text-green"><Home size={20} /></div>
                                    <div className="trait-content">
                                        <span className="trait-label">Vệ sinh</span>
                                        <span className="trait-value font-bold">Rất sạch sẽ</span>
                                    </div>
                                </div>

                                <div className="trait-item">
                                    <div className="trait-icon bg-blue-light text-blue"><Volume2 size={20} /></div>
                                    <div className="trait-content">
                                        <span className="trait-label">Tiếng ồn</span>
                                        <span className="trait-value font-bold">Yên tĩnh</span>
                                    </div>
                                </div>

                                <div className="trait-item">
                                    <div className="trait-icon bg-teal-light text-teal"><Hand size={20} /></div>
                                    <div className="trait-content">
                                        <span className="trait-label">Hút thuốc</span>
                                        <span className="trait-value font-bold">Không</span>
                                    </div>
                                </div>

                                <div className="trait-item bg-gray-50">
                                    <div className="trait-icon bg-blue-light text-blue"><Settings2 size={20} /></div>
                                    <div className="trait-content">
                                        <span className="trait-label">Thú cưng</span>
                                        <span className="trait-value font-bold">Không</span>
                                    </div>
                                </div>

                                <div className="trait-item bg-gray-50">
                                    <div className="trait-icon bg-cyan-light text-cyan"><Flame size={20} /></div>
                                    <div className="trait-content">
                                        <span className="trait-label">Nấu ăn</span>
                                        <span className="trait-value font-bold">Thỉnh thoảng</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Side Column */}
                    <div className="side-column">
                        <Card className="info-block-card mb-6" padding="lg">
                            <h2 className="block-title flex items-center gap-2 text-main font-bold mb-6">
                                <span className="text-primary"><Settings2 size={20} /></span>
                                THÔNG TIN KHÁC
                            </h2>

                            <div className="other-info-list">
                                <div className="info-row flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-muted">Giới tính</span>
                                    <span className="font-bold">Nữ</span>
                                </div>
                                <div className="info-row flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-muted">Nghề nghiệp</span>
                                    <span className="font-bold">Sinh viên</span>
                                </div>
                                <div className="info-row flex justify-between py-3">
                                    <span className="text-muted">Trạng thái</span>
                                    <span className="font-bold text-green flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green"></span> Đang tìm
                                    </span>
                                </div>
                            </div>
                        </Card>

                        <Card className="info-block-card bg-cyan-lightest border-none" padding="lg">
                            <h3 className="text-primary font-bold mb-2">Chia sẻ hồ sơ</h3>
                            <p className="text-sm text-gray-600 mb-6">Giúp bạn tìm được người ở ghép nhanh hơn.</p>

                            <Button variant="outline" fullWidth leftIcon={<LinkIcon size={16} />} className="bg-white border-white text-primary shadow-sm hover:border-primary">
                                Copy link hồ sơ
                            </Button>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreatorProfile;
