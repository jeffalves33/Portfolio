"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  ArrowRight,
  Star,
  Quote,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const translations = {
  pt: {
    nav: {
      about: "Sobre",
      specialties: "Especialidades",
      projects: "Projetos",
      services: "Serviços",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      title: "Jeferson Alves",
      subtitle: "Empreendedor, Engenheiro e Investidor",
      description:
        "Me de uma semente e vou procurar a melhor terra para plantar, cuidar para que germine e com seus frutos mostrar a outras pessoas como continuar o ciclo. É isso que move meu coração: Investir em propósito, Empreender com energia e pensar como engenheiro para inovar.",
      cta: "Conheça meu trabalho",
    },
    about: {
      title: "Sobre Mim",
      subtitle: "Invisto meu tempo em encontrar soluções para ideias.",
      mission: {
        title: "Minha Missão",
        description:
          "Salomão diz que a glória de Deus está em encobrir as coisas, e a glória do homem, em descobri-las. Minha missão, então, é bem clara.",
      },
      journey: {
        title: "Minha Jornada",
        description:
          "Entrei na Federal sonhando em estar numa grande organização, foi quando cheguei à XP Investimentos e percebi que não queria investir tempo no sonho de outros. Abaixo pode ver alguns projetos meus.",
      },
      values: {
        title: "Meu Lifestyle",
        description:
          "Meu estilo de vida é de mentalidade próspera, riqueza, disciplina e fé para alimentar sempre o propósito. Meu lifestyle é ser melhor todos os dias.",
      },
      stats: {
        experience: "Anos de Experiência",
        projects: "Projetos Desenvolvidos",
        people: "Pessoas Impactadas",
        companies: "Empresas Atendidas",
      },
    },
    specialties: {
      title: "Minhas Especialidades",
      subtitle: "Áreas de expertise que me permitem criar soluções completas",
      technology: {
        title: "Tecnologia",
        skills: [
          "Desenvolvimento Full-Stack",
          "Arquitetura de Software",
          "DevOps & Cloud",
          "Inteligência Artificial",
          "Mobile Development",
        ],
      },
      business: {
        title: "Ferramentas",
        skills: [
          "JavaScript",
          "Python",
          "Flutter",
          "AWS",
          "Node.js",
          "Muito mais",
        ],
      },
      coaching: {
        title: "Soft Skills",
        skills: [
          "Liderança pessoal",
          "Project manager",
          "Habilidade de comunicação",
          "Senso crítico",
          "Gestor financeiro",
          "Empreendedorismo",
        ],
      },
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle: "Veja minhas principais soluções atuais.",
      viewProject: "Ver Projeto",
      items: [
        {
          image: "hoko.png",
          title: "ho.ko AI.nalytics",
          category: "SaaS & Martech",
          description:
            "SaaS B2B que permite às agências cadastrarem seus clientes e transformarem dados brutos em análises estratégicas com IA.",
          tags: ["Node.js", "AWS", "LangChain", "Python"],
          url: "https://www.hokoainalytics.com.br"
        },
        {
          image: "ingressosnaju.png",
          title: "Ingressos NaJu",
          category: "SaaS & Eventtech",
          description:
            "A revolução inteligente na venda de ingressos: gestão completa, layout personalizado e check-in eficiente em uma única plataforma.",
          tags: ["Express.js", "Bootstrap", "Supabase"],
          url: "https://ingressosnaju.com.br/"
        },
        {
          image: "vault.png",
          title: "Vault",
          category: "SaaS & Fintech",
          description:
            "Uma plataforma social de investimentos que conecta investidores iniciantes e experientes em um único ambiente.",
          tags: ["JavaScript", "API", "Bootstrap"],
          url: "https://jeffalves33.github.io/Carteira-de-Investimentos/"
        },
        {
          image: "cryptowealth.png",
          title: "CryptoWealth",
          category: "Fintech",
          description:
            "Uma plataforma que oferece robôs de investimento para operar no mercado cripto, ajustáveis ao perfil de risco do usuário.",
          tags: ["Python", "RAG Model", "API", "Node.js"],
          url: "https://bot-cripto-ao4p.onrender.com"
        },
      ],
    },
    services: {
      title: "Serviços",
      subtitle: "Como podemos melhorar o mundo pelo menos 1% juntos?",
      items: [
        {
          title: "Consultoria Tecnológica",
          description: "Estratégias de transformação digital e arquitetura de software para empresas.",
          features: ["Análise de Sistemas", "Arquitetura de Software", "Estratégia de TI", "Implementação de Soluções"],
        },
        {
          title: "Estrategista de Projetos",
          description: "Transformar visão em resultado sustentável com estratégia aplicada.",
          features: [
            "Desenvolvimento pessoal",
            "Planejamento Estratégico",
            "Ensino e Mentoria",
            "Estratégias de Renda",
          ],
        },
        {
          title: "Desenvolvimento de Software",
          description: "Criação de soluções tecnológicas customizadas para seu negócio.",
          features: ["Aplicações Web", "Apps Mobile", "Sistemas Corporativos", "Integrações API"],
        },
      ],
    },
    contact: {
      title: "Vamos Conversar",
      subtitle: "Pronto para transformar suas ideias em realidade?",
      form: {
        name: "Nome",
        email: "Email",
        subject: "Assunto",
        message: "Mensagem",
        send: "Enviar Mensagem",
      },
      info: {
        email: "luiz_cleidi@hotmail.com",
        phone: "+55 27 98865-5236",
        location: "Espírito Santo, Brasil",
        github: "https://github.com/jeffalves33",
        linkedin: "https://www.linkedin.com/in/jeffalves33/",
        twitter: "https://x.com/jeffalves33",
        instagram: "https://www.instagram.com/jeff.alvesl/"
      },
    },
    testimonials: [
      {
        name: "Maria Silva",
        role: "CEO, TechCorp",
        content: "João transformou completamente nossa visão tecnológica. Resultados excepcionais!",
      },
      {
        name: "Carlos Santos",
        role: "Empreendedor",
        content: "O coaching de prosperidade mudou minha vida financeira. Recomendo totalmente!",
      },
      {
        name: "Ana Costa",
        role: "Diretora de TI",
        content: "Profissional excepcional. Entrega sempre supera as expectativas.",
      },
    ],
  },
  en: {
    nav: {
      about: "About",
      specialties: "Specialties",
      projects: "Projects",
      services: "Services",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Jeferson Alves",
      subtitle: "Entrepreneur, Engineer and Investor",
      description:
        "Give me a seed and I will search for the best soil to plant it, nurture it to grow, and use its fruits to teach others how to keep the cycle going. That's what drives my heart: Investing in purpose, pursuing entrepreneurship with energy, and thinking like an engineer to innovate.",
      cta: "Discover my work"
    },
    about: {
      title: "About Me",
      subtitle: "I invest my time in finding solutions for ideas.",
      mission: {
        title: "My Mission",
        description:
          "Solomon said that the glory of God is to conceal a matter, and the glory of man is to search it out. So my mission is very clear."
      },
      journey: {
        title: "My Journey",
        description:
          "I entered the Federal dreaming of being in a large organization, and when I got to XP Investimentos, I realized I didn’t want to spend time building someone else’s dream. Below you can see some of my own projects."
      },
      values: {
        title: "My Lifestyle",
        description:
          "My lifestyle is about a prosperous mindset, wealth, discipline, and faith to always fuel my purpose. My lifestyle is to become better every day."
      },
      stats: {
        experience: "Years of Experience",
        projects: "Projects Developed",
        people: "People Impacted",
        companies: "Companies Served"
      }
    },
    specialties: {
      title: "My Specialties",
      subtitle: "Expertise areas that allow me to create complete solutions",
      technology: {
        title: "Technology",
        skills: [
          "Full-Stack Development",
          "Software Architecture",
          "DevOps & Cloud",
          "Artificial Intelligence",
          "Mobile Development"
        ]
      },
      business: {
        title: "Tools",
        skills: [
          "JavaScript",
          "Python",
          "Flutter",
          "AWS",
          "Node.js",
          "And much more"
        ]
      },
      coaching: {
        title: "Soft Skills",
        skills: [
          "Personal Leadership",
          "Project Manager",
          "Communication Skills",
          "Critical Thinking",
          "Financial Management",
          "Entrepreneurship"
        ]
      }
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Explore my main current solutions.",
      viewProject: "View Project",
      items: [
        {
          image: "hoko.png",
          title: "ho.ko AI.nalytics",
          category: "SaaS & Martech",
          description:
            "B2B SaaS that enables agencies to register their clients and turn raw data into strategic insights using AI.",
          tags: ["Node.js", "AWS", "LangChain", "Python"],
          url: "https://www.hokoainalytics.com.br"
        },
        {
          image: "ingressosnaju.png",
          title: "Ingressos NaJu",
          category: "SaaS & Eventtech",
          description:
            "The smart revolution in ticket sales: complete management, custom layout, and efficient check-in all in one platform.",
          tags: ["Express.js", "Bootstrap", "Supabase"],
          url: "https://ingressosnaju.com.br/"
        },
        {
          image: "vault.png",
          title: "Vault",
          category: "SaaS & Fintech",
          description:
            "A social investment platform that connects beginner and experienced investors in one space.",
          tags: ["JavaScript", "API", "Bootstrap"],
          url: "https://jeffalves33.github.io/Carteira-de-Investimentos/"
        },
        {
          image: "cryptowealth.png",
          title: "CryptoWealth",
          category: "Fintech",
          description:
            "A platform that provides investment bots to operate in the crypto market, tailored to the user's risk profile.",
          tags: ["Python", "RAG Model", "API", "Node.js"],
          url: "https://bot-cripto-ao4p.onrender.com"
        }
      ]
    },
    services: {
      title: "Services",
      subtitle: "How can we make the world at least 1% better together?",
      items: [
        {
          title: "Technology Consulting",
          description: "Digital transformation strategies and software architecture for companies.",
          features: ["System Analysis", "Software Architecture", "IT Strategy", "Solution Implementation"]
        },
        {
          title: "Project Strategist",
          description: "Transforming vision into sustainable results through applied strategy.",
          features: [
            "Personal Development",
            "Strategic Planning",
            "Teaching and Mentoring",
            "Income Strategies"
          ]
        },
        {
          title: "Software Development",
          description: "Creation of customized technological solutions for your business.",
          features: ["Web Applications", "Mobile Apps", "Enterprise Systems", "API Integrations"]
        }
      ]
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Ready to turn your ideas into reality?",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message"
      },
      info: {
        email: "luiz_cleidi@hotmail.com",
        phone: "+55 27 98865-5236",
        location: "Espírito Santo, Brazil",
        github: "https://github.com/jeffalves33",
        linkedin: "https://www.linkedin.com/in/jeffalves33/",
        twitter: "https://x.com/jeffalves33",
        instagram: "https://www.instagram.com/jeff.alvesl/"
      }
    },
    testimonials: [
      {
        name: "Maria Silva",
        role: "CEO, TechCorp",
        content: "João completely transformed our tech vision. Outstanding results!"
      },
      {
        name: "Carlos Santos",
        role: "Entrepreneur",
        content: "The prosperity coaching changed my financial life. Highly recommended!"
      },
      {
        name: "Ana Costa",
        role: "IT Director",
        content: "Exceptional professional. Delivery always exceeds expectations."
      }
    ]
  }

}

