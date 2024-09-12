import { LucideIcon } from 'lucide-react'

export type Languages = 'en' | 'pt' | 'es'

export interface NavbarProps {
    t: {
        features: string;
        pricing: string;
        login: string;
        createAccount: string;
    };
    language: string;
    setLanguage: (lang: string) => void;
    scrollTo: (id: string) => void;
    showNavbar: boolean;
}

export interface HeroSectionProps {
    t: {
        title: string;
        subtitle: string;
        cta: string;
    };
}

export interface FeaturesSectionProps {
    t: {
        title: string;
        target: {
            icon: LucideIcon;
            title: string;
            description: string;
        };
        seo: {
            icon: LucideIcon;
            title: string;
            description: string;
        };
        pricing: {
            icon: LucideIcon;
            title: string;
            description: string;
        };
        customization: {
            icon: LucideIcon;
            title: string;
            description: string;
        };
    };
}

export interface HowItWorksStep {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string;
}

export interface HowItWorksTranslation {
    title: string;
    step1: HowItWorksStep;
    step2: HowItWorksStep;
    step3: HowItWorksStep;
    step4: HowItWorksStep;
}

export interface TestimonialsSectionProps {
    t: {
        title: string;
        testimonial1: {
            name: string;
            role: string;
            quote: string;
        };
        testimonial2: {
            name: string;
            role: string;
            quote: string;
        };
        testimonial3: {
            name: string;
            role: string;
            quote: string;
        };
    };
}

export interface PricingSectionProps {
    t: {
        title: string;
        subtitle: string;
        cta: string;
        features: string[];
    };
}

export interface FAQSectionProps {
    t: {
        title: string;
        question1: {
            q: string;
            a: string;
        };
        question2: {
            q: string;
            a: string;
        };
        question3: {
            q: string;
            a: string;
        };
        question4: {
            q: string;
            a: string;
        };
    };
}

export interface FooterSectionProps {
    t: {
        description: string;
        quickLinks: string;
        home: string;
        features: string;
        pricing: string;
        contact: string;
    };
}