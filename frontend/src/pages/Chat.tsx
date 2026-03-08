import React, { useState } from 'react';
import { Search, Calendar, Heart, Paperclip, Smile, Plus, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import './Chat.css';

const conversations = [
    {
        id: 1,
        name: 'Minh Anh',
        avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        lastMessage: 'Chào bạn, mình thấy bạn đang...',
        time: '2 phút trước',
        unread: true,
        active: true
    },
    {
        id: 2,
        name: 'Tuấn Kiệt',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        lastMessage: 'Vâng ạ, khi nào bạn rảnh thì...',
        time: '10 phút',
        unread: false,
        active: false
    },
    {
        id: 3,
        name: 'Khánh Linh',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        lastMessage: 'Phòng còn không bạn ơi?',
        time: '1 giờ',
        unread: false,
        active: false
    },
    {
        id: 4,
        name: 'Hoàng Nam',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        lastMessage: 'Cảm ơn bạn nhé!',
        time: 'Hôm qua',
        unread: false,
        active: false
    }
];

const messages = [
    {
        id: 1,
        senderId: 1,
        text: 'Chào bạn, mình thấy bạn đang tìm phòng ở Quận 7 đúng không? Mình có xem qua profile của bạn và thấy khá hợp gu nhau đó! 😊',
        time: '14:20'
    },
    {
        id: 2,
        senderId: 'me',
        text: 'Đúng rồi ạ! Mình đang tìm khu gần ĐH Tôn Đức Thắng. Phòng bên bạn giá cả thế nào vậy ạ?',
        time: '14:22',
        isMe: true
    },
    {
        id: 3,
        senderId: 1,
        text: 'Phòng mình ở chung cư, giá 3tr5 chưa gồm phí quản lý nhen. Bạn có muốn xem thêm ảnh phòng không?',
        time: '14:25'
    },
    {
        id: 4,
        senderId: 'me',
        text: 'Có chứ, bạn gửi mình xem với nhé. Cảm ơn bạn nhiều!',
        time: '14:26',
        isMe: true
    }
];

const Chat: React.FC = () => {
    const [activeChat, setActiveChat] = useState(conversations[0]);

    return (
        <div className="chat-layout">
            {/* Sidebar / Conversation List */}
            <div className="chat-sidebar">
                <div className="chat-search">
                    <div className="search-input-wrapper">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Tìm cuộc trò chuyện..." className="search-input" />
                    </div>
                </div>

                <div className="conversation-list">
                    {conversations.map(conv => (
                        <div
                            key={conv.id}
                            className={`conversation-item ${activeChat.id === conv.id ? 'active' : ''}`}
                            onClick={() => setActiveChat(conv)}
                        >
                            <div className="conv-avatar">
                                <img src={conv.avatar} alt={conv.name} />
                                {conv.active && <div className="online-indicator"></div>}
                            </div>

                            <div className="conv-content">
                                <div className="conv-header">
                                    <h4 className="conv-name">{conv.name}</h4>
                                    <span className="conv-time">{conv.time}</span>
                                </div>
                                <div className="conv-message">
                                    <p className={conv.unread ? 'font-bold text-main' : ''}>{conv.lastMessage}</p>
                                    {conv.unread && <div className="unread-dot"></div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="chat-main">
                {/* Chat Header */}
                <div className="chat-header">
                    <div className="chat-header-info">
                        <img src={activeChat.avatar} alt={activeChat.name} className="chat-header-avatar" />
                        <div>
                            <h2 className="chat-header-name flex items-center gap-2">
                                {activeChat.name}, 20 tuổi
                                <span className="bg-green-light text-green text-xs px-2 py-0.5 rounded-full font-bold">SV NĂM 2</span>
                            </h2>
                            <div className="chat-header-meta">
                                <span className="text-muted text-sm">📍 Quận 7, TP.HCM</span>
                                <span className="text-primary text-sm font-medium">🔥 Tương thích với bạn: 85%</span>
                            </div>
                            <a href="#" className="view-profile-link">Xem hồ sơ đầy đủ</a>
                        </div>
                    </div>

                    <div className="chat-header-actions">
                        <Button variant="outline" leftIcon={<Calendar size={16} className="text-purple" />} className="bg-purple-lightest border-none text-purple hover:bg-purple-light transition-colors">
                            Hẹn xem phòng
                        </Button>
                        <Button variant="outline" leftIcon={<Heart size={16} className="text-red" />} className="bg-red-lightest border-none text-red hover:bg-red-light transition-colors">
                            Lưu yêu thích
                        </Button>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="chat-messages bg-slate-50">
                    <div className="chat-date-divider">
                        <span className="date-badge">HÔM NAY</span>
                    </div>

                    <div className="messages-list">
                        {messages.map(msg => (
                            <div key={msg.id} className={`message-wrapper ${msg.isMe ? 'message-mine' : 'message-theirs'}`}>
                                {!msg.isMe && (
                                    <img src={activeChat.avatar} alt={activeChat.name} className="message-avatar" />
                                )}

                                <div className="message-content">
                                    <div className={`message-bubble ${msg.isMe ? 'bubble-mine shadow-md' : 'bubble-theirs shadow-sm'}`}>
                                        {msg.text}
                                    </div>
                                    <div className="message-time">
                                        {msg.time} {msg.isMe && <span className="text-primary ml-1">✓✓</span>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Input */}
                <div className="chat-input-area border-t border-gray-100 p-4 bg-white flex items-center gap-3">
                    <button className="icon-btn text-muted hover:text-primary transition-colors"><Paperclip size={20} /></button>
                    <button className="icon-btn text-muted hover:text-primary transition-colors"><Smile size={20} /></button>
                    <button className="icon-btn text-muted hover:text-primary transition-colors bg-gray-100 rounded-full p-1"><Plus size={16} /></button>

                    <div className="input-container flex-1 bg-gray-50 rounded-full px-4 py-3 border border-gray-200 focus-within:border-primary transition-colors ml-2">
                        <input type="text" placeholder="Nhập tin nhắn..." className="w-full bg-transparent border-none outline-none text-sm" />
                    </div>

                    <button className="btn-send bg-primary text-white p-3 rounded-full hover:bg-primary-hover transition-colors shadow-md ml-2">
                        <Send size={20} fill="currentColor" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
