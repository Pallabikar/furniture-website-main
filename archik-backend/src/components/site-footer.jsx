import Link from "next/link"

export function SiteFooter() {
  const collections = [
    { name: "Living Room", href: "/products?category=living-room" },
    { name: "Bedroom", href: "/products?category=bedroom" },
    { name: "Dining Room", href: "/products?category=dining-room" },
    { name: "Storage", href: "/products?category=storage" }
  ]

  const popularCategories = [
    { name: "Modern Oak Lounge Chair", href: "/products" },
    { name: "Walnut Coffee Table", href: "/products" },
    { name: "Beige Three-Seater Sofa", href: "/products" },
    { name: "Oak Bedside Table", href: "/products" },
    { name: "Wooden Dining Chair Set", href: "/products" },
    { name: "Modern Sideboard Console", href: "/products" }
  ]

  const deliveryCities = [
    { name: "Bhubaneswar" },
    { name: "Cuttack" },
    { name: "Puri" },
    { name: "Khordha" },
    { name: "Kolkata" },
    { name: "All Over Odisha" }
  ]

  return (
    <footer className="border-t bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/placeholder-logo.png" alt="Archik Homes" className="h-8 w-8" />
              <span className="font-bold text-xl">ARCHIK HOMES</span>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Premium furniture and interior design solutions for luxury living.
            </p>
            <div className="flex gap-3">
              <a href="tel:+919583530095" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
                📞
              </a>
              <a href="mailto:info@archikconstruction.com" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
                ✉️
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-semibold mb-4 border-b border-gray-600 pb-2">Collections</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {collections.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:text-white">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Products */}
          <div>
            <h3 className="font-semibold mb-4 border-b border-gray-600 pb-2">Popular Products</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {popularCategories.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-semibold mb-4 border-b border-gray-600 pb-2">Cities We Deliver To</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {deliveryCities.map((city, i) => (
                <li key={i}>{city.name}</li>
              ))}
            </ul>
          </div>

          {/* Contact & Addresses */}
          <div>
            <h3 className="font-semibold mb-4 border-b border-gray-600 pb-2">Contact</h3>

            <div className="space-y-5 text-gray-300 text-sm">

              {/* Bhubaneswar Office */}
              <div>
                <span className="font-semibold text-white">Bhubaneswar Office</span>
                <p>
                  Plot no-B/32, Sidhivihar, New Jagamara Road, Bhubaneswar, Odisha 751030
                </p>
              </div>

              {/* Bengaluru Office */}
              <div>
                <span className="font-semibold text-white">Bengaluru Office</span>
                <p>
                  J304 Icon Happy Living, Electronic City Phase 2, Bengaluru - 560100
                </p>
              </div>

              {/* ✅ NEW Old Town Office */}
              <div>
                <span className="font-semibold text-white">Old Town Office</span>
                <p>
                  Plot no-1967, Sriram Nagar, Old Town, Bhubaneswar, Odisha 751002
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+no-1967,+Sriram+Nagar,+Old+Town,+Bhubaneswar,+Odisha+751002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Get Directions →
                </a>
              </div>

              <p>📞 +91 95835 30095</p>
              <p>✉️ business@illusorydesignstudios.com</p>

            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Archik Construction. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
