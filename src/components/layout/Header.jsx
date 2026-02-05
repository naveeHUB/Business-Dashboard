import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
    return (
        <header style={{
            height: '70px',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            backgroundColor: 'var(--bg-primary)',
            position: 'sticky',
            top: 0,
            zIndex: 10
        }}>
            <div className="search-bar" style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'var(--bg-secondary)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                width: '300px',
                border: '1px solid var(--border-color)'
            }}>
                <Search size={18} color="var(--text-muted)" />
                <input
                    type="text"
                    placeholder="Search analytics..."
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        marginLeft: '0.75rem',
                        outline: 'none',
                        width: '100%'
                    }}
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <button style={{ position: 'relative', color: 'var(--text-muted)' }}>
                    <Bell size={20} />
                    <span style={{
                        position: 'absolute',
                        top: -2,
                        right: -2,
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'var(--accent-primary)',
                        borderRadius: '50%'
                    }} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>NavaneethaKrishnan V</p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Junior Business Analyst</p>
                    </div>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--border-color)'
                    }}>
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
