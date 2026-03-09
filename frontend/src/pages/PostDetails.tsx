import React from 'react';
import { MapPin, Maximize, Users, Target, ShieldCheck, Play, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './PostDetails.css';

const PostDetails: React.FC = () => {

    // Mock post data based on design
    const postInfo = {
        title: 'Tìm nữ ở ghép phòng đầy đủ tiện nghi gần ĐH Kinh Tế',
        price: '2.000.000đ',
        images: [
            'https://afamilycdn.com/2017/img20170215090839975.jpg',
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-nha-dep-bang-kinh-view-dep_041507935.jpg',
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://noithatmyhouse.com/wp-content/uploads/2024/07/bep-nha-ong-dep-2.jpg',
        ],
        features: [
            { id: 'area', icon: <MapPin size={18} />, label: 'KHU VỰC', value: 'Quận 10' },
            { id: 'size', icon: <Maximize size={18} />, label: 'DIỆN TÍCH', value: '25m²' },
            { id: 'gender', icon: <Users size={18} />, label: 'GIỚI TÍNH', value: 'Nữ' },
            { id: 'current', icon: <Target size={18} />, label: 'HIỆN TẠI', value: '1 người' },
        ],
        description: 'Mình cần tìm 1 bạn nữ ở ghép để share tiền phòng. Phòng nằm trong khu chung cư mini cao cấp, cực kỳ an ninh, gần ĐH Kinh tế cơ sở B. Phòng đã có sẵn giường, nền, tủ quần áo âm tường và bàn làm việc. Giờ giấc tự do, không chung chủ. Ưu tiên các bạn sinh viên hoặc nhân viên văn phòng sạch sẽ, ngăn nắp và có ý thức giữ gìn không gian chung.',
        amenities: [
            { id: 'ac', label: 'Máy lạnh', enabled: true },
            { id: 'wifi', label: 'Wifi', enabled: true },
            { id: 'wm', label: 'Máy giặt', enabled: true },
            { id: 'parking', label: 'Bãi giữ xe', enabled: true },
            { id: 'smoke', label: 'Không hút thuốc', enabled: false },
            { id: 'pet', label: 'Không thú cưng', enabled: false },
        ],
        author: {
            name: 'Minh Anh',
            age: 21,
            job: 'Sinh viên ĐH Kinh Tế',
            verified: true,
            avatar: 'https://i.pravatar.cc/150?img=5',
        }
    };

    const similarPosts = [
        { title: 'Tìm bạn nữ Share phòng chung cư Ngô Gia Tự', price: '2.200.000đ/tháng', location: 'Quận 10', time: '2 giờ trước', imageUrl: 'https://vinavic.vn/upload_images/images/2023/06/27/compress/nha-dep-hien-dai-co-ho-boi-013.jpeg.webp' },
        { title: 'Phòng trọ gần ĐH Kinh tế CS Nguyễn Đình Chiểu', price: '2.500.000đ/tháng', location: 'Quận 3', time: '1 ngày trước', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { title: 'Góc nhỏ decor xinh xắn cho 2 nữ ở ghép', price: '1.800.000đ/tháng', location: 'Quận 10', time: '5 giờ trước', imageUrl: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ];

    return (
        <div className="post-details-page">
            <div className="breadcrumb">
                <div className="container">
                    <Link to="/">Trang chủ</Link>
                    <span className="separator">›</span>
                    <Link to="/posts">Phòng trọ Quận 10</Link>
                    <span className="separator">›</span>
                    <span className="current">Chi tiết bài đăng</span>
                </div>
            </div>

            <div className="container post-details-layout">
                {/* Main Content */}
                <div className="post-main">
                    {/* Photos Grid */}
                    <div className="photos-grid">
                        <div className="photo-main">
                            <img src={postInfo.images[0]} alt="Phòng trọ" />
                        </div>
                        <div className="photo-thumbnails">
                            {postInfo.images.slice(1, 4).map((img, idx) => (
                                <div key={idx} className="photo-thumb">
                                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                                </div>
                            ))}
                            <div className="photo-thumb photo-more">
                                <img src={postInfo.images[4]} alt="Thumbnail 4" />
                                <div className="more-overlay">
                                    <span>+12</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="post-info-card" padding="lg">
                        <div className="post-info-header">
                            <h1 className="post-title">{postInfo.title}</h1>
                            <div className="post-price-badge">
                                <span className="price">{postInfo.price}</span>
                                <span className="unit">/ THÁNG</span>
                            </div>
                        </div>

                        <div className="post-features">
                            {postInfo.features.map(f => (
                                <div key={f.id} className="feature-item">
                                    <div className="feature-icon">{f.icon}</div>
                                    <div className="feature-text">
                                        <span className="label">{f.label}</span>
                                        <span className="value">{f.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="post-section">
                            <h3 className="section-title">
                                <span className="primary-bar"></span>
                                Mô tả chi tiết
                            </h3>
                            <p className="description-text">{postInfo.description}</p>
                        </div>

                        <div className="post-section">
                            <h3 className="section-title">
                                <span className="primary-bar"></span>
                                Tiện ích & Quy định
                            </h3>
                            <div className="amenities-grid">
                                {postInfo.amenities.map(a => (
                                    <div key={a.id} className={`amenity-item ${a.enabled ? 'enabled' : 'disabled'}`}>
                                        {a.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* Similar Posts */}
                    <div className="similar-posts-section">
                        <div className="similar-header">
                            <h2>Bài đăng tương tự</h2>
                            <Link to="/posts" className="view-all-link">Xem tất cả <span className="arrow">→</span></Link>
                        </div>
                        <div className="similar-grid">
                            {similarPosts.map((post, idx) => (
                                <Card key={idx} className="similar-card" padding="none">
                                    <div className="similar-img-wrapper">
                                        <img src={post.imageUrl} alt={post.title} />
                                        <span className="location-badge">{post.location}</span>
                                    </div>
                                    <div className="similar-content">
                                        <h4 className="similar-title">{post.title}</h4>
                                        <p className="similar-price">{post.price}</p>
                                        <div className="similar-meta">
                                            <span>{post.time}</span>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="post-sidebar">
                    <Card className="author-card" padding="lg">
                        <div className="author-profile">
                            <div className="author-avatar-wrapper">
                                <img src={postInfo.author.avatar} alt={postInfo.author.name} className="author-avatar" />
                            </div>
                            <h3 className="author-name">{postInfo.author.name}</h3>
                            <p className="author-desc">{postInfo.author.age} tuổi • {postInfo.author.job}</p>
                            {postInfo.author.verified && (
                                <div className="author-verified">
                                    <ShieldCheck size={14} />
                                    <span>Đã xác thực</span>
                                </div>
                            )}
                        </div>

                        <div className="author-actions">
                            <Button leftIcon={<Play size={16} fill="currentColor" />} className="action-btn-message" fullWidth>
                                Nhắn tin
                            </Button>
                            <Button leftIcon={<Heart size={16} fill="currentColor" />} variant="secondary" className="action-btn-save" fullWidth>
                                Quan tâm
                            </Button>
                        </div>

                        <p className="login-hint">Vui lòng đăng nhập để nhắn tin trực tiếp</p>
                    </Card>

                    <div className="sidebar-warning">
                        <ShieldCheck size={20} className="warning-icon" />
                        <p>Tuyệt đối không đặt cọc tiền trước khi xem phòng trực tiếp.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
