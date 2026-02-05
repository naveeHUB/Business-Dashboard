import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign, Activity, TrendingUp, Users } from 'lucide-react';
import { executiveData, financialData } from '../data/mockData';

const StatCard = ({ title, value, change, trend, target, insight, implication, icon: Icon }) => (
    <div style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        gridColumn: 'span 1'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div style={{
                padding: '0.75rem',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--accent-primary)'
            }}>
                <Icon size={24} />
            </div>
            <div style={{ textAlign: 'right' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: trend === 'up' ? 'var(--success)' : 'var(--danger)',
                    fontSize: '0.875rem',
                    fontWeight: 500
                }}>
                    {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    <span>{change}</span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>vs target {target}</p>
            </div>
        </div>

        <div>
            <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{title}</h3>
            <p style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>{value}</p>
        </div>

        {/* Insight & Implication Section */}
        <div style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-color)',
            fontSize: '0.75rem'
        }}>
            <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                <strong>Insight:</strong> {insight}
            </p>
            <p style={{ color: 'var(--accent-secondary)' }}>
                <strong>Action:</strong> {implication}
            </p>
        </div>
    </div>
);

const DashboardHome = () => {
    // Map icons to KPI IDs manually for now
    const getIcon = (id) => {
        switch (id) {
            case 'rev': return DollarSign;
            case 'ebitda': return TrendingUp;
            case 'cac': return Users;
            case 'nps': return Activity;
            default: return Activity;
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Executive Overview</h1>
                    <p style={{ color: 'var(--text-muted)' }}>High-level scorecard tracking financial, customer, and operational health.</p>
                </div>
                <button style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 500,
                    boxShadow: 'var(--shadow-glow)'
                }}>
                    Export Briefing
                </button>
            </div>

            {/* KPI Scorecards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                {executiveData.kpis.map((kpi) => (
                    <StatCard
                        key={kpi.id}
                        {...kpi}
                        icon={getIcon(kpi.id)}
                    />
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                {/* Main Chart area reusing Financial Data for Overview */}
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)',
                    minHeight: '400px'
                }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>EBITDA Trend (H1)</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Operating profitability after COGS and OpEx.</p>
                    </div>

                    <ResponsiveContainer width="100%" height={320}>
                        <AreaChart data={financialData.revenueBreakdown}>
                            <defs>
                                <linearGradient id="colorEbitda" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                            <XAxis dataKey="month" stroke="var(--text-muted)" tickLine={false} axisLine={false} />
                            <YAxis stroke="var(--text-muted)" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
                                itemStyle={{ color: 'var(--text-primary)' }}
                                formatter={(value) => [`$${value.toLocaleString()}`, 'EBITDA']}
                            />
                            <Area type="monotone" dataKey="ebitda" stroke="var(--accent-primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorEbitda)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Global Insight Card */}
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Quarterly Synthesis</h3>

                    <div style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderLeft: '4px solid var(--success)',
                        borderRadius: '0 var(--radius-md) var(--radius-md) 0'
                    }}>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--success)' }}>Profitability</h4>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{financialData.summary.insight}</p>
                    </div>

                    <div style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        borderLeft: '4px solid var(--danger)',
                        borderRadius: '0 var(--radius-md) var(--radius-md) 0'
                    }}>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--danger)' }}>Retention Risk</h4>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>SMB churn (12.4%) is offsetting Enterprise gains. Immediate intervention needed in onboarding.</p>
                    </div>

                    <div style={{
                        marginTop: 'auto',
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border-color)'
                    }}>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Last updated: Just now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
