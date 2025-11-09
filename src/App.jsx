import React from 'react';
import { motion } from 'framer-motion';
import coverImage from './assets/cover.png';
import logo from './assets/logo.JPG';

const services = [
  { title: 'Beginner Lessons', icon: '🚘', desc: 'Learn the basics safely and confidently with patient, certified instructors.' },
  { title: 'Advanced Driving', icon: '🧭', desc: 'Master defensive and city driving skills, hazard awareness and motorway confidence.' },
  { title: 'License Test Preparation', icon: '🪪', desc: 'Get ready to pass your test with mock exams and personalised feedback.' },
  { title: 'Refresher Courses', icon: '🚗', desc: 'Regain confidence behind the wheel with targeted refresher lessons.' }
];

export default function App() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* NAV */}
      <header className="fixed w-full z-40 backdrop-blur bg-white/60 border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src={logo} alt="DC Driving School Logo" className="w-full h-full object-cover scale-150" />
            </div>
            <div>
              <a href="#home" className="text-lg font-semibold">DC Driving School</a>
              <div className="text-xs text-slate-500">Driving made easy.</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-red-600">Services</a>
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">Book a Lesson</a>
          </div>

          <button className="md:hidden p-2 rounded-lg border">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <main className="pt-20">
  {/* HERO */}
  <section
    id="home"
    className="relative h-screen flex items-center"
    style={{
      backgroundImage: `url(${coverImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center 60%",
    }}
  >
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/40 -z-10" />

    <div className="max-w-6xl mx-auto px-6 py-28 lg:py-36 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          Learn to Drive with Confidence
        </h1>
        <p className="mt-6 text-lg text-white/90">
          Professional, patient, and practical driving lessons tailored for beginners and experienced drivers in Swindon, UK.
          Services include lessons for both manual and automatic cars.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-red-600 text-white px-5 py-3 rounded-lg shadow hover:bg-red-700"
          >
            Book a Lesson
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 border border-white/70 text-white px-5 py-3 rounded-lg hover:bg-white/10"
          >
            Our Services
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:flex justify-end"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl">
          <div className="text-sm text-slate-500">Start Learning Today</div>
          <h3 className="mt-2 font-semibold text-lg">Book a lesson</h3>
          <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full border border-slate-200 rounded-lg px-3 py-2"
              placeholder="Full name"
              aria-label="Full name"
            />
            <input
              className="w-full border border-slate-200 rounded-lg px-3 py-2"
              placeholder="Phone or email"
              aria-label="Phone or email"
            />
            <select
              className="w-full border border-slate-200 rounded-lg px-3 py-2"
              aria-label="Service"
            >
              <option>Beginner Lessons</option>
              <option>Advanced Driving</option>
              <option>License Test Preparation</option>
              <option>Refresher Courses</option>
            </select>
            <button className="w-full bg-red-600 text-white rounded-lg px-3 py-2">
              Request Booking
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  </section>


        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold">Services Offered</h2>
            <p className="mt-3 text-slate-600">Comprehensive lessons tailored to your level — from basics to advanced techniques.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <motion.div key={s.title} className="p-6 bg-white rounded-2xl shadow-md border border-slate-100" whileHover={{ scale: 1.03 }}>
                  <div className="text-3xl">{s.icon}</div>
                  <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  <div className="mt-4">
                    <a href="#contact" className="text-sm font-medium text-red-600 hover:underline">Get started →</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold">Get in touch</h2>
              <p className="mt-3 text-slate-600">Email us or call to book lessons. Prefer messages? Email: <a href="mailto:dcdrivertraining@gmail.com" className="text-red-600">dcdrivertraining@gmail.com</a></p>
              <div className="mt-8 flex gap-3">
                <a href="mailto:dcdrivertraining@gmail.com" className="px-4 py-2 rounded-lg border border-slate-200">Email Us</a>
              </div>
            </motion.div>

            <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-white p-6 rounded-2xl shadow-md border">
                <form onSubmit={(e) => { e.preventDefault(); alert('Thanks — we\'ll be in touch! (This form is demo-only)'); }} className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-600">Full name</label>
                    <input className="w-full border border-slate-200 rounded-lg px-3 py-2" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600">Email or phone</label>
                    <input className="w-full border border-slate-200 rounded-lg px-3 py-2" placeholder="you@email.com or 07xxx" required />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600">Service</label>
                    <select className="w-full border border-slate-200 rounded-lg px-3 py-2">
                      <option>Beginner Lessons</option>
                      <option>Advanced Driving</option>
                      <option>License Test Preparation</option>
                      <option>Refresher Courses</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600">Message</label>
                    <textarea className="w-full border border-slate-200 rounded-lg px-3 py-2" rows={4} placeholder="When would you like to start? Any notes for the instructor?" />
                  </div>
                  <div className="flex items-center justify-between">
                    <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg">Send message</button>
                    <div className="text-sm text-slate-500">We reply within 24 hours</div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img src={logo} alt="DC Driving School Logo" className="w-full h-full object-cover scale-150" />
            </div>
              <div>
                <div className="font-semibold">DC Driving School</div>
                <div className="text-sm text-slate-500">Swindon, UK · dcdrivertraining@gmail.com </div>
              </div>
            </div>
            <div className="text-sm text-slate-500">© {new Date().getFullYear()} DC Driving School. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
