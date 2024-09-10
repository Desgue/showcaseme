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

const translations = {
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
        title: "Sign Up",
        description: "Create your free account in seconds."
      },
      step2: {
        title: "Choose a Template",
        description: "Select from our professionally designed templates."
      },
      step3: {
        title: "Customize",
        description: "Add your content and personalize your site."
      },
      step4: {
        title: "Publish",
        description: "Go live with your professional business website."
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
      subtitle: "Construa um site de negócios impressionante e otimizado para SEO em minutos. Sem necessidade de codificação.",
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
        title: "Cadastre-se",
        description: "Crie sua conta gratuita em segundos."
      },
      step2: {
        title: "Escolha um Modelo",
        description: "Selecione entre nossos modelos projetados profissionalmente."
      },
      step3: {
        title: "Personalize",
        description: "Adicione seu conteúdo e personalize seu site."
      },
      step4: {
        title: "Publique",
        description: "Coloque seu site de negócios profissional no ar."
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
        title: "Regístrate",
        description: "Crea tu cuenta gratuita en segundos."
      },
      step2: {
        title: "Elige una Plantilla",
        description: "Selecciona entre nuestras plantillas diseñadas profesionalmente."
      },
      step3: {
        title: "Personaliza",
        description: "Agrega tu contenido y personaliza tu sitio."
      },
      step4: {
        title: "Publica",
        description: "Lanza tu sitio web de negocios profesional."
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
  const [language, setLanguage] = useState('en')
  //@ts-ignore
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight
      heroHeight &&  setShowNavbar(window.scrollY > heroHeight - 100)
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
          <h1 className="text-2xl font-bold text-blue-600">Showcase Me</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" >{t.nav.features}</Button>
            <Button variant="ghost" >{t.nav.pricing}</Button>
            <Button variant="outline">{t.nav.login}</Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">{t.nav.createAccount}</Button>
            <Select onValueChange={setLanguage} defaultValue={language}>
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
      <section id="hero" className="min-h-screen flex items-center bg-blue-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">{t.hero.title}</h1>
            <p className="text-xl text-blue-700">{t.hero.subtitle}</p>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">{t.hero.cta}</Button>
          </div>
          <div className="relative hidden md:block">
            <img src="/placeholder.svg?height=600&width=400&text=iPhone+Mockup" alt="iPhone Mockup" className="w-3/4 mx-auto" />
            <img src="/placeholder.svg?height=300&width=500&text=Notebook+Mockup" alt="Notebook Mockup" className="absolute bottom-0 right-0 w-2/3" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">{t.features.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-purple-200">
              <CardHeader>
                <Target className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">{t.features.target.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">{t.features.target.description}</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <Globe className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">{t.features.seo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">{t.features.seo.description}</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <CreditCard className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">{t.features.pricing.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">{t.features.pricing.description}</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <User className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">{t.features.customization.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">{t.features.customization.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">{t.howItWorks.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-purple-200">
              <CardHeader>
                <Laptop className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">{t.howItWorks.step1.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">{t.howItWorks.step1.description}</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <Palette className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">{t.howItWorks.step2.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">{t.howItWorks.step2.description}</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <User className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">{t.howItWorks.step3.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">{t.howItWorks.step3.description}</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <Rocket className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">{t.howItWorks.step4.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">{t.howItWorks.step4.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">{t.testimonials.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[t.testimonials.testimonial1, t.testimonials.testimonial2, t.testimonials.testimonial3].map((testimonial, index) => (
              <Card key={index} className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">{testimonial.name}</CardTitle>
                  <CardDescription className="text-blue-700">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">{t.pricing.title}</h2>
          <Card className="max-w-md mx-auto border-purple-200">
            <CardHeader>
              <CardTitle className="text-blue-900">{t.pricing.title}</CardTitle>
              <CardDescription className="text-blue-700">{t.pricing.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-blue-900">Monthly Contribution</Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-900">$</span>
                    <Input id="amount" type="number" placeholder="0" min="0" className="text-2xl text-blue-900" />
                  </div>
                </div>
                <ul className="space-y-2">
                  {t.pricing.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2 text-blue-700">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">{t.pricing.cta}</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">{t.faq.title}</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-blue-900">{t.faq.question1.q}</AccordionTrigger>
              <AccordionContent className="text-blue-700">
                {t.faq.question1.a}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-blue-900">{t.faq.question2.q}</AccordionTrigger>
              <AccordionContent className="text-blue-700">
                {t.faq.question2.a}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-blue-900">{t.faq.question3.q}</AccordionTrigger>
              <AccordionContent className="text-blue-700">
                {t.faq.question3.a}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-blue-900">{t.faq.question4.q}</AccordionTrigger>
              <AccordionContent className="text-blue-700">
                {t.faq.question4.a}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900  text-white py-12">
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
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p>&copy; {new Date().getFullYear()} Showcase Me. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}