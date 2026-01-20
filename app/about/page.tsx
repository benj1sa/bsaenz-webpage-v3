import { Footer, Navigation, WritingPost, WorkPost, SubscriptionBox } from "@/components/ui";

const links = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

const upToNow = [
  {
    title: 'UMD Loop Mars Rover Development',
    description: 'Developing autonomous navigation and stereo vision systems for a Mars rover competing in URC.',
  },
  {
    title: 'Aether Gravitational Lensing',
    description: 'Contributing to astrophysics simulations that model the universe\'s earliest star clusters and galaxies.',
  },
  {
    title: 'Private STEM & Programming Tutor',
    description: 'Providing personalized tutoring to high school students in programming and STEM subjects.',
  },
  {
    title: 'College Success Scholars Leadership',
    description: 'Leading student success initiatives as Executive Board Co-Chair to foster academic and professional growth.',
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
            Computer Engineering Student, Full-Stack Developer, Creator
          </h2>
          <p className="text-base text-gray-900 leading-relaxed font-(family-name:--font-inter) mb-10">
            A computer engineering student, full-stack developer, and creator that loves building things that impact lives.
          </p>
          <div className="mb-16 flex flex-row justify-between"> 
            <div className="flex flex-col">
              <div className="text-xs uppercase tracking-wider text-[#757575] mb-4 font-medium font-(family-name:--font-inter)">
              Specializations
              </div>
              <div className="font-(family-name:--font-inter) text-sm text-gray-900">
                <p>System Integration</p>
                <p>Robotics Software Development</p>
                <p>Computer Vision</p>
                <p>Full-Stack Web Development</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xs uppercase tracking-wider text-[#757575] mb-4 font-medium font-(family-name:--font-inter)">
              Achievements
              </div>
              <div className="font-(family-name:--font-inter) text-sm text-gray-900">
                <p>48% improvement in robotic propulsion optimization</p>
                <p>100% student satisfaction rate as STEM Tutor</p>
                <p>Presented research to 100+ attendees</p>
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