import { FooterLinks } from "../data";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {FooterLinks.map((item) => (
            <div key={item.title} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-500 hover:text-gray-900 link-underline">
                {item.title}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">&copy; 2023 Hofmann & Sefrin & Stittrich GbR - Sentivon Marketing Agentur.</p>
      </div>
    </footer>
  )
}