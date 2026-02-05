import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ComposedChart,
    Line
} from 'recharts';
import { DollarSign, TrendingUp, Wallet, ArrowDownRight } from 'lucide-react';
import { financialData } from '../data/mockData';

const FinancialCard = ({ title, value, subtext, icon: Icon, trend }) => (
    <div style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        flex: 1
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{
                padding: '0.75rem',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--accent-primary)'
            }}>
                <Icon size={24} />
            </div>
            {trend && (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: trend === 'up' ? 'var(--success)' : 'var(--danger)',
                    fontSize: '0.875rem',
                    fontWeight: 500
                }}>
                    <TrendingUp size={16} />
                    <span>+18.5%</span>
                </div>
            )}
        </div>
        <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>{value}</p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{subtext}</p>
    </div>
);

const FinancialPerformance = () => {
    // Calculate totals for cards (simplified)
    const latestMonth = financialData.revenueBreakdown[financialData.revenueBreakdown.length - 1];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Financial Performance</h1>
                <p style={{ color: 'var(--text-muted)' }}>Detailed P&L analysis: Gross to Net to EBITDA.</p>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <FinancialCard
                    title="Gross Revenue (Jun)"
                    value={`$${(latestMonth.grossRevenue / 1000).toFixed(0)}k`}
                    subtext="Top line performance"
                    icon={DollarSign}
                    trend="up"
                />
                <FinancialCard
                    title="COGS"
                    value={`$${(latestMonth.cogs / 1000).toFixed(0)}k`}
                    subtext="Cost of Goods Sold"
                    icon={Wallet}
                />
                <FinancialCard
                    title="EBITDA"
                    value={`$${(latestMonth.ebitda / 1000).toFixed(0)}k`}
                    subtext={`${((latestMonth.ebitda / latestMonth.netRevenue) * 100).toFixed(1)}% Margin`}
                    icon={TrendingUp}
                    trend="up"
                />
            </div>

            <div style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)'
            }}>
                <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Profitability Waterfall</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Revenue vs COGS vs OpEx breakdown.</p>
                    </div>
                    <div style={{ textAlign: 'right', maxWidth: '400px' }}>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                            <strong>Executive Insight:</strong> {financialData.summary.insight}
                        </p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--accent-secondary)' }}>
                            <strong>Implication:</strong> {financialData.summary.implication}
                        </p>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={financialData.revenueBreakdown} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                        <XAxis dataKey="month" stroke="var(--text-muted)" tickLine={false} axisLine={false} />
                        <YAxis stroke="var(--text-muted)" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
                            itemStyle={{ color: 'var(--text-primary)' }}
                            formatter={(value) => `$${value.toLocaleString()}`}
                        />
                        <Legend wrapperStyle={{ paddingTop: '20px' }} />
                        <Bar dataKey="grossRevenue" name="Gross Revenue" fill="#334155" radius={[4, 4, 0, 0]} maxBarSize={50} />
                        <Bar dataKey="netRevenue" name="Net Revenue" fill="#6366f1" radius={[4, 4, 0, 0]} maxBarSize={50} />
                        <Line type="monotone" dataKey="ebitda" name="EBITDA" stroke="var(--success)" strokeWidth={3} dot={{ r: 4, fill: 'var(--bg-primary)', strokeWidth: 2 }} />
                        <Line type="monotone" dataKey="cogs" name="COGS" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default FinancialPerformance;
