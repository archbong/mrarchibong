/**
 * Backend-Focused Landing Page
 * Designed to convert businesses into paying API/retainer clients
 */
"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import {
  CheckCircle,
  Shield,
  Zap,
  Cpu,
  Database,
  Server,
  Clock,
  Users,
} from "lucide-react";

export default function Page() {
  return (
    <>
      <Header />

      {/* 1️⃣ Hero Section (Above the Fold) */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Backend APIs that scale, automate, and stay reliable as your
                business grows
              </h1>
              <p className="text-xl text-slate-300">
                I design and maintain enterprise-grade backend systems using
                Node.js and Django—so your team can focus on growth, not
                infrastructure issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                >
                  Book a Backend Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  See How I Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Server className="w-8 h-8 text-blue-400" />
                    <div>
                      <h3 className="font-semibold">API Server</h3>
                      <p className="text-sm text-slate-400">
                        Node.js + Express
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Live</span>
                    </div>
                  </div>
                  <div className="h-px bg-slate-700"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-sm text-slate-400">Uptime</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-2xl font-bold">&lt;100ms</div>
                      <div className="text-sm text-slate-400">
                        Response Time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Trust Anchor (Why You) */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <Shield className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="text-lg font-semibold">
                Enterprise Software Developer
              </h3>
              <p className="text-slate-600">Production API experience</p>
            </div>
            <div className="text-center space-y-3">
              <Database className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="text-lg font-semibold">
                Secure & Scalable Systems
              </h3>
              <p className="text-slate-600">Built for growth</p>
            </div>
            <div className="text-center space-y-3">
              <Clock className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="text-lg font-semibold">Long-term Ownership</h3>
              <p className="text-slate-600">Ongoing maintenance & support</p>
            </div>
            <div className="text-center space-y-3">
              <Users className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="text-lg font-semibold">Team Collaboration</h3>
              <p className="text-slate-600">
                Clear communication with non-technical teams
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-500 italic">
              Currently building and maintaining enterprise applications used by
              real teams.
            </p>
          </div>
        </div>
      </section>

      {/* 3️⃣ The Problems You Solve */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Does this sound familiar?
            </h2>
            <p className="text-xl text-slate-600">
              These are backend problems—and they get expensive if ignored.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "❌",
                title: "Backend is slow or unreliable",
                description:
                  "Performance issues affecting user experience and business operations",
              },
              {
                icon: "❌",
                title: "Manual processes wasting staff time",
                description:
                  "Repetitive tasks that could be automated eating into productivity",
              },
              {
                icon: "❌",
                title: "App growth causing frequent bugs",
                description:
                  "Scaling challenges leading to instability and downtime",
              },
              {
                icon: "❌",
                title: "No one truly owns the backend system",
                description:
                  "Lack of dedicated expertise for maintenance and improvements",
              },
            ].map((problem, index) => (
              <Card
                key={index}
                className="bg-white border-slate-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="text-3xl mb-2">{problem.icon}</div>
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ What You Do (Backend-Only Services) */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Backend-Only Services
            </h2>
            <p className="text-xl text-slate-600">
              Focused expertise for businesses that need reliable backend
              systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Server className="w-8 h-8 text-blue-600" />,
                title: "API Design & Development",
                description:
                  "RESTful, secure, and scalable APIs with clear documentation for frontend teams",
                features: [
                  "Production-ready APIs",
                  "Comprehensive documentation",
                  "Authentication & authorization",
                ],
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                title: "Backend Automation",
                description:
                  "Background jobs, queues, and scheduled tasks for payment, webhook, and data processing",
                features: [
                  "Workflow automation",
                  "Payment processing",
                  "Data pipeline management",
                ],
              },
              {
                icon: <Cpu className="w-8 h-8 text-blue-600" />,
                title: "Enterprise Application Development",
                description:
                  "Internal systems and business-critical tools designed for long-term maintainability",
                features: [
                  "Business logic implementation",
                  "Database design",
                  "System architecture",
                ],
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "API Maintenance & Retainers",
                description:
                  "Monitoring, optimization, and ongoing improvements with monthly backend ownership",
                features: [
                  "Performance monitoring",
                  "Security updates",
                  "Ongoing support",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ How You Work (Process Section) */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
            <p className="text-xl text-slate-600">
              Predictability = confidence. No guesswork. No rushed hacks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Understand the business workflow",
                description:
                  "Deep dive into your processes to identify automation opportunities and requirements",
              },
              {
                step: "2",
                title: "Design the backend architecture",
                description:
                  "Create scalable, maintainable system designs with clear documentation",
              },
              {
                step: "3",
                title: "Build & test production-ready APIs",
                description:
                  "Implement with best practices, comprehensive testing, and security measures",
              },
              {
                step: "4",
                title: "Monitor, optimize, and maintain",
                description:
                  "Ongoing support, performance monitoring, and continuous improvements",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {process.title}
                  </h3>
                  <p className="text-slate-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-slate-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Technical Credibility */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built with proven tools
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                I choose boring, reliable technology—because production systems
                should be boring.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Node.js, Django, Django REST Framework",
                  "PostgreSQL, MySQL",
                  "Redis, Celery, BullMQ",
                  "Docker, Linux, CI/CD",
                  "AWS, Vercel, Netlify",
                  "Git, GitHub Actions, Testing",
                ].map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold mb-6">
                Why boring technology?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Proven stability</h4>
                    <p className="text-slate-600">
                      Battle-tested in production environments
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Easy to maintain</h4>
                    <p className="text-slate-600">
                      Large community and extensive documentation
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cost-effective</h4>
                    <p className="text-slate-600">
                      Reduced learning curve and hiring costs
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Engagement Models */}
      <section className="w-full py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engagement Models
            </h2>
            <p className="text-xl text-slate-300">
              Choose the right partnership model for your backend needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Backend Retainer",
                subtitle: "Most Popular",
                description: "Monthly backend ownership with ongoing support",
                features: [
                  "API monitoring & improvements",
                  "Performance optimization",
                  "Security updates",
                  "Priority support",
                  "Regular maintenance",
                ],
                cta: "Discuss Retainer",
              },
              {
                title: "Project-Based API Development",
                subtitle: "Fixed Scope",
                description: "Complete backend builds with clear deliverables",
                features: [
                  "Fixed-scope backend builds",
                  "Clear delivery timeline",
                  "Comprehensive documentation",
                  "Testing & deployment",
                  "Handover support",
                ],
                cta: "Start a Project",
              },
              {
                title: "Automation & Integrations",
                subtitle: "Workflow Focus",
                description: "Streamline business processes with automation",
                features: [
                  "Workflow automation",
                  "Payment processing",
                  "Data pipeline setup",
                  "Third-party integrations",
                  "Process optimization",
                ],
                cta: "Automate Processes",
              },
            ].map((model, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{model.title}</CardTitle>
                  <div className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    {model.subtitle}
                  </div>
                  <CardDescription className="text-slate-300 text-lg">
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {model.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Why Clients Choose Me */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Clients Choose Me
              </h2>
              <p className="text-xl text-slate-600">
                Backend systems that businesses can depend on
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  "Backend-only focus (no frontend distractions)",
                  "Enterprise application experience",
                  "Clear communication with non-technical teams",
                  "Systems designed for growth, not demos",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  "Long-term thinking and planning",
                  "Production API deployment experience",
                  "Focus on security and scalability",
                  "Documentation and knowledge transfer",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ Strong Call To Action */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Need a backend you can trust?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Let&apos;s talk about your API, automation, or backend challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-slate-100 px-10 py-6 text-lg font-semibold"
              >
                Schedule a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg"
              >
                Email Me
              </Button>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-slate-400">
                Backend API & Automation Engineer • Available for new projects
                and consultations
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
