import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import SkillSection from '../components/SkillSection'
import AboutMe from '../components/AboutMe' 
import Portfolio from '../components/Portfolio' 
import ContactSection from '../components/ContactSection' 

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <SkillSection />
      <Portfolio />
      <ContactSection />
    </div>
  )
}
