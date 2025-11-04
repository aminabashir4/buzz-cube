export default function Footer() {
  return (
    <footer className="bg-[#00FF8C] text-gray-800 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Buzzcube</h2>
          <p className="text-sm text-gray-800 leading-relaxed">
            Buzzcube is your growth acceleration partner — empowering creators,
            startups, and teams with AI-driven tools that transform engagement,
            marketing, and collaboration.
          </p>
          <p className="text-xs text-gray-600 mt-6">
            © {new Date().getFullYear()} Buzzcube. All Rights Reserved.  
            <span className="block">Terms & Privacy</span>
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">
            More on Buzzcube
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white transition">About Buzzcube</a></li>
            <li><a href="/pricing" className="hover:text-white transition">Pricing Plans</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="/trial" className="hover:text-white transition">7-Day Free Trial</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">
            Connect with Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/team" className="hover:text-white transition">The Team</a></li>
            <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
            <li><a href="/press" className="hover:text-white transition">Press</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
