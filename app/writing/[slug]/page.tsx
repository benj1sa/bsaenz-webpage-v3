import { Footer, Navigation } from "@/components/ui";
import { FormattedParagraph } from "@/components/ui/FormattedParagraph";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

const links = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all posts at build time
export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get other posts for "Continue Reading" section
  const continueReading = getAllPosts()
    .filter(p => p.slug !== post.slug)
    .map(p => ({
      title: p.title,
      date: p.date,
      slug: p.slug,
    }));

  return (
    <main className="flex justify-center flex-col">
      <div className="max-w-[700px] w-full mx-auto px-4 md:px-6">
        
        {/* Navigation */}
        <Navigation links={links} siteName="Benjamin Saenz" />

        {/* Header Section */}
        <section className="mb-8 mt-26">
          <div className="flex items-center justify-between mb-8">
            {/* Category and Date */}
            <div className="flex items-center gap-2">
              <p className="text-sm text-[#757575] font-(family-name:--font-inter)">
                {post.category}
              </p>
              <span className="inline-flex justify-center items-center text-[#757575] ml-2">
                <svg
                  width="26"
                  height="20"
                  fill="none"
                  viewBox="0 0 26 20"
                  aria-hidden="true"
                >
                  <path
                    d="M7 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 10h10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <p className="text-sm text-[#757575] font-(family-name:--font-inter)">
                {post.date}
              </p>
            </div>

            {/* Social Media Icons */}
            {post.socialLinks && (
              <div className="flex items-center gap-4">
                {post.socialLinks.substack && (
                  <a 
                    href={post.socialLinks.substack} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#757575] hover:text-gray-900 transition-colors duration-200"
                    aria-label="Read on Substack"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                    </svg>
                  </a>
                )}
                {post.socialLinks.linkedin && (
                  <a 
                    href={post.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#757575] hover:text-gray-900 transition-colors duration-200"
                    aria-label="Share on LinkedIn"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl text-gray-900 font-light tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro) mb-6">
            {post.title}
          </h1>

          {/* Intro Paragraph */}
          <p className="text-base text-[#333333] leading-relaxed font-(family-name:--font-inter) mb-8">
            {post.introParagraph}
          </p>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Cover Image */}
        <section className="mb-8">
          <div className="w-full aspect-video bg-gray-100 rounded overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Intro Paragraph After Image (if exists) */}
        {post.introParagraphAfterImage && (
          <section className="mb-16">
            <p className="text-base text-[#333333] leading-relaxed font-(family-name:--font-inter)">
              {post.introParagraphAfterImage}
            </p>
          </section>
        )}

        {/* Content Sections */}
        <section className="mb-16 space-y-12">
          {post.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              {/* Section Heading */}
              {section.heading && (
                <h2 className="text-3xl  text-gray-900 font-light italic tracking-[-0.02em] leading-[130%] font-(family-name:--font-crimson-pro)">
                  {section.heading}
                </h2>
              )}

              {/* Section Paragraphs */}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="text-base text-[#333333] leading-relaxed font-(family-name:--font-inter)">
                  <FormattedParagraph>{paragraph}</FormattedParagraph>
                </p>
              ))}

              {/* Quote Block */}
              {section.quote && (
                <div className="bg-[#f7f7f7] p-8 rounded my-6">
                  <p className="text-base text-gray-800 leading-relaxed font-light font-(family-name:--font-inter) mb-6">
                    "{section.quote.quoteText}"
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs uppercase tracking-wider font-medium text-[#757575] font-(family-name:--font-inter)">
                      {section.quote.authorName}
                    </p>
                    <span className="inline-flex justify-center items-center text-[#757575] ml-2">
                      <svg
                        width="26"
                        height="20"
                        fill="none"
                        viewBox="0 0 26 20"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 5l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 10h10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <p className="text-xs uppercase tracking-wider font-medium text-[#757575] font-(family-name:--font-inter)">
                      {section.quote.authorTitle}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Continue Reading Section */}
        {continueReading.length > 0 && (
          <section className="mb-16">
            <div className="text-xs uppercase tracking-wider text-[#757575] mb-6 font-medium font-(family-name:--font-inter)">
              Continue Reading
            </div>
            <div className="space-y-4">
              {continueReading.map((otherPost) => (
                <article key={otherPost.slug} className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 group cursor-pointer">
                  <Link href={`/writing/${otherPost.slug}`} className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between no-underline">
                    <p className="font-medium text-medium md:text-large text-gray-900 mb-1 md:mb-0 font-(family-name:--font-inter) transition-colors duration-200 group-hover:text-gray-600">
                      {otherPost.title}
                    </p>
                    <time className="text-sm text-[#757575] md:whitespace-nowrap font-(family-name:--font-inter) transition-colors duration-200 group-hover:text-gray-600">
                      {otherPost.date}
                    </time>
                  </Link>
                </article>
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
