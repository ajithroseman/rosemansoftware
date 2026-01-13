// app/page.tsx
import SplitNav from '@/components/services/SplitNav'; // Adjust path if needed
import HeroAnimation from '@/components/services/HeroAnimation';
import { 
  Wrench, 
  Cpu, 
  Laptop, 
  ShieldCheck, 
  Clock,
  Zap,
  Settings,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Palette,
  Smartphone,
  TrendingUp,
  Star,
  Users,
  Globe,
  Server,
  Rocket,
  Search
} from 'lucide-react';
export default function Services() {
  return (
    <main className="min-h-screen font-sans">
      
      {/* HERO SECTION */}
      {/* I increased height to h-[500px] to fit the animations nicely */}
      <div className="relative min-h-[500px] bg-slate-900 flex flex-col items-center justify-center text-white overflow-hidden pt-20 pb-10">
        
        {/* Background Gradient Effect (Optional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 z-0"></div>
        
        {/* Content Content */}
        <div className="z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Services We Offer</h1>
          <p className="text-slate-400 mb-3 md:mb-10">Hardware Precision & Software Innovation</p>
          
          {/* INSERT ANIMATIONS HERE */}
          <HeroAnimation />
        </div>
        
      </div>

      {/* Insert the Navigation Component Here */}
      <SplitNav />

      {/* --- HARDWARE CONTENT --- */}
      {/* IMPORTANT: ID must match 'hardware-section' */}
      <section 
        id="hardware-section" 
      >
        
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {/* Hero Section */}
          <section className="relative pt-20 pb-10 md:py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Expert Computer Repair & Custom Builds
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Keep Your Systems Running at Peak Performance
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4" />
                    Same-day service for minor repairs
                  </span>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                    <ShieldCheck className="w-4 h-4" />
                    No hidden costs—we quote before we fix
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Hardware Services Grid */}
          <section className="py-10 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Hardware Services
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Diagnostics & Troubleshooting */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Wrench className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Diagnostics & Troubleshooting
                      </h3>
                      <p className="text-gray-600">
                        Solving complex system issues with precision
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {['Blue Screen of Death (BSOD)', 'Boot Issues & Recovery', 'Unexplained Crashes', 'Virus & Malware Removal', 'Hardware Failures'].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="font-semibold text-blue-700">
                      🎯 Free initial diagnostics on all repairs
                    </p>
                  </div>
                </div>

                {/* Performance Upgrades */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <Zap className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Performance Upgrades
                      </h3>
                      <p className="text-gray-600">
                        Modernize your system for optimal performance
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      { title: 'SSD Upgrades', desc: '5x faster boot times' },
                      { title: 'RAM Expansion', desc: 'Up to 64GB support' },
                      { title: 'GPU Upgrades', desc: 'Gaming & AI ready' },
                      { title: 'Cooling Systems', desc: 'Enhanced thermal solutions' },
                    ].map((upgrade) => (
                      <div key={upgrade.title} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900">{upgrade.title}</h4>
                        <p className="text-sm text-gray-600">{upgrade.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                    <p className="font-bold text-purple-700 text-lg">
                      💫 Make your old PC run like new again!
                    </p>
                  </div>
                </div>

                {/* Custom PC Builds */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <Cpu className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Custom PC Builds
                      </h3>
                      <p className="text-gray-600">
                        Tailored to your budget and performance needs
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    {[
                      {
                        type: 'Gaming Rigs',
                        specs: 'High FPS, RGB lighting, liquid cooling',
                        price: 'Starting at 70,000Rs'
                      },
                      {
                        type: 'Video Editing Workstations',
                        specs: 'Multi-core CPUs, high-speed storage',
                        price: 'Starting at 1,00,000Rs'
                      },
                      {
                        type: 'Office/Student PCs',
                        specs: 'Reliable, energy-efficient, quiet',
                        price: 'Starting at 45,000Rs'
                      },
                    ].map((build) => (
                      <div key={build.type} className="border-l-4 border-green-500 pl-4 py-2">
                        <h4 className="font-bold text-gray-900">{build.type}</h4>
                        <p className="text-gray-600 text-sm mb-1">{build.specs}</p>
                        <p className="text-green-600 font-semibold">{build.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Laptop Repair */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <Laptop className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Laptop Repair
                      </h3>
                      <p className="text-gray-600">
                        Specialized care for portable devices
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      'Screen Replacements',
                      'Battery Replacement',
                      'Keyboard Fixes',
                      'Motherboard Repair',
                      'Port & Connector Repair',
                      'Water Damage Recovery'
                    ].map((service) => (
                      <div key={service} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <p className="font-semibold text-orange-700 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Quick turnaround time - Most repairs completed within 24 hours
                    </p>
                  </div>
                </div>

                {/* Annual Maintenance Contract (AMC) - Full width */}
                <div className="lg:col-span-2 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl shadow-xl p-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <BriefcaseBusiness className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Annual Maintenance Contract (AMC)
                          </h3>
                          <p className="text-blue-100">
                            Regular checkups to prevent downtime - Perfect for small offices & schools
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {[
                          'Regular System Checkups',
                          'Priority Support',
                          'Remote Assistance',
                          'Quarterly Maintenance',
                          'Emergency Response',
                          'Software Updates'
                        ].map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-300" />
                            <span className="text-white">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:w-1/3 text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <p className="text-white text-lg font-semibold mb-4">
                          B2B Focused Solutions
                        </p>
                        <button className="w-full bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                          Get Custom Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Trust Signals Section */}
          <section className="py-10 md:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Our Hardware Services?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We combine expertise with transparency to deliver exceptional service
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Clock,
                    title: 'Fast Turnaround',
                    description: 'Same-day service for minor repairs, 24-48 hours for complex issues',
                    color: 'text-blue-600',
                    bgColor: 'bg-blue-100'
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Transparent Pricing',
                    description: 'No hidden costs. We provide detailed quotes before any work begins',
                    color: 'text-green-600',
                    bgColor: 'bg-green-100'
                  },
                  {
                    icon: Settings,
                    title: 'Warranty Coverage',
                    description: '90-day warranty on all replaced parts and labor services',
                    color: 'text-purple-600',
                    bgColor: 'bg-purple-100'
                  }
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
                    <div className={`${item.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-10 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Optimize Your Hardware?
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Get a free diagnostic and quote today. No obligation, just expert advice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    Schedule Service Now
                  </button>
                  {/*<button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    Call: (555) 123-4567
                  </button>*/}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* --- SOFTWARE CONTENT --- */}
      {/* IMPORTANT: ID must match 'software-section' */}
      <section 
        id="software-section" 
      >
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {/* Hero Section */}
          <section className="relative pt-20 pb-10 md:py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  High-Performance Web Development
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Modern Websites that Drive Business Growth
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                    <Zap className="w-4 h-4" />
                    Aim for 100/100 Google Lighthouse scores
                  </span>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                    <Search className="w-4 h-4" />
                    SEO-ready with semantic HTML
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Website Services Grid */}
          <section className="py-10 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Website Development Services
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Custom Website Development */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-indigo-100 p-3 rounded-xl">
                      <Code2 className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Custom Website Development
                      </h3>
                      <p className="text-gray-600">
                        High-performance websites built with modern technologies
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {['Next.js & React 19', 'TypeScript 5 for type safety', 'Custom-coded solutions', 'SEO-optimized architecture', 'Blazing fast performance'].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-indigo-50 rounded-xl p-4">
                    <p className="font-semibold text-indigo-700">
                      ⚡ Blazing fast speeds and better SEO ranking compared to generic builders
                    </p>
                  </div>
                </div>

                {/* Responsive & Mobile-First Design */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-pink-100 p-3 rounded-xl">
                      <Smartphone className="w-8 h-8 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Responsive & Mobile-First Design
                      </h3>
                      <p className="text-gray-600">
                        Perfect experiences across all devices
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      { title: 'Mobile-First Approach', desc: 'Design for phones first' },
                      { title: 'Tailwind CSS', desc: 'Utility-first styling framework' },
                      { title: 'Cross-Browser', desc: 'Works on all modern browsers' },
                      { title: 'Touch-Optimized', desc: 'Perfect mobile interactions' },
                    ].map((feature) => (
                      <div key={feature.title} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4">
                    <p className="font-bold text-pink-700 text-lg">
                      📱 Looks perfect on Mobile, Tablet, and Desktop
                    </p>
                  </div>
                </div>

                {/* Single Page Applications */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <Globe className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Single Page Applications
                      </h3>
                      <p className="text-gray-600">
                        Modern web applications with app-like experience
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    {[
                      {
                        type: 'Portfolio Websites',
                        specs: 'Showcase your work with smooth animations',
                        price: 'Starting at 25,000Rs'
                      },
                      {
                        type: 'Service Websites',
                        specs: 'Business websites with dynamic content',
                        price: 'Starting at 35,000Rs'
                      },
                      {
                        type: 'Dashboard Applications',
                        specs: 'Admin panels and management systems',
                        price: 'Starting at 50,000Rs'
                      },
                    ].map((project) => (
                      <div key={project.type} className="border-l-4 border-green-500 pl-4 py-2">
                        <h4 className="font-bold text-gray-900">{project.type}</h4>
                        <p className="text-gray-600 text-sm mb-1">{project.specs}</p>
                        <p className="text-green-600 font-semibold">{project.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="font-semibold text-green-700">
                      ✨ Smooth, app-like navigation without page reloads
                    </p>
                  </div>
                </div>

                {/* E-Commerce Solutions */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <Server className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        E-Commerce Solutions
                      </h3>
                      <p className="text-gray-600">
                        Complete online store solutions
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      'Product Listings',
                      'Secure Payments',
                      'Inventory Management',
                      'Order Tracking',
                      'Customer Accounts',
                      'Analytics Dashboard'
                    ].map((service) => (
                      <div key={service} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <p className="font-semibold text-orange-700">
                      🛒 Turn your website into a powerful sales channel
                    </p>
                  </div>
                </div>

                {/* Maintenance & Hosting - Full width */}
                <div className="lg:col-span-2 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl shadow-xl p-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Maintenance & Hosting
                          </h3>
                          <p className="text-purple-100">
                            We handle the technical updates so you don't have to
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {[
                          'Vercel Hosting (Global CDN)',
                          'Neon PostgreSQL Database',
                          'Security Updates',
                          'Performance Monitoring',
                          'Regular Backups',
                          '24/7 Support'
                        ].map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-300" />
                            <span className="text-white">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:w-1/3 text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <p className="text-white text-lg font-semibold mb-4">
                          Your Technology Stack
                        </p>
                        <div className="space-y-2 text-sm text-white/90 text-left">
                          <p>• Next.js 14 & React 19</p>
                          <p>• TypeScript 5</p>
                          <p>• Tailwind CSS 4</p>
                          <p>• PostgreSQL (Neon)</p>
                          <p>• Vercel Hosting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Signals Section */}
          <section className="py-10 md:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Our Website Services?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We build websites that not only look great but perform exceptionally
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Zap,
                    title: 'Top Performance',
                    description: 'We aim for 100/100 Google Lighthouse scores for speed, accessibility, and SEO',
                    color: 'text-yellow-600',
                    bgColor: 'bg-yellow-100'
                  },
                  {
                    icon: Search,
                    title: 'SEO Ready',
                    description: 'Built with semantic HTML, modern SEO standards, and optimized structure',
                    color: 'text-blue-600',
                    bgColor: 'bg-blue-100'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Scalable Growth',
                    description: 'Websites designed to grow with your business, handling increased traffic and features',
                    color: 'text-green-600',
                    bgColor: 'bg-green-100'
                  }
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
                    <div className={`${item.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Development Process */}
          <section className="py-10 md:py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Development Process
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A structured approach to delivering exceptional results
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    step: '01',
                    title: 'Discovery',
                    description: 'Understand your goals and requirements',
                    icon: Palette,
                    color: 'bg-purple-100 text-purple-600'
                  },
                  {
                    step: '02',
                    title: 'Design',
                    description: 'Create wireframes and visual designs',
                    icon: Smartphone,
                    color: 'bg-pink-100 text-pink-600'
                  },
                  {
                    step: '03',
                    title: 'Development',
                    description: 'Build with modern technologies',
                    icon: Code2,
                    color: 'bg-indigo-100 text-indigo-600'
                  },
                  {
                    step: '04',
                    title: 'Launch',
                    description: 'Deploy and provide ongoing support',
                    icon: Rocket,
                    color: 'bg-green-100 text-green-600'
                  }
                ].map((step) => (
                  <div key={step.step} className="text-center">
                    <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-10 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Build Your Dream Website?
                </h2>
                <p className="text-xl mb-8 text-purple-100">
                  Get a free website audit and proposal. No obligation, just expert advice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    Start Your Project
                  </button>
                  <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    View Our Portfolio
                  </button>
                </div>
              </div>
            </div>
          </section>
        

        {/* Stats Section */}
        <section className="p-4 md:py-20 md:px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { number: "500+", label: "Hardware Repairs", icon: Cpu },
                { number: "100+", label: "Websites Built", icon: Globe },
                { number: "99%", label: "Client Satisfaction", icon: Star },
                { number: "24/7", label: "Support Available", icon: Users }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <stat.icon className="w-5 h-5" />
                    <span className="font-semibold">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        </div>
      </section>

    </main>
  );
}