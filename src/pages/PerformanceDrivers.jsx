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
    ScatterChart,
    Scatter,
    ZAxis,
    Cell
} from 'recharts';
import { Gauge, Zap, TrendingUp, AlertTriangle } from 'lucide-react';
import { driversData } from '../data/mockData';

const DriverCard = ({ factor, correlation, impact, trend }) => (
    <div style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                    padding: '0.5rem',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--accent-primary)'
                }}>
                    <Zap size={20} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{factor}</h3>
            </div>
            <span style={{
                fontSize: '0.75rem',
                padding: '0.25rem 0.5rem',
                borderRadius: '1rem',
                backgroundColor: impact === 'High' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(148, 163, 184, 0.1)',
                color: impact === 'High' ? 'var(--accent-primary)' : 'var(--text-muted)',
                fontWeight: 600
            }}>
                {impact} Impact
            </span>
        </div>

        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Correlation</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>{correlation}</span>
            </div>
            <div style={{
                width: '100%',
                height: '6px',
                backgroundColor: 'var(--bg-tertiary)',
                borderRadius: '3px',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: `${Math.abs(correlation) * 100}%`,
                    height: '100%',
                    backgroundColor: correlation > 0 ? 'var(--success)' : 'var(--warning)',
                    borderRadius: '3px'
                }} />
            </div>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Trend: <strong>{trend}</strong>
        </div>
    </div>
);

const PerformanceDrivers = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Key Performance Drivers</h1>
                <p style={{ color: 'var(--text-muted)' }}>Regression analysis identifying top factors influencing revenue growth.</p>
            </div>

            <div style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '2rem'
            }}>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                    <Gauge size={32} />
                </div>
                <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Key Insight</h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>"{driversData.insight}"</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--accent-secondary)' }}><strong>Strategic implication:</strong> {driversData.implication}</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                {driversData.factors.map((driver) => (
                    <DriverCard key={driver.factor} {...driver} />
                ))}
            </div>

            <div style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)'
            }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '2rem' }}>Correlation Matrix</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={driversData.factors} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" horizontal={false} />
                        <XAxis type="number" domain={[-1, 1]} stroke="var(--text-muted)" tickLine={false} axisLine={false} />
                        <YAxis dataKey="factor" type="category" stroke="var(--text-primary)" tickLine={false} axisLine={false} width={120} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
                            itemStyle={{ color: 'var(--text-primary)' }}
                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        />
                        <Bar dataKey="correlation" name="Correlation Coefficient" radius={[0, 4, 4, 0]} barSize={24}>
                            {driversData.factors.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.correlation > 0 ? 'var(--success)' : 'var(--warning)'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PerformanceDrivers;
