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
    FunnelChart,
    Funnel,
    LabelList,
    ScatterChart,
    Scatter,
    ZAxis
} from 'recharts';
import { Megaphone, Target, MousePointer2, TrendingUp, Users } from 'lucide-react';
import { marketingData } from '../data/mockData';

const COLORS = ['#6366f1', '#818cf8', '#334155', '#94a3b8', '#cbd5e1'];

const MetricCard = ({ title, value, icon: Icon, color, subtext }) => (
    <div style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    }}>
        <div style={{
            padding: '1rem',
            borderRadius: '50%',
            backgroundColor: `rgba(${color}, 0.1)`,
            color: `rgb(${color})`
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

const MarketingEffectiveness = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Marketing Analytics</h1>
                <p style={{ color: 'var(--text-muted)' }}>Acquisition efficiency, LTV:CAC ratios, and funnel performance.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                <MetricCard title="Total Leads" value={marketingData.funnel[2].value.toLocaleString()} icon={Users} color="99, 102, 241" subtext="Top of funnel healthy" />
                <MetricCard title="Avg CAC" value="$450" icon={Target} color="239, 68, 68" subtext="Target: $475 (Good)" />
                <MetricCard title="Avg LTV" value="$3,200" icon={TrendingUp} color="16, 185, 129" subtext="LTV:CAC Ratio = 7.1" />
                <MetricCard title="ROAS" value="4.5x" icon={MousePointer2} color="245, 158, 11" subtext="Return on Ad Spend" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)'
                }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '2rem' }}>Conversion Funnel</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <FunnelChart>
                            <Tooltip
                                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
                                itemStyle={{ color: 'var(--text-primary)' }}
                            />
                            <Funnel
                                data={marketingData.funnel}
                                dataKey="value"
                                nameKey="stage"
                            >
                                <LabelList position="right" fill="var(--text-primary)" stroke="none" dataKey="stage" />
                            </Funnel>
                        </FunnelChart>
                    </ResponsiveContainer>
                </div>

                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)'
                }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Channel Efficiency (LTV vs CAC)</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                            <strong>Insight:</strong> {marketingData.insight}
                        </p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--accent-secondary)' }}>
                            <strong>Implication:</strong> {marketingData.implication}
                        </p>
                    </div>

                    <ResponsiveContainer width="100%" height={300}>
                        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                            <XAxis type="number" dataKey="cac" name="CAC" unit="$" stroke="var(--text-muted)" />
                            <YAxis type="number" dataKey="ltv" name="LTV" unit="$" stroke="var(--text-muted)" />
                            <ZAxis type="number" dataKey="volume" range={[60, 400]} name="Volume" />
                            <Tooltip
                                cursor={{ strokeDasharray: '3 3' }}
                                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
                                itemStyle={{ color: 'var(--text-primary)' }}
                            />
                            <Scatter name="Channels" data={marketingData.channels} fill="var(--accent-primary)">
                                <LabelList dataKey="name" position="top" style={{ fill: 'var(--text-primary)', fontSize: '0.75rem' }} />
                            </Scatter>
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)'
            }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '2rem' }}>ROAS by Channel</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={marketingData.channels} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" horizontal={false} />
                        <XAxis type="number" stroke="var(--text-muted)" tickLine={false} axisLine={false} />
                        <YAxis dataKey="name" type="category" width={100} stroke="var(--text-primary)" tickLine={false} axisLine={false} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
                            itemStyle={{ color: 'var(--text-primary)' }}
                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        />
                        <Bar dataKey="roas" name="ROAS (x)" fill="var(--success)" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MarketingEffectiveness;
