import { Footer, Navigation, WritingPost, WorkPost, SubscriptionBox } from "@/components/ui";

const links = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

const upToNow = [
  {
    title: 'Moving my site to Framer',
    description: 'Found a template I love the look of, and decided to make the move.',
  },
  {
    title: "Writing my next book",
    description: '"Supernova Spirituality" is the title as of now, coming soon.',
  },
  {
    title: 'Baking sourdough bread',
    description: 'My pandemic lockdown-hobby, turned lifelong passion.',
  },
  {
    title: 'Learning to speak Mandarin',
    description: '6,295 daily, easy-to-digest lessons — on track to be fluent by 2032.',
  },
  {
    title: 'Working with Radiant Superfoods',
    description: 'Get 12% off your order of Super Pumpkin Pretzels, with code "OPAQUE".',
  },
]
export default function About() {
  return (
    <main className="flex justify-center flex-col">
      <div className="max-w-[700px] w-full mx-auto px-4 md:px-6">
        
        {/* Navigation */}
        <Navigation links={links} siteName="Benjamin Saenz" />

        {/* About Section */}
        <section className="flex flex-row items-center justify-between mb-16 mt-26 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl text-gray-900 font-light tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
                About
            </h1>
            <h2 className="text-4xl md:text-5xl text-[#a6a6a6] font-extralight italic tracking-[-0.07em] font-(family-name:--font-crimson-pro)">
                Benjamin Saenz
            </h2>
          </div>
        <div className="relative w-25 h-25 shrink-0">
          {/* Faded grey circle background */}
          <div className="absolute inset-0 rounded-full bg-gray-900" />
          {/* Profile image on top */}
          <img
            src="/profile-2.png"
            alt="Benjamin Saenz profile"
            className="relative w-25 h-25 rounded-full object-cover filter grayscale"
          />
        </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Description Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-gray-900 mb-8 font-light italic tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
            Software Engineer, Student
          </h2>
          <p className="text-base text-gray-900 leading-relaxed font-(family-name:--font-inter) mb-10">
            Join 69,000 ambitious entrepreneurs in subscribing to my weekly newsletter, where I share actionable advice on how to become the best version of yourself and industry secrets to transform your life (and yo-yo tricks).
          </p>
          <div className="mb-16 space-y- flex flex-row justify-left gap-64"> 
            <div>
              <div className="text-xs uppercase tracking-wider text-[#757575] mb-4 font-medium font-(family-name:--font-inter)">
              Features
              </div>
              <div className="flex flex-col font-(family-name:--font-inter) text-sm text-gray-900">
                <p>Feature 1</p>
                <p>Feature 2</p>
                <p>Feature 3</p>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#757575] mb-4 font-medium font-(family-name:--font-inter)">
              Awards
              </div>
              <div className="flex flex-col font-(family-name:--font-inter) text-sm text-gray-900">
                <p>Award 1</p>
                <p>Award 2</p>
                <p>Award 3</p>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* What I'm up to now Section */}
        <section className="mb-16">
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-12 font-light italic tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
            Here's what I'm up to now.
            </h2>
            <div className="space-y-6">
              {upToNow.map((upToNow) => (
                <div key={upToNow.title}>
                  <h3 className="font-medium text-gray-900 mb-1 font-(family-name:--font-inter)">
                    {upToNow.title}
                  </h3>
                  <p className="text-base text-[#757575] leading-relaxed font-(family-name:--font-inter)">
                    {upToNow.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>
        
        <Footer name="Benjamin Saenz" />
      </div>
    </main>
  );
}