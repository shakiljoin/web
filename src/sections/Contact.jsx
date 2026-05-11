import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import GlassCard from '../components/GlassCard'
import { Mail, MapPin, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/shakiljoin' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shakilahamedweb/' },
  { icon: Mail, label: 'Email', href: 'mailto:shakil.joinup@gmail.com' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const iconSize = 18

  return (
    <SectionReveal>
      <section id="contact" className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[1400px]">
          <div className="text-center mb-12 md:mb-16">
            <span className="heading-label mb-6 inline-flex">Contact</span>
            <h2 className="heading-section mt-4 text-[#111111]">
              Let's work together
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <GlassCard className="p-6 md:p-10">
                <h3 className="text-lg font-bold text-[#111111] mb-2">Get in touch</h3>
                <p className="text-sm text-[#666666] mb-8">
                  Have a project in mind? Let's create something amazing together.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/5 border border-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#999999] font-medium uppercase tracking-wider">Email</p>
                      <a href="mailto:hello@shakil.dev" className="text-sm text-[#111111] hover:text-[#2563EB] transition-colors font-medium">
                        shakil.joinup@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/5 border border-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#999999] font-medium uppercase tracking-wider">Location</p>
                      <p className="text-sm text-[#111111] font-medium">Chennai, India</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-[#666666] font-medium">Available for freelance work</span>
                </div>

                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="w-10 h-10 rounded-xl border border-[#E5E7EB] flex items-center justify-center text-[#666666] hover:border-[#2563EB]/30 hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300"
                      aria-label={link.label}
                    >
                      <link.icon size={iconSize} />
                    </a>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              <GlassCard className="p-6 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  {[
                    { label: 'Your Name', name: 'name', type: 'text', required: true },
                    { label: 'Your Email', name: 'email', type: 'email', required: true },
                  ].map((field) => (
                    <div key={field.name} className="relative">
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused(null)}
                        required={field.required}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#F9FAFB] border text-sm text-[#111111] outline-none transition-all duration-300 ${
                          focused === field.name
                            ? 'border-[#2563EB] ring-2 ring-[#2563EB]/10'
                            : 'border-[#E5E7EB] hover:border-[#2563EB]/30'
                        }`}
                      />
                      <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none text-sm ${
                          formData[field.name] || focused === field.name
                            ? '-top-2.5 text-[10px] bg-white px-1 text-[#2563EB]'
                            : 'top-3.5 text-[#999999]'
                        }`}
                      >
                        {field.label}
                      </label>
                    </div>
                  ))}

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows={4}
                      required
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#F9FAFB] border text-sm text-[#111111] outline-none resize-none transition-all duration-300 ${
                        focused === 'message'
                          ? 'border-[#2563EB] ring-2 ring-[#2563EB]/10'
                          : 'border-[#E5E7EB] hover:border-[#2563EB]/30'
                      }`}
                    />
                    <label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none text-sm ${
                        formData.message || focused === 'message'
                          ? '-top-2.5 text-[10px] bg-white px-1 text-[#2563EB]'
                          : 'top-3.5 text-[#999999]'
                      }`}
                    >
                      Your Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111111] text-white text-sm font-medium hover:bg-[#2563EB] transition-all duration-300"
                  >
                    Send Message
                    <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
