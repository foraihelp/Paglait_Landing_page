import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Products from "@/components/Products";
import Pipeline from "@/components/Pipeline";
import BigStats from "@/components/BigStats";
import Trusted from "@/components/Trusted";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Showreel/>
      <About/>
      <Services/>
      <Projects/>
      <Products/>
      <Pipeline/>
      <BigStats/>
      <Trusted/>
      <Join/>
      <Footer/>
    </>
  );
}
