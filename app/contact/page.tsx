import { Footer, Navigation } from "@/components/ui";

const links = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Contact() {
  return (
    <main className="flex justify-center flex-col">
      <div className="max-w-[700px] w-full mx-auto px-4 md:px-6">
        
        {/* Navigation */}
        <Navigation links={links} siteName="Benjamin Saenz" />

        {/* Contact Section */}
        <section className="mb-16 mt-26 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl text-gray-900 font-light tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
              Contact
            </h1>
            <h2 className="text-4xl md:text-5xl text-[#a6a6a6] font-extralight italic tracking-[-0.07em] font-(family-name:--font-crimson-pro)">
              Don't be a stranger!
            </h2>
          </div>
          <p className="text-base text-gray-900 leading-relaxed font-(family-name:--font-inter)">
            I'm taking on new work beginning in Fall 2029. Please reach out with as many details as you can and my assistant, Lulu Lemon, will get back to you shortly.
          </p>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <form className="flex flex-col gap-4">
            {/* Two-column layout for Name and Business Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-900 mb-2 font-(family-name:--font-inter)">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 bg-[#f7f7f7] rounded focus:outline-none font-light text-gray-800 text-base font-(family-name:--font-inter)"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-900 mb-2 font-(family-name:--font-inter)">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full px-4 py-3 bg-[#f7f7f7] rounded focus:outline-none font-light text-gray-800 text-base font-(family-name:--font-inter)"
                />
              </div>
            </div>

            {/* Two-column layout for Email and Topic */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-900 mb-2 font-(family-name:--font-inter)">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@email.com"
                  className="w-full px-4 py-3 bg-[#f7f7f7] rounded focus:outline-none font-light text-gray-800 text-base font-(family-name:--font-inter)"
                />
              </div>
              <div className="flex-1 relative">
                <label className="block text-sm text-gray-900 mb-2 font-(family-name:--font-inter)">
                  Topic
                </label>
                <select
                  className="w-full px-4 py-3 bg-[#f7f7f7] rounded focus:outline-none font-light text-gray-800 text-base font-(family-name:--font-inter) appearance-none cursor-pointer pr-10"
                  style={{ color: '#757575' }}
                  defaultValue=""
                >
                  <option value="" disabled style={{ color: '#a6a6a6' }}>
                    Select topic
                  </option>
                  <option value="work" style={{ color: '#222' }}>Work</option>
                  <option value="collaboration" style={{ color: '#222' }}>Collaboration</option>
                  <option value="other" style={{ color: '#222' }}>Other</option>
                </select>
              </div>
            </div>

            {/* Message textarea */}
            <div>
              <label className="block text-sm text-gray-900 mb-2 font-(family-name:--font-inter)">
                Message
              </label>
              <textarea
                placeholder="Start typing here..."
                rows={6}
                className="w-full px-4 py-3 bg-[#f7f7f7] rounded focus:outline-none font-light text-gray-800 text-base font-(family-name:--font-inter) resize-y"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#333333] text-white rounded hover:cursor-pointer hover:bg-[#222222] transition-colors duration-200 font-(family-name:--font-crimson-pro)"
            >
              <span className="italic">Send Message</span>
            </button>
          </form>
        </section>

        <div className="border-t border-gray-200 my-8"></div>
        
        <Footer name="Benjamin Saenz" />
      </div>
    </main>
  );
}