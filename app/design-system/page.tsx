'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Accordion, AccordionItem } from '@/components/ui/Accordion'

// Colors data aligned to production
const colorTokens = [
  { name: 'Surface', variable: '--color-surface', hex: '#0e0e0e', twClass: 'bg-surface', desc: 'Main dark workspace layout backplate' },
  { name: 'Surface Card', variable: '--color-surface-card', hex: '#161616', twClass: 'bg-surface-card', desc: 'Default component container background' },
  { name: 'Surface Raised', variable: '--color-surface-raised', hex: '#191919', twClass: 'bg-surface-raised', desc: 'Elevated panels & container variants' },
  { name: 'Border', variable: '--color-border', hex: '#202020', twClass: 'border-border', desc: 'Standard low-contrast structural dividers' },
  { name: 'Border Active', variable: '--color-border-active', hex: '#373737', twClass: 'border-border-active', desc: 'Focus borders & highlighted boundary limits' },
  { name: 'Accent Green', variable: '--color-accent-green', hex: '#3d6e4e', twClass: 'bg-accent-green', desc: 'Core brand green theme highlight color' },
  { name: 'Testimonial Lime', variable: '--color-accent-lime', hex: '#d4f33b', twClass: 'bg-accent-lime', desc: 'Loud case study swatch [Reserved for Testimonials]' },
  { name: 'Testimonial Orange', variable: '--color-accent-orange', hex: '#ff5a1f', twClass: 'bg-accent-orange', desc: 'Loud case study swatch [Reserved for Testimonials]' },
]

