import { HeroSection } from "../components/HeroSection";
import { ContactUsSection } from "../components/ContactUsSection";
import { Footer } from "../components/Footer";

export default function Downloads() {
  return (
    <main>
      <HeroSection
        title="Downloads"
        imageUrl="/images/Loisaba-Sundowners.jpg"
      />
      <div className="bg-white text-gray-700 px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#c6bfaf] mb-6">
          Welcome to The SkySafari Media Library
        </h2>
        <p className=" text-gray-600 leading-8">
          You will find a selection of signature pictures, brochures, up-to-date
          press releases, and contact information regarding media and public
          relations. Itineraries, rates, and departure dates are also available.
          All download material remains the property of SkySafari, and we would
          kindly ask that wherever images are used, the relevant property be
          credited.
        </p>

        <div className="flex my-4">
          <button className="bg-[#B9A479] text-white px-6 py-2 rounded-full text-sm tracking-wider font-normal shadow-md hover:opacity-80">
            DOWNLOADS
          </button>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-[#c6bfaf] mb-6">
          For media enquiries, please contact:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-500 text-sm mt-6">
          <div className="flex flex-col gap-2.5">
            <h3 className="font-semibold">
              USA: Alison Sager, Viva Lifestyle PR
            </h3>
            <p>Tel: US (+1) 646 266 0387</p>
            <p>
              Email:{" "}
              <a
                href="mailto:alison@vivalifestylepr.com"
                className="text-[#B9A479] hover:underline"
              >
                alison@vivalifestylepr.com
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <h3 className="font-semibold">UK and Europe: Laura Shelbourne</h3>
            <p>Tel: UK +44 (0)7957 322275</p>
            <p>
              Email:{" "}
              <a
                href="mailto:laura@laurashelbourne.com"
                className="text-[#B9A479] hover:underline"
              >
                laura@laurashelbourne.com
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <h3 className="font-semibold">Rest of the World:</h3>
            <p>Tel: +255 782 600 049</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@skysafari.com"
                className="text-[#B9A479] hover:underline"
              >
                info@skysafari.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <ContactUsSection />
      <Footer />
    </main>
  );
}
