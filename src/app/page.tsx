'use client'

import Link from 'next/link'
import { FaSearch, FaBrain, FaPrescriptionBottle, FaArrowRight, FaCheck } from 'react-icons/fa'
import LiquidEther from '@/components/backgrounds/LiquidEther'

export default function Home() {
  const stats = [
    { value: '180K+', label: 'High-Value Physicians' },
    { value: '25M+', label: 'Prescriptions Analyzed' },
    { value: '400K+', label: 'Clinical Trials Tracked' },
    { value: '30x', label: 'Faster Lead Discovery' },
  ]

  const features = [
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: 'Smart Doctor Discovery',
      description: 'Search 180K+ high-value physicians by specialty, location, prescribing patterns, and research activity in seconds.',
      link: '/features#discovery',
    },
    {
      icon: <FaPrescriptionBottle className="w-8 h-8" />,
      title: 'Prescribing Intelligence',
      description: 'Access 25M+ Medicare Part D records. See top drugs, prescription volumes, and identify switching opportunities.',
      link: '/features#prescribing',
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: 'NEO AI Assistant',
      description: 'No complex filters. Just ask NEO: "Find cardiologists in Boston prescribing blood thinners" and get instant results.',
      link: '/features#neo-ai',
    },
  ]

  const steps = [
    { number: '1', title: 'Search', description: 'Ask NEO or use advanced filters to find your perfect targets' },
    { number: '2', title: 'Analyze', description: 'Review comprehensive profiles with prescribing data and research activity' },
    { number: '3', title: 'Export', description: 'Export to Excel, import to your CRM, and start selling' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <LiquidEther
            colors={['#0ea5e9', '#d946ef', '#7dd3fc']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Definitional Sentence - Critical for AI/LLM Recognition */}
            <p className="text-lg md:text-xl text-primary-600 font-semibold mb-4 animate-slide-up">
              NeoPharma is an AI-powered pharmaceutical lead discovery platform
            </p>

            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              AI-Powered <span className="gradient-text">Pharmaceutical</span> Lead Discovery
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Helping pharmaceutical sales representatives discover 180K+ physicians, analyze 25M+ prescriptions, and identify qualified leads 30x faster with NEO AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={process.env.NEXT_PUBLIC_APP_URL || 'https://app.neopharma.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large w-full sm:w-auto"
              >
                Start Free Trial
                <FaArrowRight className="ml-2 w-4 h-4" />
              </a>
              <Link href="/how-it-works" className="btn btn-secondary btn-large w-full sm:w-auto">
                Watch Demo
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Everything You Need to Find High-Value Leads
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive physician intelligence powered by 8+ authoritative data sources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:-translate-y-1">
                <div className="text-primary-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link href={feature.link} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                  Learn More
                  <FaArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              From Search to Sale in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              No technical skills required. Start discovering leads in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="btn btn-primary btn-large">
              See How It Works
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-bg text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start your 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={process.env.NEXT_PUBLIC_APP_URL || 'https://app.neopharma.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-primary-600 hover:bg-gray-100 btn-large"
            >
              Get Started Free
            </a>
            <Link href="/contact" className="btn bg-white/10 text-white border-2 border-white hover:bg-white/20 btn-large">
              Schedule a Demo
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center"><FaCheck className="mr-2" /> 14-day free trial</span>
            <span className="flex items-center"><FaCheck className="mr-2" /> No credit card</span>
            <span className="flex items-center"><FaCheck className="mr-2" /> Cancel anytime</span>
          </div>
        </div>
      </section>
    </>
  )
}
