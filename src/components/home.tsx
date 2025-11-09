import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;