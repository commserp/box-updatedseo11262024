import React, { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { GlitchText } from '../components/GlitchText';
import { Button } from '../components/Button';
import { Navbar } from '../components/Navbar';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<{ sending?: string; success?: string; error?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({sending: 'Sending...'});

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const result = await emailjs.send(
        'service_vuhsu3r',
        'template_iqkchrc',
        templateParams,
        'bbDmJUhj7yesRJeMJ'
      );
      console.log(result.text);
      setStatus({ success: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Contact Us | Black Box Analytix</title>
        <meta
          name="description"
          content="Get in touch with Black Box Analytix for inquiries about cybersecurity solutions, compliance frameworks, and advanced AI-driven technologies."
        />
        <meta
          name="keywords"
          content="Contact Black Box Analytix, Cybersecurity Services, Compliance Frameworks, AI Technologies, Risk Mitigation, Threat Detection, Regulatory Solutions"
        />
        <meta name="author" content="Black Box Analytix" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="relative py-24 bg-black">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent top-0"></div>
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent bottom-0"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <GlitchText text="Contact Us" className="mb-4" />
              <h2 className="text-2xl text-red-600 mb-8">We're Here to Help</h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Have questions or need more information? Fill out the form
                below, and our team will get back to you promptly.
              </p>
            </div>

            <div className="bg-black/50 p-8 rounded-lg border border-white/10 shadow-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/80 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/20 text-white rounded-lg border border-white/10 focus:ring-2 focus:ring-red-600 focus:outline-none"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/80 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/20 text-white rounded-lg border border-white/10 focus:ring-2 focus:ring-red-600 focus:outline-none"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/20 text-white rounded-lg border border-white/10 focus:ring-2 focus:ring-red-600 focus:outline-none"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-black/20 text-white rounded-lg border border-white/10 focus:ring-2 focus:ring-red-600 focus:outline-none"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                {status.success && (<div className="text-green-500 text-center">{status.success}</div>)}
                {status.sending && (<div className="text-red-500 text-center">{status.sending}</div>)}
                {status.error && (<div className="text-red-500 text-center">{status.error}</div>)}

                <div className="text-center">
                  <Button type="submit" className="px-6 py-3">
                    Send Message
                    <span className="ml-2">→</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}