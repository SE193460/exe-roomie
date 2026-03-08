import React from 'react';
import { SlidersHorizontal, MapPin, GraduationCap, Briefcase, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './SuitableRoommates.css';

// Mock data based on design
const matches = [
    {
        id: 1,
        name: 'Minh Anh',
        age: 21,
        school: 'ĐH Ngoại Thương',
        schoolIcon: <GraduationCap size={16} />,
        location: 'Quận Bình Thạnh, TP.HCM',
        matchPercentage: 85,
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        tags: [
            { label: 'Ngủ trước 23h', colorClass: 'tag-purple' },
            { label: 'Gọn gàng', colorClass: 'tag-green' },
            { label: 'Không hút thuốc', colorClass: 'tag-orange' }
        ]
    },
    {
        id: 2,
        name: 'Tuấn Kiệt',
        age: 20,
        school: 'UI/UX Designer',
        schoolIcon: <Briefcase size={16} />,
        location: 'Quận 1, TP.HCM',
        matchPercentage: 92,
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        tags: [
            { label: 'Yêu mèo', colorClass: 'tag-pink' },
            { label: 'Nấu ăn ngon', colorClass: 'tag-green' },
            { label: 'Không hút thuốc', colorClass: 'tag-orange' }
        ]
    },
    {
        id: 3,
        name: 'Khánh Linh',
        age: 19,
        school: 'ĐH Bách Khoa',
        schoolIcon: <GraduationCap size={16} />,
        location: 'Quận 10, TP.HCM',
        matchPercentage: 78,
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        tags: [
            { label: 'Thể thao', colorClass: 'tag-purple' },
            { label: 'Gọn gàng', colorClass: 'tag-green' },
            { label: 'Thích du lịch', colorClass: 'tag-orange' }
        ]
    }
];

const SuitableRoommates: React.FC = () => {
    return (
        <div className="suitable-roommates-page">
            <div className="container">
                <div className="page-header flex justify-between items-end">
                    <div>
                        <h1 className="page-title">Roommate phù hợp với bạn</h1>
                        <p className="page-subtitle">Dựa trên tiêu chí bạn đã chọn, đây là những người có mức độ tương thích cao.</p>
                    </div>
                    <Link to="/criteria">
                        <Button variant="outline" leftIcon={<SlidersHorizontal size={16} />} className="btn-edit-filter">
                            Chỉnh sửa bộ lọc
                        </Button>
                    </Link>
                </div>

                <div className="filters-bar">
                    <div className="filter-dropdowns">
                        <Button variant="primary" rightIcon={<ChevronDown size={14} />} className="dropdown-btn active">
                            Tương thích cao nhất
                        </Button>
                        <Button variant="ghost" rightIcon={<ChevronDown size={14} />} className="dropdown-btn">
                            Mới nhất
                        </Button>
                        <Button variant="ghost" rightIcon={<ChevronDown size={14} />} className="dropdown-btn">
                            Gần khu vực nhất
                        </Button>
                    </div>

                    <div className="toggle-verified">
                        <span className="text-sm font-medium text-main">Chỉ hiển thị người đã xác thực</span>
                        <label className="toggle-switch-small">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                <div className="roommates-grid mt-6">
                    {matches.map(match => (
                        <Card key={match.id} className="roommate-card" padding="lg">
                            {match.verified && (
                                <div className="verified-badge">
                                    <span className="text-blue">🛡️</span> Đã xác thực
                                </div>
                            )}

                            <div className="favorite-btn">
                                <span className="text-muted">🤍</span>
                            </div>

                            <div className="avatar-section">
                                <div className="avatar-wrapper shadow-lg">
                                    <img src={match.avatar} alt={match.name} />
                                </div>
                            </div>

                            <div className="info-section">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="roommate-name">{match.name}, {match.age}</h3>
                                    <span className="match-badge">{match.matchPercentage}% Match</span>
                                </div>

                                <div className="info-row">
                                    <span className="info-icon text-muted">{match.schoolIcon}</span>
                                    <span className="info-text">{match.school}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-icon text-muted"><MapPin size={16} /></span>
                                    <span className="info-text">{match.location}</span>
                                </div>

                                <div className="match-progress-container mt-6">
                                    <div className="flex justify-between text-sm font-semibold mb-2">
                                        <span className="text-primary-hover flex items-center gap-1">🔥 Tương thích</span>
                                        <span className="text-main">{match.matchPercentage}%</span>
                                    </div>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar-fill" style={{ width: `${match.matchPercentage}%` }}></div>
                                    </div>
                                </div>

                                <div className="tags-container mt-4">
                                    {match.tags.map((tag, idx) => (
                                        <span key={idx} className={`tag ${tag.colorClass}`}>{tag.label}</span>
                                    ))}
                                </div>

                                <div className="actions-container mt-6 flex gap-3">
                                    <Button className="flex-1 shadow-md">Quan tâm</Button>
                                    <Button variant="secondary" className="flex-1">Nhắn tin</Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12 mb-8">
                    <Button variant="outline" className="btn-load-more text-primary-hover" style={{ borderColor: 'var(--primary-hover)', backgroundColor: 'white' }}>
                        <span className="text-lg mr-2">+</span> Xem thêm kết quả
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SuitableRoommates;
