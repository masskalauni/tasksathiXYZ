import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { careerPillars, openPositions } from '@/src/data/careers';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import {
  Users,
  Briefcase,
  Sparkles,
  CheckCircle2,
  MapPin,
  Mail,
  ArrowRight,
  Code2,
  HeartHandshake,
  Send,
  Check,
  ShieldCheck,
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantRole, setApplicantRole] = useState('Frontend Engineer');
  const [applicantNote, setApplicantNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Careers & Engineering Culture"
        description="Join TASK SATHI in Putalisadak, Kathmandu. Build mission-critical software, ERP systems, and AI automation for businesses across Nepal."
        canonicalPath="/careers"
      />

      {/* Hero */}
      <PageHero
        badge="Engineering & Product Team"
        badgeIcon={Users}
        title="Build software that powers real businesses in Nepal."
        highlightText="real businesses"
        description="We are a team of software architects, developers, and product builders in Putalisadak, Kathmandu. We prioritize craftsmanship, clean architecture, and long-term maintainability over shortcuts."
        breadcrumbs={[{ label: 'Careers' }]}
        highlights={[
          { icon: Code2, label: 'Modern TypeScript & Cloud Stack' },
          { icon: HeartHandshake, label: 'High Trust & Async Collaboration' },
          { icon: MapPin, label: 'Putalisadak, Kathmandu HQ' },
        ]}
      />

      {/* 4 Cultural Pillars */}
      <Section spacing="lg" background="subtle">
        <SectionHeader
          tagline="Our Engineering Culture"
          title="How we work and what we value."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {careerPillars.map((p, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-3"
            >
              <div className="h-8 w-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono font-bold flex items-center justify-center text-sm">
                0{i + 1}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white pt-1">
                {p.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Open Positions List */}
      <Section spacing="lg">
        <SectionHeader
          tagline="Active Openings"
          title="Current Opportunities"
          description="Explore our open engineering and product roles in Kathmandu."
        />

        <div className="max-w-4xl mx-auto">
          {openPositions.length === 0 ? (
            <div className="p-8 sm:p-12 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111827] text-center space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                <Briefcase className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                No specific vacancies listed right now
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                We are always excited to connect with talented TypeScript engineers, UI/UX designers, and systems architects. Send us an open application below.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {openPositions.map((pos) => (
                <div
                  key={pos.id}
                  className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {pos.title}
                      </h4>
                      <Badge variant="outline" size="sm">
                        {pos.department}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {pos.location}
                      </span>
                      <span>•</span>
                      <span>{pos.type}</span>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* General Application Form */}
      <Section spacing="lg" background="subtle">
        <div className="max-w-2xl mx-auto p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-sm space-y-6">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              General Inquiries
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Submit an Open Application
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Tell us about your technical background, what you enjoy building, and share your GitHub or portfolio links.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
              <Check className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                Application Received!
              </h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-300">
                Thank you, {applicantName}. Our engineering leads review open applications weekly and will reach out if there is a mutual match.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Suman Shakya"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="suman@example.com"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Primary Domain / Discipline *
                </label>
                <select
                  value={applicantRole}
                  onChange={(e) => setApplicantRole(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Frontend Engineer">Frontend Engineer (React / TypeScript / Tailwind)</option>
                  <option value="Backend Engineer">Backend Engineer (Node.js / PostgreSQL / Microservices)</option>
                  <option value="Full-Stack Engineer">Full-Stack Engineer</option>
                  <option value="UI/UX Designer">UI/UX & Design Systems Designer</option>
                  <option value="AI / Automation Specialist">AI / Machine Learning & Automation Specialist</option>
                  <option value="QA & Systems Engineer">QA & Automation Engineer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Portfolio / GitHub / Resume Links & Note *
                </label>
                <textarea
                  required
                  rows={4}
                  value={applicantNote}
                  onChange={(e) => setApplicantNote(e.target.value)}
                  placeholder="Paste links to your GitHub profile, LinkedIn, live web projects, and a brief note about yourself..."
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="md"
                className="w-full"
                rightIcon={<Send className="h-4 w-4" />}
              >
                Submit Open Application
              </Button>
            </form>
          )}

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
            <span className="text-xs text-slate-500">
              Or email our talent desk directly at{' '}
              <a
                href="mailto:careers@tasksathi.com"
                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                careers@tasksathi.com
              </a>
            </span>
          </div>
        </div>
      </Section>
    </>
  );
};
