import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    TrendingUp,
    BarChart3,
    Users,
    Settings,
    PieChart,
    Activity,
    BrainCircuit,
    Sliders
} from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Overview', path: '/' },
        { icon: TrendingUp, label: 'Financials', path: '/financials' },
        { icon: BarChart3, label: 'Marketing', path: '/marketing' },
        { icon: Users, label: 'Customers', path: '/customers' },
        { icon: Activity, label: 'Operations', path: '/operations' },
        { icon: Sliders, label: 'Drivers', path: '/drivers' },
        { icon: BrainCircuit, label: 'Predictive', path: '/predictive' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <aside style={{
            width: '260px',
            backgroundColor: 'var(--bg-secondary)',
            borderRight: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0
        }}>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                    width: '36px',
                    height: '36px',
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px var(--accent-glow)'
                }}>
                    <PieChart size={20} color="white" />
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', letterSpacing: '-0.5px' }}>
                    Growth<span style={{ color: 'var(--accent-primary)' }}>IQ</span>
                </h2>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        style={({ isActive }) => ({
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                            backgroundColor: isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                            fontWeight: isActive ? 500 : 400,
                            transition: 'all 0.2s ease',
                            borderLeft: isActive ? '3px solid var(--accent-primary)' : '3px solid transparent'
                        })}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    © 2026 GrowthIQ Inc.
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;
