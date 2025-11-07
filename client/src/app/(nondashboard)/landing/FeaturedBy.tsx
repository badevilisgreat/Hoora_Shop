import Image from "next/image";

export default function FeaturedBy() {
  const logos = [
    { id: 1, src: "/google-news-logo.png", alt: "Google News" },
    { id: 2, src: "/abp-news-logo.png", alt: "ABP News" },
    { id: 3, src: "/shark-tank-logo.png", alt: "Shark Tank" },
    { id: 4, src: "/ani-logo.png", alt: "ANI" },
    { id: 5, src: "/dailyhunt-logo.png", alt: "Daily Hunt" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Featured by the best in the industry
        </h2>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 animate-marquee hover:animate-none"
            style={{ animationDuration: "30s" }}
          >
            {/* First set of logos */}
            {logos.map((logo) => (
              <div key={logo.id} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150} // Adjust the width for consistency
                  height={60} // Adjust the height for consistency
                  className="object-contain mx-auto" // Center the image
                />
              </div>
            ))}

            {/* Second set of logos (duplicated with new keys) */}
            {logos.map((logo, index) => (
              <div key={`${logo.id}-copy-${index}`} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150} // Adjust the width for consistency
                  height={60} // Adjust the height for consistency
                  className="object-contain mx-auto" // Center the image
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
