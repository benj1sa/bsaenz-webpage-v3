import { Footer, Navigation, WorkPost } from "@/components/ui";
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/data/projects";
import { notFound } from "next/navigation";

const links = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects at build time
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get other projects for "Discover More" section
  const discoverMore = projects
    .filter(p => p.slug !== project.slug)
    .slice(0, 2)
    .map(p => ({
      title: p.projectTitle,
      description: p.projectSubheading,
      image: p.projectCoverImage,
    }));

  return (
    <main className="flex justify-center flex-col">
      <div className="max-w-[700px] w-full mx-auto px-4 md:px-6">
        
        {/* Navigation */}
        <Navigation links={links} siteName="Benjamin Saenz" />

        {/* Header Section */}
        <section className="mb-16 mt-26 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl text-gray-900 font-light tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
              {project.projectTitle}
            </h1>
            <h2 className="text-4xl md:text-5xl text-[#a6a6a6] font-extralight italic tracking-[-0.07em] font-(family-name:--font-crimson-pro)">
              {project.projectSubheading}
            </h2>
          </div>
        </section>

        {/* Main Image */}
        <section className="mb-8">
          <div className="w-full aspect-video bg-gray-100 rounded overflow-hidden">
            <img 
              src={project.projectCoverImage} 
              alt={`${project.projectTitle} - ${project.projectSubheading}`}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Metadata */}
        <section className="my-12">
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#757575] font-(family-name:--font-inter)">
              {project.projectYear}
            </p>
            <span className="inline-flex justify-center items-center text-[#757575] ml-2">
              <svg
                width="26"
                height="20"
                fill="none"
                viewBox="0 0 26 20"
                aria-hidden="true"
              >
                {/* arrow body */}
                <path
                  d="M7 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* tail */}
                <path
                  d="M2 10h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <p className="text-sm text-[#757575] font-(family-name:--font-inter)">
              {project.projectDomain}
            </p>
          </div>
        </section>

        {/* Description Section */}
        <section className="mb-16">
          {project.projectParagraphs.map((paragraph, index) => (
            <p key={index} className="text-base text-[#333333] leading-relaxed font-(family-name:--font-inter) mb-6">
              {paragraph}
            </p>
          ))}
          {project.projectWebsite && (
            <div className="flex justify-left items-center group cursor-pointer">
              <a 
                href={project.projectWebsite} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base text-gray-800 underline font-(family-name:--font-inter) underline-offset-4 transition-colors duration-400 group-hover:text-[#999999]"
                style={{ textDecorationThickness: '0.5px', textUnderlineOffset: '5px' }}
              >
                Visit Website
              </a>
              <span className="inline-flex justify-center items-center text-gray-700 ml-2 transition-colors duration-400 group-hover:text-[#999999]">
                <svg
                  width="26"
                  height="20"
                  fill="none"
                  viewBox="0 0 26 20"
                  aria-hidden="true"
                  className="transition-transform duration-400"
                  style={{
                    // Move right and tighten the arrow on hover
                    transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  {/* arrow body, shorten when hovered */}
                  <path
                    d="M7 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-400 group-hover:translate-x-1"
                  />
                  {/* tail, lengthen when hovered */}
                  <path
                    d="M2 10h10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="transition-all duration-400 group-hover:translate-x-1"
                  />
                </svg>
              </span>
            </div>
          )}
        </section>

        {/* Testimonial Section */}
        {project.projectTestimonials.length > 0 && (
          <section className="mb-16">
            {project.projectTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#f7f7f7] p-8 rounded">
                <p className="text-base text-gray-800 leading-relaxed font-light font-(family-name:--font-crimson-pro) mb-6 italic">
                  {testimonial.testimonialText}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-xs uppercase tracking-wider font-medium text-[#757575] font-(family-name:--font-inter)">
                    {testimonial.testimonialName.toUpperCase()}
                  </p>
                  <span className="inline-flex justify-center items-center text-[#757575] ml-2">
                    <svg
                      width="26"
                      height="20"
                      fill="none"
                      viewBox="0 0 26 20"
                      aria-hidden="true"
                    >
                      {/* arrow body */}
                      <path
                        d="M7 5l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* tail */}
                      <path
                        d="M2 10h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <p className="text-xs uppercase tracking-wider font-medium text-[#757575] font-(family-name:--font-inter)">
                    {testimonial.testimonialOrganization.toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Demo Images Section */}
        {(project.projectMobileViewImage || project.projectDesktopViewImage) && (
          <section className="mb-16 space-y-12">
            {/* Smartphone Mockup */}
            {project.projectMobileViewImage && (
              <div className="flex justify-center">
                <div className="relative w-[280px]">
                  {/* Phone Frame */}
                  <div className="relative bg-gray-200 rounded-[2.5rem] p-2 shadow-lg">
                    {/* Screen */}
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      <img 
                        src={project.projectMobileViewImage} 
                        alt={`${project.projectTitle} mobile view`}
                        className="aspect-[9/19.5] w-full h-full object-cover"
                      />
                    </div>
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-200 rounded-b-full"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Desktop Monitor Mockup */}
            {project.projectDesktopViewImage && (
              <div className="flex justify-center">
                <div className="relative w-full max-w-[600px]">
                  {/* Monitor Frame */}
                  <div className="bg-gray-300 rounded-t-lg p-2 shadow-lg">
                    {/* Screen */}
                    <div className="bg-gray-900 rounded-t overflow-hidden">
                      <img 
                        src={project.projectDesktopViewImage} 
                        alt={`${project.projectTitle} desktop view`}
                        className="aspect-video w-full h-full object-cover"
                      />
                    </div>
                    {/* Stand */}
                    <div className="flex justify-center">
                      <div className="w-32 h-4 bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-48 h-2 bg-gray-400 rounded-b"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* General Image Placeholders */}
        {project.projectImages.length > 0 && (
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {project.projectImages.slice(0, 2).map((image, index) => (
                <div key={index} className="w-full aspect-video bg-gray-100 rounded overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${project.projectTitle} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {project.projectImages.length > 2 && (
              <div className="w-full aspect-video bg-gray-100 rounded overflow-hidden">
                <img 
                  src={project.projectImages[2]} 
                  alt={`${project.projectTitle} - Image 3`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </section>
        )}

        <div className="border-t border-gray-200 my-8"></div>

        {/* Discover More Section */}
        {discoverMore.length > 0 && (
          <section className="mb-16">
            <div className="text-xs uppercase tracking-wider text-[#757575] mb-6 font-medium font-(family-name:--font-inter)">
              Other Work
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {discoverMore.map((work) => (
                <WorkPost key={work.title} title={work.title} description={work.description} image={work.image} />
              ))}
            </div>
          </section>
        )}

        <div className="border-t border-gray-200 my-8"></div>
        
        <Footer name="Benjamin Saenz" />
      </div>
    </main>
  );
}
