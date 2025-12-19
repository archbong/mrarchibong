import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import {
  Server,
  Shield,
  Zap,
  Cpu,
  Database,
  Users,
  Calendar,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Backend Focus, Business Impact
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              I build and maintain backend systems that businesses depend on for
              growth, automation, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium mb-4">
                Backend API & Automation Engineer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Samuel Archibong
              </h2>
              <div className="space-y-4 text-slate-700">
                <p className="text-lg">
                  I specialize in designing, building, and maintaining backend
                  systems for businesses that need reliable APIs, automation,
                  and scalable infrastructure.
                </p>
                <p className="text-lg">
                  My focus is on creating systems that work consistently, scale
                  predictably, and require minimal maintenance—so your team can
                  focus on business growth instead of technical issues.
                </p>
                <p className="text-lg">
                  I work exclusively on backend systems because that&apos;s
                  where businesses face their most critical technical challenges
                  and where my expertise delivers the most value.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold mb-6">
                Backend Philosophy
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Reliability First</h4>
                    <p className="text-slate-600">
                      Production systems should be boringly reliable. No
                      surprises, just consistent performance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Automation Focus</h4>
                    <p className="text-slate-600">
                      Automate repetitive tasks to free up your team for
                      higher-value work.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Scalable Architecture
                    </h4>
                    <p className="text-slate-600">
                      Design systems that grow with your business, not systems
                      that hold you back.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience & Approach
              </h2>
              <p className="text-xl text-slate-600">
                How I work with businesses to solve backend challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Business-First Mindset
                  </h3>
                </div>
                <p className="text-slate-700">
                  I start by understanding your business workflows, not just
                  your technical requirements. This ensures the backend systems
                  I build actually solve business problems and create value.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Production Experience
                  </h3>
                </div>
                <p className="text-slate-700">
                  I&apos;ve built and maintained systems used by real teams in
                  production environments. This experience informs every
                  decision I make about architecture, security, and reliability.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Server className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Backend-Only Focus</h3>
                </div>
                <p className="text-slate-700">
                  By specializing exclusively in backend systems, I develop deep
                  expertise in APIs, databases, automation, and
                  infrastructure—exactly what businesses need for reliable
                  operations.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Long-Term Partnership
                  </h3>
                </div>
                <p className="text-slate-700">
                  I prefer working with clients who see backend systems as
                  long-term investments. This allows for proper planning,
                  maintenance, and continuous improvement.
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
              Ready to Build a Reliable Backend?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Let&apos;s discuss how backend systems can support your business
              growth and automation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule a Consultation
              </a>
              <a
                href="mailto:hello@mrarchibong.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
