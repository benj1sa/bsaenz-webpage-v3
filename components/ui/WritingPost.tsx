interface WritingPostProps {
  title: string;
  date: string;
  image?: string;
}

export function WritingPost({ title, date, image }: WritingPostProps) {
  return (
    <section className="group cursor-pointer">
      <div className="text-xs font-medium uppercase tracking-wider text-[#757575] mb-3 font-(family-name:--font-inter) transition duration-200 group-hover:opacity-90">
        Latest Post
      </div>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
        <h3 className="text-2xl md:text-3xl italic font-light tracking-[-0.02em] leading-[130%] text-gray-900 mb-2 md:mb-0 font-(family-name:--font-crimson-pro) transition duration-200 group-hover:opacity-90">
          {title}
        </h3>
        <time className="text-sm text-[#757575] md:whitespace-nowrap font-(family-name:--font-inter) transition duration-200 group-hover:opacity-90">
          {date}
        </time>
      </div>
      <div className="w-full aspect-video bg-gray-100 rounded overflow-hidden transition duration-200 group-hover:opacity-70 cursor-pointer">
        {image ? (
          <div className="w-full h-full bg-gradient-to-br from-orange-200 via-blue-200 to-green-200 flex items-center justify-center transition duration-200 group-hover:opacity-90 cursor-pointer">
            <span className="text-gray-600 font-(family-name:--font-inter) transition duration-200 group-hover:opacity-90 cursor-pointer">
              Image placeholder
            </span>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-200 via-blue-200 to-green-200 flex items-center justify-center transition duration-200 group-hover:opacity-90 cursor-pointer">
            <span className="text-gray-600 font-(family-name:--font-inter) transition duration-200 group-hover:opacity-90 cursor-pointer">
              Image placeholder
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
