import React, { useState } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ComposedChart,
    Line
} from 'recharts';
import { Sparkles, TrendingUp, AlertCircle, TrendingDown } from 'lucide-react';
import { predictiveData, scenarioData } from '../data/mockData';

const ScenarioCard = ({ name, growth, revenue, ebitda, assumptions, active, onClick }) => (
    <div
        onClick={onClick}
        style={{
            backgroundColor: active ? 'rgba(99, 102, 241, 0.1)' : 'var(--bg-secondary)',
            border: active ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-lg)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        {active && (
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                backgroundColor: 'var(--accent-primary)'
            }} />
        )}
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: active ? 'var(--accent-primary)' : 'var(--text-primary)' }}>{name}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Proj. Revenue</span>
                <span style={{ fontWeight: 500 }}>${revenue}M</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Proj. EBITDA</span>
                <span style={{ fontWeight: 500 }}>${ebitda}M</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Growth</span>
                <span style={{ fontWeight: 500, color: growth.startsWith('-') ? 'var(--danger)' : 'var(--success)' }}>{growth}</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                "{assumptions}"
            </p>
        </div>
    </div>
);

const PredictiveAnalytics = () => {
    const [activeScenario, setActiveScenario] = useState('Base Case');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Scenario Planning</h1>
                <p style={{ color: 'var(--text-muted)' }}>AI-driven forecasting and financial modeling.</p>
            </div>

            <div style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)'
            }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Revenue Forecast (6 Months)</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        <strong>Forecast:</strong> {scenarioData.insight}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--accent-secondary)' }}>
                        <strong>Recommendation:</strong> {scenarioData.implication}
                    </p>
                </div>

                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={predictiveData.revenueForecast}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                        <XAxis dataKey="month" stroke="var(--text-muted)" tickLine={false} axisLine={false} />
                        <YAxis stroke="var(--text-muted)" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: 'var(--radius-md)' }}
                            itemStyle={{ color: 'var(--text-primary)' }}
                        />
                        <Legend />

                        {/* Confidence Interval */}
                        <Area type="monotone" dataKey="upperBound" stroke="none" fill="#6366f1" fillOpacity={0.1} />
                        <Area type="monotone" dataKey="lowerBound" stroke="none" fill="var(--bg-secondary)" fillOpacity={1} />

                        <BoxPlotPrediction />
                        <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} name="Actual Data" />
                        <Line type="monotone" dataKey="predicted" stroke="#6366f1" strokeDasharray="5 5" strokeWidth={3} dot={{ r: 4 }} name="Forecast Mean" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Financial Scenarios</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                    {scenarioData.scenarios.map((scenario) => (
                        <ScenarioCard
                            key={scenario.name}
                            {...scenario}
                            active={activeScenario === scenario.name}
                            onClick={() => setActiveScenario(scenario.name)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Simplified component to fix re-render issues in ComposedChart children
const BoxPlotPrediction = () => null;

export default PredictiveAnalytics;
