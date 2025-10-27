import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import contentData from "@/data/content.da.json";
import galleryData from "@/data/gallery.da.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero content={contentData} />
      <Services services={contentData.services} />
      <Gallery items={galleryData} />
      <Reviews 
        googleUrl={contentData.reviews.googleUrl}
        facebookUrl={contentData.reviews.facebookUrl}
      />
      <Contact business={contentData.business} />
      <Footer
        businessName={contentData.business.name}
        cvr={contentData.business.cvr}
        tagline={contentData.footer.tagline}
        links={contentData.footer.links}
      />
    </main>
  );
}
