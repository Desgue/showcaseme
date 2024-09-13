'use client'

import React, { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NavbarComponent } from './navbar'
import {  CombinedTranslations, Language,   } from '~/lib/types/components'
import { useRouter } from 'next/navigation'


const translations: CombinedTranslations= {
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      login: "Log In",
      createAccount: "Create Account"
    },

    whyShowcaseMe: {
      title: "Why Choose Showcase Me for Your Professional Website?",
      lead: "In today's digital landscape, having a strong online presence is crucial for professionals across all industries. Showcase Me offers a comprehensive solution that empowers you to create a stunning, effective website that truly represents your brand and connects you with your target audience.",
      targetAudience: {
        title: "Target Your Audience with Precision",
        content: [
          "In today's digital age, having an online presence is as essential as having a business card. At Showcase Me, we understand that reaching the right audience is key to your success. Our platform goes beyond simple website creation – we provide you with the tools to effectively showcase your professional skills and services.",
          "Having a well-crafted online presence offers numerous benefits:",
          [
            "24/7 accessibility to potential clients or employers",
            "Increased credibility and professional image",
            "A central hub for showcasing your work and achievements",
            "Improved networking opportunities"
          ],
          "By creating a professional website with Showcase Me, you're not just building a digital business card – you're opening a window to a world of opportunities. Our platform helps you craft a compelling online narrative that speaks directly to your target audience, establishing you as a go-to expert in your field."
        ]
      },
      seo: {
        title: "SEO Optimization: Be Found Easily Online",
        content: [
          "In the vast ocean of the internet, standing out can be challenging. That's why Showcase Me incorporates Search Engine Optimization (SEO) best practices into every website we help you create. While we don't offer built-in SEO tools, we leverage our understanding of how SEO works to configure it automatically for every page.",
          "When you create a website with Showcase Me, you benefit from:",
          [
            "Proper header structure for improved crawlability",
            "Optimized meta descriptions to increase click-through rates",
            "Clean, semantic HTML that search engines love",
            "Fast-loading pages, which is a key factor in search rankings"
          ],
          "These SEO-friendly features give your website a solid foundation, helping to improve your visibility in search engine results and making it easier for potential clients or employers to find you online."
        ]
      },
      pricing: {
        title: "Flexible Pricing: Your Success, Your Terms",
        content: [
          "We believe that great tools should be accessible to professionals at every stage of their journey. That's why Showcase Me offers a unique, flexible pricing model that puts you in control.",
          "Our approach to pricing is built on the following principles:",
          [
            "You decide what to pay based on the value you receive",
            "Access to a wide range of features to build your professional website",
            "The ability to adjust your payment as your success grows",
            "Transparent pricing with no hidden fees or surprise charges"
          ],
          "This innovative pricing structure ensures that Showcase Me remains accessible to entrepreneurs and professionals at all stages while incentivizing us to continually improve and add value to your experience. As your business grows and you see increased success from your Showcase Me website, you can choose to increase your contribution, reflecting the enhanced value you're receiving."
        ]
      },
      customization: {
        title: "Easy Customization: Your Unique Brand, Your Way",
        content: [
          "Your professional website should be as unique as your brand. Showcase Me provides you with the tools to efficiently create a site that perfectly represents your identity and meets your specific needs.",
          "Our customization features include:",
          [
            "A range of professionally designed templates to choose from (More coming soon!)",
            "Simple integration of your own images and media",
            "Easy color scheme customization to match your brand (Coming soon)",
            "The ability to adjust layouts to suit your content (In development)"
          ],
          "Showcase Me is designed to deliver information efficiently, focusing on the ease and speed of setting up your professional profile page. Our responsive designs ensure that your website looks great on all devices, from desktop to mobile, providing a seamless experience for your visitors regardless of how they access your site."
        ]
      },
      conclusion: {
        title: "Conclusion: Elevate Your Online Presence with Showcase Me",
        content: [
          "In today's competitive digital landscape, having a professional website that truly represents your brand and connects with your audience is more important than ever. Showcase Me provides you with a simple and concise way to showcase your professional skills and services, without the complexity often associated with website creation.",
          "From creating an effective online presence and benefiting from SEO-friendly practices to flexible pricing and easy customization, Showcase Me is designed to empower professionals like you to shine online. Take the first step towards elevating your digital presence – choose Showcase Me and start showcasing your talents to the world, quickly and efficiently."
        ]
      }
    },

  },
  es: {
    nav: {
      features: "Características",
      pricing: "Precios",
      login: "Iniciar Sesión",
      createAccount: "Crear Cuenta"
    },

    whyShowcaseMe: {
      title: "¿Por Qué Elegir Showcase Me para Tu Sitio Web Profesional?",
      lead: "En el panorama digital actual, tener una fuerte presencia en línea es crucial para profesionales de todas las industrias. Showcase Me ofrece una solución integral que te permite crear un sitio web impresionante y efectivo que representa verdaderamente tu marca y te conecta con tu público objetivo.",
      targetAudience: {
        title: "Alcanza a Tu Audiencia con Precisión",
        content: [
          "En la era digital actual, tener una presencia en línea es tan esencial como tener una tarjeta de presentación. En Showcase Me, entendemos que llegar a la audiencia correcta es clave para tu éxito. Nuestra plataforma va más allá de la simple creación de sitios web: te proporcionamos las herramientas para mostrar eficazmente tus habilidades y servicios profesionales.",
          "Tener una presencia en línea bien elaborada ofrece numerosos beneficios:",
          [
            "Accesibilidad 24/7 para clientes o empleadores potenciales",
            "Mayor credibilidad e imagen profesional",
            "Un centro para mostrar tu trabajo y logros",
            "Mejores oportunidades de networking"
          ],
          "Al crear un sitio web profesional con Showcase Me, no solo estás construyendo una tarjeta de presentación digital, sino que estás abriendo una ventana a un mundo de oportunidades. Nuestra plataforma te ayuda a crear una narrativa en línea convincente que habla directamente a tu público objetivo, estableciéndote como un experto de referencia en tu campo."
        ]
      },
      seo: {
        title: "Optimización SEO: Sé Encontrado Fácilmente en Línea",
        content: [
          "En el vasto océano de internet, destacar puede ser un desafío. Por eso, Showcase Me incorpora las mejores prácticas de Optimización para Motores de Búsqueda (SEO) en cada sitio web que te ayudamos a crear. Aunque no ofrecemos herramientas de SEO integradas, aprovechamos nuestro conocimiento sobre cómo funciona el SEO para configurarlo automáticamente en cada página.",
          "Cuando creas un sitio web con Showcase Me, te beneficias de:",
          [
            "Estructura de encabezados adecuada para mejorar la capacidad de rastreo",
            "Metadescripciones optimizadas para aumentar las tasas de clics",
            "HTML limpio y semántico que los motores de búsqueda adoran",
            "Páginas de carga rápida, un factor clave en los rankings de búsqueda"
          ],
          "Estas características amigables con el SEO dan a tu sitio web una base sólida, ayudando a mejorar tu visibilidad en los resultados de los motores de búsqueda y facilitando que clientes o empleadores potenciales te encuentren en línea."
        ]
      },
      pricing: {
        title: "Precios Flexibles: Tu Éxito, Tus Términos",
        content: [
          "Creemos que las grandes herramientas deben ser accesibles para profesionales en todas las etapas de su carrera. Por eso, Showcase Me ofrece un modelo de precios único y flexible que te da el control.",
          "Nuestro enfoque de precios se basa en los siguientes principios:",
          [
            "Tú decides cuánto pagar basado en el valor que recibes",
            "Acceso a una amplia gama de funciones para construir tu sitio web profesional",
            "La capacidad de ajustar tu pago a medida que crece tu éxito",
            "Precios transparentes sin tarifas ocultas ni cargos sorpresa"
          ],
          "Esta innovadora estructura de precios asegura que Showcase Me siga siendo accesible para emprendedores y profesionales en todas las etapas, mientras nos incentiva a mejorar continuamente y agregar valor a tu experiencia. A medida que tu negocio crece y ves un mayor éxito con tu sitio web de Showcase Me, puedes elegir aumentar tu contribución, reflejando el valor mejorado que estás recibiendo."
        ]
      },
      customization: {
        title: "Personalización Fácil: Tu Marca Única, a Tu Manera",
        content: [
          "Tu sitio web profesional debe ser tan único como tu marca. Showcase Me te proporciona las herramientas para crear eficientemente un sitio que represente perfectamente tu identidad y satisfaga tus necesidades específicas.",
          "Nuestras características de personalización incluyen:",
          [
            "Una gama de plantillas diseñadas profesionalmente para elegir (¡Más próximamente!)",
            "Integración simple de tus propias imágenes y medios",
            "Fácil personalización del esquema de colores para que coincida con tu marca (Próximamente)",
            "La capacidad de ajustar diseños para adaptarse a tu contenido (En desarrollo)"
          ],
          "Showcase Me está diseñado para entregar información de manera eficiente, centrándose en la facilidad y rapidez de configuración de tu página de perfil profesional. Nuestros diseños responsivos aseguran que tu sitio web se vea genial en todos los dispositivos, desde escritorio hasta móvil, proporcionando una experiencia perfecta para tus visitantes, independientemente de cómo accedan a tu sitio."
        ]
      },
      conclusion: {
        title: "Conclusión: Eleva Tu Presencia en Línea con Showcase Me",
        content: [
          "En el competitivo panorama digital actual, tener un sitio web profesional que represente verdaderamente tu marca y conecte con tu audiencia es más importante que nunca. Showcase Me te proporciona una forma simple y concisa de mostrar tus habilidades y servicios profesionales, sin la complejidad a menudo asociada con la creación de sitios web.",
          "Desde crear una presencia en línea efectiva y beneficiarte de prácticas amigables con el SEO hasta precios flexibles y fácil personalización, Showcase Me está diseñado para empoderar a profesionales como tú para brillar en línea. Da el primer paso hacia la elevación de tu presencia digital: elige Showcase Me y comienza a mostrar tus talentos al mundo, de manera rápida y eficiente."
        ]
      }
    },

  },
  pt: {
    nav: {
      features: "Recursos",
      pricing: "Preços",
      login: "Entrar",
      createAccount: "Criar Conta"
    },
    whyShowcaseMe: {
      title: "Por Que Escolher o Showcase Me para Seu Site Profissional?",
      lead: "No cenário digital atual, ter uma forte presença online é crucial para profissionais de todas as indústrias. O Showcase Me oferece uma solução abrangente que permite criar um site impressionante e eficaz que verdadeiramente representa sua marca e conecta você com seu público-alvo.",
      targetAudience: {
        title: "Alcance Seu Público com Precisão",
        content: [
          "Na era digital de hoje, ter uma presença online é tão essencial quanto ter um cartão de visita. No Showcase Me, entendemos que alcançar o público certo é a chave para o seu sucesso. Nossa plataforma vai além da simples criação de sites - fornecemos as ferramentas para você mostrar efetivamente suas habilidades e serviços profissionais.",
          "Ter uma presença online bem elaborada oferece inúmeros benefícios:",
          [
            "Acessibilidade 24/7 para potenciais clientes ou empregadores",
            "Maior credibilidade e imagem profissional",
            "Um hub central para mostrar seu trabalho e conquistas",
            "Melhores oportunidades de networking"
          ],
          "Ao criar um site profissional com o Showcase Me, você não está apenas construindo um cartão de visita digital - está abrindo uma janela para um mundo de oportunidades. Nossa plataforma ajuda você a criar uma narrativa online convincente que fala diretamente com seu público-alvo, estabelecendo você como um especialista de referência em seu campo."
        ]
      },
      seo: {
        title: "Otimização SEO: Seja Encontrado Facilmente Online",
        content: [
          "No vasto oceano da internet, destacar-se pode ser um desafio. É por isso que o Showcase Me incorpora as melhores práticas de Otimização para Mecanismos de Busca (SEO) em cada site que ajudamos você a criar. Embora não ofereçamos ferramentas de SEO integradas, aproveitamos nosso entendimento de como o SEO funciona para configurá-lo automaticamente em cada página.",
          "Quando você cria um site com o Showcase Me, você se beneficia de:",
          [
            "Estrutura de cabeçalho adequada para melhor rastreabilidade",
            "Meta descrições otimizadas para aumentar as taxas de clique",
            "HTML limpo e semântico que os mecanismos de busca adoram",
            "Páginas de carregamento rápido, um fator-chave nos rankings de busca"
          ],
          "Esses recursos amigáveis ao SEO dão ao seu site uma base sólida, ajudando a melhorar sua visibilidade nos resultados dos mecanismos de busca e facilitando que potenciais clientes ou empregadores o encontrem online."
        ]
      },
      pricing: {
        title: "Preços Flexíveis: Seu Sucesso, Seus Termos",
        content: [
          "Acreditamos que grandes ferramentas devem ser acessíveis a profissionais em todas as etapas de sua jornada. É por isso que o Showcase Me oferece um modelo de preços único e flexível que coloca você no controle.",
          "Nossa abordagem de preços é baseada nos seguintes princípios:",
          [
            "Você decide quanto pagar com base no valor que recebe",
            "Acesso a uma ampla gama de recursos para construir seu site profissional",
            "A capacidade de ajustar seu pagamento à medida que seu sucesso cresce",
            "Preços transparentes sem taxas ocultas ou cobranças surpresa"
          ],
          "Esta estrutura de preços inovadora garante que o Showcase Me permaneça acessível a empreendedores e profissionais em todas as etapas, enquanto nos incentiva a melhorar continuamente e agregar valor à sua experiência. À medida que seu negócio cresce e você vê maior sucesso com seu site Showcase Me, você pode optar por aumentar sua contribuição, refletindo o valor aprimorado que está recebendo."
        ]
      },
      customization: {
        title: "Personalização Fácil: Sua Marca Única, do Seu Jeito",
        content: [
          "Seu site profissional deve ser tão único quanto sua marca. O Showcase Me fornece as ferramentas para criar eficientemente um site que represente perfeitamente sua identidade e atenda às suas necessidades específicas.",
          "Nossos recursos de personalização incluem:",
          [
            "Uma gama de modelos projetados profissionalmente para escolher (Mais em breve!)",
            "Integração simples de suas próprias imagens e mídia",
            "Fácil personalização do esquema de cores para combinar com sua marca (Em breve)",
            "A capacidade de ajustar layouts para se adequar ao seu conteúdo (Em desenvolvimento)"
          ],
          "O Showcase Me é projetado para entregar informações de forma eficiente, focando na facilidade e rapidez de configuração da sua página de perfil profissional. Nossos designs responsivos garantem que seu site pareça ótimo em todos os dispositivos, do desktop ao móvel, proporcionando uma experiência perfeita para seus visitantes, independentemente de como eles acessam seu site."
        ]
      },
      conclusion: {
        title: "Conclusão: Eleve Sua Presença Online com o Showcase Me",
        content: [
          "No cenário digital competitivo de hoje, ter um site profissional que verdadeiramente representa sua marca e se conecta com seu público é mais importante do que nunca. O Showcase Me fornece uma maneira simples e concisa de mostrar suas habilidades e serviços profissionais, sem a complexidade frequentemente associada à criação de sites.",
          "Desde criar uma presença online eficaz e se beneficiar de práticas amigáveis ao SEO até preços flexíveis e fácil personalização, o Showcase Me é projetado para capacitar profissionais como você a brilhar online. Dê o primeiro passo para elevar sua presença digital - escolha o Showcase Me e comece a mostrar seus talentos para o mundo, de forma rápida e eficiente."
        ]
      }
    },
    // ... (other Portuguese content)
  }
}

