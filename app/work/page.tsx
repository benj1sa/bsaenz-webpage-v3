import { Footer, Navigation, WorkPost } from "@/components/ui";
import { projects } from "@/data/projects";

const links = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

const workProjects = projects.map(project => ({
  title: project.projectTitle,
  description: project.projectSubheading,
  image: project.projectCoverImage,
  slug: project.slug,
}));

export default function Work() {
  return (
    <main className="flex justify-center flex-col">
      <div className="max-w-[700px] w-full mx-auto px-4 md:px-6">
        
        {/* Navigation */}
        <Navigation links={links} siteName="Benjamin Saenz" />

        {/* Header Section */}
        <section className="mb-16 mt-26 space-y-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl text-gray-900 font-light tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
              Client work
            </h1>
            <h2 className="text-4xl md:text-5xl text-[#a6a6a6] font-extralight italic tracking-[-0.07em] font-(family-name:--font-crimson-pro)">
              Expert Generalist
            </h2>
          </div>
          <p className="text-base text-gray-800 leading-relaxed font-(family-name:--font-inter)">
            My work spans robotics, computer vision, and full-stack development. I focus on building systems that integrate seamlessly, from autonomous Mars rovers to astrophysics simulations. This portfolio showcases projects where technical precision meets innovative problem-solving.
          </p>
        </section>

        {/* Work Projects Section */}
        <section className="mb-16">
          <div className="space-y-12">
            {workProjects.map((work) => (
              <WorkPost key={work.title} title={work.title} description={work.description} image={work.image} slug={work.slug} />
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>
        
        <Footer name="Benjamin Saenz" />
      </div>
    </main>
  );
}