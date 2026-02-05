// Executive Overview Data
export const executiveData = {
    kpis: [
        {
            id: 'rev',
            title: 'Total Revenue',
            value: '$4.2M',
            change: '+18.5%',
            trend: 'up',
            target: '$4.0M',
            insight: 'Surpassed Q3 targets driven by Enterprise expansion.',
            implication: 'Allocate surplus to Q4 R&D initiatives.'
        },
        {
            id: 'ebitda',
            title: 'EBITDA Margin',
            value: '22.4%',
            change: '+2.1%',
            trend: 'up',
            target: '20.0%',
            insight: 'Operational efficiencies reduced overhead costs.',
            implication: 'Sustainable growth; potential for dividend or reinvestment.'
        },
        {
            id: 'cac',
            title: 'CAC',
            value: '$450',
            change: '-5.2%',
            trend: 'down', // Down is good for CAC
            target: '$475',
            insight: 'Organic channels performing better than paid search.',
            implication: 'Shift 15% of ad spend to content marketing.'
        },
        {
            id: 'nps',
            title: 'NPS Score',
            value: '74',
            change: '+4',
            trend: 'up',
            target: '70',
            insight: 'High satisfaction with new "Pro" features.',
            implication: 'Leverage promoters for referral programs.'
        }
    ]
};

// Financial Performance Data
export const financialData = {
    revenueBreakdown: [
        { month: 'Jan', grossRevenue: 320000, netRevenue: 290000, cogs: 120000, opex: 100000, ebitda: 70000 },
        { month: 'Feb', grossRevenue: 340000, netRevenue: 310000, cogs: 130000, opex: 105000, ebitda: 75000 },
        { month: 'Mar', grossRevenue: 380000, netRevenue: 350000, cogs: 140000, opex: 110000, ebitda: 100000 },
        { month: 'Apr', grossRevenue: 410000, netRevenue: 380000, cogs: 155000, opex: 115000, ebitda: 110000 },
        { month: 'May', grossRevenue: 390000, netRevenue: 360000, cogs: 150000, opex: 120000, ebitda: 90000 },
        { month: 'Jun', grossRevenue: 450000, netRevenue: 420000, cogs: 170000, opex: 125000, ebitda: 125000 },
    ],
    summary: {
        insight: 'EBITDA margins have expanded from 21% to 29% over H1.',
        implication: 'Cost control measures in COGS are working; scale these practices globally.'
    }
};

// Marketing Analytics Data
export const marketingData = {
    funnel: [
        { stage: 'Impressions', value: 1250000, conversion: '100%' },
        { stage: 'Site Visits', value: 350000, conversion: '28%' },
        { stage: 'Leads', value: 45000, conversion: '12.8%' },
        { stage: 'SQLs', value: 12000, conversion: '26.6%' },
        { stage: 'Customers', value: 3200, conversion: '26.6%' },
    ],
    channels: [
        { name: 'Direct', cac: 120, ltv: 3500, roas: 12.5, volume: 800 },
        { name: 'Organic Search', cac: 85, ltv: 3200, roas: 15.2, volume: 1200 },
        { name: 'Paid Search', cac: 550, ltv: 2800, roas: 3.2, volume: 900 },
        { name: 'LinkedIn', cac: 800, ltv: 9500, roas: 4.1, volume: 300 }, // High LTV Enterprise
    ],
    insight: 'LinkedIn drives highest LTV ($9.5k) despite high CAC.',
    implication: 'Increase LinkedIn budget to capture more Enterprise accounts.'
};

// Customer Segmentation Data
export const customerData = {
    segments: [
        { name: 'Enterprise', count: 150, mrr: 250000, churn: '2.1%', growth: '+15%' },
        { name: 'Mid-Market', count: 450, mrr: 180000, churn: '5.8%', growth: '+8%' },
        { name: 'SMB', count: 2800, mrr: 140000, churn: '12.4%', growth: '+3%' },
    ],
    retention: [
        { month: 0, retention: 100 },
        { month: 1, retention: 92 },
        { month: 3, retention: 85 },
        { month: 6, retention: 78 },
        { month: 12, retention: 72 },
    ],
    insight: 'SMB churn is dragging down overall retention (12.4%).',
    implication: 'Implement automated onboarding for SMBs to improve early adoption.'
};

// Operational Efficiency Data
export const operationsData = {
    fulfillment: [
        { week: 'W1', cycleTime: 2.4, costPerUnit: 12.50, defectRate: '1.2%' },
        { week: 'W2', cycleTime: 2.3, costPerUnit: 12.20, defectRate: '1.1%' },
        { week: 'W3', cycleTime: 2.1, costPerUnit: 11.80, defectRate: '0.9%' },
        { week: 'W4', cycleTime: 2.0, costPerUnit: 11.50, defectRate: '0.8%' },
    ],
    quality: {
        score: 98.2,
        target: 99.0,
        issues: [
            { type: 'Shipping Delay', count: 12, impact: 'Medium' },
            { type: 'Packaging', count: 5, impact: 'Low' },
        ]
    },
    insight: 'Cycle time reduced by 16% this month.',
    implication: 'Faster fulfillment is correlated with higher NPS; continue warehouse automation.'
};

// Performance Drivers Data (Regression/Correlation)
export const driversData = {
    factors: [
        { factor: 'Sales Calls', correlation: 0.85, impact: 'High', trend: 'up' },
        { factor: 'Site Speed', correlation: 0.65, impact: 'Medium', trend: 'stable' },
        { factor: 'Ad Spend', correlation: 0.45, impact: 'Low', trend: 'down' }, // Diminishing returns
        { factor: 'Support Response', correlation: -0.75, impact: 'High', trend: 'improving' } // Negative correl with churn
    ],
    insight: 'Sales activity is the strongest predictor of monthly revenue.',
    implication: 'Incentivize higher call volume for Q4 push.'
};

// Scenario Analysis Data
export const scenarioData = {
    scenarios: [
        { name: 'Base Case', revenue: 5.2, ebitda: 1.1, growth: '12%', assumptions: 'Current trajectory' },
        { name: 'Recession', revenue: 4.1, ebitda: 0.6, growth: '-5%', assumptions: '20% churn increase' },
        { name: 'Expansion', revenue: 6.8, ebitda: 1.8, growth: '25%', assumptions: 'New market launch' },
    ],
    variables: {
        priceElasticity: -1.5,
        marketGrowth: 0.05
    },
    insight: 'Even in recession scenario, EBITDA remains positive.',
    implication: 'Business is resilient; maintain cash reserves for "Expansion" opportunity.'
};
export const predictiveData = [
    {
        scenario: "Base Case",
        revenueGrowth: 8,
        profitImpact: 5,
        retentionRate: 70
    },
    {
        scenario: "Marketing Spend +10%",
        revenueGrowth: 14,
        profitImpact: 9,
        retentionRate: 72
    },
    {
        scenario: "Cost Reduction -5%",
        revenueGrowth: 10,
        profitImpact: 12,
        retentionRate: 70
    },
    {
        scenario: "Retention Improvement +15%",
        revenueGrowth: 18,
        profitImpact: 15,
        retentionRate: 82
    }
]
