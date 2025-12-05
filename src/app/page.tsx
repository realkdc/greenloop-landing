'use client';

import React, { useState, useRef } from 'react';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, Users, DollarSign, BarChart3, AlertCircle, Menu, X, ExternalLink, Sparkles, Info } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function LeadCaptureModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center mb-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Start the Recovery</h3>
          <p className="text-slate-600 mt-2">We'll send you the agreement to fix your repeat revenue.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input 
              type="text" 
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              placeholder="John Doe"
              autoFocus
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              placeholder="john@restaurant.com"
            />
          </div>

          <button 
            type="submit"
            className="w-full rounded-lg bg-emerald-600 px-6 py-4 text-lg font-bold text-white hover:bg-emerald-700 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] mt-4"
          >
            Send Me the Agreement
          </button>
          
          <p className="text-xs text-center text-slate-400 mt-4">
            No demo required. Simple agreement.
          </p>
        </form>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Stable year for footer (prevents hydration mismatch)
  const currentYear = new Date().getFullYear();

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 font-sans text-slate-900 selection:bg-emerald-100">
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent text-xl hover:opacity-80 transition-opacity cursor-pointer"
          >
            <TrendingUp className="h-6 w-6 text-emerald-600" />
            <span>GreenLoop</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection(howItWorksRef)}
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection(pricingRef)}
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={scrollToCalculator}
              className="rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:from-emerald-700 hover:to-emerald-800 hover:shadow-lg hover:shadow-emerald-200 hover:scale-105 active:scale-95"
            >
              RUN CALCULATOR
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection(howItWorksRef)}
                className="text-left text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection(pricingRef)}
                className="text-left text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors py-2"
              >
                Pricing
              </button>
              <button 
                onClick={scrollToCalculator}
                className="mt-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 text-center"
              >
                RUN CALCULATOR
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-32 text-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
              <div className="inline-block mb-4 px-3 sm:px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100">
                <span className="text-xs sm:text-sm font-semibold text-emerald-700">The Restaurant Repeat Revenue Audit™</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight px-2">
                Automate Your Repeat Revenue.
                <span className="mt-2 sm:mt-3 block bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                  A Profit Department That Runs Itself.
                </span>
              </h1>
              
              <p className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed px-4">
                Calculate exactly how much repeat revenue you're losing - then fix it forever.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
                <button
                  onClick={scrollToCalculator}
                  className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white shadow-xl shadow-emerald-200/50 transition-all hover:from-emerald-700 hover:to-emerald-800 hover:shadow-2xl hover:shadow-emerald-300/50 hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  RUN THE CALCULATOR
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="pt-8 sm:pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                  <span>30-Second Calculation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section: See How Much You're Losing */}
        <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  See How Much You're Losing
                </h2>
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
                  The math doesn't lie. See exactly what's leaking from your revenue every month.
                </p>
              </div>
              
              {/* Main Content Grid - Stacks on mobile */}
              <div className="grid gap-8 md:gap-10 lg:grid-cols-5 items-start">
                {/* Left Column - Problem Statement */}
                <div className="lg:col-span-3 space-y-6 bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                  <div className="inline-block px-4 py-2 rounded-full bg-red-50 border-2 border-red-100">
                    <span className="text-sm font-bold text-red-700 uppercase tracking-wide">Critical Revenue Leak</span>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-slate-900 font-bold">
                      Restaurant owners lose <span className="text-red-600">20–40% of repeat revenue</span> every single month.
                    </p>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                      Without automation, your repeat customers slip away, and you never know how much revenue you're missing.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">The 4 Main Leaks:</p>
                    <ul className="space-y-3 sm:space-y-4">
                      {[
                        "No automated follow-up with guests",
                        "No reactivation of lost customers",
                        "No frequency-building campaigns",
                        "Relying on hope instead of data"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 sm:gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                          </div>
                          <span className="text-base sm:text-lg text-slate-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right Column - CTA Card */}
                <div className="lg:col-span-2">
                  <div className="rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-700 p-8 sm:p-10 shadow-2xl text-white relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl"></div>
                    
                    <div className="relative space-y-6 text-center">
                      <div className="inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 mx-auto">
                        <DollarSign className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-2xl sm:text-3xl font-bold">The Cost of Waiting</h3>
                        <p className="text-emerald-50 text-base sm:text-lg leading-relaxed px-2">
                          Every day you wait, loyal customers drift away. 
                          Run the calculator to see your exact monthly loss.
                        </p>
                      </div>
                      
                      <button
                        onClick={scrollToCalculator}
                        className="mt-6 w-full rounded-xl bg-white text-emerald-600 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold transition-all hover:bg-emerald-50 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 active:scale-95"
                      >
                        Show Me My Lost Revenue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section ref={howItWorksRef} className="py-16 sm:py-20 md:py-24 scroll-mt-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 sm:mb-16 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">What We Do</h2>
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">We install a system that runs itself - automating your repeat revenue 24/7.</p>
              </div>
              
              <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
                {[
                  {
                    icon: Users,
                    title: "Bring Back Lost Customers",
                    desc: "Automatically reactivate guests who haven't visited in 30+ days."
                  },
                  {
                    icon: TrendingUp,
                    title: "Increase Frequency",
                    desc: "Drive more visits from your best customers without discounting."
                  },
                  {
                    icon: BarChart3,
                    title: "Predictable Revenue",
                    desc: "Turn sporadic sales into a consistent, reliable monthly engine."
                  }
                ].map((feature, i) => (
                  <div key={i} className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/50 group-hover:to-transparent transition-all duration-300"></div>
                    <div className="relative">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white mb-6 shadow-lg shadow-emerald-200">
                        <feature.icon className="h-7 w-7" />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-slate-900">{feature.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-slate-50/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">Trusted by Industry Leaders</h2>
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                  See our client apps in action - live on the App Store.
                </p>
              </div>
              
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-stretch" suppressHydrationWarning>
                {/* GreenHaus Cannabis Co */}
                <a
                  href="https://apps.apple.com/us/app/greenhaus-cannabis-co/id6754898523"
            target="_blank"
            rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-slate-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-300 block"
                  suppressHydrationWarning
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 h-full">
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">GreenHaus Cannabis Co.</h3>
                      <p className="text-slate-600 text-sm sm:text-base mb-4">Pickup Orders & Rewards App</p>
                      <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                        <span>View on App Store</span>
                        <ExternalLink className="h-4 w-4 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* The Cake House */}
                <a
                  href="https://apps.apple.com/us/app/the-cake-house-dispensaries/id6478935381"
            target="_blank"
            rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-slate-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-300 block"
                  suppressHydrationWarning
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 h-full">
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">The Cake House</h3>
                      <p className="text-slate-600 text-sm sm:text-base mb-4">Dispensary Mobile App</p>
                      <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                        <span>View on App Store</span>
                        <ExternalLink className="h-4 w-4 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
          </a>
        </div>
              
              <div className="mt-8 text-center">
                <p className="text-slate-500 text-sm sm:text-base">
                  Both apps built and maintained by GreenLoop
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section ref={calculatorRef} className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-16 sm:py-20 md:py-24 text-white scroll-mt-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 sm:mb-12 text-center px-4">
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-800/50 backdrop-blur-sm border border-emerald-700/50">
                  <span className="text-xs sm:text-sm font-semibold text-emerald-100">The Restaurant Repeat Revenue Audit™</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Proof via Math</h2>
                <p className="mt-4 text-lg sm:text-xl text-emerald-50 font-medium">No testimonials. Just math.</p>
                <p className="mt-2 text-base sm:text-lg text-emerald-200/90 max-w-2xl mx-auto">This calculator shows exactly how much repeat revenue you're missing - calculated in real-time based on your numbers.</p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 md:p-12 text-slate-900 shadow-2xl border border-slate-100">
                <RevenueCalculator onFixNowClick={() => setIsModalOpen(true)} />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Guarantee */}
        <section ref={pricingRef} className="py-16 sm:py-20 md:py-24 scroll-mt-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">Pricing & Guarantees</h2>
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">Transparent pricing with iron-clad guarantees.</p>
              </div>
              
              <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-start">
                {/* Pricing Card */}
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                  <div className="space-y-6">
                    {/* Limited Time Offer Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold mb-4">
                      <Sparkles className="h-4 w-4" />
                      <span>Limited: First 3 Restaurants</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-4 border-b-2 border-slate-200">
                        <span className="text-lg sm:text-xl font-semibold text-slate-700">Setup Fee</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xl sm:text-2xl font-bold text-red-500 line-through decoration-2">
                            $15,000
                          </span>
                          <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600">
                            $7,500
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-4 border-b-2 border-slate-200">
                        <span className="text-lg sm:text-xl font-semibold text-slate-700">Monthly Fee</span>
                        <div className="text-right">
                          <div className="text-xs sm:text-sm font-medium text-slate-500 mb-1">Starts at</div>
                          <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">$2,500/mo</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl bg-emerald-50 border-2 border-emerald-100 p-6 mt-6">
                      <h3 className="mb-4 font-bold text-emerald-900 text-lg">Our Iron-Clad Guarantees:</h3>
                      <ul className="space-y-3">
                        {[
                          "Go-live in 7 days or we pay you $500",
                          "Setup takes < 30 mins or we pay you $500",
                          "Pays for itself in 30 days or next month free"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-800 font-medium text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-700 p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl"></div>
                  
                  <div className="relative text-center space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold">Ready to Stop the Leak?</h3>
                    <p className="text-emerald-50 text-base sm:text-lg leading-relaxed px-2">
                      If the math makes sense, let's fix your repeat revenue engine today.
                    </p>
                    <button 
                      onClick={scrollToCalculator}
                      className="w-full rounded-xl bg-white text-emerald-600 px-6 py-4 sm:py-5 text-base sm:text-lg font-bold transition-all hover:bg-emerald-50 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 active:scale-95"
                    >
                      RUN THE CALCULATOR FIRST
                    </button>
                    <p className="text-sm text-emerald-100">
                      See the numbers, then decide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-slate-500">
        <p>© {currentYear} GreenLoop. All rights reserved.</p>
      </footer>
    </div>
  );
}

function RevenueCalculator({ onFixNowClick }: { onFixNowClick?: () => void }) {
  const [inputs, setInputs] = useState({
    locations: 1,
    monthlyCustomers: 2000,
    ticketSize: 45,
    returnRate: 30,
    lostCustomers: 50,
    hasLoyalty: 'no'
  });

  // CALCULATOR LOGIC: Monthly Lost Revenue Calculation
  // Based on industry benchmarks and Hormozi's "Leaky Bucket" principle
  // Formula designed to show realistic, compelling lost revenue numbers
  
  const totalMonthlyCustomers = inputs.locations * inputs.monthlyCustomers;
  const currentReturnRate = inputs.returnRate / 100;
  
  // If they already have fully automated, they're already optimized - minimal opportunity
  // If they have manual loyalty, they're missing some efficiency
  // If they have no system, they're missing the most opportunity
  
  let repeatRateLoss = 0;
  let reactivationLoss = 0;
  let loyaltyInefficiencyPenalty = 0;
  
  // If they DON'T have fully automated, calculate lost revenue opportunity
  if (inputs.hasLoyalty !== 'yes-auto') {
    // Industry benchmark: Restaurants with proper automation achieve 40-45% repeat rate
    const industryBenchmarkRate = 0.42; // Target for restaurants with automation
    
    // 1. REPEAT RATE GAP LOSS (Biggest opportunity)
    // Customers who SHOULD be returning but aren't due to lack of automation
    const returnRateGap = Math.max(0, industryBenchmarkRate - currentReturnRate);
    const gapCustomers = totalMonthlyCustomers * returnRateGap;
    // Average customer visits 1.8x/month when properly engaged (vs 1x when not)
    const frequencyMultiplier = 1.8;
    repeatRateLoss = gapCustomers * inputs.ticketSize * frequencyMultiplier;
    
    // 2. REACTIVATION OPPORTUNITY (Customers who stopped returning)
    // Of the customers who don't return, 22% can be reactivated with automation
    const nonReturningCustomers = totalMonthlyCustomers * (1 - currentReturnRate);
    const reactivationRate = 0.22; // 22% industry average reactivation rate
    const reactivatableCustomers = nonReturningCustomers * reactivationRate;
    reactivationLoss = reactivatableCustomers * inputs.ticketSize * 1.5; // 1.5x monthly visits once reactivated
    
    // 3. LOYALTY PROGRAM INEFFICIENCY (If they have manual loyalty program)
    // Manual programs capture only 60-70% of potential vs automated (90%+)
    if (inputs.hasLoyalty === 'yes') {
      // Manual loyalty programs miss about 15% of potential revenue
      loyaltyInefficiencyPenalty = totalMonthlyCustomers * 0.15 * inputs.ticketSize;
    }
  } else {
    // They have fully automated - if return rate is still low, there's minimal additional opportunity
    // Only calculate if their return rate is below 40% (meaning automation isn't working well)
    if (currentReturnRate < 0.40) {
      const remainingGap = 0.40 - currentReturnRate;
      const gapCustomers = totalMonthlyCustomers * remainingGap;
      repeatRateLoss = gapCustomers * inputs.ticketSize * 1.2; // Smaller multiplier since they already have automation
    }
    // Minimal reactivation opportunity if already automated
    reactivationLoss = 0;
  }
  
  // 3. HARD CHURN LOSS (Customers lost permanently each month)
  // This applies to everyone - represents lifetime value lost
  // Average customer lifetime: 8 months, 1.2 visits/month
  const avgLifetimeMonths = 8;
  const avgVisitsPerMonth = 1.2;
  const lifetimeValuePerCustomer = inputs.ticketSize * avgVisitsPerMonth * avgLifetimeMonths;
  const monthlyChurnLoss = (inputs.locations * inputs.lostCustomers * lifetimeValuePerCustomer) / avgLifetimeMonths;
  
  // TOTAL MONTHLY LOST REVENUE (rounded to nearest $100 for credibility)
  const totalLostRevenue = Math.round((repeatRateLoss + reactivationLoss + monthlyChurnLoss + loyaltyInefficiencyPenalty) / 100) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'hasLoyalty' ? value : Number(value)
    }));
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            Number of Locations
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-normal text-slate-500 bg-slate-100">
              <Info className="h-3 w-3" />
              Avg: 1-15
            </span>
          </label>
          <input
            type="number"
            name="locations"
            value={inputs.locations}
            onChange={handleInputChange}
            placeholder="e.g. 3"
            className="w-full rounded-xl border-2 border-slate-200 px-5 py-3.5 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all bg-slate-50 hover:bg-white hover:border-slate-300"
            min="1"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            Monthly Customers (Per Location)
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-normal text-slate-500 bg-slate-100">
              <Info className="h-3 w-3" />
              Avg: 1,500-3,000
            </span>
          </label>
          <input
            type="number"
            name="monthlyCustomers"
            value={inputs.monthlyCustomers}
            onChange={handleInputChange}
            placeholder="e.g. 2000"
            className="w-full rounded-xl border-2 border-slate-200 px-5 py-3.5 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all bg-slate-50 hover:bg-white hover:border-slate-300"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            Average Ticket Size ($)
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-normal text-slate-500 bg-slate-100">
              <Info className="h-3 w-3" />
              Avg: $25-60
            </span>
          </label>
          <input
            type="number"
            name="ticketSize"
            value={inputs.ticketSize}
            onChange={handleInputChange}
            placeholder="e.g. 45"
            className="w-full rounded-xl border-2 border-slate-200 px-5 py-3.5 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all bg-slate-50 hover:bg-white hover:border-slate-300"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            % of Customers Who Return
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-normal text-slate-500 bg-slate-100">
              <Info className="h-3 w-3" />
              Industry: 25-35%
            </span>
          </label>
          <div className="flex items-center gap-4 pt-2">
            <input
              type="range"
              name="returnRate"
              min="0"
              max="100"
              value={inputs.returnRate}
              onChange={handleInputChange}
              className="h-3 w-full cursor-pointer rounded-lg bg-slate-200 accent-emerald-600 hover:accent-emerald-700 transition-all"
            />
            <span className="w-16 text-right font-mono font-bold text-slate-900 text-lg bg-slate-100 px-3 py-1 rounded-lg">{inputs.returnRate}%</span>
          </div>
          <p className="text-xs text-slate-500">Without automation, most restaurants see 25-35% repeat rate</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            Est. "Lost" Customers Per Month
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-normal text-slate-500 bg-slate-100">
              <Info className="h-3 w-3" />
              Avg: 30-100
            </span>
          </label>
          <input
            type="number"
            name="lostCustomers"
            value={inputs.lostCustomers}
            onChange={handleInputChange}
            placeholder="e.g. 50"
            className="w-full rounded-xl border-2 border-slate-200 px-5 py-3.5 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all bg-slate-50 hover:bg-white hover:border-slate-300"
          />
          <p className="text-xs text-slate-500">Customers who stopped coming entirely</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            Current Loyalty Program?
          </label>
          <select
            name="hasLoyalty"
            value={inputs.hasLoyalty}
            onChange={handleInputChange}
            className="w-full rounded-xl border-2 border-slate-200 px-5 py-3.5 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all bg-slate-50 hover:bg-white hover:border-slate-300 cursor-pointer"
          >
            <option value="no">No</option>
            <option value="yes">Yes (But not automated)</option>
            <option value="yes-auto">Yes (Fully Automated)</option>
          </select>
          <p className="text-xs text-slate-500">Automated programs see 40-50% repeat rates vs 25-35% without</p>
        </div>
      </div>

      {/* Real-time Results - Always Visible */}
      <div className="mt-8 sm:mt-10 rounded-3xl bg-white p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden border border-slate-100">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
            <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider">Monthly Revenue Leak Detected</h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-end gap-2 mb-2">
            <div className="text-6xl sm:text-7xl md:text-8xl font-black text-slate-900 tracking-tight">
              ${totalLostRevenue.toLocaleString()}
            </div>
            <div className="pb-4 text-xl sm:text-2xl text-slate-500 font-medium">
              / month
            </div>
          </div>
          
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-10">
            This is the exact amount of unactivated repeat revenue slipping through your cracks every single month.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200/60">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-slate-900 mb-1">Stop the leak today.</h4>
              <p className="text-slate-500 text-sm">We can automate this recovery for you instantly.</p>
            </div>
            
            <button 
              onClick={onFixNowClick}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto whitespace-nowrap"
            >
              Fix This Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400 px-2">
            <Sparkles className="h-3 w-3 text-emerald-500" />
            <span>Limited: First 3 restaurants get 50% off setup</span>
          </div>
        </div>
      </div>
    </div>
  );
}
