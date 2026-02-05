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
    Line,
    Area
} from 'recharts';
import { Activity, Clock, PackageCheck, AlertTriangle } from 'lucide-react';
import { operationsData } from '../data/mockData';

const OpCard = ({ title, value, status, icon: Icon, subtext }) => (
    <div style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    }}>
        <div style={{
            padding: '1rem',
            borderRadius: '50%',
            backgroundColor: status === 'good' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
            color: status === 'good' ? 'var(--success)' : 'var(--warning)'
        }}>
            <Icon size={24} />
        </div>
        <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{title}</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{value}</h3>
            {subtext && <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{subtext}</p>}
        </div>
    </div>
);

const OperationalEfficiency = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Operational Efficiency</h1>
                <p style={{ color: 'var(--text-muted)' }}>Supply chain velocity, quality assurance, and unit economics.</p>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <OpCard title="Avg Cycle Time" value={`${operationsData.fulfillment[3].cycleTime} days`} status="good" icon={Clock} subtext="Target: < 2.5 days" />
                <OpCard title="Quality Score" value={operationsData.quality.score} status="good" icon={PackageCheck} subtext={`Target: ${operationsData.quality.target}`} />
                <OpCard title="Cost Per Unit" value={`$${operationsData.fulfillment[3].costPerUnit.toFixed(2)}`} status="good" icon={Activity} subtext="Down 8% MoM" />
                <OpCard title="Defect Rate" value={operationsData.fulfillment[3].defectRate} status="good" icon={AlertTriangle} subtext="Within Sigma limits" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)'
                }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Fulfillment Efficiency Trends</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                            <strong>Insight:</strong> {operationsData.insight}
                        </p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--accent-secondary)' }}>
                            <strong>Implication:</strong> {operationsData.implication}
                        </p>
                    </div>

                    <ResponsiveContainer width="100%" height={300}>
                        <ComposedChart data={operationsData.fulfillment}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                            <XAxis dataKey="week" stroke="var(--text-muted)" tickLine={false} axisLine={false} />
                            <YAxis yAxisId="left" stroke="var(--text-muted)" tickLine={false} axisLine={false} label={{ value: 'Cycle Time (Days)', angle: -90, position: 'insideLeft', fill: 'var(--text-muted)' }} />
                            <YAxis yAxisId="right" orientation="right" stroke="var(--text-muted)" tickLine={false} axisLine={false} label={{ value: 'Cost ($)', angle: 90, position: 'insideRight', fill: 'var(--text-muted)' }} />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
                                itemStyle={{ color: 'var(--text-primary)' }}
                            />
                            <Legend />
                            <Bar yAxisId="right" dataKey="costPerUnit" name="Cost Per Unit ($)" fill="#334155" barSize={30} radius={[4, 4, 0, 0]} />
                            <Line yAxisId="left" type="monotone" dataKey="cycleTime" name="Cycle Time (Days)" stroke="var(--accent-primary)" strokeWidth={3} dot={{ r: 4 }} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>

                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)'
                }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '2rem' }}>Quality Issues Breakdown</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={operationsData.quality.issues} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" horizontal={false} />
                            <XAxis type="number" stroke="var(--text-muted)" tickLine={false} axisLine={false} />
                            <YAxis dataKey="type" type="category" stroke="var(--text-primary)" tickLine={false} axisLine={false} width={100} />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
                                itemStyle={{ color: 'var(--text-primary)' }}
                                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                            />
                            <Bar dataKey="count" name="Incidents" fill="var(--warning)" radius={[0, 4, 4, 0]} barSize={24} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default OperationalEfficiency;
