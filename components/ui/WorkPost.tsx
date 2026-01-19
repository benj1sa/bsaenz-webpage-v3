interface WorkPostProps {
  title: string;
  description: string;
  image: string;
}

export function WorkPost({ title, description, image }: WorkPostProps) {
  return (
    <article className="group cursor-pointer">
      <div className="w-full aspect-video bg-gray-100 rounded overflow-hidden mb-4">
        <div className="w-full h-full bg-linear-to-br from-green-200 via-yellow-200 to-orange-200 flex items-center justify-center">
          <span className="text-gray-600 font-(family-name:--font-inter)">
            {title} illustration
          </span>
        </div>
      </div>
      <p className="text-md text-gray-900 font-(family-name:--font-inter) font-medium">
        {title}
      </p>
      <p className="text-md text-[#757575] font-(family-name:--font-inter)">
        {description}
      </p>
    </article>
  );
}
