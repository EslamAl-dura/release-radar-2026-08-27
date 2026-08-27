import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

type Locale = 'en' | 'ar'
type TranslationKey = keyof typeof translations.en
type I18nValue = { locale: Locale; setLocale: (locale: Locale) => void; t: (key: TranslationKey) => string }
const translations = {
  en: { appName: 'Release Radar', overview: 'Release overview', subtitle: 'A calm view of everything that can affect your next deploy.', dashboard: 'Dashboard', details: 'Signal details', settings: 'Settings', production: 'Production release', healthy: 'Healthy to ship', confidence: 'Release confidence', lastUpdated: 'Last updated today at 09:42', configure: 'Configure signals', signals: 'Readiness signals', actions: 'Recommended actions', tests: 'Test coverage', incidents: 'Incident risk', observability: 'Observability', rollback: 'Rollback plan', ownership: 'Owner sign-off', save: 'Save release profile', releaseName: 'Release name', environment: 'Environment', owner: 'Release owner', language: 'Language', theme: 'Appearance', light: 'Light', dark: 'Dark', english: 'English', arabic: 'Arabic', detailsIntro: 'Understand how each signal contributes to your confidence score.', back: 'Back to dashboard', score: 'Score contribution', allClear: 'All clear', improve: 'Could improve' },
  ar: { appName: 'رادار الإطلاق', overview: 'نظرة عامة على الإصدار', subtitle: 'رؤية هادئة لكل ما قد يؤثر على عملية النشر القادمة.', dashboard: 'لوحة التحكم', details: 'تفاصيل الإشارات', settings: 'الإعدادات', production: 'إصدار الإنتاج', healthy: 'جاهز للنشر', confidence: 'ثقة الإصدار', lastUpdated: 'آخر تحديث اليوم الساعة 09:42', configure: 'تهيئة الإشارات', signals: 'إشارات الجاهزية', actions: 'إجراءات مقترحة', tests: 'تغطية الاختبارات', incidents: 'مخاطر الحوادث', observability: 'قابلية المراقبة', rollback: 'خطة التراجع', ownership: 'اعتماد المسؤول', save: 'حفظ ملف الإصدار', releaseName: 'اسم الإصدار', environment: 'البيئة', owner: 'مسؤول الإصدار', language: 'اللغة', theme: 'المظهر', light: 'فاتح', dark: 'داكن', english: 'الإنجليزية', arabic: 'العربية', detailsIntro: 'افهم كيف تساهم كل إشارة في درجة الثقة.', back: 'العودة إلى لوحة التحكم', score: 'مساهمة الدرجة', allClear: 'كل شيء جيد', improve: 'يمكن تحسينه' }
} as const
const I18nContext = createContext<I18nValue | undefined>(undefined)
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem('release-radar-locale') as Locale) || 'en')
  useEffect(() => { document.documentElement.lang = locale; document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'; localStorage.setItem('release-radar-locale', locale) }, [locale])
  const value = useMemo(() => ({ locale, setLocale, t: (key: TranslationKey) => translations[locale][key] }), [locale])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
export function useI18n(): I18nValue { const value = useContext(I18nContext); if (!value) throw new Error('useI18n must be used within I18nProvider'); return value }
