import React, { useState } from 'react';
import { Moon, Star, Filter, Heart } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './RoommateCriteria.css';

const RoommateCriteria: React.FC = () => {
    const [energyLevel, setEnergyLevel] = useState(50);
    const [neatness, setNeatness] = useState(80);

    return (
        <div className="criteria-page">
            <div className="container">
                <div className="criteria-header">
                    <h1 className="criteria-title">Thiết lập tiêu chí tìm người ở ghép</h1>
                    <p className="criteria-subtitle">Chọn các tiêu chí phù hợp để hệ thống gợi ý roommate hợp với bạn hơn.</p>
                </div>

                <div className="criteria-grid">
                    {/* Section 1: Thói quen sinh hoạt */}
                    <Card className="criteria-section" padding="lg">
                        <h2 className="section-title">
                            <span className="section-icon bg-green-light text-green"><Moon size={20} /></span>
                            1. Thói quen sinh hoạt
                        </h2>

                        <div className="filter-group">
                            <label className="filter-label">GIỜ NGỦ</label>
                            <div className="pill-group">
                                <button className="pill-btn active">Trước 23h</button>
                                <button className="pill-btn">23h - 1h</button>
                                <button className="pill-btn">Sau 1h</button>
                            </div>
                        </div>

                        <div className="filter-group">
                            <label className="filter-label">GIỜ DẬY</label>
                            <div className="pill-group">
                                <button className="pill-btn">Trước 7h</button>
                                <button className="pill-btn active">7h - 9h</button>
                                <button className="pill-btn">Sau 9h</button>
                            </div>
                        </div>

                        <div className="filter-group">
                            <label className="filter-label">MỨC ĐỘ GỌN GÀNG</label>
                            <div className="slider-wrapper">
                                <div className="slider-labels">
                                    <span className="text-muted text-xs">THOẢI MÁI</span>
                                    <span className="text-primary font-medium text-xs">RẤT GỌN GÀNG</span>
                                    <span className="text-muted text-xs">CẦU TOÀN</span>
                                </div>
                                <input
                                    type="range"
                                    min="0" max="100"
                                    value={neatness}
                                    onChange={(e) => setNeatness(parseInt(e.target.value))}
                                    className="criteria-slider"
                                />
                            </div>
                        </div>
                    </Card>

                    {/* Section 2: Lối sống & tính cách */}
                    <Card className="criteria-section" padding="lg">
                        <h2 className="section-title">
                            <span className="section-icon bg-purple-light text-purple"><Star size={20} /></span>
                            2. Lối sống & tính cách
                        </h2>

                        <div className="filter-group">
                            <label className="filter-label">NĂNG LƯỢNG</label>
                            <div className="slider-wrapper">
                                <div className="slider-labels mb-2">
                                    <span className="text-muted text-xs">HƯỚNG NỘI</span>
                                    <span className="text-muted text-xs">HƯỚNG NGOẠI</span>
                                </div>
                                <input
                                    type="range"
                                    min="0" max="100"
                                    value={energyLevel}
                                    onChange={(e) => setEnergyLevel(parseInt(e.target.value))}
                                    className="criteria-slider"
                                />
                            </div>
                        </div>

                        <div className="filter-group mt-6">
                            <label className="filter-label">TẦN SUẤT DẪN BẠN VỀ</label>
                            <div className="pill-group">
                                <button className="pill-btn">Hiếm khi</button>
                                <button className="pill-btn active">Thỉnh thoảng</button>
                                <button className="pill-btn">Thường xuyên</button>
                            </div>
                        </div>

                        <div className="filter-group mt-6 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-purple"><Heart size={20} fill="currentColor" /></span>
                                <label className="filter-label mb-0 text-base font-bold text-main">Nuôi thú cưng</label>
                            </div>
                            <label className="toggle-switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </Card>

                    {/* Section 3: Yêu cầu ở ghép */}
                    <Card className="criteria-section" padding="lg">
                        <h2 className="section-title">
                            <span className="section-icon bg-orange-light text-orange"><Filter size={20} /></span>
                            3. Yêu cầu ở ghép
                        </h2>

                        <div className="filter-group">
                            <label className="filter-label">GIỚI TÍNH MONG MUỐN</label>
                            <div className="pill-group-icons">
                                <button className="pill-icon-btn">
                                    <span className="text-lg mb-1">👨</span> Nam
                                </button>
                                <button className="pill-icon-btn active">
                                    <span className="text-lg mb-1">👩</span> Nữ
                                </button>
                                <button className="pill-icon-btn">
                                    <span className="text-lg mb-1">👥</span> Tất cả
                                </button>
                            </div>
                        </div>

                        <div className="filter-group mt-6">
                            <label className="filter-label">HÚT THUỐC</label>
                            <div className="pill-group">
                                <button className="pill-btn active">Không hút</button>
                                <button className="pill-btn">Thỉnh thoảng</button>
                                <button className="pill-btn">Có</button>
                            </div>
                        </div>
                    </Card>

                    {/* Section 4: Mức độ ưu tiên */}
                    <Card className="criteria-section" padding="lg">
                        <h2 className="section-title">
                            <span className="section-icon bg-blue-light text-blue"><Star fill="currentColor" size={20} /></span>
                            4. Mức độ ưu tiên
                        </h2>

                        <div className="priority-list">
                            <label className="priority-item selected">
                                <div className="radio-custom checked"></div>
                                <div className="priority-content">
                                    <div className="priority-title">Ưu tiên cùng trường</div>
                                    <div className="priority-desc">Giúp dễ dàng trao đổi học tập</div>
                                </div>
                            </label>

                            <label className="priority-item">
                                <div className="radio-custom"></div>
                                <div className="priority-content">
                                    <div className="priority-title">Ưu tiên cùng quê</div>
                                    <div className="priority-desc">Gần gũi về văn hóa, nếp sống</div>
                                </div>
                            </label>

                            <label className="priority-item selected">
                                <div className="radio-custom checked"></div>
                                <div className="priority-content">
                                    <div className="priority-title">Đã đi làm</div>
                                    <div className="priority-desc">Phù hợp với người bận rộn</div>
                                </div>
                            </label>
                        </div>
                    </Card>
                </div>

                <div className="criteria-actions">
                    <Button className="btn-apply shadow-xl">Áp dụng bộ lọc</Button>
                    <Button variant="secondary" className="btn-reset">Đặt lại</Button>
                </div>
            </div>
        </div>
    );
};

export default RoommateCriteria;
