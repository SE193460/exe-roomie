import React from 'react';
import { ArrowRight, UserPlus, Search, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <ShieldCheck size={16} className="text-primary" />
                            <span>CỘNG ĐỒNG SINH VIÊN TIN CẬY</span>
                        </div>

                        <h1 className="hero-title">
                            Tìm người ở<br />
                            ghép <span className="text-gradient-primary">phù hợp</span>,<br />
                            an toàn và dễ<br />
                            dàng
                        </h1>

                        <p className="hero-subtitle">
                            Nền tảng kết nối sinh viên và người trẻ Việt Nam tìm kiếm bạn cùng phòng lý tưởng dựa trên sở thích, lối sống và ngân sách cá nhân.
                        </p>

                        <div className="hero-actions">
                            <Button rightIcon={<ArrowRight size={18} />}>Xem bài đăng</Button>
                            <Button variant="secondary">Bắt đầu ngay</Button>
                        </div>

                        <div className="hero-stats">
                            <div className="avatar-group">
                                <div className="avatar"><img src="https://i.pravatar.cc/150?img=1" alt="user" /></div>
                                <div className="avatar"><img src="https://i.pravatar.cc/150?img=2" alt="user" /></div>
                                <div className="avatar"><img src="https://i.pravatar.cc/150?img=3" alt="user" /></div>
                            </div>
                            <span className="stats-text text-muted">Hơn <strong>5,000+</strong> bạn trẻ đã tìm được phòng</span>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-image-wrapper">
                            {/* Replace with actual image later, using a solid color placeholder matching the design */}
                            <div className="hero-image-placeholder"></div>

                            <Card className="hero-floating-card" padding="sm" shadow="lg">
                                <div className="floating-user">
                                    <img src="https://i.pravatar.cc/150?img=5" alt="Minh Anh" className="floating-avatar" />
                                    <div>
                                        <h4 className="floating-name">Minh Anh</h4>
                                        <p className="floating-status">Đang tìm phòng tại Q.1</p>
                                    </div>
                                </div>
                                <div className="floating-rating">
                                    <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works Section */}
            <section className="how-it-works-section">
                <div className="section-container">
                    <h2 className="section-title">Cách hoạt động</h2>

                    <div className="steps-container">
                        <div className="step-card">
                            <div className="step-icon">
                                <UserPlus size={24} className="text-primary" />
                            </div>
                            <h3 className="step-title">Bước 1: Tạo hồ sơ</h3>
                            <p className="step-desc">Cập nhật thông tin cá nhân, thói quen sinh hoạt và sở thích của bạn để hệ thống gợi ý phù hợp.</p>
                        </div>

                        <div className="step-arrow"><ArrowRight className="text-muted" opacity={0.3} /></div>

                        <div className="step-card">
                            <div className="step-icon">
                                <Search size={24} className="text-primary" />
                            </div>
                            <h3 className="step-title">Bước 2: Đăng bài / Tìm kiếm</h3>
                            <p className="step-desc">Tìm kiếm phòng trống theo khu vực hoặc đăng tin tìm bạn ở ghép với đầy đủ tiêu chí mong muốn.</p>
                        </div>

                        <div className="step-arrow"><ArrowRight className="text-muted" opacity={0.3} /></div>

                        <div className="step-card">
                            <div className="step-icon">
                                <ShieldCheck size={24} className="text-primary" />
                            </div>
                            <h3 className="step-title">Bước 3: Kết nối & Ở ghép</h3>
                            <p className="step-desc">Trò chuyện trực tiếp qua hệ thống nhắn tin bảo mật và bắt đầu cuộc sống chung lý tưởng của bạn.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="section-container">
                    <div className="cta-box bg-gradient-primary">
                        <h2 className="cta-title">Bạn đã sẵn sàng tìm bạn cùng phòng?</h2>
                        <p className="cta-desc">Tham gia ngay cộng đồng TimO để bắt đầu hành trình tìm kiếm không gian sống mơ ước cùng những người bạn đồng điệu.</p>
                        <Button variant="secondary" className="cta-btn">Bắt đầu miễn phí ngay</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
