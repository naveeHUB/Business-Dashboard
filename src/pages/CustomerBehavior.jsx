import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line
} from 'recharts';
import { Users, UserMinus, UserPlus, Heart, ShieldCheck } from 'lucide-react';
import { customerData } from '../data/mockData';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444']; // Indigo, Green, Amber, Red

const CustomerBehavior = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Customer Intelligence</h1>
                <p style={{ color: 'var(--text-muted)' }}>Advanced segmentation, churn analysis, and cohort retention.</p>
            </div>

            {/* Segmentation Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                {customerData.segments.map((segment) => (
                    <div key={segment.name} style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-color)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div style={{
                                padding: '0.75rem',
                                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--accent-primary)'
                            }}>
                                <Users size={20} />
                            </div>
                            <span style={{
                                fontSize: '0.75rem',
                                padding: '0.25rem 0.5rem',
                                borderRadius: '1rem',
                                backgroundColor: segment.growth.startsWith('+') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                color: segment.growth.startsWith('+') ? 'var(--success)' : 'var(--danger)',
                                fontWeight: 600
                            }}>
                                {segment.growth} YoY
                            </span>
                        </div>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>{segment.name}</h3>
                        <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                            <div>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>MRR Contribution</p>
                                <p style={{ fontSize: '1.125rem', fontWeight: 700 }}>${(segment.mrr / 1000).toFixed(0)}k</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Churn Rate</p>
                                <p style={{ fontSize: '1.125rem', fontWeight: 700, color: parseFloat(segment.churn) > 5 ? 'var(--warning)' : 'var(--success)' }}>{segment.churn}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)'
                }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Cohort Retention Curve</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                            <strong>Analysis:</strong> {customerData.insight}
                        </p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--accent-secondary)' }}>
                            <strong>Strategic Action:</strong> {customerData.implication}
                        </p>
                    </div>

                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={customerData.retention}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                            <XAxis dataKey="month" stroke="var(--text-muted)" tickLine={false} axisLine={false} label={{ value: 'Months Since Acquisition', position: 'insideBottom', offset: -5, fill: 'var(--text-muted)' }} />
                            <YAxis stroke="var(--text-muted)" tickLine={false} axisLine={false} unit="%" domain={[60, 100]} />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
                                itemStyle={{ color: 'var(--text-primary)' }}
                            />
                            <Line type="monotone" dataKey="retention" stroke="var(--accent-primary)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)'
                }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '2rem' }}>Segment Distribution (Count)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={customerData.segments}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="count"
                            >
                                {customerData.segments.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
                                itemStyle={{ color: 'var(--text-primary)' }}
                            />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default CustomerBehavior;
