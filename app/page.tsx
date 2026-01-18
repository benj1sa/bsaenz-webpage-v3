import { Navigation } from "@/components/navigation/Navigation";
import Image from "next/image";

const links = [
    { href: '/about', label: 'About' },
    { href: '/writing', label: 'Writing' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
]

const recentWork = [
  {
    title: 'Radiant Superfoods',
    description: 'Next-generation health',
    image: '/images/radiant-superfoods.jpg',
  },
  {
    title: 'Lux Portals',
    description: 'Instantaneous travel',
    image: '/images/lux-portals.jpg',
  },
]

export default function Home() {
  return (
    <main className="flex justify-center flex-col">
      <div className="max-w-[800px] w-full mx-auto px-4 md:px-6">
        {/* Navigation */}
        <section className="flex justify-between items-center my-[50px]">
            <div className="font-medium text-lg">
                <a href="/">Benjamin Saenz</a>
            </div>
            <div className="flex gap-9">
                {links.map((link) => (
                    <a 
                        key={link.href} 
                        href={link.href}
                        className="text-lg relative opacity-80 hover:opacity-100 transition-opacity duration-300 after:content-[''] after:block after:h-px after:bg-black after:mt-1 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </section>

        {/* Welcome Section */}
        <section className="mb-16 mt-16 space-y-6">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-8 font-(family-name:--font-crimson-pro)">
            Welcome!
          </h1>
          
          <div>
            <h2 className="text-lg md:text-xl text-gray-900 italic mb-2 font-(family-name:--font-inter)">
              my present <span className="font-normal">//</span>
            </h2>
            <p className="text-base md:text-lg text-gray-900 leading-relaxed font-(family-name:--font-inter)">
              building products and <span className="italic bg-yellow-200 px-1">writing daily</span>.
            </p>
          </div>
          
          <div>
            <h2 className="text-lg md:text-xl text-gray-900 italic mb-2 font-(family-name:--font-inter)">
              my past <span className="font-normal">//</span>
            </h2>
            <p className="text-base md:text-lg text-gray-900 leading-relaxed font-(family-name:--font-inter)">
              scaled a <span className="italic bg-yellow-200 px-1">health tech startup</span> from $0 to $10m arr in 8 months, reformed provincial education policy on <span className="italic bg-yellow-200 px-1">tech requirements for 300,000+ students</span>, and summitted <span className="italic bg-yellow-200 px-1">mt. kilimanjaro</span>.
            </p>
          </div>
          
          <div>
            <h2 className="text-lg md:text-xl text-gray-900 italic mb-2 font-(family-name:--font-inter)">
              my future <span className="font-normal">//</span>
            </h2>
            <p className="text-base md:text-lg text-gray-900 leading-relaxed font-(family-name:--font-inter)">
              make a lot of <span className="italic bg-yellow-200 px-1">friends</span>, and help a lot more people. summiting mt. everest could also be cool. :)
            </p>
          </div>
        </section>
        
        <div className="border-t border-gray-200 my-8"></div>

        {/* Latest Post Section */}
        <section>
          <div className="text-xs uppercase tracking-wider text-gray-900 mb-3 font-(family-name:--font-inter)">
            Latest Post
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
            <h3 className="text-2xl md:text-3xl italic text-gray-900 mb-2 md:mb-0 font-(family-name:--font-crimson-pro)">
              The Evolution of Online Media
            </h3>
            <time className="text-sm text-gray-900 md:whitespace-nowrap font-(family-name:--font-inter)">
              2/20/24
            </time>
          </div>
          <div className="w-full aspect-video bg-gray-100 rounded overflow-hidden">
            {/* Placeholder for the pixel art image */}
            <div className="w-full h-full bg-gradient-to-br from-orange-200 via-blue-200 to-green-200 flex items-center justify-center">
              <span className="text-gray-600 font-(family-name:--font-inter)">
                Image placeholder
              </span>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Recent Work Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-gray-900 mb-8 italic font-(family-name:--font-crimson-pro)">
            Recent Work
          </h2>
          <div className="space-y-12">
            {recentWork.map((work) => (
              <article key={work.title}>
                <div className="w-full aspect-video bg-gray-100 rounded overflow-hidden mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-green-200 via-yellow-200 to-orange-200 flex items-center justify-center">
                    <span className="text-gray-600 font-(family-name:--font-inter)">
                      {work.title} illustration
                    </span>
                  </div>
                </div>
                <p className="text-xl md:text-xl text-gray-900 mb-2 font-(family-name:--font-inter) font-medium">
                  {work.title}
                </p>
                <p className="text-base md:text-lg text-gray-600 font-(family-name:--font-inter)">
                  {work.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Newsletter Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-gray-900 mb-4 italic font-(family-name:--font-crimson-pro)">
            Newsletter
          </h2>
          <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-6 font-(family-name:--font-inter)">
            Join 69,000 ambitious entrepreneurs in subscribing to my weekly newsletter, where I share actionable advice on how to become the best version of yourself and industry secrets to transform your life (and yo-yo tricks).
          </p>
          <form className="flex flex-col sm:flex-row gap-3 mb-3">
            <input
              type="email"
              placeholder="hello@email.com"
              className="flex-1 px-4 py-3 bg-gray-100 border border-gray-100 rounded focus:outline-none font-(family-name:--font-inter)"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-200 font-(family-name:--font-crimson-pro)"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm italic text-gray-600 font-(family-name:--font-inter)">
            Join 69,000 inspired readers for my weekly newsletter.
          </p>
        </section>

        {/* Archive Section */}
        <section className="mb-16">
          <div className="text-xs uppercase tracking-wider text-gray-900 mb-6 font-(family-name:--font-inter)">
            Archive
          </div>
          <div className="space-y-4">
            <article className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4">
              <h3 className="text-lg md:text-xl text-gray-900 mb-1 md:mb-0 font-(family-name:--font-inter)">
                The Landscape of Online Livelihoods
              </h3>
              <time className="text-sm text-gray-900 md:whitespace-nowrap font-(family-name:--font-inter)">
                February 29, 2024
              </time>
            </article>
            <article className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4">
              <h3 className="text-lg md:text-xl text-gray-900 mb-1 md:mb-0 font-(family-name:--font-inter)">
                Birth of Today&apos;s Digital Ecosystem
              </h3>
              <time className="text-sm text-gray-900 md:whitespace-nowrap font-(family-name:--font-inter)">
                March 1, 2024
              </time>
            </article>
            <article className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4">
              <h3 className="text-lg md:text-xl text-gray-900 mb-1 md:mb-0 font-(family-name:--font-inter)">
                The Dynamic Future of Online Engagement
              </h3>
              <time className="text-sm text-gray-900 md:whitespace-nowrap font-(family-name:--font-inter)">
                March 2, 2024
              </time>
            </article>
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>
        
        <footer className="my-[50px]">
            <div className="text-sm text-gray-500">Benjamin Saenz &copy; {new Date().getFullYear()}</div>
        </footer>
      </div>
    </main>
  );   
}
