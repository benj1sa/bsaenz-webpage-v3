export function SubscriptionBox() {
  return (
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
  );
}
