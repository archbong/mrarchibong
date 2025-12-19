import ContactForm from "@/components/contact/ContactForm";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import { Mail, Phone, Calendar, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Talk About Your Backend
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to discuss your API, automation, or backend challenges?
              Schedule a call or send me a message below.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <Calendar className="w-5 h-5" />
                <span>30-minute consultation</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <MessageSquare className="w-5 h-5" />
                <span>No technical jargon</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <Mail className="w-5 h-5" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send a Message</h2>
                <p className="text-slate-600">
                  Tell me about your backend challenges, automation needs, or
                  API requirements. I&apos;ll get back to you with practical
                  solutions.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Other Ways to Connect
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Schedule a Call
                      </h3>
                      <p className="text-slate-600 mb-3">
                        Book a 30-minute consultation to discuss your specific
                        backend needs.
                      </p>
                      <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View Calendar
                        <span>→</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Email Directly
                      </h3>
                      <p className="text-slate-600 mb-3">
                        For detailed inquiries or project specifications.
                      </p>
                      <a
                        href="mailto:hello@mrarchibong.com"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        hello@mrarchibong.com
                        <span>→</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-slate-600 mb-3">
                        Available for urgent backend issues or immediate
                        consultations.
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        +1 (234) 567-890
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-slate-700">
                      Response within 24 hours
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-slate-700">
                      No sales pitch - just technical discussion
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-slate-700">
                      Clear next steps and recommendations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-slate-700">
                      Confidentiality guaranteed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Many businesses struggle with similar backend challenges.
              Let&apos;s identify your specific pain points and create a plan to
              solve them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Free Consultation
              </a>
              <a
                href="mailto:hello@mrarchibong.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Send Quick Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
