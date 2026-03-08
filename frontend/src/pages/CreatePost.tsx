import React from 'react';
import { Camera, Building2, UserCircle2, Users2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './CreatePost.css';

const CreatePost: React.FC = () => {
    return (
        <div className="create-post-page">
            <div className="container">
                <div className="create-header">
                    <h1 className="create-title">Tạo bài đăng mới</h1>
                    <p className="create-subtitle">Chia sẻ không gian sống của bạn và kết nối với những người bạn đồng hành phù hợp nhất.</p>
                </div>

                <div className="create-form-container">
                    {/* Section 1: Thông tin phòng */}
                    <Card className="form-section">
                        <div className="section-header">
                            <div className="section-icon"><Building2 size={24} /></div>
                            <h2>1. Thông tin phòng</h2>
                        </div>

                        <div className="form-group mb-4">
                            <label>Hình ảnh phòng (Tối thiểu 3 ảnh)</label>
                            <div className="image-upload-grid">
                                <div className="upload-box">
                                    <Camera size={24} className="text-primary mb-2" />
                                    <span>THÊM ẢNH</span>
                                </div>
                                <div className="uploaded-image-preview">
                                    <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="uploaded" />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Giá thuê (VNĐ/tháng)</label>
                                <input type="text" placeholder="3.500.000" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label>Diện tích (m²)</label>
                                <input type="text" placeholder="25" className="form-input" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Địa chỉ cụ thể</label>
                            <input type="text" placeholder="Số nhà, tên đường, phường, quận..." className="form-input" />
                        </div>

                        <div className="form-group">
                            <label>Số người tối đa</label>
                            <select className="form-select">
                                <option>1 người</option>
                                <option>2 người</option>
                                <option>3 người</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Tiện ích có sẵn</label>
                            <div className="checkbox-grid">
                                <label className="checkbox-label"><input type="checkbox" /> Máy lạnh</label>
                                <label className="checkbox-label"><input type="checkbox" /> Tủ lạnh</label>
                                <label className="checkbox-label"><input type="checkbox" /> Máy giặt</label>
                                <label className="checkbox-label"><input type="checkbox" /> Wifi</label>
                            </div>
                        </div>
                    </Card>

                    {/* Section 2: Lối sống của bạn */}
                    <Card className="form-section">
                        <div className="section-header">
                            <div className="section-icon"><UserCircle2 size={24} /></div>
                            <h2>2. Lối sống của bạn</h2>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Giờ giấc sinh hoạt</label>
                                <div className="radio-group-inline">
                                    <label className="radio-pill active"><input type="radio" name="time" defaultChecked /> Tự do</label>
                                    <label className="radio-pill"><input type="radio" name="time" /> Giờ giới nghiêm</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Độ sạch sẽ</label>
                                <div className="range-slider-container">
                                    <div className="range-labels">
                                        <span>THOẢI MÁI</span>
                                        <span>RẤT KỸ TÍNH</span>
                                    </div>
                                    <input type="range" min="1" max="5" defaultValue="4" className="form-range" />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Thú cưng</label>
                                <div className="radio-group-inline">
                                    <label className="radio-pill"><input type="radio" name="pet" /> Có thể</label>
                                    <label className="radio-pill active"><input type="radio" name="pet" defaultChecked /> Không</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Hút thuốc</label>
                                <div className="radio-group-inline">
                                    <label className="radio-pill"><input type="radio" name="smoke" /> Có</label>
                                    <label className="radio-pill active"><input type="radio" name="smoke" defaultChecked /> Không</label>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Section 3: Yêu cầu người ở ghép */}
                    <Card className="form-section">
                        <div className="section-header">
                            <div className="section-icon"><Users2 size={24} /></div>
                            <h2>3. Yêu cầu người ở ghép</h2>
                        </div>

                        <div className="form-group">
                            <label>Mô tả chi tiết mong muốn của bạn</label>
                            <textarea
                                className="form-textarea"
                                rows={5}
                                placeholder="Ví dụ: Mình tìm bạn nữ sinh viên hoặc người đi làm văn phòng, hiền lành, trung thực và gọn gàng. Ưu tiên người ít đồ đạc..."
                            ></textarea>
                        </div>
                    </Card>

                    {/* Form Actions */}
                    <div className="form-actions">
                        <Button variant="outline" className="btn-draft">Lưu bản nháp</Button>
                        <Button className="btn-submit">Đăng bài ngay</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