export default function Portfolio() {
  const [language, setLanguage] = useState<"pt" | "en">("pt")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const t = translations[language]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [t.testimonials.length])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Jeferson Alves
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  {value}
                </button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                className="text-slate-300 hover:text-white"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language.toUpperCase()}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                className="text-slate-300 hover:text-white p-2"
              >
                <Globe className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800"
            >
              <div className="px-4 py-6 space-y-4">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block w-full text-left text-slate-300 hover:text-white transition-colors duration-200 py-2 text-base"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
        {/*<div className="absolute inset-0 bg-[url('/images/perfil5.jpg?height=1080&width=1920')] bg-cover bg-center opacity-10" />*/}
        <div className="absolute inset-0 bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 text-base sm:text-lg mb-4"
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
            >
              {t.hero.title}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-4 sm:mb-6"
            >
              {t.hero.subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-slate-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t.hero.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400">
                <Image src="/images/perfil4.PNG?height=400&width=400" alt="Jeferson Alves" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown
            className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400 animate-bounce cursor-pointer"
            onClick={() => scrollToSection("about")}
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">{t.about.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{t.about.mission.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base">{t.about.mission.description}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{t.about.journey.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base">{t.about.journey.description}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{t.about.values.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base">{t.about.values.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { number: "5+", label: t.about.stats.experience },
              { number: "10+", label: t.about.stats.projects },
              { number: "50+", label: t.about.stats.people },
              { number: "10+", label: t.about.stats.companies },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="py-12 sm:py-16 lg:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent px-4">
              {t.specialties.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">{t.specialties.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Technology */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/90 border-blue-700/10 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-blue-400">{t.specialties.technology.title}</h3>
                  <div className="space-y-4">
                    {t.specialties.technology.skills.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                        <span className="text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-green-900/50 to-green-800/90 border-green-700/10 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-green-400">{t.specialties.business.title}</h3>
                  <div className="space-y-4">
                    {t.specialties.business.skills.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        <span className="text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Coaching */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/90 border-purple-700/10 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-purple-400">{t.specialties.coaching.title}</h3>
                  <div className="space-y-4">
                    {t.specialties.coaching.skills.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                        <span className="text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent px-4">
              {t.projects.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">{t.projects.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {t.projects.items.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
                  <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                    <Image
                      src={`/images/${project.image}?height=200&width=400&text=${project.title}`}
                      alt={project.title}
                      fill
                      className="object-cover object-top opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{project.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-slate-700 text-slate-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <a href={project.url || "#"} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
                        {t.projects.viewProject}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent px-4">
              {t.services.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">{t.services.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {t.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800 border-slate-700 h-full group hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {index === 0 && <Star className="w-8 h-8 text-white" />}
                      {index === 1 && <ArrowRight className="w-8 h-8 text-white" />}
                      {index === 2 && <Star className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">{t.contact.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm sm:text-base">Email</p>
                    <p className="text-white font-semibold text-sm sm:text-base">{t.contact.info.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm sm:text-base">Telefone</p>
                    <p className="text-white font-semibold text-sm sm:text-base">{t.contact.info.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm sm:text-base">Localização</p>
                    <p className="text-white font-semibold text-sm sm:text-base">{t.contact.info.location}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 pt-6 sm:pt-8">
                  <a href={t.contact.info.github || "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                      <Github className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href={t.contact.info.linkedin || "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href={t.contact.info.twitter || "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                      <Twitter className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href={t.contact.info.instagram || "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                      <Instagram className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Testimonials Carousel 
              <div className="mt-8 sm:mt-12">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">O que dizem sobre mim</h3>
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-4 sm:p-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-4" />
                        <p className="text-slate-300 mb-4 italic text-sm sm:text-base">
                          "{t.testimonials[currentTestimonial].content}"
                        </p>
                        <div>
                          <p className="text-white font-semibold text-sm sm:text-base">
                            {t.testimonials[currentTestimonial].name}
                          </p>
                          <p className="text-slate-400 text-xs sm:text-sm">{t.testimonials[currentTestimonial].role}</p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>*/}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6 sm:p-8">
                  <form className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">{t.contact.form.name}</label>
                        <Input
                          className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                          placeholder={t.contact.form.name}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">{t.contact.form.email}</label>
                        <Input
                          type="email"
                          className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                          placeholder={t.contact.form.email}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t.contact.form.subject}</label>
                      <Input
                        className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                        placeholder={t.contact.form.subject}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t.contact.form.message}</label>
                      <Textarea
                        rows={5}
                        className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 resize-none"
                        placeholder={t.contact.form.message}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      {t.contact.form.send}
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400">
            <p>&copy; 2024 Jeferson Alves. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