export function WhyShowcaseMeComponent() {

  const [language, setLanguage] = useState<Language>("en")
  const [showNavbar, setShowNavbar] = useState(false)
  const t = translations[language]
  useEffect(() => {
    const handleScroll = () => {
        setShowNavbar(window.scrollY > 450)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <NavbarComponent
        t={t.nav!} 
        language={language} 
        setLanguage={setLanguage} 
        scrollTo={scrollTo} 
        showNavbar={showNavbar}
      />
      {/* Animated background effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gray-200 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">{t.whyShowcaseMe!.title}</h1>

          <p className="lead">{t.whyShowcaseMe!.lead}</p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">{t.whyShowcaseMe!.targetAudience.title}</h2>
          {t.whyShowcaseMe!.targetAudience.content.map((paragraph, index) => (
            Array.isArray(paragraph) ? (
              <ul className='flex flex-col gap-2 my-2' key={index}>
                {paragraph.map((item, i) => (
                  <li className='list-disc ml-4' key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={index}>{paragraph}</p>
            )
          ))}

          <h2 className="text-2xl font-semibold mt-12 mb-4">{t.whyShowcaseMe!.seo.title}</h2>
          {t.whyShowcaseMe!.seo.content.map((paragraph, index) => (
            Array.isArray(paragraph) ? (
              <ul className='flex flex-col gap-2 my-2'key={index}>
                {paragraph.map((item, i) => (
                  <li className='list-disc ml-4' key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={index}>{paragraph}</p>
            )
          ))}

          <h2 className="text-2xl font-semibold mt-12 mb-4">{t.whyShowcaseMe!.pricing.title}</h2>
          {t.whyShowcaseMe!.pricing.content.map((paragraph, index) => (
            Array.isArray(paragraph) ? (
              <ul className='flex flex-col gap-2 my-2' key={index}>
                {paragraph.map((item, i) => (
                  <li className='list-disc ml-4' key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={index}>{paragraph}</p>
            )
          ))}

          <h2 className="text-2xl font-semibold mt-12 mb-4">{t.whyShowcaseMe!.customization.title}</h2>
          {t.whyShowcaseMe!.customization.content.map((paragraph, index) => (
            Array.isArray(paragraph) ? (
              <ul className='flex flex-col gap-2 my-2' key={index}>
                {paragraph.map((item, i) => (
                  <li className='list-disc ml-4' key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={index}>{paragraph}</p>
            )
          ))}

          <h2 className="text-2xl font-semibold mt-12 mb-4">{t.whyShowcaseMe!.conclusion.title}</h2>
          {t.whyShowcaseMe!.conclusion.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </div>
    </div>
  )
}