import { Link } from 'react-router-dom';
import { GlitchText } from '../components/GlitchText';
import { AlertTriangle, ArrowLeft, Home, Search } from 'lucide-react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function ErrorPageNotFound() {
  const errorItems = [
    {
      icon: AlertTriangle,
      title: 'Page Not Found',
      description: 'The requested page could not be located on our servers.',
    },
    {
      icon: Search,
      title: 'Lost in Cyberspace',
      description: 'The URL you entered might be incorrect or outdated.',
    },
    {
      icon: Home,
      title: 'Return to Safety',
      description: 'Navigate back to our homepage for secure content access.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>404 - Page Not Found | Black Box Analytix</title>
        <meta
          name="description"
          content="The page you're looking for cannot be found. Navigate back to safety with Black Box Analytix."
        />
      </Helmet>
      <main className="pt-16">
        <section className="relative py-24 bg-black">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent top-0"></div>
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent bottom-0"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <GlitchText text="404" className="mb-4 text-6xl" />
              <h2 className="text-2xl text-red-600 mb-8">Page Not Found</h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                We apologize, but the page you're looking for seems to have
                vanished into the digital void. Don't worry, our cybersecurity
                experts are on the case to ensure your safe return to familiar
                territory.
              </p>
            </div>

            {/* Error Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {errorItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative p-6 bg-black/50 rounded-lg border border-white/10 hover:border-red-600/50 transition-all duration-300">
                    <item.icon className="w-12 h-12 text-red-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-lg text-white/80 mb-8">
                Let's get you back to safety. Choose your secure route:
              </p>
              <div className="flex justify-center space-x-4">
                <Link to="/" className="button-link">
                  <Button>
                    <Home className="mr-2 h-4 w-4" />
                    Return Home
                  </Button>
                </Link>
                <Button onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
