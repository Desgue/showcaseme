import { LucideIcon } from 'lucide-react'

export type Language = 'en' | 'pt' | 'es'

export interface NavTranslations {
    features: string;
    pricing: string;
    login: string;
    createAccount: string;
}

export interface HeroTranslations {
    title: string;
    subtitle: string;
    cta: string;
}

export interface FeatureTranslations {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string;
}

export interface FeaturesTranslations {
    title: string;
    target: FeatureTranslations;
    seo: FeatureTranslations;
    pricing: FeatureTranslations;
    customization: FeatureTranslations;
}

export interface HowItWorksStepTranslations {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string;
}

export interface HowItWorksTranslations {
    title: string;
    step1: HowItWorksStepTranslations;
    step2: HowItWorksStepTranslations;
    step3: HowItWorksStepTranslations;
    step4: HowItWorksStepTranslations;
}

export interface TestimonialTranslations {
    name: string;
    role: string;
    quote: string;
}

export interface TestimonialsTranslations {
    title: string;
    testimonial1: TestimonialTranslations;
    testimonial2: TestimonialTranslations;
    testimonial3: TestimonialTranslations;
}

export interface PricingTranslations {
    title: string;
    subtitle: string;
    cta: string;
    features: string[];
}

export interface FAQItemTranslations {
    q: string;
    a: string;
}

export interface FAQTranslations {
    title: string;
    question1: FAQItemTranslations;
    question2: FAQItemTranslations;
    question3: FAQItemTranslations;
    question4: FAQItemTranslations;
}

export interface FooterTranslations {
    description: string;
    quickLinks: string;
    home: string;
    contact: string;
    features: string;
    pricing: string;
}

export type WhyShowcaseMeContentItem = string | string[];

export interface WhyShowcaseMeSectionTranslations {
    title: string;
    content: WhyShowcaseMeContentItem[];
}

export interface WhyShowcaseMeTranslations {
    title: string;
    lead: string;
    targetAudience: WhyShowcaseMeSectionTranslations;
    seo: WhyShowcaseMeSectionTranslations;
    pricing: WhyShowcaseMeSectionTranslations;
    customization: WhyShowcaseMeSectionTranslations;
    conclusion: WhyShowcaseMeSectionTranslations;
}

export interface LanguageTranslations {
    nav: NavTranslations;
    hero: HeroTranslations;
    features: FeaturesTranslations;
    howItWorks: HowItWorksTranslations;
    testimonials: TestimonialsTranslations;
    pricing: PricingTranslations;
    faq: FAQTranslations;
    footer: FooterTranslations;
    whyShowcaseMe: WhyShowcaseMeTranslations;
}

export type CombinedTranslations = {
    [key in Language]: Partial<LanguageTranslations>;
}

// Component Props Interfaces
export interface NavbarProps {
    t: NavTranslations;
    language: string;
    setLanguage: (lang: string) => void;
    scrollTo: (id: string) => void;
    showNavbar: boolean;
}

export interface HeroSectionProps {
    t: HeroTranslations;
}

export interface ExpandedFeaturesSectionProps {
    t: FeaturesTranslations;
}

export interface TestimonialsSectionProps {
    t: TestimonialsTranslations;
}

export interface PricingSectionProps {
    t: PricingTranslations;
}

export interface FAQSectionProps {
    t: FAQTranslations;
}

export interface FooterSectionProps {
    t: FooterTranslations;
}