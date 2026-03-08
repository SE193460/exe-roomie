import React from 'react';
import { MapPin, Search as SearchIcon, ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './SearchPosts.css';

// Mock data
const posts = [
    {
        id: 1,
        title: 'Phòng đầy đủ tiện nghi, có máy lạnh, máy giặt. Mình làm văn phòng, tính cách vui vẻ, ngăn nắp...',
        price: '3.500.000đ',
        location: 'Quận 1, TP.HCM',
        tag: 'MỚI ĐĂNG',
        target: 'Tìm 1 Nữ',
        imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55dd1b48b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Căn hộ Scenic Valley cao cấp, đầy đủ nội thất, view hồ bơi cực đẹp. Tìm bạn nam văn phòng...',
        price: '4.200.000đ',
        location: 'Quận 7, TP.HCM',
        tag: 'ĐÃ XÁC THỰC',
        target: 'Tìm 1 Nam',
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Phòng gần các trường đại học Hutech, Ngoại Thương. Phòng rộng rãi, tự do giờ giấc, không chun...',
        price: '2.800.000đ',
        location: 'Quận Bình Thạnh',
        target: 'Tìm 2 Nữ',
        imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1de2d93145?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        title: 'Pass phòng chung cư cao cấp. Nhà có mèo, tìm bạn thích động vật và sạch sẽ. Nội thất đầy đủ...',
        price: '5.500.000đ',
        location: 'Quận 3, TP.HCM',
        target: 'Tìm 1 Nữ',
        imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 5,
        title: 'Phòng yên tĩnh, khu dân trí cao. Mình làm IT ít nói nhưng thân thiện. Cần tìm bạn ở ghép văn minh...',
        price: '3.000.000đ',
        location: 'Quận Phú Nhuận',
        target: 'Tìm 1 Nam',
        imageUrl: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 6,
        title: 'Studio mini tách biệt, không chung chủ. Gần sân bay Tân Sơn Nhất. Thích hợp cho bạn nào thích tự do...',
        price: '3.800.000đ',
        location: 'Quận Tân Bình',
        target: 'Tất cả',
        imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
];

const SearchPosts: React.FC = () => {
    return (
        <div className="search-page">
            {/* Header Section */}
            <section className="search-header-section">
                <div className="search-container">
                    <h1 className="search-title">Tìm kiếm bạn đồng hành</h1>
                    <p className="search-subtitle">Khám phá hơn 1,000+ phòng trống và bạn ở ghép phù hợp với phong cách sống của bạn.</p>

                    <Card className="search-bar-card" padding="none">
                        <div className="search-inputs">
                            <div className="search-input-group flex-1">
                                <MapPin size={20} className="text-primary search-icon" />
                                <input type="text" placeholder="Bạn muốn ở khu vực nào?" className="search-input" />
                            </div>
                            <div className="search-divider"></div>
                            <div className="search-input-group">
                                <Button variant="ghost" rightIcon={<ChevronDown size={16} />} className="search-dropdown-btn">
                                    <div className="flex items-center gap-2">
                                        <span className="search-icon-placeholder text-primary">$</span> Khoảng giá
                                    </div>
                                </Button>
                            </div>
                            <div className="search-divider"></div>
                            <div className="search-input-group">
                                <Button variant="ghost" rightIcon={<ChevronDown size={16} />} className="search-dropdown-btn">
                                    <div className="flex items-center gap-2">
                                        <User size={16} className="text-primary" /> Giới tính
                                    </div>
                                </Button>
                            </div>
                            <Button leftIcon={<SearchIcon size={18} />} className="search-submit-btn">Tìm kiếm</Button>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Results Section */}
            <section className="search-results-section">
                <div className="search-container">
                    <div className="posts-grid">
                        {posts.map(post => (
                            <Card key={post.id} className="post-card" padding="none">
                                <div className="post-image-wrapper">
                                    <img src={post.imageUrl} alt={post.title} className="post-image" />
                                    {post.tag && (
                                        <span className={`post-badge ${post.tag === 'MỚI ĐĂNG' ? 'badge-new' : 'badge-verified'}`}>
                                            {post.tag}
                                        </span>
                                    )}
                                </div>
                                <div className="post-content">
                                    <div className="post-meta-header">
                                        <h3 className="post-price">{post.price}<span className="text-muted font-normal text-sm">/tháng</span></h3>
                                        <span className="post-target">{post.target}</span>
                                    </div>
                                    <div className="post-location">
                                        <MapPin size={14} className="text-muted" />
                                        <span>{post.location}</span>
                                    </div>
                                    <p className="post-description">{post.title}</p>
                                </div>
                                <div className="post-footer">
                                    <Link to={`/posts/${post.id}`} className="view-detail-btn">Xem chi tiết</Link>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="pagination">
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn">›</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SearchPosts;
