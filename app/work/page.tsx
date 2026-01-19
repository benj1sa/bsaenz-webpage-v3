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
            My work stands at the crossroad of design and utility: A testament to the harmonious blend of form and function. From intricate design methodology, to breakthrough technological developments, I strive to embody a philosophy where simplicity and innovation converge. This portfolio represents more than a collection of work; it's a mosaic of visionary thought made tangible.
          </p>
        </section>

        {/* Work Projects Section */}
        <section className="mb-16">
          <div className="space-y-12">
            {workProjects.map((work) => (
              <WorkPost key={work.title} title={work.title} description={work.description} image={work.image} />
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>
        
        <Footer name="Benjamin Saenz" />
      </div>
    </main>
  );
}