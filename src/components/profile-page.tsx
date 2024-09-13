'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { ServerIcon, Users } from "lucide-react"
import Image from "next/image"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon,  CodeIcon, MixerHorizontalIcon, LayersIcon   } from "@radix-ui/react-icons"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { UserProfile } from "~/lib/types/profiles"
import { Service, iconOptions } from "~/lib/types/services"
import React from "react"
import Icon from "./ui/lucide-icons"
import { UserSocialMedias } from "~/lib/types/socials"

/* const services = [
  {
    icon: ServerIcon,
    title: "Desenvolvimento de APIs Backend",
    description: "Criação de interfaces de programação robustas e escaláveis",
    details: "Ofereço serviços especializados no desenvolvimento de APIs RESTful, garantindo alta performance, segurança e escalabilidade. As soluções incluem autenticação avançada, documentação completa da API, testes automatizados e integração contínua para manter sua infraestrutura backend sempre atualizada e eficiente."
  },
  {
    icon: CodeIcon,
    title: "Criação de Aplicações Web Fullstack",
    description: "Desenvolvimento end-to-end de soluções web completas",
    details: "Crio aplicações web completas, do backend ao frontend. Utilizo tecnologias modernas como React e NextJs para o frontend, combinadas com backends robustos em Node.js ou Golang. Garanto uma experiência de usuário fluida, design responsivo e integração perfeita com APIs e bancos de dados."
  },
  {
    icon: MixerHorizontalIcon,
    title: "Desenvolvimento de Soluções Customizadas",
    description: "Criação de software sob medida para necessidades únicas",
    details: "Entendo que cada negócio tem desafios únicos. Trabalho em estreita colaboração com você para desenvolver soluções de software personalizadas que atendam exatamente às suas necessidades. Desde sistemas de gerenciamento interno até plataformas de e-commerce, nós projetamos, desenvolvemos e implementamos soluções que impulsionam a eficiência e o crescimento do seu negócio."
  },
  {
    icon: Users,
    title: "Consultoria em Arquitetura e Desenvolvimento de Software",
    description: "Orientação especializada para otimizar seus projetos de software",
    details: "Ofereço insights valiosos em todas as fases do ciclo de vida do desenvolvimento de software. Auxilio na definição de arquiteturas escaláveis, seleção de tecnologias apropriadas, implementação de melhores práticas de desenvolvimento e otimização de processos. Meu objetivo é garantir que sua equipe esteja equipada para entregar software de alta qualidade de forma eficiente e sustentável."
  },

] */

type ProfilePageProps = {
  profile: UserProfile
  services: Service[]
  socials: UserSocialMedias[]
}
export function ProfilePageComponent({profile, services, socials}: ProfilePageProps) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Banner */}
      <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
        <Image
          src="/banner2.png"
          alt="Banner"
          width={768}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Avatar */}
      <div className="relative -mt-20 mb-4 flex justify-center">
        <Image
          src={profile.avatar_url}
          alt="Avatar"
          width={180}
          height={180}
          className="rounded-full h-40 w-40 border-4 border-white shadow-lg"
        />
      </div>

      {/* Name and Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">{profile.full_name}</h1>
        <p className="text-muted-foreground">{profile.title}</p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mb-6">
        {socials.map(s => (
            <Button key={s.id} variant="ghost" size="icon">
            <Link href={s.url}><Icon name={s.platform} className="h-5 w-5" /></Link>
          </Button>
        ))}

      </div>

      {/* Tabs */}
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="misc">Misc</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <Card>
            <CardContent className="mt-4 flex flex-col gap-1">
              <h2 className="text-xl font-semibold mb-2">Sobre Mim</h2>
              {profile.bio?.split("\n").map((p,idx) => <p key={idx} className="text-muted-foreground">{p}</p> )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="gallery">
          <Card>
            <CardContent className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Image
                    key={i}
                    src={`https://placehold.co/150/png`}
                    alt={`Gallery image ${i}`}
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="services">
          <Card>
            <CardContent className="mt-4">
              <h2 className="text-2xl font-semibold mb-4">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:bg-accent transition-colors">
                        <CardContent className="p-4 flex flex-col items-center text-center">
                          {React.createElement(iconOptions[service.icon!], {className: "h-12 w-12 mb-2 text-primary" })}
                          <h3 className="font-semibold mb-1">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                        {React.createElement(iconOptions[service.icon!], {className: "h-6 w-6 text-primary" })}
                          {service.title}
                        </DialogTitle>
                      </DialogHeader>
                      <p className="text-muted-foreground">{service.details}</p>
                      <Button className="mt-4">Book Now</Button>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="misc">
          <Card>
            <CardContent className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Misc</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Languages: English, Español, Português</p>
                <p>Disponibilidade: Seg-Sex 6AM-8PM, Sab 8AM-2PM</p>
                <p>Localidade: Vila Nova de Gaia, Porto</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}