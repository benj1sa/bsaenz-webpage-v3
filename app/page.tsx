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

const archive = [
    {
        title: 'The Landscape of Online Livelihoods',
        date: 'February 29, 2024',
    },
    {
        title: "Birth of Today's Digital Ecosystem",
        date: 'March 1, 2024',
    },
    {
        title: 'The Dynamic Future of Online Engagement',
        date: 'March 2, 2024',
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
        <section className="mb-16 mt-26 space-y-6">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-8 font-light tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
            Welcome!
          </h1>
          
          <div>
            <h2 className="text-lg text-[#a6a6a6] italic mb-2 font-(family-name:--font-inter)">
              my present <span className="font-normal">//</span>
            </h2>
            <p className="text-base text-gray-800 leading-relaxed font-(family-name:--font-inter)">
              building products and <span className="italic bg-yellow-100 px-1 rounded-md">writing daily</span>.
            </p>
          </div>
          
          <div>
            <h2 className="text-lg text-[#a6a6a6] italic mb-2 font-(family-name:--font-inter)">
              my past <span className="font-normal">//</span>
            </h2>
            <p className="text-base text-gray-800 leading-relaxed font-(family-name:--font-inter)">
              scaled a <span className="italic bg-yellow-100 px-1 rounded-md">health tech startup</span> from $0 to $10m arr in 8 months, reformed provincial education policy on <span className="italic bg-yellow-100 px-1 rounded-md">tech requirements for 300,000+ students</span>, and summitted <span className="italic bg-yellow-100 px-1 rounded-md">mt. kilimanjaro</span>.
            </p>
          </div>
          
          <div>
            <h2 className="text-lg text-[#a6a6a6] italic mb-2 font-(family-name:--font-inter)">
              my future <span className="font-normal">//</span>
            </h2>
            <p className="text-base text-gray-800 leading-relaxed font-(family-name:--font-inter)">
              make a lot of <span className="italic bg-yellow-100 px-1 rounded-md">friends</span>, and help a lot more people. summiting mt. everest could also be cool. :)
            </p>
          </div>
        </section>
        
        <div className="border-t border-gray-200 my-8"></div>

        {/* Latest Post Section */}
        <section className="group cursor-pointer">
          <div className="text-xs font-medium uppercase tracking-wider text-[#757575] mb-3 font-(family-name:--font-inter) transition duration-200 group-hover:opacity-90">
            Latest Post
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
            <h3 className="text-2xl md:text-3xl italic font-light tracking-[-0.02em] leading-[130%] text-gray-900 mb-2 md:mb-0 font-(family-name:--font-crimson-pro) transition duration-200 group-hover:opacity-90">
              The Evolution of Online Media
            </h3>
            <time className="text-sm text-[#757575] md:whitespace-nowrap font-(family-name:--font-inter) transition duration-200 group-hover:opacity-90">
              2/20/24
            </time>
          </div>
          <div className="w-full aspect-video bg-gray-100 rounded overflow-hidden transition duration-200 group-hover:opacity-70 cursor-pointer">
            {/* Placeholder for the pixel art image */}
            <div className="w-full h-full bg-gradient-to-br from-orange-200 via-blue-200 to-green-200 flex items-center justify-center transition duration-200 group-hover:opacity-90 cursor-pointer">
              <span className="text-gray-600 font-(family-name:--font-inter) transition duration-200 group-hover:opacity-90 cursor-pointer">
                Image placeholder
              </span>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Recent Work Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-gray-900 mb-8 font-light italic tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
            Recent Work
          </h2>
          <div className="space-y-12">
            {recentWork.map((work) => (
              <article key={work.title} className="group cursor-pointer">
                <div className="w-full aspect-video bg-gray-100 rounded overflow-hidden mb-4">
                  <div className="w-full h-full bg-linear-to-br from-green-200 via-yellow-200 to-orange-200 flex items-center ihttps://imagecolorpicker.com/tems-center justify-center">
                    <span className="text-gray-600 font-(family-name:--font-inter)">
                      {work.title} illustration
                    </span>
                  </div>
                </div>
                <p className="text-md text-gray-900 font-(family-name:--font-inter) font-medium">
                  {work.title}
                </p>
                <p className="text-md text-[#757575] font-(family-name:--font-inter)">
                  {work.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Newsletter Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-gray-900 mb-8 font-light italic tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
            Newsletter
          </h2>
          <p className="text-base text-gray-900 leading-relaxed mb-6 font-(family-name:--font-inter)">
            Join 69,000 ambitious entrepreneurs in subscribing to my weekly newsletter, where I share actionable advice on how to become the best version of yourself and industry secrets to transform your life (and yo-yo tricks).
          </p>
          <form className="flex flex-col sm:flex-row gap-3 mb-3">
            <input
              type="email"
              placeholder="hello@email.com"
              className="flex-1 px-4 py-3 bg-[#f7f7f7] rounded focus:outline-none font-light text-gray-800 text-base font-(family-name:--font-inter)"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#333333] text-white rounded hover:cursor-pointer hover:bg-[#222222] transition-colors duration-200 font-(family-name:--font-crimson-pro)"
            >
              <span className="italic">Subscribe</span>
            </button>
          </form>
          {/* <p className="text-sm font-light italic font-(family-name:--font-crimson-pro) text-gray-500">
            Join 69,000 inspired readers for my weekly newsletter.
          </p> */}
        </section>

        {/* Archive Section */}
        <section className="mb-16">
          <div className="text-xs uppercase tracking-wider text-[#757575] mb-6 font-medium font-(family-name:--font-inter)">
            Archive
          </div>
          <div className="space-y-4">
            {archive.map((post) => (
                <article className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 group cursor-pointer">
                    <p className="font-medium text-medium md:text-large text-gray-900 mb-1 md:mb-0 font-(family-name:--font-inter) transition-colors duration-200 group-hover:text-gray-600">
                        {post.title}
                    </p>
                    <time className="text-sm text-[#757575] md:whitespace-nowrap font-(family-name:--font-inter) transition-colors duration-200 group-hover:text-gray-600">
                        {post.date}
                    </time>
                </article>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>
        
        <footer className="my-[50px]">
            <div className="text-sm text-gray-400">Benjamin Saenz &copy; {new Date().getFullYear()}</div>
        </footer>
      </div>
    </main>
  );   
}
