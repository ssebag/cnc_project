import { useState } from 'react';
import type { ReportsPeriod } from '../../types/reports';
import {
  metricsDataConfig,
  revenueData,
  materialsWasteData,
  aiMetrics,
  topProducts,
  machineStats,
} from '../../data/mockReportsData';
import ReportsHeader from './components/ReportsHeader';
import TabFilters from './components/TabFilters';
import MetricCard from './components/MetricCard';
import RevenueTrendChart from './components/RevenueTrendChart';
import AIMetricsSection from './components/AIMetricsSection';
import MachineUsabilityCard from './components/MachineUsabilityCard';
import MaterialWasteTable from './components/MaterialWasteTable';
import TopProductsList from './components/TopProductsList';

export default function Reports() {
  const [activeTab, setActiveTab] = useState<ReportsPeriod>('month');

  return (
    <div className="min-h-screen bg-[#F5F7FA] bg-background" >
      <main className="w-full p-4 md:p-6 lg:p-8 pb-20 md:pb-8">
        <div className="space-y-6">
          {/* Header */}
          <ReportsHeader
            title="التقارير والتحليلات"
            subtitle="رؤى شاملة عن أداء الورشة"
          />

          {/* Tab Filters */}
          <TabFilters activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metricsDataConfig.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Charts Section: Revenue Chart + AI Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Revenue Chart - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <RevenueTrendChart
                data={revenueData}
                title="الإيرادات الشهرية"
                subtitle="آخر 5 أشهر"
              />
            </div>

            {/* AI Metrics Section - Takes 1 column */}
            <div className='bg-white p-[20px] rounded-[10px] border border-[#E5E7EB]'>
              <div className="mb-3">
                <h2 className="text-lg font-semibold text-foreground text-right">
                  مقاييس الذكاء الاصطناعي
                </h2>
              </div>
              <AIMetricsSection metrics={aiMetrics} />
            </div>
          </div>

          {/* Machine Usability + Material Waste Analysis Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
            {/* Machine Usability Card */}
            <div>
              <MachineUsabilityCard title="استخدام الماكينة" stats={machineStats} />
            </div>

            {/* Material Waste Table */}
            <div>
              <MaterialWasteTable
                data={materialsWasteData}
                title="تحليل هدر المواد"
                subtitle="توفير وتحسين"
              />
            </div>
          </div>

          {/* Top Products List */}
          <TopProductsList
            products={topProducts}
            title="أفضل المنتجات"
            subtitle="حسب الإيرادات"
          />
        </div>
      </main>
    </div>
  );
}
