import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Server,
  Database,
  Cpu,
  Shield,
  Zap,
  GitBranch,
  Cloud,
  Terminal,
  Lock,
  BarChart,
} from "lucide-react";

export default function TechnologyStackPage() {
  const technologyCategories = [
    {
      title: "Backend Frameworks",
      description: "Proven frameworks for building reliable APIs and services",
      icon: <Server className="w-6 h-6" />,
      technologies: [
        {
          name: "Node.js",
          description:
            "JavaScript runtime for scalable server-side applications",
          useCase:
            "Real-time APIs, microservices, and high-concurrency systems",
        },
        {
          name: "Django & Django REST",
          description: "Python framework for rapid development of secure APIs",
          useCase:
            "Enterprise applications, data-intensive systems, and admin interfaces",
        },
        {
          name: "Express.js",
          description: "Minimalist Node.js framework for building RESTful APIs",
          useCase:
            "Lightweight APIs, middleware-heavy applications, and prototyping",
        },
      ],
    },
    {
      title: "Databases & Storage",
      description: "Relational and NoSQL databases for different data needs",
      icon: <Database className="w-6 h-6" />,
      technologies: [
        {
          name: "PostgreSQL",
          description: "Advanced open-source relational database",
          useCase: "Transactional systems, complex queries, and data integrity",
        },
        {
          name: "MySQL",
          description: "Popular relational database for web applications",
          useCase: "Web applications, content management, and e-commerce",
        },
        {
          name: "Redis",
          description: "In-memory data structure store for caching and queues",
          useCase:
            "Session storage, caching, real-time analytics, and job queues",
        },
      ],
    },
    {
      title: "Queue & Background Jobs",
      description: "Systems for handling asynchronous tasks and job processing",
      icon: <Cpu className="w-6 h-6" />,
      technologies: [
        {
          name: "Celery",
          description: "Distributed task queue for Python applications",
          useCase:
            "Background processing, scheduled tasks, and workflow automation",
        },
        {
          name: "BullMQ",
          description: "Redis-based queue for Node.js applications",
          useCase: "Job processing, delayed jobs, and priority queues",
        },
        {
          name: "RabbitMQ",
          description: "Message broker for reliable message delivery",
          useCase:
            "Service communication, event-driven architecture, and workflow orchestration",
        },
      ],
    },
    {
      title: "Security & Authentication",
      description: "Tools and practices for securing backend systems",
      icon: <Shield className="w-6 h-6" />,
      technologies: [
        {
          name: "JWT & OAuth",
          description: "Authentication and authorization standards",
          useCase:
            "User authentication, API security, and third-party integrations",
        },
        {
          name: "Helmet.js",
          description: "Security middleware for Express.js applications",
          useCase:
            "HTTP header security, XSS protection, and content security policies",
        },
        {
          name: "bcrypt/argon2",
          description: "Password hashing libraries",
          useCase: "Secure password storage and verification",
        },
      ],
    },
    {
      title: "DevOps & Deployment",
      description: "Infrastructure and deployment tools for production systems",
      icon: <Cloud className="w-6 h-6" />,
      technologies: [
        {
          name: "Docker & Docker Compose",
          description:
            "Containerization for consistent development and deployment",
          useCase:
            "Environment consistency, microservices, and scalable deployments",
        },
        {
          name: "AWS & Linux",
          description: "Cloud infrastructure and server management",
          useCase: "Production hosting, scaling, and infrastructure automation",
        },
        {
          name: "CI/CD Pipelines",
          description: "Automated testing and deployment workflows",
          useCase:
            "Quality assurance, automated deployments, and release management",
        },
      ],
    },
    {
      title: "Monitoring & Performance",
      description: "Tools for ensuring system reliability and performance",
      icon: <BarChart className="w-6 h-6" />,
      technologies: [
        {
          name: "Application Monitoring",
          description: "Real-time performance and error tracking",
          useCase:
            "Performance optimization, error detection, and uptime monitoring",
        },
        {
          name: "Logging & Analytics",
          description: "Structured logging and business intelligence",
          useCase: "Debugging, business insights, and system analytics",
        },
        {
          name: "Load Testing",
          description: "Performance testing under various loads",
          useCase:
            "Capacity planning, bottleneck identification, and scalability testing",
        },
      ],
    },
  ];

  const philosophyPrinciples = [
    {
      title: "Boring Technology",
      description:
        "Choose proven, stable technologies over trendy ones. Production systems should be reliable, not exciting.",
      icon: "🛠️",
    },
    {
      title: "Security First",
      description:
        "Build security into every layer of the application, from authentication to data validation and API security.",
      icon: "🔒",
    },
    {
      title: "Scalability by Design",
      description:
        "Design systems that can grow with your business, avoiding architectural limitations from the start.",
      icon: "📈",
    },
    {
      title: "Maintainability",
      description:
        "Write clean, documented code that other developers can understand and maintain.",
      icon: "🧹",
    },
    {
      title: "Automation",
      description:
        "Automate repetitive tasks to reduce human error and free up time for higher-value work.",
      icon: "⚡",
    },
    {
      title: "Monitoring & Observability",
      description:
        "Build systems that are observable, with proper logging, metrics, and alerting from day one.",
      icon: "👁️",
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
              Backend Technology Stack
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Proven tools and technologies for building reliable, scalable
              backend systems. I choose boring, reliable technology—because
              production systems should be boring.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm">Node.js & Django</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm">PostgreSQL & Redis</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm">Docker & AWS</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm">Security & Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologyCategories.map((category, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="text-blue-600">{category.icon}</div>
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {category.title}
                      </CardTitle>
                      <p className="text-sm text-slate-600 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="pb-4 border-b border-slate-100 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-slate-900">
                            {tech.name}
                          </h4>
                        </div>
                        <p className="text-slate-600 text-sm mb-2">
                          {tech.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-500">
                            {tech.useCase}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Backend Development Philosophy
              </h2>
              <p className="text-xl text-slate-600">
                Principles that guide every backend system I build
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {philosophyPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-4">{principle.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-slate-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Stack Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why This Technology Stack?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Proven in Production</h4>
                      <p className="text-slate-600">
                        Every technology has been battle-tested in real
                        production environments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Large Community Support</h4>
                      <p className="text-slate-600">
                        Extensive documentation, tutorials, and community
                        support available.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Easier Hiring & Maintenance
                      </h4>
                      <p className="text-slate-600">
                        Popular technologies mean easier team expansion and
                        knowledge transfer.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Cost-Effective</h4>
                      <p className="text-slate-600">
                        Open-source tools reduce licensing costs and vendor
                        lock-in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-semibold mb-6">
                  Technology Selection Criteria
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Security Maturity</h4>
                      <p className="text-slate-600 text-sm">
                        Tools with established security practices and regular
                        updates
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Performance at Scale</h4>
                      <p className="text-slate-600 text-sm">
                        Proven ability to handle growing loads without major
                        rewrites
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <GitBranch className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Maintenance Overhead</h4>
                      <p className="text-slate-600 text-sm">
                        Low operational complexity and easy troubleshooting
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cloud className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Cloud Compatibility</h4>
                      <p className="text-slate-600 text-sm">
                        Works well with modern cloud platforms and deployment
                        strategies
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Expert Backend Development?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Let&apos;s discuss how the right technology stack can solve your
              backend challenges and support your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Schedule Technology Consultation
              </a>
              <a
                href="mailto:hello@mrarchibong.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-white hover:bg-white/10 transition-colors"
              >
                Discuss Your Tech Stack
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
