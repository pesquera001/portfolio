import React from "react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Technical Solutions", path: "/solutions" },
  { name: "Blog", path: "/editorial" },
  { name: "Investment Theses", path: "/theses" },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-steel-gray text-white font-sans">
      <div className="bg-red-500 text-white text-center py-2">Layout is rendering</div>
      {/* Navigation */}
      <nav className="fixed z-50 top-0 left-0 right-0 bg-steel-gray/95 backdrop-blur-lg border-b border-metallic-silver/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Monogram */}
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-cobalt-blue flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                Aidan Pesquera
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-300 relative ${
                    location.pathname === item.path
                      ? "text-cobalt-blue"
                      : "text-metallic-silver hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center">
              <button className="bg-cobalt-blue hover:bg-cobalt-blue-alt text-white font-medium text-sm px-6 py-2 transition-colors">Contact</button>
            </div>
            {/* Mobile menu button (not implemented yet) */}
            <div className="md:hidden">
              <button className="text-metallic-silver hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Main content */}
      <main className="pt-24 bg-steel-gray min-h-[80vh]">{children}</main>
      {/* Footer */}
      <footer className="bg-light-steel-gray py-16 border-t border-metallic-silver/20 mt-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-cobalt-blue flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h3 className="text-xl font-normal text-white font-sans">Aidan Pesquera</h3>
              </div>
              <p className="text-metallic-silver text-sm leading-relaxed max-w-sm font-mono">
                Open to internships, fellowships, or mentorship.<br />
                <a href="/resume.pdf" className="underline text-cobalt-blue">View Resume</a>
              </p>
            </div>
            <div>
              <h4 className="font-normal mb-4 text-white font-sans">Contact</h4>
              <div className="space-y-2 font-mono">
                <a href="mailto:aidan.pesquera@email.com" className="block text-sm text-metallic-silver hover:text-cobalt-blue transition-colors">aidan.pesquera@email.com</a>
                <a href="https://linkedin.com/in/aidanpesquera" className="block text-sm text-metallic-silver hover:text-cobalt-blue transition-colors">LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 className="font-normal mb-4 text-white font-sans">Navigate</h4>
              <div className="space-y-2 font-mono">
                {navigationItems.map(item => (
                  <Link key={item.name} to={item.path} className="block text-sm text-metallic-silver hover:text-cobalt-blue transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-metallic-silver/20 mt-12 pt-8 text-center">
            <p className="text-xs text-metallic-silver font-mono">
              © 2024 Aidan Pesquera. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
