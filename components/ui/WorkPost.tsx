import Link from 'next/link';

interface WorkPostProps {
  title: string;
  description: string;
  image: string;
}

// Helper function to convert title to slug (matching project slugs)
function titleToSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-');
}

export function WorkPost({ title, description, image }: WorkPostProps) {
  const slug = titleToSlug(title);
  
  return (
    <Link href={`/work/${slug}`}>
      <article className="group cursor-pointer mb-12">
        <div className="w-full aspect-video bg-gray-100 rounded overflow-hidden mb-4 transition duration-200 group-hover:opacity-70">
          <div className="w-full h-full bg-linear-to-br from-green-200 via-yellow-200 to-orange-200 flex items-center justify-center transition duration-200 group-hover:opacity-90">
            <span className="text-gray-600 font-(family-name:--font-inter) transition duration-200 group-hover:opacity-90">
              {title} illustration
            </span>
          </div>
        </div>
        <p className="text-md text-gray-900 font-(family-name:--font-inter) font-medium transition duration-200 group-hover:opacity-90">
          {title}
        </p>
        <p className="text-md text-[#757575] font-(family-name:--font-inter) transition duration-200 group-hover:opacity-90">
          {description}
        </p>
      </article>
    </Link>
  );
}
