import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Server,
  Database,
  Zap,
  Shield,
  ExternalLink,
  GitBranch,
} from "lucide-react";

export default function ProjectsPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Enterprise E-commerce API Platform",
      description:
        "Scalable REST API for multi-vendor marketplace handling 10,000+ daily transactions",
      challenge:
        "Legacy system couldn't handle peak traffic, causing checkout failures and data inconsistencies.",
      solution:
        "Built microservices architecture with Node.js, PostgreSQL, and Redis queue system for order processing.",
      results: [
        "99.9% API uptime during peak seasons",
        "Reduced checkout failures from 15% to 0.2%",
        "Scaled to handle 5x traffic without performance degradation",
      ],
      technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      category: "API Development",
      icon: <Server className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Automated Payment Processing System",
      description:
        "Backend automation for recurring payments and webhook handling",
      challenge:
        "Manual payment reconciliation wasting 20+ hours weekly and causing billing errors.",
      solution:
        "Automated payment pipeline with idempotent webhook processing and real-time reporting.",
      results: [
        "Eliminated manual reconciliation work",
        "Reduced billing errors by 98%",
        "Real-time payment status tracking",
      ],
      technologies: [
        "Node.js",
        "Stripe API",
        "BullMQ",
        "PostgreSQL",
        "Webhooks",
      ],
      category: "Backend Automation",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Healthcare Data Synchronization API",
      description:
        "Secure API for synchronizing patient data across multiple healthcare systems",
      challenge:
        "Fragmented patient data across different systems causing treatment delays and errors.",
      solution:
        "HIPAA-compliant API with real-time data synchronization and audit logging.",
      results: [
        "Real-time data sync across 5+ systems",
        "Full audit trail for compliance",
        "Reduced data entry errors by 95%",
      ],
      technologies: ["Django REST", "PostgreSQL", "Redis", "JWT", "Docker"],
      category: "Enterprise API",
      icon: <Database className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Inventory Management Backend",
      description: "Real-time inventory tracking and order fulfillment system",
      challenge:
        "Inventory discrepancies causing stockouts and overstock situations.",
      solution:
        "Real-time inventory API with webhook notifications and automated reordering.",
      results: [
        "Real-time inventory accuracy 99.8%",
        "Reduced stockouts by 85%",
        "Automated reorder notifications",
      ],
      technologies: [
        "Node.js",
        "WebSockets",
        "PostgreSQL",
        "Redis Pub/Sub",
        "AWS",
      ],
      category: "Real-time Systems",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Content Management API",
      description: "Headless CMS backend for multi-platform content delivery",
      challenge:
        "Content updates required manual changes across multiple platforms and formats.",
      solution:
        "Unified content API with versioning, scheduling, and multi-format delivery.",
      results: [
        "Single source of truth for all content",
        "Reduced content update time by 70%",
        "Automated multi-format delivery",
      ],
      technologies: ["Django REST", "PostgreSQL", "Redis Cache", "S3", "CDN"],
      category: "Content API",
      icon: <GitBranch className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "Analytics Data Pipeline",
      description:
        "ETL pipeline for processing and aggregating business analytics data",
      challenge:
        "Manual data processing causing delayed business insights and reporting errors.",
      solution:
        "Automated data pipeline with scheduled jobs, data validation, and dashboard updates.",
      results: [
        "Real-time analytics updates",
        "Eliminated manual data processing",
        "Improved data accuracy to 99.9%",
      ],
      technologies: [
        "Python",
        "PostgreSQL",
        "Celery",
        "Redis",
        "Data Validation",
      ],
      category: "Data Automation",
      icon: <Database className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Backend Case Studies
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Real backend systems solving real business problems. Each case
              study demonstrates how reliable APIs and automation drive business
              results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm">API Development</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm">Backend Automation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm">Enterprise Systems</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm">Data Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className="border-slate-200 hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <div className="text-blue-600">{study.icon}</div>
                      </div>
                      <div>
                        <div className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                          {study.category}
                        </div>
                        <CardTitle className="text-xl mt-2">
                          {study.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-lg text-slate-700">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      The Challenge
                    </h4>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      The Solution
                    </h4>
                    <p className="text-slate-600">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Results Delivered
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-green-600 text-sm">✓</span>
                          </div>
                          <span className="text-slate-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How I Approach Backend Projects
              </h2>
              <p className="text-xl text-slate-600">
                Every backend system starts with understanding the business
                problem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Problem Analysis</h3>
                <p className="text-slate-600">
                  Deep dive into business workflows to identify root causes and
                  automation opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Architecture Design
                </h3>
                <p className="text-slate-600">
                  Create scalable, maintainable system designs with clear
                  documentation and testing plans.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Implementation & Support
                </h3>
                <p className="text-slate-600">
                  Build with best practices, deploy to production, and provide
                  ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Have a Backend Challenge?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Let&apos;s discuss how backend systems can solve your business
              problems and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Discuss Your Project
              </a>
              <a
                href="mailto:hello@mrarchibong.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Send Case Study Request
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
