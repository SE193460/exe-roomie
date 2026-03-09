import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { MapPin, Menu, X, Facebook, Twitter, Instagram, Youtube, Bell, MessageSquare, LogOut, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import './UserLayout.css';

const UserLayout: React.FC = () => {
    // Mock login state to demonstrate different navigation tabs
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const loggedOutLinks = [
        { path: '/', label: 'Trang chủ' },
        { path: '/posts', label: 'Danh sách bài đăng' },
        { path: '/criteria', label: 'Tiêu chí' }
    ];

    const loggedInLinks = [
        { path: '/', label: 'Bảng điều khiển' },
        { path: '/posts', label: 'Tìm phòng' },
        { path: '/roommates', label: 'Tìm người ở ghép' },
        { path: '/posts/create', label: 'Đăng tin' },
        { path: '/my-posts', label: 'Bài đăng của tôi' }
    ];

    const currentLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

    return (
        <div className="user-layout">
            <header className="user-header">
                <div className="header-container">
                    <div className="header-left">
                        <button className="mobile-menu-btn" onClick={toggleMenu}>
                            <Menu size={24} />
                        </button>

                        <Link to="/" className="logo">
                            <div className="logo-icon bg-gradient-primary">
                                <MapPin size={20} color="white" />
                            </div>
                            <span className="logo-text">Roomie</span>
                        </Link>
                    </div>

                    <nav className="main-nav">
                        {currentLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="auth-actions">
                        {isLoggedIn ? (
                            <div className="user-menu-desktop">
                                <div className="header-search hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 mr-4">
                                    <Search size={16} className="text-gray-400 mr-2" />
                                    <input type="text" placeholder="Tìm kiếm..." className="bg-transparent border-none outline-none text-sm w-48" />
                                </div>
                                <Link to="/chat" className="icon-btn">
                                    <MessageSquare size={20} />
                                </Link>
                                <button className="icon-btn notification-btn relative">
                                    <Bell size={20} />
                                    <span className="badge">3</span>
                                </button>
                                <Link to="/profile" className="profile-btn ml-2">
                                    <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Avatar" className="avatar-sm" />
                                </Link>
                                <button onClick={() => setIsLoggedIn(false)} className="btn-logout ml-2" title="Đăng xuất">
                                    <LogOut size={20} />
                                </button>
                            </div>
                        ) : (
                            <div className="auth-buttons-desktop">
                                <Button variant="ghost" onClick={() => setIsLoggedIn(true)}>Đăng nhập</Button>
                                <Button variant="primary">Đăng ký</Button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar Navigation */}
            <div className={`mobile-sidebar-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
            <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/" className="logo" onClick={toggleMenu}>
                        <div className="logo-icon bg-gradient-primary">
                            <MapPin size={20} color="white" />
                        </div>
                        <span className="logo-text">Roomie</span>
                    </Link>
                    <button className="close-sidebar-btn" onClick={toggleMenu}>
                        <X size={24} />
                    </button>
                </div>

                {isLoggedIn && (
                    <div className="sidebar-user-profile">
                        <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Avatar" className="sidebar-avatar" />
                        <div className="sidebar-user-info">
                            <h4 className="sidebar-user-name">Minh Anh</h4>
                            <p className="sidebar-user-email">minhanh@example.com</p>
                        </div>
                    </div>
                )}

                <div className="sidebar-content">
                    <h3 className="sidebar-section-title">Điều hướng</h3>
                    <nav className="sidebar-nav">
                        {currentLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`sidebar-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {isLoggedIn && (
                            <>
                                <Link to="/profile" className="sidebar-link">Hồ sơ cá nhân</Link>
                                <Link to="/chat" className="sidebar-link flex justify-between">
                                    Tin nhắn <span className="sidebar-badge">2 mới</span>
                                </Link>
                            </>
                        )}
                    </nav>
                </div>

                <div className="sidebar-footer">
                    {isLoggedIn ? (
                        <Button
                            variant="outline"
                            fullWidth
                            leftIcon={<LogOut size={18} />}
                            className="text-red border-red-light"
                            onClick={() => setIsLoggedIn(false)}
                        >
                            Đăng xuất
                        </Button>
                    ) : (
                        <div className="sidebar-auth-actions">
                            <Button fullWidth onClick={() => { setIsLoggedIn(true); toggleMenu(); }}>Đăng nhập</Button>
                            <Button variant="outline" fullWidth className="mt-3">Đăng ký</Button>
                        </div>
                    )}
                </div>
            </div>

            <main className="user-main">
                <Outlet />
            </main>

            <footer className="user-footer-expanded">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand-col">
                            <Link to="/" className="logo mb-4">
                                <div className="logo-icon bg-gradient-primary">
                                    <MapPin size={24} color="white" />
                                </div>
                                <span className="logo-text text-xl">Roomie</span>
                            </Link>
                            <p className="footer-desc mt-4">
                                Nền tảng kết nối sinh viên và người trẻ Việt Nam tìm kiếm bạn cùng phòng lý tưởng dựa trên sở thích, lối sống và ngân sách phù hợp.
                            </p>
                            <div className="social-links mt-6">
                                <a href="#" className="social-icon"><Facebook size={20} /></a>
                                <a href="#" className="social-icon"><Twitter size={20} /></a>
                                <a href="#" className="social-icon"><Instagram size={20} /></a>
                                <a href="#" className="social-icon"><Youtube size={20} /></a>
                            </div>
                        </div>

                        <div className="footer-links-col">
                            <h3 className="footer-heading">Về Roomie</h3>
                            <ul>
                                <li><a href="#">Giới thiệu</a></li>
                                <li><a href="#">Cách hoạt động</a></li>
                                <li><a href="#">Cộng đồng</a></li>
                                <li><a href="#">Blog & Tin tức</a></li>
                            </ul>
                        </div>

                        <div className="footer-links-col">
                            <h3 className="footer-heading">Hỗ trợ</h3>
                            <ul>
                                <li><a href="#">Trung tâm trợ giúp</a></li>
                                <li><a href="#">Câu hỏi thường gặp</a></li>
                                <li><a href="#">Quy định an toàn</a></li>
                                <li><a href="#">Liên hệ với chúng tôi</a></li>
                            </ul>
                        </div>

                        <div className="footer-links-col">
                            <h3 className="footer-heading">Chính sách</h3>
                            <ul>
                                <li><a href="#">Điều khoản sử dụng</a></li>
                                <li><a href="#">Bảo mật thông tin</a></li>
                                <li><a href="#">Giải quyết khiếu nại</a></li>
                                <li><a href="#">Quy chế hoạt động</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom-line">
                        <p>© 2024 TimO. Một sản phẩm dành cho cộng đồng người trẻ Việt Nam.</p>
                        <div className="bottom-links">
                            <a href="#">Tiếng Việt</a>
                            <span className="dot-sep">•</span>
                            <a href="#">VNĐ</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default UserLayout;
