import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'; // أضف هذا السطر في الأعلى

import { useState } from 'react';
import {
  ArrowRight,
  Download,
  Printer,
  Edit3,
  Trash2,
  CheckCircle,
  Clock,
  User,
  Package,
  DollarSign,
  FileText,
  Brain,
  AlertTriangle
} from 'lucide-react';
import {Card, CardHeader} from './Card'
import AIConfidenceBadge from './AIConfidenceBadge'
import Button from './Button'


function OrderInfo() { 
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();
  
  const orderId = id; 

  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'svg' | 'ai-logs'>('overview');
  const orderData = {
    id: orderId,
    customer: {
      name: 'محمد أحمد',
      email: 'mohammed@example.com',
      phone: '+966 50 123 4567',
    },
    product: {
      name: 'قطع معدنية دائرية',
      description: 'قطعة دائرية بقطر 50 ملم مع 4 ثقوب',
      material: 'ألمنيوم 6061',
      quantity: 5,
      dimensions: '50×50×3 ملم',
      complexity: 'منخفض',
    },
    status: 'processing' as const,
    aiConfidence: 92,
    pricing: {
      material: 225,
      cutting: 400,
      machineTime: 75,
      complexity: 0,
      urgency: 0,
      discount: -50,
      total: 650,
    },
    timeline: [
      {
        step: 'تم إنشاء الطلب',
        status: 'completed',
        timestamp: '2026-05-18 09:15',
        user: 'محمد أحمد',
        details: 'تم إنشاء الطلب عبر النظام',
      },
      {
        step: 'معالجة بالذكاء الاصطناعي',
        status: 'completed',
        timestamp: '2026-05-18 09:16',
        user: 'النظام',
        details: 'تم توليد SVG بنجاح - ثقة 92%',
      },
      {
        step: 'التحقق الهندسي',
        status: 'completed',
        timestamp: '2026-05-18 09:17',
        user: 'النظام',
        details: 'لا توجد أخطاء هندسية',
      },
      {
        step: 'موافقة المشرف',
        status: 'completed',
        timestamp: '2026-05-18 10:30',
        user: 'أحمد المدير',
        details: 'تمت الموافقة على التصميم',
      },
      {
        step: 'قيد الإنتاج',
        status: 'active',
        timestamp: '2026-05-18 11:00',
        user: 'النظام',
        details: 'بدأ الإنتاج على الماكينة CNC',
      },
    ],
    aiLogs: [
      {
        step: 'تحليل الإدخال',
        timestamp: '2026-05-18 09:16:01',
        result: 'نجح',
        details: 'تم اكتشاف: دائرة، 4 ثقوب، أبعاد محددة',
        confidence: 95,
      },
      {
        step: 'توليد المسارات',
        timestamp: '2026-05-18 09:16:03',
        result: 'نجح',
        details: '5 مسارات متجهة تم إنشاؤها',
        confidence: 92,
      },
      {
        step: 'التحقق الهندسي',
        timestamp: '2026-05-18 09:16:05',
        result: 'نجح',
        details: 'مسارات مغلقة، لا تداخلات',
        confidence: 98,
      },
      {
        step: 'تحسين المسارات',
        timestamp: '2026-05-18 09:16:06',
        result: 'نجح',
        details: 'تم تقليل الهدر بنسبة 12%',
        confidence: 88,
      },
      {
        step: 'حساب التكلفة',
        timestamp: '2026-05-18 09:16:07',
        result: 'نجح',
        details: 'التكلفة الإجمالية: 650 ريال',
        confidence: 100,
      },
    ],
    geometry: {
      pathLength: 785,
      openPaths: 0,
      overlaps: 0,
      errors: 0,
      optimizations: 2,
      wasteReduction: 12,
    },
  };

  const tabs = [
    { id: 'overview' as const, label: 'نظرة عامة', icon: FileText },
    { id: 'timeline' as const, label: 'المسار الزمني', icon: Clock },
    { id: 'svg' as const, label: 'معاينة SVG', icon: Package },
    { id: 'ai-logs' as const, label: 'سجلات AI', icon: Brain },
  ];

  return (
    <div>
          <button 
          onClick={() => navigate(-1)} // يعود خطوة واحدة للخلف في المتصفح
          className="p-2 hover:bg-muted rounded-full transition-colors cursor-pointer"
          title="رجوع"
        >
          <ArrowRight className="w-6 h-6 text-foreground" />
        </button>
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-[var(--radius-md)] text-sm whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-card border-t-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader title="معلومات المنتج" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">اسم المنتج</p>
                  <p className="font-medium">{orderData.product.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">المادة</p>
                  <p className="font-medium">{orderData.product.material}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">الأبعاد</p>
                  <p className="font-medium">{orderData.product.dimensions}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">الكمية</p>
                  <p className="font-medium">{orderData.product.quantity} قطعة</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">التعقيد</p>
                  <p className="font-medium text-success">{orderData.product.complexity}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">ثقة الذكاء الاصطناعي</p>
                  <AIConfidenceBadge confidence={orderData.aiConfidence} size="sm" />
                </div>
              </div>
              <div className="mt-4 p-3 bg-muted rounded-[var(--radius-md)] text-right">
                <p className="text-sm text-muted-foreground mb-1">الوصف</p>
                <p>{orderData.product.description}</p>
              </div>
            </Card>

            <Card>
              <CardHeader title="التحقق الهندسي" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-3 bg-green-50 rounded-[var(--radius-md)] text-right">
                  <p className="text-xs text-muted-foreground mb-1">طول المسار</p>
                  <p className="text-xl font-bold text-success">{orderData.geometry.pathLength} ملم</p>
                </div>
                <div className="p-3 bg-green-50 rounded-[var(--radius-md)] text-right">
                  <p className="text-xs text-muted-foreground mb-1">مسارات مفتوحة</p>
                  <p className="text-xl font-bold text-success">{orderData.geometry.openPaths} ✓</p>
                </div>
                <div className="p-3 bg-green-50 rounded-[var(--radius-md)] text-right">
                  <p className="text-xs text-muted-foreground mb-1">تداخلات</p>
                  <p className="text-xl font-bold text-success">{orderData.geometry.overlaps} ✓</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-[var(--radius-md)] text-right">
                  <p className="text-xs text-muted-foreground mb-1">تحسينات</p>
                  <p className="text-xl font-bold text-primary">{orderData.geometry.optimizations}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-[var(--radius-md)] text-right">
                  <p className="text-xs text-muted-foreground mb-1">تقليل الهدر</p>
                  <p className="text-xl font-bold text-primary">{orderData.geometry.wasteReduction}%</p>
                </div>
                <div className="p-3 bg-green-50 rounded-[var(--radius-md)] text-right">
                  <p className="text-xs text-muted-foreground mb-1">أخطاء</p>
                  <p className="text-xl font-bold text-success">{orderData.geometry.errors} ✓</p>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader title="تفاصيل التسعير" />
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">تكلفة المواد ({orderData.product.quantity}x)</span>
                  <span className="font-medium">{orderData.pricing.material} ريال</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">تكلفة القطع</span>
                  <span className="font-medium">{orderData.pricing.cutting} ريال</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">وقت الماكينة</span>
                  <span className="font-medium">{orderData.pricing.machineTime} ريال</span>
                </div>
                {orderData.pricing.discount !== 0 && (
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">خصم الكمية</span>
                    <span className="font-medium text-success">{orderData.pricing.discount} ريال</span>
                  </div>
                )}
                <div className="flex justify-between py-3 bg-primary/10 px-4 rounded-[var(--radius-md)]">
                  <span className="font-semibold">الإجمالي</span>
                  <span className="text-2xl font-bold text-primary">{orderData.pricing.total} ريال</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader title="معلومات العميل" />
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right flex-1">
                    <p className="font-medium">{orderData.customer.name}</p>
                    <p className="text-sm text-muted-foreground">عميل</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-border space-y-2 text-right">
                  <p className="text-sm text-muted-foreground">البريد الإلكتروني</p>
                  <p className="text-sm">{orderData.customer.email}</p>
                </div>
                <div className="space-y-2 text-right">
                  <p className="text-sm text-muted-foreground">رقم الهاتف</p>
                  <p className="text-sm">{orderData.customer.phone}</p>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader title="إجراءات" />
              <div className="space-y-2">
                <Button variant="primary" className="w-full justify-center">
                  <CheckCircle className="w-4 h-4" />
                  تحديث الحالة
                </Button>
                <Button variant="secondary" className="w-full justify-center">
                  <Edit3 className="w-4 h-4" />
                  تعديل الطلب
                </Button>
                <Button variant="ghost" className="w-full justify-center">
                  <Download className="w-4 h-4" />
                  تنزيل SVG
                </Button>
                <Button variant="danger" className="w-full justify-center">
                  <Trash2 className="w-4 h-4" />
                  إلغاء الطلب
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeTab === 'timeline' && (
        <Card>
          <CardHeader title="المسار الزمني للطلب" subtitle="تتبع كامل لمراحل الطلب" />
          <div className="space-y-4">
            {orderData.timeline.map((event, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      event.status === 'completed'
                        ? 'bg-success text-white'
                        : event.status === 'active'
                        ? 'bg-primary text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {event.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : event.status === 'active' ? (
                      <Clock className="w-5 h-5 animate-pulse" />
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-current" />
                    )}
                  </div>
                  {index < orderData.timeline.length - 1 && (
                    <div className={`w-0.5 h-full min-h-[60px] ${
                      event.status === 'completed' ? 'bg-success' : 'bg-border'
                    }`} />
                  )}
                </div>
                <div className="flex-1 pb-8 text-right">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-xs text-muted-foreground">{event.timestamp}</p>
                    <h4 className="font-medium">{event.step}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{event.details}</p>
                  <p className="text-xs text-muted-foreground">بواسطة: {event.user}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'svg' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader title="معاينة التصميم" />
            <div className="bg-muted rounded-[var(--radius-lg)] p-8 flex items-center justify-center min-h-[400px] border-2 border-border">
              <svg width="300" height="300" viewBox="0 0 300 300">
                <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="105" cy="105" r="12" fill="currentColor" />
                <circle cx="195" cy="105" r="12" fill="currentColor" />
                <circle cx="195" cy="195" r="12" fill="currentColor" />
                <circle cx="105" cy="195" r="12" fill="currentColor" />
              </svg>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="secondary" size="sm" className="flex-1">
                تكبير
              </Button>
              <Button variant="secondary" size="sm" className="flex-1">
                تصغير
              </Button>
              <Button variant="secondary" size="sm" className="flex-1">
                إعادة ضبط
              </Button>
            </div>
          </Card>

          <Card>
            <CardHeader title="طبقات التصميم" />
            <div className="space-y-2">
              {[
                { name: 'الدائرة الخارجية', visible: true, color: '#0ea5e9' },
                { name: 'ثقب 1', visible: true, color: '#10b981' },
                { name: 'ثقب 2', visible: true, color: '#10b981' },
                { name: 'ثقب 3', visible: true, color: '#10b981' },
                { name: 'ثقب 4', visible: true, color: '#10b981' },
              ].map((layer, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted rounded-[var(--radius-md)]"
                >
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={layer.visible} className="w-4 h-4" />
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: layer.color }}
                    />
                  </div>
                  <span className="text-sm">{layer.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <CardHeader title="معلومات الملف" />
              <div className="space-y-2 text-sm text-right">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">حجم الملف</span>
                  <span>2.4 KB</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">الصيغة</span>
                  <span>SVG 1.1</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">عدد المسارات</span>
                  <span>5</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'ai-logs' && (
        <Card>
          <CardHeader
            title="سجلات معالجة الذكاء الاصطناعي"
            subtitle="شفافية كاملة في عملية التوليد"
          />
          <div className="space-y-3">
            {orderData.aiLogs.map((log, index) => (
              <div
                key={index}
                className={`p-4 rounded-[var(--radius-md)] border ${
                  log.result === 'نجح'
                    ? 'bg-green-50 border-green-200'
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{log.step}</h4>
                    {log.result === 'نجح' ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3 text-right">{log.details}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">ثقة الذكاء الاصطناعي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-white rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          log.confidence >= 85
                            ? 'bg-success'
                            : log.confidence >= 60
                            ? 'bg-warning'
                            : 'bg-destructive'
                        }`}
                        style={{ width: `${log.confidence}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold">{log.confidence}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}

export default OrderInfo