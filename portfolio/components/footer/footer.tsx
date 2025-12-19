import Link from "next/link";
import { Server, Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Server className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">Mr Archibong</span>
            </div>
            <p className="text-slate-400 text-sm">
              Backend API & Automation Engineer specializing in scalable,
              reliable systems for growing businesses.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@mrarchibong.com"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                  prefetch={false}
                >
                  API Design & Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                  prefetch={false}
                >
                  Backend Automation
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                  prefetch={false}
                >
                  Enterprise Applications
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                  prefetch={false}
                >
                  API Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                  prefetch={false}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="hover:text-white transition-colors"
                  prefetch={false}
                >
                  How I Work
                </Link>
              </li>
              <li>
                <Link
                  href="#technology"
                  className="hover:text-white transition-colors"
                  prefetch={false}
                >
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-white transition-colors"
                  prefetch={false}
                >
                  Engagement Models
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                  prefetch={false}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@mrarchibong.com"
                  className="hover:text-white transition-colors"
                >
                  hello@mrarchibong.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Server className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Backend API & Automation Engineer</span>
              </li>
              <li className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  prefetch={false}
                >
                  Schedule a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} Mr Archibong. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link
                href="/privacy"
                className="hover:text-slate-400 transition-colors"
                prefetch={false}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-slate-400 transition-colors"
                prefetch={false}
              >
                Terms of Service
              </Link>
              <span className="text-slate-600">•</span>
              <span>Built for businesses that scale</span>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <p className="text-xs text-slate-600">
              Focused on backend systems that businesses depend on.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
