import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  UserCheck,
  FileCheck,
  Scale,
  Headphones,
  Briefcase,
  GraduationCap,
  Camera,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Menu,
  X,
  Star,
  Award,
  ThumbsUp,
  FileText,
  Users,
  Search,
  PlaneTakeoff,
  Luggage,
  Sprout,
  Package,
  Utensils,
  HardHat,
  Factory,
  Sparkles,
  HeartPulse,
  Apple,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Globe,
  Euro,
  Bed,
  Bus,
  Calendar,
  ExternalLink,
  Home,
  Plus,
  LayoutGrid,
  ChevronDown
} from 'lucide-react';
import './App.css';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [jobsModalOpen, setJobsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  // Autoplay service slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentServiceSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Scroll to section based on path on every navigation
  useEffect(() => {
    const path = location.pathname.replace('/', '') || 'home';
    const el = document.getElementById(path);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [location.pathname]);

  // Helper: navigate to clean path
  const navigateTo = (section) => {
    navigate('/' + section);
  };

  // Helper: always go home (scroll to top even if already on /home)
  const goHome = () => {
    navigate('/home');
    setTimeout(() => {
      const el = document.getElementById('home');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    visaType: 'Work Visa',
    country: 'Germany',
    jobCategory: 'Warehouse & Logistics',
    message: ''
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setApplyModalOpen(false);
    setConsultationModalOpen(false);
    showToast(`Thank you, ${formData.fullName || 'Applicant'}! Your request has been submitted successfully. Our team will contact you within 24 hours.`);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      visaType: 'Work Visa',
      country: 'Germany',
      jobCategory: 'Warehouse & Logistics',
      message: ''
    });
  };

  // Supported Countries Data
  const countries = [
    { name: 'Netherlands', code: 'nl', flag: 'https://flagcdn.com/w80/nl.png' },
    { name: 'France', code: 'fr', flag: 'https://flagcdn.com/w80/fr.png' },
    { name: 'Germany', code: 'de', flag: 'https://flagcdn.com/w80/de.png' },
    { name: 'Poland', code: 'pl', flag: 'https://flagcdn.com/w80/pl.png' },
    { name: 'Romania', code: 'ro', flag: 'https://flagcdn.com/w80/ro.png' },
    { name: 'Italy', code: 'it', flag: 'https://flagcdn.com/w80/it.png' },
    { name: 'Spain', code: 'es', flag: 'https://flagcdn.com/w80/es.png' },
    { name: 'Switzerland', code: 'ch', flag: 'https://flagcdn.com/w80/ch.png' },
    { name: 'Belgium', code: 'be', flag: 'https://flagcdn.com/w80/be.png' },
    { name: 'Austria', code: 'at', flag: 'https://flagcdn.com/w80/at.png' },
    { name: 'Singapore', code: 'sg', flag: 'https://flagcdn.com/w80/sg.png' },
    { name: 'Australia', code: 'au', flag: 'https://flagcdn.com/w80/au.png' },
    { name: 'Canada', code: 'ca', flag: 'https://flagcdn.com/w80/ca.png' },
    { name: 'United Kingdom', code: 'gb', flag: 'https://flagcdn.com/w80/gb.png' },
  ];

  // Job Categories Data
  const jobCategories = [
    {
      title: 'Agriculture',
      icon: <Sprout />,
      bgColor: '#DCFCE7',
      iconColor: '#16A34A',
      accentColor: '#16A34A',
      image: '/Agriculture.png',
      jobs: ['Farm Workers', 'Greenhouse Workers', 'Fruit Pickers']
    },
    {
      title: 'Warehouse & Logistics',
      icon: <Package />,
      bgColor: '#FFEDD5',
      iconColor: '#EA580C',
      accentColor: '#EA580C',
      image: '/Warehouse & Logistics.png',
      jobs: ['Pickers & Packers', 'Forklift Operators', 'Inventory Staff', 'Loaders']
    },
    {
      title: 'Hospitality',
      icon: <Utensils />,
      bgColor: '#F3E8FF',
      iconColor: '#9333EA',
      accentColor: '#9333EA',
      image: '/Hospitality.png',
      jobs: ['Hotel Staff', 'Housekeeping', 'Kitchen Helpers', 'Waiters']
    },
    {
      title: 'Construction',
      icon: <HardHat />,
      bgColor: '#FEF9C3',
      iconColor: '#CA8A04',
      accentColor: '#CA8A04',
      image: '/Construction.png',
      jobs: ['Helpers', 'Electricians', 'Welders', 'Carpenters']
    },
    {
      title: 'Manufacturing',
      icon: <Factory />,
      bgColor: '#DBEAFE',
      iconColor: '#2563EB',
      accentColor: '#2563EB',
      image: '/Manufacturing.png',
      jobs: ['Factory Workers', 'Machine Operators', 'Packers', 'Production Assistants']
    },
    {
      title: 'Cleaning Services',
      icon: <Sparkles />,
      bgColor: '#CCFBF1',
      iconColor: '#0D9488',
      accentColor: '#0D9488',
      image: '/Cleaning Services.png',
      jobs: ['Housekeeping', 'Facility Cleaners', 'Janitors']
    },
    {
      title: 'Healthcare',
      icon: <HeartPulse />,
      bgColor: '#FEE2E2',
      iconColor: '#DC2626',
      accentColor: '#DC2626',
      image: '/HealthCare.png',
      jobs: ['Caregivers', 'Support Staff', 'Nursing Assistants']
    },
    {
      title: 'Food Processing',
      icon: <Apple />,
      bgColor: '#CFFAFE',
      iconColor: '#0891B2',
      accentColor: '#0891B2',
      image: '/Food Processing.png',
      jobs: ['Food Packers', 'Processing Operators', 'Sorting Staff']
    }
  ];

  // Why Us Differentiators
  const whyUsFeatures = [
    { title: '100% Genuine Guidance', desc: 'Professional consultation throughout your journey.', icon: <ShieldCheck size={24} /> },
    { title: 'Legal & Safe Process', desc: 'Transparent documentation and ethical procedures.', icon: <Scale size={24} /> },
    { title: 'End-to-End Support', desc: 'From application to visa approval and beyond.', icon: <Users size={24} /> },
    { title: 'Experienced Team', desc: 'Dedicated immigration experts at your service.', icon: <Award size={24} /> },
    { title: 'Quick Documentation', desc: 'Complete assistance in preparing all documents.', icon: <FileText size={24} /> },
    { title: 'Trusted by Hundreds', desc: 'Successfully helping candidates achieve their dreams.', icon: <ThumbsUp size={24} /> }
  ];

  // Process Steps
  const processSteps = [
    { step: '01', title: 'Free Consultation', icon: <Headphones size={24} color="#16A34A" /> },
    { step: '02', title: 'Profile Assessment', icon: <UserCheck size={24} color="#9333EA" /> },
    { step: '03', title: 'Document Verification', icon: <FileCheck size={24} color="#EA580C" /> },
    { step: '04', title: 'Job Matching / Admission', icon: <Search size={24} color="#2563EB" /> },
    { step: '05', title: 'Visa Application', icon: <CheckCircle2 size={24} color="#10B981" /> },
    { step: '06', title: 'Travel Assistance', icon: <PlaneTakeoff size={24} color="#8B5CF6" /> },
    { step: '07', title: 'Start Your Journey', icon: <Luggage size={24} color="#EAB308" /> }
  ];

  // Professions List (Infinite Marquee)
  const professionsList = [
    'Auto Denter', 'Auto Electrician', 'Auto Mechanic', 'Baker', 'Bartender',
    'Beautician', 'Butcher', 'Caregiver', 'Carpenter', 'Cook',
    'Diesel Mechanic', 'Electrician', 'Engineer', 'Excavator Operator', 'Fitter',
    'Heavy Driver', 'JCB Operator', 'CNC Operator', 'Mason', 'Nanny',
    'Painter', 'Pastry Chef', 'Plumber', 'Professional Driver', 'Tailor',
    'Team Leader', 'Welder'
  ];

  // Testimonials (Expanded list for infinite marquee)
  const testimonials = [
    {
      quote: '"Excellent support throughout my Netherlands work visa process. Clear guidance & 100% genuine process!"',
      name: 'Ravi Kumar',
      visa: 'Netherlands Work Visa',
      rating: 5,
      initials: 'RK',
      bgColor: '#DBEAFE',
      textColor: '#1E40AF'
    },
    {
      quote: '"Very professional team. My Germany job seeker visa was approved without any hassle. Highly recommended!"',
      name: 'Sneha Reddy',
      visa: 'Germany Work Visa',
      rating: 5,
      initials: 'SR',
      bgColor: '#FEE2E2',
      textColor: '#991B1B'
    },
    {
      quote: '"They guided me step by step from documentation to embassy interview and airport pickup in Poland."',
      name: 'Mohammed Ali',
      visa: 'Poland Work Permit',
      rating: 5,
      initials: 'MA',
      bgColor: '#DCFCE7',
      textColor: '#166534'
    },
    {
      quote: '"FlyNest made my dream of working in Europe a reality. Honest charges and complete transparency."',
      name: 'Ananya Sharma',
      visa: 'Lithuania Work Permit',
      rating: 5,
      initials: 'AS',
      bgColor: '#F3E8FF',
      textColor: '#6B21A8'
    },
    {
      quote: '"Got my Hungary work permit within promised timeframe. The team answered all my queries patiently."',
      name: 'Vikram Singh',
      visa: 'Hungary Logistics Visa',
      rating: 5,
      initials: 'VS',
      bgColor: '#FEF3C7',
      textColor: '#92400E'
    },
    {
      quote: '"Smooth process for Czech Republic documentation. Exceptional customer service and prompt responses!"',
      name: 'Pooja Patel',
      visa: 'Czech Republic Skilled Visa',
      rating: 5,
      initials: 'PP',
      bgColor: '#E0E7FF',
      textColor: '#3730A3'
    },
    {
      quote: '"100% transparent advice on job offers in Croatia. Now living & working happily in Zagreb!"',
      name: 'Rajesh Goud',
      visa: 'Croatia Hospitality Visa',
      rating: 5,
      initials: 'RG',
      bgColor: '#FFEDD5',
      textColor: '#9A3412'
    },
    {
      quote: '"Best consultancy for European work visas! Honest guidance, accurate file preparation, and full support."',
      name: 'Kavitha Naidu',
      visa: 'Austria Work Permit',
      rating: 5,
      initials: 'KN',
      bgColor: '#FCE7F3',
      textColor: '#9D174D'
    },
    {
      quote: '"Outstanding experience! Helped me secure job placement in Malta with full relocation guidance."',
      name: 'Suresh Varma',
      visa: 'Malta Employment Visa',
      rating: 5,
      initials: 'SV',
      bgColor: '#CCFBF1',
      textColor: '#115E59'
    },
    {
      quote: '"Professional, fast, and authentic agency. They handled my document legalisation seamlessly."',
      name: 'Meera Deshmukh',
      visa: 'Slovakia Work Visa',
      rating: 5,
      initials: 'MD',
      bgColor: '#E0F2FE',
      textColor: '#075985'
    }
  ];

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast">
          <CheckCircle2 size={20} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container navbar-container">
          <button onClick={goHome} className="brand-logo" style={{ gap: 0, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <img
              src="/flynest_logo_final.png"
              alt="FlyNest Immigration Services Logo"
              className="brand-logo-img"
            />
          </button>

          <ul className="nav-menu">
            <li><button onClick={() => navigateTo('home')} className="nav-link active" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Home</button></li>
            <li><button onClick={() => navigateTo('about')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>About</button></li>
            <li><button onClick={() => navigateTo('countries')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Countries</button></li>
            <li><button onClick={() => navigateTo('education')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Education</button></li>
            <li><button onClick={() => navigateTo('jobs')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Jobs</button></li>
            <li><button onClick={() => navigateTo('why-us')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Services</button></li>
            <li><button onClick={() => navigateTo('contact')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Contact Us</button></li>
          </ul>

          <div className="navbar-cta-group">
            <a
              href="https://wa.me/919390124092"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu — Full Screen Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-inner">
            <div className="mobile-menu-header">
              <button onClick={() => { goHome(); setMobileMenuOpen(false); }} className="brand-logo" style={{ gap: 0, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <img
                  src="/flynest_logo_final.png"
                  alt="FlyNest Logo"
                  className="brand-logo-img"
                />
              </button>
              <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <nav className="mobile-menu-nav">
              <button onClick={() => { navigateTo('home'); setMobileMenuOpen(false); }} className="mobile-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}>Home</button>
              <button onClick={() => { navigateTo('about'); setMobileMenuOpen(false); }} className="mobile-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}>About</button>
              <button onClick={() => { navigateTo('countries'); setMobileMenuOpen(false); }} className="mobile-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}>Countries</button>
              <button onClick={() => { navigateTo('jobs'); setMobileMenuOpen(false); }} className="mobile-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}>Jobs</button>
              <button onClick={() => { navigateTo('why-us'); setMobileMenuOpen(false); }} className="mobile-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}>Services</button>
              <button onClick={() => { navigateTo('education'); setMobileMenuOpen(false); }} className="mobile-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}>Education</button>
              <button onClick={() => { navigateTo('contact'); setMobileMenuOpen(false); }} className="mobile-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}>Contact Us</button>
            </nav>
            <div className="mobile-menu-footer">
              <a
                href="https://wa.me/919390124092"
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="hero-section-light">
        <div className="container hero-container-wrap">
          <div className="hero-grid-new">
            {/* LEFT COLUMN */}
            <div className="hero-left-new">
              {/* Badge */}
              <div className="hero-badge-pill">
                <span className="badge-star-circle">
                  <Star size={12} fill="#E5A823" color="#E5A823" />
                </span>
                <span>Opportunities. Guidance. A Better Tomorrow.</span>
              </div>

              {/* Title */}
              <h1 className="hero-title-new">
                GUIDING TO A<br />
                BETTER<br />
                <span className="hero-gold-italic">TOMORROW.</span>
              </h1>

              {/* Flight Trajectory Curved Line with Airplane */}
              <div className="hero-flight-line-wrap" aria-hidden="true">
                <svg className="hero-flight-svg" viewBox="0 0 400 120" fill="none">
                  <path
                    d="M 10 90 Q 180 10 380 40"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
                <div className="hero-plane-icon">
                  <PlaneTakeoff size={22} color="#E5A823" />
                </div>
              </div>

              {/* Paragraph */}
              <p className="hero-description-new">
                FLYNEST Immigration Services connects skilled and unskilled professionals with genuine European job opportunities. Earn €1,500 - €4,500/month with verified work visas and complete relocation support, including accommodation, transport, and medical assistance.
              </p>

              {/* Action Buttons */}
              <div className="hero-btn-row">
                <a
                  href="https://wa.me/919390124092"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-btn-explore"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:9390124092"
                  className="hero-btn-expert"
                >
                  <Phone size={18} />
                  <span>9390124092</span>
                </a>
              </div>

              {/* Social Proof Stack */}
              <div className="hero-social-proof">
                <div className="avatar-stack">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="User 1" className="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="User 2" className="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="User 3" className="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="User 4" className="avatar-img" />
                  <div className="avatar-count-badge">2.5K+</div>
                </div>
                <div className="social-proof-text">
                  <span className="sp-subtitle">Trusted by</span>
                  <span className="sp-title">2,500+ Professionals</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — ARCH FRAME PHOTO & BADGES */}
            <div className="hero-right-arch-wrap">
              {/* Main Outer Arch Outer Ring */}
              <div className="arch-ring-border">
                <div className="arch-image-box">
                  <img
                    src="/hero_paris_scenery.png"
                    alt="European Scenery"
                    className="arch-scenery-img"
                  />
                  <div className="arch-gradient-overlay" />
                </div>

                {/* Floating Circle Badge 1 — Verified Jobs */}
                <div className="floating-badge badge-verified">
                  <div className="fb-icon-circle">
                    <ShieldCheck size={20} color="#0B1B3D" />
                  </div>
                  <span className="fb-text">Verified Jobs</span>
                </div>

                {/* Floating Circle Badge 2 — Visa Support */}
                <div className="floating-badge badge-visa">
                  <div className="fb-icon-circle">
                    <FileCheck size={20} color="#0B1B3D" />
                  </div>
                  <span className="fb-text">Visa Support</span>
                </div>

                {/* Floating Circle Badge 3 — Relocation Assistance */}
                <div className="floating-badge badge-relocation">
                  <div className="fb-icon-circle">
                    <Users size={20} color="#0B1B3D" />
                  </div>
                  <span className="fb-text">Relocation<br />Assistance</span>
                </div>

                {/* Floating Dark Card — Now Hiring In Netherlands */}
                <div className="floating-hiring-card">
                  <div className="fhc-header">
                    <span className="fhc-pin">📍</span>
                    <span className="fhc-label">Now Hiring In</span>
                  </div>
                  <div className="fhc-country-title">
                    Netherlands <span className="fhc-flag">🇳🇱</span>
                  </div>
                  <div className="fhc-footer">
                    <div className="fhc-avatars">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80" alt="Avatar" className="fhc-avatar" />
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80" alt="Avatar" className="fhc-avatar" />
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80" alt="Avatar" className="fhc-avatar" />
                      <div className="fhc-yellow-badge">32+</div>
                    </div>
                    <span className="fhc-opportunities-text">Active Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* STATS STRIP BELOW SEARCH BAR */}
          <div className="hero-stats-banner-new">
            <div className="stats-grid-4col">
              <div className="stats-col-item">
                <div className="stats-icon-navy">
                  <Briefcase size={22} color="#FFFFFF" />
                </div>
                <div className="stats-info">
                  <span className="stats-val">40+</span>
                  <span className="stats-lbl">Verified Jobs</span>
                </div>
              </div>

              <div className="stats-col-divider" />

              <div className="stats-col-item">
                <div className="stats-icon-gold">
                  <Globe size={22} color="#FFFFFF" />
                </div>
                <div className="stats-info">
                  <span className="stats-val">7+</span>
                  <span className="stats-lbl">Countries</span>
                </div>
              </div>

              <div className="stats-col-divider" />

              <div className="stats-col-item">
                <div className="stats-icon-navy">
                  <ShieldCheck size={22} color="#FFFFFF" />
                </div>
                <div className="stats-info">
                  <span className="stats-val">100%</span>
                  <span className="stats-lbl">Legal Employment</span>
                </div>
              </div>

              <div className="stats-col-divider" />

              <div className="stats-col-item">
                <div className="stats-icon-gold">
                  <Headphones size={22} color="#FFFFFF" />
                </div>
                <div className="stats-info">
                  <span className="stats-val">End to End</span>
                  <span className="stats-lbl">Relocation Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="container">

          {/* Top Two-Column Grid */}
          <div className="about-grid">

            {/* LEFT — About Content */}
            <div className="about-left">
              <div className="about-badge">
                <span className="about-badge-dot"></span>
                ABOUT FLYNEST &nbsp;·&nbsp; EST. HYDERABAD
              </div>

              <h2 className="about-heading">
                Your trusted partner for{' '}
                <span className="about-heading-gold">European</span>{' '}
                career opportunities.
              </h2>

              <p className="about-body">
                FLYNEST Immigration Services helps skilled and unskilled professionals achieve their dream of working in Europe. We specialize in genuine work visas, visit visas, and immigration assistance, connecting candidates with verified employers across multiple European countries. From documentation and visa processing to travel guidance and post-arrival support, we ensure a smooth and hassle-free journey.
              </p>

              {/* Stats Row */}
              <div className="about-stats">
                <div className="about-stat-card">
                  <div className="about-stat-icon">
                    <Globe size={24} />
                  </div>
                  <div className="about-stat-value">7+</div>
                  <div className="about-stat-label">European Countries</div>
                  <div className="about-stat-line"></div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-icon">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="about-stat-value">100%</div>
                  <div className="about-stat-label">Verified Opportunities</div>
                  <div className="about-stat-line"></div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-icon">
                    <Euro size={24} />
                  </div>
                  <div className="about-stat-value">€1,500–€4,500</div>
                  <div className="about-stat-label">Monthly Salary Range</div>
                  <div className="about-stat-line"></div>
                </div>
              </div>
            </div>

            {/* RIGHT — Contact Info */}
            <div className="about-right">
              {/* Decorative world map dot grid */}
              <div className="about-map-decor" aria-hidden="true">
                <svg width="100%" height="180" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 12 }).map((_, row) =>
                    Array.from({ length: 20 }).map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 22 + 10}
                        cy={row * 16 + 8}
                        r="1.8"
                        fill="#E5A823"
                        opacity="0.18"
                      />
                    ))
                  )}
                  {/* Plane icon path */}
                  <path d="M60 140 Q180 40 360 20" stroke="#E5A823" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" fill="none" />
                  <text x="355" y="16" fontSize="18" fill="#E5A823" opacity="0.7">✈</text>
                </svg>
              </div>

              <div className="about-contact-card">
                <div className="about-contact-badge">
                  <MapPin size={13} /> HYDERABAD OFFICE
                </div>
                <h3 className="about-contact-title">Visit us · Schedule a Consultation</h3>

                <ul className="about-contact-list">
                  <li className="about-contact-item">
                    <div className="about-contact-icon-wrap">
                      <Phone size={16} />
                    </div>
                    <a href="tel:9390124092" className="about-contact-text">+91 93901 24092</a>
                  </li>
                  <li className="about-contact-item">
                    <div className="about-contact-icon-wrap">
                      <Mail size={16} />
                    </div>
                    <a href="mailto:flynestservices@gmail.com" className="about-contact-text">flynestservices@gmail.com</a>
                  </li>
                  <li className="about-contact-item">
                    <div className="about-contact-icon-wrap">
                      <MapPin size={16} />
                    </div>
                    <span className="about-contact-text">
                      Hyderabad Taranaka Metro Station, Axis Bank Lane, Opposite SBI Bank Building, Pillar No. 1057, Hyderabad
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Banner */}
          <div className="about-wa-banner">
            <div className="about-wa-left">
              <div className="about-wa-icon-circle">
                <MessageCircle size={28} />
              </div>
              <div className="about-wa-text">
                <span className="about-wa-label">READY TO START YOUR JOURNEY?</span>
                <span className="about-wa-title">Book a Free Consultation on WhatsApp</span>
                <span className="about-wa-sub">Chat with our experts and take the first step towards your European career.</span>
              </div>
            </div>
            <a
              href="https://wa.me/919390124092"
              target="_blank"
              rel="noreferrer"
              className="about-wa-btn"
            >
              <MessageCircle size={20} />
              Book Now on WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>


      {/* EUROPEAN COUNTRIES SECTION */}
      <section id="countries" className="euro-countries-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Explore Career Opportunities Across Europe
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-subtitle" style={{ marginTop: '12px' }}>
              We connect talented professionals with trusted employers across Europe through verified job placements, legal employment contracts, and complete relocation assistance. Start your international career with confidence in one of our partner countries.
            </p>
          </div>

          <div className="euro-countries-grid">
            {[
              {
                name: 'Netherlands',
                code: 'nl',
                flag: 'https://flagcdn.com/w80/nl.png',
                image: '/Netherlands.png',
                salary: '€1,500 – €4,500 / Month',
                desc: 'Develop your career in logistics, warehousing, agriculture, food production, and manufacturing with trusted employers offering stable employment and excellent growth opportunities.',
              },
              {
                name: 'France',
                code: 'fr',
                flag: 'https://flagcdn.com/w80/fr.png',
                image: '/France.png',
                salary: '€1,500 – €4,500 / Month',
                desc: 'Explore exciting opportunities in hospitality, restaurants, construction, food production, and skilled trades with complete visa and relocation support.',
              },
              {
                name: 'Poland',
                code: 'pl',
                flag: 'https://flagcdn.com/w80/pl.png',
                image: '/Poland.png',
                salary: '€1,500 – €4,500 / Month',
                desc: 'Join leading employers in warehouse operations, manufacturing, packaging, and industrial sectors through verified contracts and long-term employment.',
              },
              {
                name: 'Slovakia',
                code: 'sk',
                flag: 'https://flagcdn.com/w80/sk.png',
                image: '/Slovakia.png',
                salary: '€1,500 – €4,500 / Month',
                desc: 'Work with internationally recognized automotive, electronics, and manufacturing companies offering secure jobs and career advancement.',
              },
              {
                name: 'Hungary',
                code: 'hu',
                flag: 'https://flagcdn.com/w80/hu.png',
                image: '/Hungary.png',
                salary: '€1,500 – €4,500 / Month',
                desc: 'Build your future in logistics, factory operations, hospitality, transportation, and technical industries with complete relocation assistance.',
              },
              {
                name: 'Latvia',
                code: 'lv',
                flag: 'https://flagcdn.com/w80/lv.png',
                image: '/Latvia.png',
                salary: '€1,500 – €4,500 / Month',
                desc: 'Discover rewarding careers in construction, warehousing, logistics, and production industries with employer-supported relocation services.',
              },
              {
                name: 'Lithuania',
                code: 'lt',
                flag: 'https://flagcdn.com/w80/lt.png',
                image: '/Lithuania.png',
                salary: '€1,500 – €4,500 / Month',
                desc: 'Find rewarding opportunities in manufacturing, warehouse operations, food processing, and skilled technical professions with trusted European employers.',
              }
            ].map((country, idx) => (
              <div key={idx} className="euro-country-card">
                {/* Card Image Header */}
                <div className="euro-card-img-wrap">
                  <img src={country.image} alt={country.name} className="euro-card-img" />
                  <div className="euro-card-img-overlay" />
                  <div className="euro-card-img-content">
                    <div className="euro-card-flag-wrap">
                      <img src={country.flag} alt={`${country.name} flag`} className="euro-card-flag" />
                    </div>
                    <div className="euro-card-header-text">
                      <h3 className="euro-card-name">{country.name.toUpperCase()}</h3>
                      <div className="euro-card-salary">
                        <Euro size={12} />
                        {country.salary}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card Body */}
                <div className="euro-card-body">
                  <p className="euro-card-desc">{country.desc}</p>
                  <a
                    href="https://wa.me/919390124092"
                    target="_blank"
                    rel="noreferrer"
                    className="euro-card-btn"
                  >
                    Explore {country.name} Jobs <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDY ABROAD SECTION */}
      <section id="education" className="study-abroad-section">
        <div className="container">
          {/* Section Header */}
          <div className="sa-header">
            {/* <div className="sa-plane-badge">
              <PlaneTakeoff size={20} color="#6366F1" />
            </div> */}
            <h2 className="sa-title">Study Abroad, Build Your Future</h2>
            <p className="sa-subtitle">
              Explore world-class education and global opportunities<br />
              in top study destinations.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="sa-cards-grid">
            {[
              {
                image: '/USA.jpg',
                flag: 'https://flagcdn.com/w80/us.png',
                country: 'USA',
                title: 'Study in USA',
                titleColor: '#6366F1',
                badgeColor: '#6366F1',
                btnColor: '#6366F1',
                desc: 'Top universities, innovative learning, global career opportunities, and complete visa assistance to achieve your academic dreams.',
              },
              {
                image: '/UK.jpg',
                flag: 'https://flagcdn.com/w80/gb.png',
                country: 'UK',
                title: 'Study in UK',
                titleColor: '#EC4899',
                badgeColor: '#EC4899',
                btnColor: '#EC4899',
                desc: 'Prestigious universities, one-year master\'s programs, and expert guidance from admission to visa approval.',
              },
              {
                image: '/Australia.jpg',
                flag: 'https://flagcdn.com/w80/au.png',
                country: 'Australia',
                title: 'Study in Australia',
                titleColor: '#3B82F6',
                badgeColor: '#3B82F6',
                btnColor: '#3B82F6',
                desc: 'World-class education, vibrant student life, and excellent post-study work opportunities with end-to-end support.',
              },
              {
                image: '/Germany.jpg',
                flag: 'https://flagcdn.com/w80/de.png',
                country: 'Germany',
                title: 'Study in Germany',
                titleColor: '#F59E0B',
                badgeColor: '#F59E0B',
                btnColor: '#F59E0B',
                desc: 'Affordable education, internationally recognized degrees, and strong career prospects in Europe\'s leading economy.',
              },
            ].map((item, idx) => (
              <div key={idx} className="sa-card">
                {/* Card Image with Salary Badge */}
                <div className="sa-card-img-wrap">
                  <img src={item.image} alt={item.country} className="sa-card-img" />
                </div>

                {/* Card Body */}
                <div className="sa-card-body">
                  {/* Country Row */}
                  <div className="sa-card-country-row">
                    <img src={item.flag} alt={item.country} className="sa-card-flag" />
                    <span className="sa-card-country-name">{item.country}</span>
                  </div>

                  {/* Title */}
                  <h3 className="sa-card-title" style={{ color: item.titleColor }}>{item.title}</h3>

                  {/* Description */}
                  <p className="sa-card-desc">{item.desc}</p>

                  {/* Explore Button */}
                  <a
                    href="https://wa.me/919390124092"
                    target="_blank"
                    rel="noreferrer"
                    className="sa-card-btn"
                    style={{ background: item.btnColor }}
                  >
                    Explore Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Features Bar */}
          <div className="sa-features-bar">
            <div className="sa-feature-item">
              <div className="sa-feature-icon" style={{ background: 'rgba(99,102,241,0.1)' }}>
                <GraduationCap size={22} color="#6366F1" />
              </div>
              <div className="sa-feature-text">
                <span className="sa-feature-title">Top Universities</span>
                <span className="sa-feature-sub">World-ranked institutions</span>
              </div>
            </div>
            <div className="sa-feature-item">
              <div className="sa-feature-icon" style={{ background: 'rgba(236,72,153,0.1)' }}>
                <FileText size={22} color="#EC4899" />
              </div>
              <div className="sa-feature-text">
                <span className="sa-feature-title">Visa Assistance</span>
                <span className="sa-feature-sub">End-to-end support</span>
              </div>
            </div>
            <div className="sa-feature-item">
              <div className="sa-feature-icon" style={{ background: 'rgba(59,130,246,0.1)' }}>
                <UserCheck size={22} color="#3B82F6" />
              </div>
              <div className="sa-feature-text">
                <span className="sa-feature-title">Expert Guidance</span>
                <span className="sa-feature-sub">From start to success</span>
              </div>
            </div>
            <div className="sa-feature-item">
              <div className="sa-feature-icon" style={{ background: 'rgba(245,158,11,0.1)' }}>
                <Globe size={22} color="#F59E0B" />
              </div>
              <div className="sa-feature-text">
                <span className="sa-feature-title">Global Opportunities</span>
                <span className="sa-feature-sub">Bright future awaits</span>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* FEATURED JOB OPPORTUNITIES */}
      <section id="jobs" className="jobs-section">
        <div className="container">
          <div className="jobs-section-header">
            <h2 className="jobs-main-title">
              Powering Europe's <span className="jobs-title-gold">Workforce</span><br />
              with the <em className="jobs-title-italic">Right Talent</em>
            </h2>
            <p className="jobs-main-desc">
              From entry-level professionals to highly skilled specialists, we connect qualified candidates with trusted employers across Europe's fastest-growing industries. Our network spans logistics, hospitality, retail, manufacturing, skilled trades, and transportation—covering <strong>40+ verified roles</strong> designed for long-term career success.
            </p>
          </div>


          <div className="jobs-grid">
            {jobCategories.map((cat, index) => {
              const waMessage = encodeURIComponent(`Hi FlyNest, I want to apply for ${cat.title} job opportunities.`);
              const waUrl = `https://wa.me/919390124092?text=${waMessage}`;
              return (
                <div
                  key={index}
                  className="job-card"
                  onClick={() => window.open(waUrl, '_blank')}
                >
                  {/* Card Image Header */}
                  <div className="job-card-image">
                    <img src={cat.image} alt={cat.title} />
                    <div className="job-card-overlay"></div>
                    <div className="job-card-top">
                      <div className="job-card-icon-badge" style={{ backgroundColor: cat.bgColor, color: cat.iconColor }}>
                        {cat.icon}
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="job-card-content">
                    <h3 className="job-card-title">{cat.title}</h3>
                    <ul className="job-card-list">
                      {cat.jobs.map((job, jIdx) => (
                        <li key={jIdx} className="job-card-item">
                          <ChevronRight size={14} />
                          {job}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="job-card-apply-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MessageCircle size={16} /> Apply via WhatsApp <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div style={{ textAlign: 'center', marginTop: '12px' }}>
            <button onClick={() => setJobsModalOpen(true)} className="btn btn-primary">
              View All Jobs <ArrowRight size={18} />
            </button>
          </div> */}
        </div>
      </section>

      {/* SALARY & BENEFITS SECTION */}
      <section id="salary-benefits" className="sb-section">
        <div className="container">
          <div className="sb-card-container">
            {/* LEFT COLUMN */}
            <div className="sb-left-col">
              {/* Eyebrow */}
              <div className="sb-eyebrow">
                <div className="sb-euro-circle">€</div>
                <span className="sb-eyebrow-text">SALARY & BENEFITS</span>
                <div className="sb-eyebrow-line" />
              </div>

              {/* Heading */}
              <h2 className="sb-heading">
                Earn in <span className="sb-highlight-gold">Euros.</span><br />
                Live with every <span className="sb-highlight-gold">comfort.</span>
              </h2>

              {/* Paragraph */}
              <p className="sb-description">
                At FLYNEST, we ensure better opportunities, great pay, and complete support so you can focus on building your future in Europe.
              </p>

              {/* Salary Box */}
              <div className="sb-salary-box">
                <span className="sb-salary-tag">MONTHLY SALARY</span>
                <div className="sb-salary-amount">€1500 – €4500</div>
                <p className="sb-salary-sub">Approx. ₹1,65,000 – ₹4,95,000 per month</p>
                <div className="sb-salary-divider" />
                <div className="sb-salary-badge">
                  <CheckCircle2 size={16} className="sb-check-icon" />
                  <span>Overtime = Extra Income</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/919390124092"
                target="_blank"
                rel="noreferrer"
                className="sb-cta-btn"
              >
                <div className="sb-btn-wa-icon">
                  <MessageCircle size={18} />
                </div>
                <span>Apply via WhatsApp</span>
                <ArrowRight size={18} className="sb-btn-arrow" />
              </a>
            </div>

            {/* RIGHT COLUMN */}
            <div className="sb-right-col">
              {/* 6 Benefit Cards Grid */}
              <div className="sb-benefits-grid">
                {/* 01 */}
                <div className="sb-benefit-card">
                  <div className="sb-card-icon-wrap">
                    <Bed size={22} className="sb-card-icon" />
                  </div>
                  <span className="sb-card-tag">BENEFIT 01</span>
                  <h3 className="sb-card-title">Free<br />Accommodation</h3>
                  <div className="sb-card-gold-line" />
                </div>

                {/* 02 */}
                <div className="sb-benefit-card">
                  <div className="sb-card-icon-wrap">
                    <Utensils size={22} className="sb-card-icon" />
                  </div>
                  <span className="sb-card-tag">BENEFIT 02</span>
                  <h3 className="sb-card-title">Food<br />Provided</h3>
                  <div className="sb-card-gold-line" />
                </div>

                {/* 03 */}
                <div className="sb-benefit-card">
                  <div className="sb-card-icon-wrap">
                    <Bus size={22} className="sb-card-icon" />
                  </div>
                  <span className="sb-card-tag">BENEFIT 03</span>
                  <h3 className="sb-card-title">Transport<br />Support</h3>
                  <div className="sb-card-gold-line" />
                </div>

                {/* 04 */}
                <div className="sb-benefit-card">
                  <div className="sb-card-icon-wrap">
                    <HeartPulse size={22} className="sb-card-icon" />
                  </div>
                  <span className="sb-card-tag">BENEFIT 04</span>
                  <h3 className="sb-card-title">Medical<br />Cover</h3>
                  <div className="sb-card-gold-line" />
                </div>

                {/* 05 */}
                <div className="sb-benefit-card">
                  <div className="sb-card-icon-wrap">
                    <FileCheck size={22} className="sb-card-icon" />
                  </div>
                  <span className="sb-card-tag">BENEFIT 05</span>
                  <h3 className="sb-card-title">2-Year<br />Work Visa</h3>
                  <div className="sb-card-gold-line" />
                </div>

                {/* 06 */}
                <div className="sb-benefit-card">
                  <div className="sb-card-icon-wrap">
                    <Clock size={22} className="sb-card-icon" />
                  </div>
                  <span className="sb-card-tag">BENEFIT 06</span>
                  <h3 className="sb-card-title">Overtime<br />Available</h3>
                  <div className="sb-card-gold-line" />
                </div>
              </div>

              {/* Dark Urgent Notice Banner */}
              <div className="sb-notice-banner">
                <div className="sb-notice-icon-shield">
                  <ShieldCheck size={20} />
                </div>
                <div className="sb-notice-text">
                  <span className="sb-notice-highlight">Hurry – Limited Seats.</span> Netherlands intake: only 40 members per batch. Secure your interview slot today.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FLYNEST SECTION */}
      <section id="why-us" className="wcs-section">
        <div className="container">
          <div className="wcs-grid">
            {/* LEFT COLUMN */}
            <div className="wcs-left-col">
              {/* Eyebrow */}
              <div className="wcs-eyebrow">
                <span className="wcs-eyebrow-dash" />
                <span className="wcs-eyebrow-text">WHY CHOOSE FLYNEST</span>
              </div>

              {/* Main Heading */}
              <h2 className="wcs-heading">
                Your Trusted <br />
                Partner for <br />
                <span className="wcs-heading-gold">Global Careers</span>
              </h2>
              <div className="wcs-heading-underline" />

              {/* Paragraph */}
              <p className="wcs-description">
                At FlyNest, we don’t just process visas — we build global careers. With verified opportunities, expert guidance, and end-to-end support, your journey is in safe hands.
              </p>

              {/* Our Promise Dark Navy Card */}
              <div className="wcs-promise-card">
                {/* Background Graphic SVG */}
                <svg className="wcs-promise-bg-graphic" viewBox="0 0 300 200" fill="none" preserveAspectRatio="none">
                  <circle cx="240" cy="150" r="100" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="240" cy="150" r="65" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                  <ellipse cx="240" cy="150" rx="100" ry="40" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
                  <ellipse cx="240" cy="150" rx="45" ry="100" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
                  <path d="M 60 175 Q 160 135 262 72" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.8" strokeDasharray="5 4" fill="none" />
                  <g transform="translate(256, 64) rotate(-32)">
                    <path d="M12 2L15 9L22 11L15 13L12 20L10 14L4 14L8 11L4 8L10 8L12 2Z" fill="#FFFFFF" />
                  </g>
                </svg>

                {/* Content Top */}
                <div className="wcs-promise-top">
                  <div className="wcs-promise-icon-wrap">
                    <ShieldCheck size={22} className="wcs-promise-icon" />
                  </div>
                  <div className="wcs-promise-text-wrap">
                    <h3 className="wcs-promise-title">Our Promise</h3>
                    <p className="wcs-promise-sub">
                      Transparent process. Genuine support. Real opportunities.
                    </p>
                  </div>
                </div>

                <div className="wcs-promise-divider" />

                {/* Content Bottom */}
                <div className="wcs-promise-bottom">
                  <div className="wcs-promise-users-icon">
                    <Users size={18} />
                  </div>
                  <p className="wcs-promise-bottom-text">
                    Thousands of candidates trust FlyNest to shape their future in Europe.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (2x2 Cards Grid) */}
            <div className="wcs-right-col">
              <div className="wcs-cards-grid">

                {/* CARD 01 */}
                <div className="wcs-card wcs-card-blue">
                  <div className="wcs-card-top">
                    <div className="wcs-card-icon-box wcs-icon-blue">
                      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="10" stroke="#2563EB" strokeWidth="2" />
                        <path d="M6 16H26" stroke="#2563EB" strokeWidth="1.8" />
                        <path d="M16 6C18.5 9 19.8 12.5 19.8 16C19.8 19.5 18.5 23 16 26C13.5 23 12.2 19.5 12.2 16C12.2 12.5 13.5 9 16 6Z" stroke="#2563EB" strokeWidth="1.8" />
                        <path d="M20.5 18.5L23.5 19.8V23C23.5 25 20.5 26 20.5 26C20.5 26 17.5 25 17.5 23V19.8L20.5 18.5Z" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 22.2L20.2 23.2L22 21.2" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="wcs-card-number-wrap">
                      <span className="wcs-card-number text-blue">01</span>
                      <div className="wcs-number-accent accent-blue" />
                    </div>
                  </div>
                  <h3 className="wcs-card-title">Verified International Opportunities</h3>
                  <div className="wcs-card-bar bar-blue" />
                  <p className="wcs-card-desc">
                    We connect candidates with carefully verified employers across Europe, ensuring every opportunity is genuine, transparent, and legally compliant.
                  </p>
                </div>

                {/* CARD 02 */}
                <div className="wcs-card wcs-card-green">
                  <div className="wcs-card-top">
                    <div className="wcs-card-icon-box wcs-icon-green">
                      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 6C8 4.89543 8.89543 4 10 4H18L23 9V24C23 25.1046 22.1046 26 21 26H10C8.89543 26 8 25.1046 8 24V6Z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 9.5H16" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M12 13.5H15" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M19.5 18.5C21.1569 18.5 22.5 19.8431 22.5 21.5V23.5H16.5V21.5C16.5 19.8431 17.8431 18.5 19.5 18.5Z" stroke="#059669" strokeWidth="1.6" fill="#ECFDF5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="19.5" cy="15.5" r="2.2" stroke="#059669" strokeWidth="1.6" fill="#ECFDF5" />
                      </svg>
                    </div>
                    <div className="wcs-card-number-wrap">
                      <span className="wcs-card-number text-green">02</span>
                      <div className="wcs-number-accent accent-green" />
                    </div>
                  </div>
                  <h3 className="wcs-card-title">Expert Visa & Documentation Support</h3>
                  <div className="wcs-card-bar bar-green" />
                  <p className="wcs-card-desc">
                    From application preparation to embassy requirements, our experienced team guides you through every step with complete accuracy.
                  </p>
                </div>

                {/* CARD 03 */}
                <div className="wcs-card wcs-card-purple">
                  <div className="wcs-card-top">
                    <div className="wcs-card-icon-box wcs-icon-purple">
                      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 6C8 4.89543 8.89543 4 10 4H18L23 9V24C23 25.1046 22.1046 26 21 26H10C8.89543 26 8 25.1046 8 24V6Z" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 9.5H16" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M12 13.5H15" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
                        <circle cx="19" cy="19" r="3.5" stroke="#7C3AED" strokeWidth="1.8" fill="#F3E8FF" />
                        <path d="M21.5 21.5L24 24" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="wcs-card-number-wrap">
                      <span className="wcs-card-number text-purple">03</span>
                      <div className="wcs-number-accent accent-purple" />
                    </div>
                  </div>
                  <h3 className="wcs-card-title">Transparent Recruitment Process</h3>
                  <div className="wcs-card-bar bar-purple" />
                  <p className="wcs-card-desc">
                    No hidden charges, no false promises. We believe in clear communication, ethical recruitment, and complete transparency from consultation to deployment.
                  </p>
                </div>

                {/* CARD 04 */}
                <div className="wcs-card wcs-card-orange">
                  <div className="wcs-card-top">
                    <div className="wcs-card-icon-box wcs-icon-orange">
                      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="7" y="10" width="18" height="15" rx="3" stroke="#EA580C" strokeWidth="2" />
                        <path d="M13 10V7C13 6.44772 13.4477 6 14 6H18C18.5523 6 19 6.44772 19 7V10" stroke="#EA580C" strokeWidth="1.8" />
                        <path d="M10 25V27" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
                        <path d="M22 25V27" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="21" cy="20" r="3.8" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1.6" />
                        <path d="M19.5 20L20.5 21L22.5 19" stroke="#EA580C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="wcs-card-number-wrap">
                      <span className="wcs-card-number text-orange">04</span>
                      <div className="wcs-number-accent accent-orange" />
                    </div>
                  </div>
                  <h3 className="wcs-card-title">End-to-End Relocation Assistance</h3>
                  <div className="wcs-card-bar bar-orange" />
                  <p className="wcs-card-desc">
                    Beyond visas, we assist with travel arrangements, pre-departure guidance, and post-arrival support to make your transition smooth and stress-free.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Services Section Flyers Slider */}
          <div className="wcs-flyers-slider-wrap">
            <h3 className="wcs-flyers-title">
              Our Latest <span className="wcs-flyers-title-gold">Program Banners</span>
            </h3>
            <div className="wcs-flyers-slider">
              <button
                className="wcs-flyers-arrow prev-arrow"
                onClick={() => setCurrentServiceSlide((prev) => (prev === 0 ? 1 : 0))}
                aria-label="Previous flyer"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="wcs-flyers-container">
                {['/service_slide1.jpg', '/service_slide2.jpg'].map((img, idx) => (
                  <div
                    key={idx}
                    className={`wcs-flyers-slide ${idx === currentServiceSlide ? 'active' : ''}`}
                  >
                    <img src={img} alt={`FlyNest Flyer ${idx + 1}`} className="wcs-flyers-img" />
                  </div>
                ))}
              </div>

              <button
                className="wcs-flyers-arrow next-arrow"
                onClick={() => setCurrentServiceSlide((prev) => (prev === 0 ? 1 : 0))}
                aria-label="Next flyer"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="wcs-flyers-dots">
              {['/service_slide1.jpg', '/service_slide2.jpg'].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentServiceSlide(idx)}
                  className={`wcs-flyers-dot ${idx === currentServiceSlide ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR IMMIGRATION PROCESS */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Our Immigration Process
              <div className="section-title-underline"></div>
            </h2>
          </div>

          <div className="process-steps">
            <div className="process-line"></div>
            {processSteps.map((p, index) => (
              <div key={index} className="process-step">
                <div className="process-icon-circle">
                  {p.icon}
                </div>
                <span className="process-number">{p.step}</span>
                <span className="process-name">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS MARQUEE SECTION */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '36px' }}>
            <span className="wcs-eyebrow-text" style={{ color: '#D97706', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
              SUCCESS STORIES
            </span>
            <h2 className="section-title">
              What Our Candidates Say
              <div className="section-title-underline" />
            </h2>
            <p className="section-subtitle" style={{ marginTop: '10px' }}>
              Real experiences from professionals who successfully built their careers in Europe with FlyNest.
            </p>
          </div>
        </div>

        {/* Continuous Infinite Marquee Slider */}
        <div className="testimonials-marquee-wrapper">
          <div className="testimonials-marquee-track">
            {[...testimonials, ...testimonials].map((t, index) => (
              <div key={index} className="testimonial-marquee-card">
                <div className="stars">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-user">
                  <div
                    className="testimonial-avatar-initials"
                    style={{ backgroundColor: t.bgColor, color: t.textColor }}
                  >
                    {t.initials}
                  </div>
                  <div className="user-info">
                    <span className="user-name">{t.name}</span>
                    <span className="user-visa">{t.visa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH SECTION */}
      <section id="contact" className="git-section">
        <div className="container">
          <div className="git-grid">
            {/* LEFT COLUMN */}
            <div className="git-left-col">
              {/* Eyebrow Pill */}
              <div className="git-eyebrow-wrap">
                <div className="git-eyebrow-pill">
                  <span className="git-eyebrow-dash">—</span>
                  <span className="git-eyebrow-text">GET IN TOUCH</span>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="git-heading">
                Let's Start Your <br />
                <span className="git-heading-gold">European</span> Journey
              </h2>
              <div className="git-heading-underline" />

              {/* Paragraph */}
              <p className="git-description">
                Book a consultation with our team at the Hyderabad office. We’ll assess your profile, answer your questions, and help you choose the most suitable European work opportunity based on your skills and experience.
              </p>

              {/* Contact Information Cards */}
              <div className="git-cards-list">
                {/* Phone */}
                <a href="tel:9390124092" className="git-card">
                  <div className="git-card-left">
                    <div className="git-icon-box git-icon-blue">
                      <Phone size={20} />
                    </div>
                    <div className="git-card-info">
                      <span className="git-card-label">Phone</span>
                      <span className="git-card-val">+91 93901 24092</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="git-card-arrow" />
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/919390124092" target="_blank" rel="noreferrer" className="git-card">
                  <div className="git-card-left">
                    <div className="git-icon-box git-icon-green">
                      <MessageCircle size={20} />
                    </div>
                    <div className="git-card-info">
                      <span className="git-card-label">WhatsApp</span>
                      <span className="git-card-val">Connect with Our Team</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="git-card-arrow" />
                </a>

                {/* Email */}
                <a href="mailto:flynestservices@gmail.com" className="git-card">
                  <div className="git-card-left">
                    <div className="git-icon-box git-icon-purple">
                      <Mail size={20} />
                    </div>
                    <div className="git-card-info">
                      <span className="git-card-label">Email</span>
                      <span className="git-card-val">flynestservices@gmail.com</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="git-card-arrow" />
                </a>

                {/* Address */}
                <a href="https://maps.app.goo.gl/5C6TKzkf4tXhqkuN7" target="_blank" rel="noreferrer" className="git-card">
                  <div className="git-card-left">
                    <div className="git-icon-box git-icon-amber">
                      <MapPin size={20} />
                    </div>
                    <div className="git-card-info">
                      <span className="git-card-label">Office Address</span>
                      <span className="git-card-val git-card-address">
                        Hyderabad Taranaka Metro Station, Axis Bank Lane, Opposite SBI Bank Building, Pillar No. 1057, Hyderabad, Telangana
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="git-card-arrow" />
                </a>
              </div>

              {/* Schedule CTA Button */}
              <a
                href="https://wa.me/919390124092"
                target="_blank"
                rel="noreferrer"
                className="git-schedule-btn"
              >
                <div className="git-btn-cal-icon">
                  <Calendar size={18} />
                </div>
                <span className="git-btn-text">Schedule a Free Consultation</span>
                <ArrowRight size={20} className="git-btn-arrow" />
              </a>
            </div>

            {/* RIGHT COLUMN (MAP CARD & OVERLAYS) */}
            <div className="git-right-col">
              <div className="git-map-container">
                {/* Embedded Google Map */}
                <iframe
                  title="FlyNest Immigration Services Hyderabad Location Map"
                  src="https://maps.google.com/maps?q=Taranaka+Metro+Station,+Axis+Bank+Lane,+Opposite+SBI+Bank+Building,+Pillar+No.+1057,+Hyderabad,+Telangana&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="git-map-iframe"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Office Card Overlay */}
                <div className="git-floating-info">
                  <div className="git-floating-top">
                    <div className="git-floating-pin-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="git-floating-details">
                      <h4 className="git-floating-title">Flynest Immigration Services</h4>
                      <p className="git-floating-sub">
                        Axis Bank Lane, Opposite SBI Bank Building, Pillar No. 1057, Taranaka, Hyderabad, Telangana 500012
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/5C6TKzkf4tXhqkuN7"
                    target="_blank"
                    rel="noreferrer"
                    className="git-floating-map-btn"
                  >
                    <MapPin size={15} />
                    <span>Open in Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1 */}
            <div>
              <div style={{ marginBottom: '16px' }}>
                <img
                  src="/flynest_logo_final.png"
                  alt="FlyNest Immigration Services"
                  style={{
                    height: '120px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    borderRadius: '8px',
                    filter: 'brightness(1.05)'
                  }}
                />
              </div>
              <p className="footer-about">
                Your trusted partner for global immigration solutions. We make your international dreams come true.
              </p>
              <div className="social-links">
                <a href="https://www.instagram.com/flynest123?igsh=NGJoc2tqdnE2NTdt" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://wa.me/919390124092" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                <li><button onClick={() => navigateTo('home')} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Home</button></li>
                <li><button onClick={() => navigateTo('why-us')} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Services</button></li>
                <li><button onClick={() => navigateTo('countries')} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Countries</button></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="footer-col-title">Explore</h4>
              <ul className="footer-links">
                <li><button onClick={() => navigateTo('jobs')} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Jobs</button></li>
                <li><button onClick={() => navigateTo('why-us')} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Services</button></li>
                <li><button onClick={() => navigateTo('contact')} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Contact Us</button></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="contact-info-list">
                <li className="contact-item">
                  <Phone className="contact-icon" size={18} />
                  <span>+91 93901 24092</span>
                </li>
                <li className="contact-item">
                  <Mail className="contact-icon" size={18} />
                  <span>flynestservices@gmail.com</span>
                </li>
                <li className="contact-item">
                  <MapPin className="contact-icon" size={18} />
                  <span>Metro Station, Axis Bank Lane, Tarnaka, Hyderabad, Telangana – 500017, India</span>
                </li>
              </ul>
            </div>

            {/* Col 5 */}
            <div>
              <h4 className="footer-col-title">Office Hours</h4>
              <ul className="contact-info-list">
                <li className="contact-item">
                  <Clock className="contact-icon" size={18} />
                  <div>
                    <strong style={{ color: '#E2E8F0', display: 'block' }}>Monday – Saturday</strong>
                    <span>10:00 AM – 7:00 PM</span>
                  </div>
                </li>
                <li className="contact-item">
                  <Clock className="contact-icon" size={18} />
                  <div>
                    <strong style={{ color: '#E2E8F0', display: 'block' }}>Sunday</strong>
                    <span>Closed</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright-bar">
            <p>© {new Date().getFullYear()} FlyNest Immigration Services. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* APPLY NOW MODAL */}
      {applyModalOpen && (
        <div className="modal-overlay" onClick={() => setApplyModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setApplyModalOpen(false)}>
              <X size={24} />
            </button>
            <h3 className="modal-title">Apply for Visa & Jobs</h3>
            <p className="modal-subtitle">Fill in your details below and our visa expert will get in touch with you.</p>

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="form-input"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Visa Service Requested</label>
                <select
                  className="form-select"
                  value={formData.visaType}
                  onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                >
                  <option value="Work Visa">Work Visa</option>
                  <option value="Study Visa">Study Visa</option>
                  <option value="Tourist Visa">Tourist Visa</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Target Country</label>
                <select
                  className="form-select"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                >
                  {countries.map((c, i) => (
                    <option key={i} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Message / Query</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your qualification or preferred job role..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Submit Application <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FREE CONSULTATION MODAL */}
      {consultationModalOpen && (
        <div className="modal-overlay" onClick={() => setConsultationModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setConsultationModalOpen(false)}>
              <X size={24} />
            </button>
            <h3 className="modal-title">Book Free Consultation</h3>
            <p className="modal-subtitle">Speak directly with an experienced FlyNest immigration counselor.</p>

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="form-input"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 93901 24092"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Time Slot</label>
                <select className="form-select">
                  <option>10:00 AM - 01:00 PM</option>
                  <option>02:00 PM - 05:00 PM</option>
                  <option>05:00 PM - 07:00 PM</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Request Call Back <Phone size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* VIEW ALL JOBS MODAL */}
      {jobsModalOpen && (
        <div className="modal-overlay" onClick={() => setJobsModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: '720px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setJobsModalOpen(false)}>
              <X size={24} />
            </button>
            <h3 className="modal-title">All Overseas Job Opportunities</h3>
            <p className="modal-subtitle">Browse all available positions across Europe, UK, Australia, and Asia.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxHeight: '60vh', overflowY: 'auto', paddingRight: '4px' }}>
              {jobCategories.map((cat, idx) => (
                <div key={idx} style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: '#F8FAFC'
                }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-navy)', marginBottom: '8px' }}>
                    <span style={{ color: cat.iconColor }}>{cat.icon}</span> {cat.title}
                  </h4>
                  <ul style={{ listStyle: 'none', paddingLeft: '8px', fontSize: '0.85rem', color: '#475569' }}>
                    {cat.jobs.map((j, i) => (
                      <li key={i} style={{ marginBottom: '4px' }}>• {j}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button onClick={() => { setJobsModalOpen(false); setApplyModalOpen(true); }} className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
              Apply For Jobs Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
