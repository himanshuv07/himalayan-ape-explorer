import Hero from '../components/Hero';
import SuperHitStarters from '../components/SuperHitStarters';
import VideoTestimonials from '../components/VideoTestimonials';
import BudgetSection from '../components/BudgetSection';
import DestinationCarousel from '../components/DestinationCarousel';
import InstagramHighlights from '../components/InstagramHighlights';
import FanbookTestimonials from '../components/FanbookTestimonials';
import CircularGallery from '../components/CircularGallary';
import PopupForm from '../components/PopupForm';
import { useEffect, useState } from 'react';
import haridwarImg from '../assets/religious/Haridwar.jpg';
import kedarnathImg from '../assets/religious/Kedarnath.jpg';
import badrinathImg from '../assets/religious/Badrinath.jpg';
import gangotriImg from '../assets/religious/Gangotri.jpg';
import yamnotriImg from '../assets/religious/Yamnotri.jpg';
import kainchiDhamImg from '../assets/religious/Kaichi dham.jpg';
import kailashDarshanImg from '../assets/religious/kailash-darshan.jpg';
import deviDarshanImg from '../assets/religious/devi-darshan.jpg';
import kasolImage from '../assets/kasol.jpg';
import ManaliImg from '../assets/IMG_3638.jpg';
import ShimalaImg from '../assets/IMG_0072-01.jpeg';
import AuliImg from '../assets/auli.png';
import NaniatalImg from '../assets/Nanital.png';
import LansdowneImg from '../assets/Lansdowne.png';
import MussoorieImg from '../assets/mussoorie.png';
import DharamshalaImg from '../assets/Dharamshala.png';
import RishikeshImg from '../assets/rishikesh.jpg';
import SingaporeImg from '../assets/Singapore.png';
import IndoneshiyaImg from '../assets/indonesia.png';
import ThailandImg from '../assets/Thailand.png';
import BaliImg from '../assets/Bali.png';
import { useNavigate } from 'react-router-dom';
// import JibhiImg from '../assets/jibhi.png'


const Index = () => {
  const [openLeadForm, setOpenLeadForm] = useState(false);
  // Auto open after delay (3 seconds), only once per session
  const navigate = useNavigate();

  useEffect(() => {
    const hasPopupShown = sessionStorage.getItem('popup_shown');

    if (!hasPopupShown) {
      const timer = setTimeout(() => {
        setOpenLeadForm(true);
        sessionStorage.setItem('popup_shown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);


  const InternationalDestinations = [
    { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", packages: "Dubai Tour" },
    { name: "Singapore", image: SingaporeImg, packages: "Singapore Packages" },
    { name: "Bali", image: BaliImg, packages: "Bali Tour" },
    { name: "Thailand", image: ThailandImg, packages: "Thailand Tour" },
    { name: "Maldives", image: "https://i.pinimg.com/736x/ea/3d/26/ea3d26707a6ea31a9a29ea5abf05ffd2.jpg", packages: "Maldives Packages" },
    { name: "Indonesia", image: IndoneshiyaImg, packages: "Indonesia Tour" },
    { name: "Vietnam", image: "https://img.freepik.com/free-photo/view-world-monument-celebrate-world-heritage-day_23-2151297145.jpg", packages: "Vietnam Tour" },
    { name: "Bhutan", image: "https://wallpapers.com/images/hd/bhutan-tiger-s-nest-uai4kj6ir3hunran.jpg", packages: "Bhutan Tour" }
  ];

  const DOMESTICDESTINATIONS = [
    { name: "Shimla", image: ShimalaImg, packages: "Shimla Trip" },
    { name: "Manali", image: ManaliImg, packages: "Manali Trip" },
    { name: "Kasol", image: kasolImage, packages: "Kasol Packages" },
    // { name: "Jibhi", image: JibhiImg, packages: "Jibhi Trip" },
    { name: "Dharamshala", image: DharamshalaImg, packages: "Dharamshala Packages" },
    { name: "Haridwar", image: haridwarImg, packages: "Haridwar City Tour" },
    { name: "Rishikesh", image: RishikeshImg, packages: "Rishikesh Adventure" },
    { name: "Mussoorie", image: MussoorieImg, packages: "Mussoorie Tour" },
    { name: "Auli", image: AuliImg, packages: "Auli Trip" },
    { name: "Nainital", image: NaniatalImg, packages: "Nainital Packages" },
    { name: "Lansdowne", image: LansdowneImg, packages: "Lansdowne Tour" },

  ];
  const RELIGIOUSDESTINATION = [
    { name: "Kedarnath", image: kedarnathImg, packages: "Kedarnath Yatra" },
    { name: "Badrinath", image: badrinathImg, packages: "Badrinath Tour" },
    { name: "Gangotri", image: gangotriImg, packages: "Gangotri Darshan" },
    { name: "Yamnotri", image: yamnotriImg, packages: "Yamnotri Temple Visit" },
    { name: "Kainchi Dham", image: kainchiDhamImg, packages: "Kainchi Dham Visit" },
    { name: "Kailash Darshan", image: kailashDarshanImg, packages: "Kailash Darshan Yatra" },
    { name: "Devi Darshan Himachal", image: deviDarshanImg, packages: "Devi Darshan Himachal" }
  ];




  return (
    <div>
      <Hero />
      <SuperHitStarters />
      <BudgetSection />

      {/* Circular Gallery Section */}

      <div style={{ height: '600px', position: 'relative' }}>
        <div className="gallary align-center text-4xl font-bold text-gray-800 absolute top-10 left-0 right-0 z-10 flex justify-center h-full">
          Gallary
        </div>
        <CircularGallery bend={0} textColor="#" borderRadius={0.05} scrollEase={0.02} />
        <div>
          {/* Your gallery preview components here */}

          <div className="viewMore mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/gallery')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
            >
              View more
            </button>
          </div>
        </div>
      </div>

      {/* Destination Sections */}

      <DestinationCarousel
        title="International Destinations"
        subtitle="Travel the world with us"
        destinations={InternationalDestinations}
        navigateTo="/international"
      />
      <DestinationCarousel
        title="Domestic Destinations"
        subtitle="Explore India's spiritual beauty"
        destinations={DOMESTICDESTINATIONS}
        navigateTo="/domestic"
      />
      <DestinationCarousel
        title="Religious  Destinations"
        subtitle="Sacred places to find peace and divinity"
        destinations={RELIGIOUSDESTINATION}
        navigateTo="/domestic"
      />

      <VideoTestimonials />
      <FanbookTestimonials />
      <InstagramHighlights />

      <PopupForm open={openLeadForm} setOpen={setOpenLeadForm} />

      <button
        onClick={() => setOpenLeadForm(true)}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
      >
        Plan Your Trip
      </button>

      <div
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let Himalayan Ape - The Real Survivor guide you to unforgettable experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Plan Your Trip
            </a>
            <a
              href="https://wa.me/917275223319"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Index;