export default function DesignSystemShowroom() {
  // Playground states
  const [btnLoading, setBtnLoading] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [btnMono, setBtnMono] = useState(false)
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  
  // Form playground states
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMsg, setFormMsg] = useState('')
  const [hasFormError, setHasFormError] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Copy alerts
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedToken(text)
    setTimeout(() => setCopiedToken(null), 1800)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formName || !formEmail) {
      setHasFormError(true)
      return
    }
    setHasFormError(false)
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  // Active Code sample
  const getButtonCode = () => {
    const monoAttr = btnMono ? ' isMono' : ''
    const loadAttr = btnLoading ? ' isLoading' : ''
    const disAttr = btnDisabled ? ' disabled' : ''
    return `<Button variant="white" size="md"${monoAttr}${loadAttr}${disAttr}>
  Submit Message
</Button>`
  }

  return (
    <div className="flex flex-col gap-6 py-6 md:py-10 max-w-7xl mx-auto">
      
      {/* 1. BRANDING HEADER */}
      <section className="border border-border bg-surface-card relative overflow-hidden rounded-none">
        <div className="pointer-events-none absolute inset-0 bg-surface mix-blend-screen" aria-hidden="true">
          <img
            alt=""
            className="object-cover object-center absolute inset-0 w-full h-full opacity-25"
            src="/backgrounds/sprinkle-solutions.svg"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-surface/80" />
        
        <div className="relative z-10 px-6 py-8 md:p-10 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent">Production Verified</Badge>
            <Badge variant="outline">rounded-none aesthetics</Badge>
          </div>
          
          <h1 className="font-sans text-white text-3xl md:text-5xl font-light tracking-tight leading-none mt-2">
            Eledra Labs <span className="text-white/50">— Design System Audit</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-text-mute max-w-2xl leading-relaxed">
            Standardized production visuals audited against the live site. All experimental, non-authentic glass frames, neon drop shadows, and arbitrary brutalist button variables have been quarantined.
          </p>

          <div className="flex flex-wrap gap-2 mt-4 font-favorit text-2xs">
            <Link href="#tokens" className="text-white/40 hover:text-white transition-colors">&gt; 01_TOKENS</Link>
            <span className="text-white/20">/</span>
            <Link href="#components" className="text-white/40 hover:text-white transition-colors">&gt; 02_COMPONENTS</Link>
            <span className="text-white/20">/</span>
            <Link href="#playground" className="text-white/40 hover:text-white transition-colors">&gt; 03_ARENA</Link>
            <span className="text-white/20">/</span>
            <Link href="/" className="text-accent-lime hover:brightness-110 transition-all font-medium">&gt; BACK_TO_HOME →</Link>
          </div>
        </div>
      </section>

      {/* 2. DESIGN TOKENS CONTAINER */}
      <section id="tokens" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* A. Colors grid */}
        <div className="lg:col-span-2 border border-border bg-surface px-6 py-6 flex flex-col gap-6 rounded-none">
          <div className="flex flex-col gap-1 border-b border-border/40 pb-3">
            <span className="font-favorit text-2xs text-accent-green uppercase tracking-widest">01 / BRAND COLOR SCALES</span>
            <h2 className="text-xl md:text-2xl text-white font-sans font-light">Audited Token Swatches</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {colorTokens.map((col) => (
              <div 
                key={col.variable} 
                className="flex items-center gap-3 p-3 bg-surface-card border border-border/60 hover:border-border-active transition-all group rounded-none"
              >
                <div 
                  className={`w-12 h-12 shrink-0 border border-border/60 rounded-none ${col.twClass}`}
                  style={!col.twClass ? { backgroundColor: col.hex } : undefined}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white truncate block">{col.name}</span>
                    <span className="font-favorit text-[10px] text-white/30">{col.hex}</span>
                  </div>
                  <span className="font-favorit text-[10px] text-text-mute block mt-0.5 truncate">{col.variable}</span>
                  <span className="text-[10px] text-white/40 block mt-1 truncate">{col.desc}</span>
                </div>
                
                <button
                  onClick={() => copyToClipboard(col.twClass.replace('bg-', ''))}
                  className="p-1.5 opacity-0 group-hover:opacity-100 bg-surface border border-border hover:border-border-active transition-all cursor-pointer shrink-0 rounded-none"
                  title="Copy Utility Class"
                >
                  {copiedToken === col.twClass.replace('bg-', '') ? (
                    <span className="text-[9px] font-favorit text-accent-green font-bold px-0.5 animate-pulse">COPY!</span>
                  ) : (
                    <svg className="w-3 h-3 text-text-mute hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* B. Typography spec */}
        <div className="border border-border bg-surface px-6 py-6 flex flex-col gap-6 justify-between rounded-none">
          <div className="flex flex-col gap-1 border-b border-border/40 pb-3">
            <span className="font-favorit text-2xs text-accent-green uppercase tracking-widest">02 / TYPOGRAPHY SPEC</span>
            <h2 className="text-xl md:text-2xl text-white font-sans font-light">Audited Typographies</h2>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-2xs text-text-mute font-favorit uppercase">Core Body Font (Geist Sans)</span>
              <p className="font-sans text-sm text-white/80 leading-relaxed">
                Used for fluid narrative, content text, statistics summaries, and operations details. Beautiful under variable weights.
              </p>
              <div className="flex flex-col gap-1 mt-1 font-sans border-t border-border/30 pt-2 text-2xs text-white/40">
                <span className="font-normal text-white">Geist Sans Regular (Weight: 400)</span>
                <span className="font-medium text-white">Geist Sans Medium (Weight: 500)</span>
                <span className="font-bold text-white">Geist Sans Bold (Weight: 700)</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-2xs text-text-mute font-favorit uppercase">Tech Monospace Font (ABC Favorit Mono)</span>
              <p className="font-favorit text-xs text-white/80 leading-relaxed">
                USED FOR METRIC BADGES, CONSOLE LOGS, STEP TITLES, SUB-LABELS, AND INDUSTRIAL TELEMETRY KICKERS.
              </p>
              <div className="flex flex-col gap-1 mt-1 font-favorit border-t border-border/30 pt-2 text-[10px] text-white/40">
                <span className="font-normal text-white">ABC FAVORIT REGULAR</span>
                <span className="font-medium text-white">ABC FAVORIT MEDIUM</span>
                <span className="font-bold text-white">ABC FAVORIT BOLD</span>
              </div>
            </div>
          </div>
          
          <div className="border border-border bg-surface-card p-3 font-favorit text-[10px] text-text-mute mt-4 rounded-none">
            <div>INFO // Spacing guidelines are strictly standardized around rounded-none containers and 1.5rem / 2rem paddings.</div>
          </div>
        </div>
      </section>

      {/* 3. COMPONENT SHOWROOM */}
      <section id="components" className="border border-border bg-surface px-6 py-6 flex flex-col gap-6 rounded-none">
        <div className="flex flex-col gap-1 border-b border-border/40 pb-3">
          <span className="font-favorit text-2xs text-accent-green uppercase tracking-widest">03 / ATOMIC LIBRARY</span>
          <h2 className="text-xl md:text-2xl text-white font-sans font-light">Audited UI Components</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card A: Audited Card Styles */}
          <div className="flex flex-col gap-4">
            <span className="text-2xs text-text-mute font-favorit uppercase">A // Cards (Production Formats)</span>
            
            <Card variant="pillar" className="h-[210px] flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="accent">01 / PILLAR</Badge>
                  <span className="font-favorit text-2xs text-white/30">GLASS & GRADIENT</span>
                </div>
                <CardTitle className="mt-2">Production Pillar Card</CardTitle>
                <CardDescription>Replicates the high-end 3D floating cards from the showcase page featuring subtle bottom line highlights.</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-2xs">
                Includes backdrop blur effects and custom radial top-right chip glows.
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card variant="lime-testimonial" className="h-[120px] flex flex-col justify-between p-4">
                <span className="font-favorit text-2xs text-black/50 bg-black/5 px-2 py-0.5 w-fit border border-black/10 uppercase">Lime Block</span>
                <p className="text-xs font-sans font-semibold text-black leading-tight">Saloni study background theme</p>
              </Card>

              <Card variant="orange-testimonial" className="h-[120px] flex flex-col justify-between p-4">
                <span className="font-favorit text-2xs text-white/50 bg-white/5 px-2 py-0.5 w-fit border border-white/10 uppercase">Orange Block</span>
                <p className="text-xs font-sans font-semibold text-white leading-tight">Sarah study background theme</p>
              </Card>
            </div>
          </div>

          {/* Card B: Badge variations */}
          <div className="flex flex-col gap-4">
            <span className="text-2xs text-text-mute font-favorit uppercase">B // Tag Pills & Badges</span>
            
            <Card className="p-5 flex flex-col gap-4 h-full rounded-none">
              <div className="flex flex-wrap gap-2.5">
                <div className="flex flex-col gap-1 w-full">
                  <span className="text-[10px] text-text-mute font-favorit mb-1">DEFAULT SYSTEM TAG:</span>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">01 / Industry</Badge>
                    <Badge variant="outline">02 / Telemetry</Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full mt-4">
                  <span className="text-[10px] text-text-mute font-favorit mb-1">BRAND ACCENT PILL:</span>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="accent">04 / Intelligence</Badge>
                  </div>
                </div>
              </div>
              
              <div className="border border-border/50 bg-surface/50 p-2.5 font-favorit text-[10px] text-text-mute mt-auto leading-relaxed rounded-none">
                All badges enforce the production standard rectangular `rounded-none` borders.
              </div>
            </Card>
          </div>

          {/* Card C: Interactive FAQ Accordions */}
          <div className="flex flex-col gap-4">
            <span className="text-2xs text-text-mute font-favorit uppercase">C // Smooth Heights (Accordions)</span>
            
            <Card className="p-5 flex flex-col h-full rounded-none">
              <Accordion allowMultiple={false} className="w-full border-t-0">
                <AccordionItem id="item-1" title="HIPAA Telephony nodes" indexNumber="01">
                  Telephony layers operate inside fully compliant isolated nodes, passing audio packets via TLS end-to-end encryption.
                </AccordionItem>
                <AccordionItem id="item-2" title="Observability traces" indexNumber="02">
                  Full trace logging triggers automatically for every call event, logging p99 response times and webhooks.
                </AccordionItem>
              </Accordion>
              
              <p className="text-[10px] font-sans text-text-mute mt-auto border-t border-border/40 pt-3">
                Identical to production FAQ height transition equations.
              </p>
            </Card>
          </div>

        </div>
      </section>

      {/* 4. THE COMPONENT PLAYGROUND */}
      <section id="playground" className="border border-border bg-surface px-6 py-6 flex flex-col gap-6 rounded-none">
        
        <div className="flex flex-col gap-1 border-b border-border/40 pb-3">
          <span className="font-favorit text-2xs text-accent-green uppercase tracking-widest">04 / THE COMPONENT ARENA</span>
          <h2 className="text-xl md:text-2xl text-white font-sans font-light">Interactive State Toggles & Form Tester</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Buttons Playground & Code Arena */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-2xs text-text-mute font-favorit uppercase">PLAYGROUND // LIVE BUTTON DEMO</span>
              <p className="text-xs text-white/50 font-sans leading-normal">
                Configure state options on the control board below, and witness how the buttons reflect load spinners, fonts, and active states live.
              </p>
            </div>

            {/* Live Render Area */}
            <div className="bg-surface-card border border-border p-6 flex flex-wrap gap-3 items-center justify-center min-h-[160px] relative rounded-none">
              <div className="absolute top-2 left-2 text-[8px] font-favorit text-white/20">LIVE COMPONENT RENDERS</div>
              
              <Button variant="primary" isMono={btnMono} isLoading={btnLoading} disabled={btnDisabled}>Primary</Button>
              <Button variant="secondary" isMono={btnMono} isLoading={btnLoading} disabled={btnDisabled}>Secondary</Button>
              <Button variant="outline" isMono={btnMono} isLoading={btnLoading} disabled={btnDisabled}>Outline</Button>
              <Button variant="white" isMono={btnMono} isLoading={btnLoading} disabled={btnDisabled}>White Action</Button>
              <Button variant="glass" isMono={btnMono} isLoading={btnLoading} disabled={btnDisabled}>Glass Hero</Button>
            </div>

            {/* Controls panel */}
            <div className="grid grid-cols-3 border border-border bg-surface-card p-4 gap-4 rounded-none">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-favorit text-white/80 select-none">
                <input 
                  type="checkbox" 
                  checked={btnLoading} 
                  onChange={(e) => setBtnLoading(e.target.checked)}
                  className="accent-accent-green cursor-pointer"
                />
                IS_LOADING
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-favorit text-white/80 select-none">
                <input 
                  type="checkbox" 
                  checked={btnDisabled} 
                  onChange={(e) => setBtnDisabled(e.target.checked)}
                  className="accent-accent-green cursor-pointer"
                />
                DISABLED
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-favorit text-white/80 select-none">
                <input 
                  type="checkbox" 
                  checked={btnMono} 
                  onChange={(e) => setBtnMono(e.target.checked)}
                  className="accent-accent-green cursor-pointer"
                />
                TECH_MONO
              </label>
            </div>

            {/* Code Snippet Tabs */}
            <div className="border border-border/85 flex flex-col font-favorit text-xs bg-surface-card rounded-none">
              <div className="flex border-b border-border">
                <button 
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2 border-r border-border hover:text-white transition-all cursor-pointer ${
                    activeTab === 'preview' ? 'text-accent-green bg-surface' : 'text-white/40'
                  }`}
                >
                  JSX_USAGE
                </button>
                <button 
                  onClick={() => setActiveTab('code')}
                  className={`px-4 py-2 hover:text-white transition-all cursor-pointer ${
                    activeTab === 'code' ? 'text-accent-green bg-surface' : 'text-white/40'
                  }`}
                >
                  CSS_IMPORTS
                </button>
              </div>

              <div className="p-4 overflow-x-auto text-[11px] leading-relaxed bg-[#050606] font-mono text-cyan-500">
                {activeTab === 'preview' ? (
                  <pre className="text-emerald-400">{getButtonCode()}</pre>
                ) : (
                  <pre className="text-amber-400">{`import { Button } from '@/components/ui/Button'
// Enforces rounded-none shapes natively:
// - variant="white" (Solid primary submission)
// - variant="glass" (Subtle hero backdrop blur)`}</pre>
                )}
              </div>
            </div>

          </div>

          {/* Column 2: Live Form Builder Validation Tester */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-2xs text-text-mute font-favorit uppercase">PLAYGROUND // INPUT FIELD AUDIT</span>
              <p className="text-xs text-white/50 font-sans leading-normal">
                Audited against Contact.tsx. Utilizes solid dark translucent backgrounds, zero-rounded border structures, and a standard focus transition layout.
              </p>
            </div>

            <Card className="p-5 border border-border/80 flex flex-col gap-4 rounded-none">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <Input 
                  label="Full Name"
                  placeholder="Alex Carter"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  error={hasFormError && !formName ? "Full name is required" : undefined}
                />

                <Input 
                  label="Email Address"
                  placeholder="alex@company.com"
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  error={hasFormError && !formEmail ? "Email address is required" : undefined}
                />

                <Textarea 
                  label="Detailed Project Scope"
                  placeholder="Tell us about your systems automation goals..."
                  value={formMsg}
                  onChange={(e) => setFormMsg(e.target.value)}
                  rows={3}
                />

                <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                  <button
                    type="button"
                    onClick={() => setHasFormError(!hasFormError)}
                    className="text-2xs font-favorit text-accent-orange hover:brightness-110 select-none uppercase tracking-wider underline cursor-pointer"
                  >
                    {hasFormError ? "Clear Form Errors" : "Trigger Validation Outline"}
                  </button>

                  <Button 
                    type="submit" 
                    variant="white" 
                    isMono 
                    size="sm"
                    className="w-full sm:w-fit"
                  >
                    {formSubmitted ? "SUCCESSFUL!" : "Submit Message"}
                  </Button>
                </div>
              </form>
            </Card>

            <div className="border border-border/50 bg-surface-card p-3 font-favorit text-[10px] text-text-mute leading-relaxed rounded-none">
              * Note: Contact page uses solid action buttons. Inputs support quick autocomplete and focus alignment.
            </div>

          </div>

        </div>
      </section>

      {/* 5. DESIGN PRINCIPLES */}
      <section className="border border-border bg-surface px-6 py-6 flex flex-col gap-4 rounded-none">
        <div className="flex flex-col gap-1 border-b border-border/40 pb-3">
          <span className="font-favorit text-2xs text-accent-green uppercase tracking-widest">05 / CORE PRINCIPLES</span>
          <h2 className="text-xl md:text-2xl text-white font-sans font-light">Design Principles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          <div className="flex flex-col gap-1.5 p-4 border border-border bg-surface-card rounded-none">
            <span className="font-favorit text-2xs text-accent-green uppercase tracking-widest">Rule_01 // Restraint Over Decoration</span>
            <p className="text-xs text-white/50 leading-relaxed font-sans mt-1">
              No arbitrary borders, shapes, or glows. Every line and gap is a deliberate structural boundary that serves the content, maintaining a high-fidelity minimalist framework.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 p-4 border border-border bg-surface-card rounded-none">
            <span className="font-favorit text-2xs text-accent-green uppercase tracking-widest">Rule_02 // Zero-Radius Discipline</span>
            <p className="text-xs text-white/50 leading-relaxed font-sans mt-1">
              Strictly enforce <code className="text-cyan-400 font-mono text-[10px]">rounded-none</code> on all components, buttons, and inputs. Sharp, geometric angles align perfectly with industrial, high-tech B2B stack architectures.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 p-4 border border-border bg-surface-card rounded-none">
            <span className="font-favorit text-2xs text-accent-green uppercase tracking-widest">Rule_03 // Dual Typographic Scales</span>
            <p className="text-xs text-white/50 leading-relaxed font-sans mt-1">
              Geist Sans handles paragraphs and fluid content hierarchy. ABC Favorit Mono serves strictly as technical metadata markers, kicker tags, indices, and telemetry logs in uppercase.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 p-4 border border-border bg-surface-card rounded-none">
            <span className="font-favorit text-2xs text-accent-green uppercase tracking-widest">Rule_04 // Clarity Before Cleverness</span>
            <p className="text-xs text-white/50 leading-relaxed font-sans mt-1">
              Every interface element must communicate its purpose immediately. Visual novelty is never prioritized over comprehension. Users should understand what a section does before noticing how it looks.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 p-4 border border-border bg-surface-card rounded-none">
            <span className="font-favorit text-2xs text-accent-green uppercase tracking-widest">Rule_05 // Information Density With Breathing Room</span>
            <p className="text-xs text-white/50 leading-relaxed font-sans mt-1">
              Engineered between extreme minimalist whitespace and dense terminal layouts. Focus on structured spacing, useful operations metrics, and fast scanning rather than giant marketing fluff.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 p-4 border border-border bg-surface-card rounded-none lg:col-span-3">
            <span className="font-favorit text-2xs text-accent-orange uppercase tracking-widest">Rule_06 // Chromatic Moderation (Non-Negotiable)</span>
            <p className="text-xs text-white/50 leading-relaxed font-sans mt-1">
              A monochromatic base of absolute blacks, deep grays, and thin white borders. Standard green establishes interactive focus, while high-contrast Lime and Orange are strictly quarantined and reserved for testimonials. Earn visual attention; never spray it everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPER QUICK INTEGRATION GUIDE */}
      <section className="border border-border bg-surface px-6 py-6 flex flex-col gap-4 rounded-none">
        <div className="flex flex-col gap-1 border-b border-border/40 pb-3">
          <span className="font-favorit text-2xs text-accent-green uppercase tracking-widest">06 / DEV INTEGRATION</span>
          <h2 className="text-xl md:text-2xl text-white font-sans font-light">Audited Developer Guidelines</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed text-white/60">
          <div className="flex flex-col gap-3 font-sans">
            <h4 className="text-white font-medium">Using Components in New Pages</h4>
            <p>
              Import atomic parts directly from the UI directory. Components are styled using responsive layouts and Eledra design tokens:
            </p>
            <pre className="p-3 bg-[#050606] font-mono text-[10px] text-cyan-400 overflow-x-auto">
{`import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'`}
            </pre>
            <p>
              This ensures consistent layouts, hover alignments, and typography scales across healthcare, real estate, and finance pages.
            </p>
          </div>

          <div className="flex flex-col gap-3 font-sans">
            <h4 className="text-white font-medium">CSS Variables & Tailwind v4 Utilities</h4>
            <p>
              Use standard utility classes in components to automatically pull theme colors defined in globals.css:
            </p>
            <table className="w-full border border-border/50 text-[10.5px]">
              <thead>
                <tr className="bg-surface-card border-b border-border text-left">
                  <th className="p-1.5 font-medium text-white">Utility Class</th>
                  <th className="p-1.5 font-medium text-white">Associated Color</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/40">
                  <td className="p-1.5 font-mono text-cyan-400">bg-surface-card</td>
                  <td className="p-1.5 text-white/50">#161616 (Neutrals)</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="p-1.5 font-mono text-cyan-400">bg-accent-green</td>
                  <td className="p-1.5 text-white/50">#3d6e4e (Eledra Green)</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="p-1.5 font-mono text-cyan-400">bg-accent-lime</td>
                  <td className="p-1.5 text-white/50">#d4f33b (Lime Testimonial)</td>
                </tr>
                <tr>
                  <td className="p-1.5 font-mono text-cyan-400">bg-accent-orange</td>
                  <td className="p-1.5 text-white/50">#ff5a1f (Orange Testimonial)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  )
}
