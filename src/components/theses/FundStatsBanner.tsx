import React from 'react';
import { TrendingUp, PieChart, CheckCircle, Target } from 'lucide-react';

type StatCardProps = {
  icon: React.ElementType;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, prefix = '', suffix = '', decimals = 2 }) => {
  const Icon = icon;

  const formatValue = (val: number) => {
    if (typeof val !== 'number') return val;
    if (decimals === 0) {
      return Math.round(val).toLocaleString();
    }
    return val.toFixed(decimals);
  };

  return (
    <div className="bg-card-navy p-6 border border-border-gray">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-5 h-5 text-steel-gray" />
        <h3 className="font-semibold text-sm text-steel-gray uppercase tracking-wider">{label}</h3>
      </div>
      <p className="text-4xl font-bold text-white">
        {prefix}{formatValue(value)}{suffix}
      </p>
    </div>
  );
};

type FundStatsBannerProps = {
  stats: {
    nav: number;
    pnl: number;
    shares: number;
    benchmark: number;
  };
};

const FundStatsBanner: React.FC<FundStatsBannerProps> = ({ stats }) => {
  return (
    <div className="sticky top-20 z-10 bg-deep-navy-blue/80 backdrop-blur-lg -mx-6 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border-gray">
        <StatCard icon={PieChart} label="NAV" value={stats.nav} prefix="$" suffix="M" />
        <StatCard icon={TrendingUp} label="P&L (YTD)" value={stats.pnl} suffix="%" />
        <StatCard icon={CheckCircle} label="Shares" value={stats.shares} decimals={0} />
        <StatCard icon={Target} label="vs Benchmark" value={stats.benchmark} suffix="%" />
      </div>
    </div>
  );
};

export default FundStatsBanner;
