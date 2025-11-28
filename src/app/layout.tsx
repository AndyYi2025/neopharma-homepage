import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import OrganizationSchema from '@/components/schema/OrganizationSchema'
import AIMeta from '@/components/seo/AIMeta'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.neopharma.io'),
  title: 'NeoPharma - AI-Powered Pharmaceutical Lead Discovery',
  description: 'NeoPharma is an AI-powered pharmaceutical lead discovery platform that helps pharma sales reps discover 180K+ physicians, analyze 25M+ prescriptions, and identify qualified leads 30x faster with NEO AI assistant.',
  keywords: 'pharmaceutical sales AI, pharma lead discovery, physician targeting, NEO AI assistant, medical sales CRM, doctor database, Medicare prescriptions, AI sales agent, pharma sales tools',
  authors: [{ name: 'NeoPharma' }],
  openGraph: {
    title: 'NeoPharma - AI-Powered Pharmaceutical Lead Discovery',
    description: 'NeoPharma is an AI-powered pharmaceutical lead discovery platform that helps pharma sales reps discover 180K+ physicians, analyze 25M+ prescriptions, and identify qualified leads 30x faster.',
    url: 'https://www.neopharma.io',
    siteName: 'NeoPharma',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeoPharma - AI-Powered Pharmaceutical Lead Discovery',
    description: 'NeoPharma is an AI-powered pharmaceutical lead discovery platform that helps pharma sales reps discover 180K+ physicians and analyze 25M+ prescriptions with NEO AI.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <OrganizationSchema />
        <AIMeta />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
