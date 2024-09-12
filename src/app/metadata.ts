import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Showcase Me | Create Your Professional Website in Minutes',
  description: 'Build a stunning, SEO-optimized business site with Showcase Me. No coding required. Get started for free and reach your ideal clients with a tailored, professional online presence.',
  keywords: 'website builder, professional website, SEO-optimized, business site, no coding, online presence, easy website, how to create a website, create simple website',
  authors: [{ name: 'Eduardo Guedes Gomero' }],
  creator: 'Eduardo Guedes Gomero',
  publisher: 'Showcase Me',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.showcaseme.fly.dev',
    siteName: 'Showcase Me',
    title: 'Create Your Professional Website with Showcase Me',
    description: 'Build a stunning, SEO-optimized business site in minutes. No coding required. Start your free trial today!',
    images: [
      {
        url: 'https://www.showcaseme.fly.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Showcase Me - Professional Website Builder',
      },
    ],
  },
  /*   twitter: {
      card: 'summary_large_image',
      site: '@ShowcaseMe',
      creator: '@ShowcaseMe',
      title: 'Create Your Professional Website with Showcase Me',
      description: 'Build a stunning, SEO-optimized business site in minutes. No coding required. Start your free trial today!',
      images: ['https://www.showcaseme.fly.dev/twitter-image.jpg'],
    }, */
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.showcaseme.fly.dev',
    languages: {
      'en-US': 'https://www.showcaseme.fly.dev',
      'es-ES': 'https://www.showcaseme.fly.dev/es',
      'pt-BR': 'https://www.showcaseme.fly.dev/pt',
    },
  },
}