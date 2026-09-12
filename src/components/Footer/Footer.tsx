import logoText from "../../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <img
              src={logoText}
              alt="Dev Stack"
              className="mx-auto h-6 w-auto object-contain md:mx-0"
            />

            <p className="mx-auto mt-4 max-w-xs text-[10px] leading-4 text-gray-400 md:mx-0">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center justify-center gap-4 text-[10px] text-gray-600 md:justify-start">
              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="hidden md:block">
            <h3 className="text-[10px] font-semibold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-[10px] text-gray-400 transition hover:text-gray-700"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block text-[10px] text-gray-400 transition hover:text-gray-700"
              >
                Technologies
              </a>

              <a
                href="#"
                className="block text-[10px] text-gray-400 transition hover:text-gray-700"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="hidden md:block">
            <h3 className="text-[10px] font-semibold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-[10px] text-gray-400 transition hover:text-gray-700"
              >
                About
              </a>

              <a
                href="#"
                className="block text-[10px] text-gray-400 transition hover:text-gray-700"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-[10px] text-gray-400 transition hover:text-gray-700"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="hidden md:block">
            <h3 className="text-[10px] font-semibold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-[10px] text-gray-400 transition hover:text-gray-700"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-[10px] text-gray-400 transition hover:text-gray-700"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-100 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-[9px] text-gray-400 sm:flex-row">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="transition hover:text-gray-700"
              >
                Privacy
              </a>

              <a
                href="#"
                className="transition hover:text-gray-700"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;  