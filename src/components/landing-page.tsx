'use client'

import { useState, useEffect } from 'react'
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { User, CreditCard, Target, Globe, CheckCircle, Laptop, Palette, Rocket } from 'lucide-react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import Link from 'next/link'

type Languages = 'en' | 'pt' | 'es'

type HowItWorksStep = {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
}
// Update your translations type to include the new 'details' field
type HowItWorksTranslation = {
  title: string;
  step1: HowItWorksStep;
  step2: HowItWorksStep;
  step3: HowItWorksStep;
  step4: HowItWorksStep;
}

type ShowcaseMeContent = {
  [key in Languages]: {
    nav: {
      features: string;
      pricing: string;
      login: string;
      createAccount: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    features: {
      title: string;
      target: {
        title: string;
        description: string;
      };
      seo: {
        title: string;
        description: string;
      };
      pricing: {
        title: string;
        description: string;
      };
      customization: {
        title: string;
        description: string;
      };
    };
    howItWorks: {
      title: string;
      step1: HowItWorksStep;
      step2: HowItWorksStep;
      step3: HowItWorksStep;
      step4: HowItWorksStep;
    };
    testimonials: {
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
    pricing: {
      title: string;
      subtitle: string;
      cta: string;
      features: string[];
    };
    faq: {
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
    footer: {
      description: string;
      quickLinks: string;
      home: string;
      contact: string;
    };
  };
};
const translations:ShowcaseMeContent = {
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      login: "Log In",
      createAccount: "Create Account"
    },
    hero: {
      title: "Create Your Professional Website with Showcase Me",
      subtitle: "Build a stunning, SEO-optimized business site in minutes. No coding required.",
      cta: "Get Started for Free"
    },
    features: {
      title: "Why Choose Showcase Me for Your Simple Website?",
      target: {
        title: "Target Your Audience",
        description: "Reach your ideal clients with a tailored, professional online presence."
      },
      seo: {
        title: "SEO Optimized",
        description: "Get discovered easily with our built-in SEO optimization tools."
      },
      pricing: {
        title: "Flexible Pricing",
        description: "Choose how much you want to pay. Your success, your terms."
      },
      customization: {
        title: "Easy Customization",
        description: "Personalize your website with our intuitive drag-and-drop editor."
      }
    },
    howItWorks: {
      title: "How to Make a Website with Showcase Me",
      step1: {
        icon: Laptop,
        title: "Sign Up",
        description: "Create your free account in seconds.",
        details: "Start your journey to a professional online presence with a quick and easy sign-up process. No credit card required - just your name and email to get started."
      },
      step2: {
        icon: Palette,
        title: "Choose a Template",
        description: "Select from our professionally designed templates.",
        details: "Browse through our curated collection of modern, responsive templates. Each design is optimized for different industries and purposes, ensuring you find the perfect match for your brand."
      },
      step3: {
        icon: User,
        title: "Customize",
        description: "Add your content and personalize your site.",
        details: "Make your site uniquely yours with our intuitive drag-and-drop editor. Add your own images, tweak colors, and arrange elements to perfectly represent your brand. No coding skills required!"
      },
      step4: {
        icon: Rocket,
        title: "Publish",
        description: "Go live with your professional business website.",
        details: "With just one click, your website goes live to the world. Showcase Me handles all the technical details, ensuring your site is fast, secure, and optimized for search engines from day one."
      }
    },
    testimonials: {
      title: "What Our Users Say About Their Simple Websites",
      testimonial1: {
        name: "Sarah Johnson",
        role: "Freelance Designer",
        quote: "Showcase Me has transformed my online presence. I'm getting more clients than ever!"
      },
      testimonial2: {
        name: "Michael Chen",
        role: "Personal Trainer",
        quote: "The SEO optimization is a game-changer. My profile now ranks on the first page of Google!"
      },
      testimonial3: {
        name: "Emily Rodriguez",
        role: "Life Coach",
        quote: "I love how easy it is to customize my profile. It truly reflects my personal brand."
      }
    },
    pricing: {
      title: "Choose Your Contribution",
      subtitle: "Support our platform while getting full access to all features.",
      cta: "Start Your Showcase",
      features: [
        "Full access to all features",
        "SEO optimization tools",
        "Custom domain support",
        "Priority customer support"
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      question1: {
        q: "How do I create my website?",
        a: "Simply sign up for an account, and our intuitive dashboard will guide you through the process of setting up your personalized business website."
      },
      question2: {
        q: "Can I use my own domain name?",
        a: "Yes! You can easily connect your own domain name to your Showcase Me website for a more professional and branded appearance."
      },
      question3: {
        q: "How does the flexible pricing work?",
        a: "We believe in fair pricing. You decide how much you want to pay based on the value you receive. All features are available regardless of your contribution."
      },
      question4: {
        q: "Is my data safe and secure?",
        a: "Absolutely. We use industry-standard encryption and security measures to protect your data. Your privacy and security are our top priorities."
      }
    },
    footer: {
      description: "Empowering professionals to showcase their talents and connect with their audience.",
      quickLinks: "Quick Links",
      home: "Home",
      contact: "Contact Us"
    }
  },
  pt: {
    nav: {
      features: "Recursos",
      pricing: "Preços",
      login: "Entrar",
      createAccount: "Criar Conta"
    },
    hero: {
      title: "Crie Seu Site Profissional com o Showcase Me",
      subtitle: "Construa um site de negócios impressionante e otimizado para SEO em minutos. Sem necessidade de saber programar.",
      cta: "Comece Gratuitamente"
    },
    features: {
      title: "Por Que Escolher o Showcase Me para Seu Site Simples?",
      target: {
        title: "Alcance Seu Público",
        description: "Alcance seus clientes ideais com uma presença online profissional e personalizada."
      },
      seo: {
        title: "Otimizado para SEO",
        description: "Seja facilmente descoberto com nossas ferramentas de otimização de SEO integradas."
      },
      pricing: {
        title: "Preços Flexíveis",
        description: "Escolha quanto deseja pagar. Seu sucesso, seus termos."
      },
      customization: {
        title: "Personalização Fácil",
        description: "Personalize seu site com nosso editor intuitivo de arrastar e soltar."
      }
    },
    howItWorks: {
      title: "Como Criar um Site com o Showcase Me",
      step1: {
        icon: Laptop,
        title: "Cadastre-se",
        description: "Crie sua conta gratuita em segundos.",
        details: "Inicie sua jornada para uma presença online profissional com um processo de inscrição rápido e fácil. Não é necessário cartão de crédito - apenas seu nome e e-mail para começar."
      },
      step2: {
        icon: Palette,
        title: "Escolha um Modelo",
        description: "Selecione entre nossos modelos projetados profissionalmente.",
        details: "Navegue por nossa coleção curada de modelos modernos e responsivos. Cada design é otimizado para diferentes indústrias e propósitos, garantindo que você encontre a combinação perfeita para sua marca."
      },
      step3: {
        icon: User,
        title: "Personalize",
        description: "Adicione seu conteúdo e personalize seu site.",
        details: "Torne seu site único com nosso editor intuitivo de arrastar e soltar. Adicione suas próprias imagens, ajuste as cores e organize os elementos para representar perfeitamente sua marca. Nenhuma habilidade de codificação necessária!"
      },
      step4: {
        icon: Rocket,
        title: "Publique",
        description: "Coloque seu site de negócios profissional no ar.",
        details: "Com apenas um clique, seu site fica disponível para o mundo. O Showcase Me cuida de todos os detalhes técnicos, garantindo que seu site seja rápido, seguro e otimizado para mecanismos de busca desde o primeiro dia."
      }
    },
    testimonials: {
      title: "O Que Nossos Usuários Dizem Sobre Seus Sites Simples",
      testimonial1: {
        name: "Sarah Johnson",
        role: "Designer Freelancer",
        quote: "O Showcase Me transformou minha presença online. Estou conseguindo mais clientes do que nunca!"
      },
      testimonial2: {
        name: "Michael Chen",
        role: "Personal Trainer",
        quote: "A otimização de SEO é um divisor de águas. Meu perfil agora aparece na primeira página do Google!"
      },
      testimonial3: {
        name: "Emily Rodriguez",
        role: "Coach de Vida",
        quote: "Adoro como é fácil personalizar meu perfil. Ele realmente reflete minha marca pessoal."
      }
    },
    pricing: {
      title: "Escolha Sua Contribuição",
      subtitle: "Apoie nossa plataforma enquanto obtém acesso total a todos os recursos.",
      cta: "Comece Seu Showcase",
      features: [
        "Acesso completo a todos os recursos",
        "Ferramentas de otimização de SEO",
        "Suporte a domínio personalizado",
        "Suporte ao cliente prioritário"
      ]
    },
    faq: {
      title: "Perguntas Frequentes",
      question1: {
        q: "Como crio meu site?",
        a: "Basta se inscrever para uma conta, e nosso painel intuitivo o guiará pelo processo de configuração do seu site de negócios personalizado."
      },
      question2: {
        q: "Posso usar meu próprio nome de domínio?",
        a: "Sim! Você pode facilmente conectar seu próprio nome de domínio ao seu site Showcase Me para uma aparência mais profissional e personalizada."
      },
      question3: {
        q: "Como funciona o preço flexível?",
        a: "Acreditamos em preços justos. Você decide quanto quer pagar com base no valor que recebe. Todos os recursos estão disponíveis independentemente da sua contribuição."
      },
      question4: {
        q: "Meus dados estão seguros?",
        a: "Absolutamente. Usamos criptografia e medidas de segurança padrão da indústria para proteger seus dados. Sua privacidade e segurança são nossas principais prioridades."
      }
    },
    footer: {
      description: "Capacitando profissionais para mostrar seus talentos e se conectar com seu público.",
      quickLinks: "Links Rápidos",
      home: "Início",
      contact: "Contate-nos"
    }
  },
  es: {
    nav: {
      features: "Características",
      pricing: "Precios",
      login: "Iniciar Sesión",
      createAccount: "Crear Cuenta"
    },
    hero: {
      title: "Crea Tu Sitio Web Profesional con Showcase Me",
      subtitle: "Construye un impresionante sitio web de negocios optimizado para SEO en minutos. Sin necesidad de codificación.",
      cta: "Comienza Gratis"
    },
    features: {
      title: "¿Por Qué Elegir Showcase Me para Tu Sitio Web Simple?",
      target: {
        title: "Alcanza a Tu Audiencia",
        description: "Llega a tus clientes ideales con una presencia en línea profesional y personalizada."
      },
      seo: {
        title: "Optimizado para SEO",
        description: "Sé fácilmente descubierto con nuestras herramientas de optimización de SEO integradas."
      },
      pricing: {
        title: "Precios Flexibles",
        description: "Elige cuánto quieres pagar. Tu éxito, tus términos."
      },
      customization: {
        title: "Fácil Personalización",
        description: "Personaliza tu sitio web con nuestro intuitivo editor de arrastrar y soltar."
      }
    },
    howItWorks: {
      title: "Cómo Crear un Sitio Web con Showcase Me",
      step1: {
        icon: Laptop,
        title: "Regístrate",
        description: "Crea tu cuenta gratuita en segundos.",
        details: "Comienza tu viaje hacia una presencia en línea profesional con un proceso de registro rápido y fácil. No se requiere tarjeta de crédito, solo tu nombre y correo electrónico para empezar."
      },
      step2: {
        icon: Palette,
        title: "Elige una Plantilla",
        description: "Selecciona entre nuestras plantillas diseñadas profesionalmente.",
        details: "Explora nuestra colección curada de plantillas modernas y responsivas. Cada diseño está optimizado para diferentes industrias y propósitos, asegurando que encuentres la combinación perfecta para tu marca."
      },
      step3: {
        icon: User,
        title: "Personaliza",
        description: "Agrega tu contenido y personaliza tu sitio.",
        details: "Haz que tu sitio sea único con nuestro intuitivo editor de arrastrar y soltar. Agrega tus propias imágenes, ajusta los colores y organiza los elementos para representar perfectamente tu marca. ¡No se necesitan habilidades de codificación!"
      },
      step4: {
        icon: Rocket,
        title: "Publica",
        description: "Lanza tu sitio web de negocios profesional.",
        details: "Con solo un clic, tu sitio web estará disponible para todo el mundo. Showcase Me se encarga de todos los detalles técnicos, asegurando que tu sitio sea rápido, seguro y optimizado para los motores de búsqueda desde el primer día."
      }
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Usuarios Sobre Sus Sitios Web Simples",
      testimonial1: {
        name: "Sarah Johnson",
        role: "Diseñadora Freelance",
        quote: "Showcase Me ha transformado mi presencia en línea. ¡Estoy consiguiendo más clientes que nunca!"
      },
      testimonial2: {
        name: "Michael Chen",
        role: "Entrenador Personal",
        quote: "La optimización SEO es un cambio de juego. ¡Mi perfil ahora aparece en la primera página de Google!"
      },
      testimonial3: {
        name: "Emily Rodriguez",
        role: "Coach de Vida",
        quote: "Me encanta lo fácil que es personalizar mi perfil. Realmente refleja mi marca personal."
      }
    },
    pricing: {
      title: "Elige Tu Contribución",
      subtitle: "Apoya nuestra plataforma mientras obtienes acceso completo a todas las funciones.",
      cta: "Comienza Tu Showcase",
      features: [
        "Acceso completo a todas las funciones",
        "Herramientas de optimización SEO",
        "Soporte de dominio personalizado",
        "Soporte al cliente prioritario"
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      question1: {
        q: "¿Cómo creo mi sitio web?",
        a: "Simplemente regístrate para obtener una cuenta, y nuestro intuitivo panel te guiará a través del proceso de configuración de tu sitio web de negocios personalizado."
      },
      question2: {
        q: "¿Puedo usar mi propio nombre de dominio?",
        a: "¡Sí! Puedes conectar fácilmente tu propio nombre de dominio a tu sitio web Showcase Me para una apariencia más profesional y personalizada."
      },
      question3: {
        q: "¿Cómo funciona el precio flexible?",
        a: "Creemos en precios justos. Tú decides cuánto quieres pagar basado en el valor que recibes. Todas las funciones están disponibles independientemente de tu contribución."
      },
      question4: {
        q: "¿Están mis datos seguros?",
        a: "Absolutamente. Utilizamos encriptación y medidas de seguridad estándar de la industria para proteger tus datos. Tu privacidad y seguridad son nuestras principales prioridades."
      }
    },
    footer: {
      description: "Empoderando a profesionales para mostrar sus talentos y conectar con su audiencia.",
      quickLinks: "Enlaces Rápidos",
      home: "Inicio",
      contact: "Contáctanos"
    }
  }
}

export function LandingPage() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [language, setLanguage] = useState<Languages>('en')
  const [contributionType, setContributionType] = useState('monthly')
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero')
      if(heroElement){
        const heroHeight = heroElement.offsetHeight
        setShowNavbar(window.scrollY > heroHeight - 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${showNavbar ? 'opacity-100 shadow-md' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Showcase Me</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => scrollTo("features")}>{t.nav.features}</Button>
            <Button variant="ghost" onClick={() => scrollTo("pricing")}>{t.nav.pricing}</Button>
            <Button variant="outline"><Link href={"/login"}>{t.nav.login}</Link></Button>
            <Button className="bg-black text-white hover:bg-gray-800"><Link href={"/login"}>{t.nav.createAccount}</Link></Button>
            <Select onValueChange={(v) => setLanguage(v as Languages)} defaultValue={language}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
          initial={{ opacity: 0, x: -200, }}
          animate={{ opacity: 1, x: 0 }}
          transition={{type:"spring", duration: 1 }}
          className="space-y-6"
            >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-transparent bg-clip-text">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-700">{t.hero.subtitle}</p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800"> <Link href={"/login"}>{t.hero.cta}</Link> </Button>
          </motion.div>
              <motion.div
        initial={{ opacity: 0, y: 450 }}
        animate={{ opacity: 1, y: 25 }}
        transition={{ duration: 1 }}
            className="relative hidden md:block"
          >
            <Image
              src="/showcasememockmobile-portrait.png"
              alt="Banner"
              width={440}
              height={192}
              className="w-3/5 mx-auto" 
            />
            </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.features.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: t.features.target.title, description: t.features.target.description },
              { icon: Globe, title: t.features.seo.title, description: t.features.seo.description },
              { icon: CreditCard, title: t.features.pricing.title, description: t.features.pricing.description },
              { icon: User, title: t.features.customization.title, description: t.features.customization.description },
            ].map((feature, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-gray-600 mb-2" />
                  <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection t={t.howItWorks} />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.testimonials.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[t.testimonials.testimonial1, t.testimonials.testimonial2, t.testimonials.testimonial3].map((testimonial, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">{testimonial.name}</CardTitle>
                  <CardDescription className="text-gray-700">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 italic">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.pricing.title}</h2>
          <Card className="max-w-md mx-auto border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">{t.pricing.title}</CardTitle>
              <CardDescription className="text-gray-700">{t.pricing.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <RadioGroup defaultValue="monthly" onValueChange={setContributionType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="onetime" id="onetime" />
                    <Label htmlFor="onetime">One-time</Label>
                  </div>
                </RadioGroup>
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-gray-900">
                    {contributionType === 'monthly' ? 'Monthly' : 'One-time'} Contribution
                  </Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">$</span>
                    <Input id="amount" type="number" placeholder="0" min="0" className="text-2xl text-gray-900" />
                  </div>
                </div>
                <ul className="space-y-2">
                  {t.pricing.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-black text-white hover:bg-gray-800">{t.pricing.cta}</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.faq.title}</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {[t.faq.question1, t.faq.question2, t.faq.question3, t.faq.question4].map((question, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-gray-900">{question.q}</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {question.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Showcase Me</h3>
              <p>{t.footer.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">{t.footer.home}</a></li>
                <li><a href="#features" className="hover:underline">{t.nav.features}</a></li>
                <li><a href="#pricing" className="hover:underline">{t.nav.pricing}</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
              <p>Email: support@showcaseme.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Showcase Me. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}




const HowItWorksSection: React.FC<{ t: HowItWorksTranslation }> = ({ t }) => {
  const steps: HowItWorksStep[] = [t.step1, t.step2, t.step3, t.step4]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.title}</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="md:absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-16 flex items-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div 
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 
                    ? 'md:pr-8 md:text-right' 
                    : 'md:ml-auto md:pl-8 md:text-left'
                } mb-8 md:mb-0`}
                >
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 max-md:flex max-md:gap-4"> <step.icon className="md:hidden w-8 h-8  text-gray-600" />{step.title} </h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <p className="text-gray-700">{step.details}</p>
              </div>
              <div className="hidden md:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-gray-200 md:flex items-center justify-center">
                <step.icon className="w-6 h-6 text-gray-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}