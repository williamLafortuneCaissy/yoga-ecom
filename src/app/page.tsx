
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Quality from "./components/quality/Quality";
import Vinyasa from "./components/vinyasa/Vinyasa";
import YingYang from "./components/yingYang/YingYang";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <YingYang />
      <Products />
      <Quality />
      <Vinyasa />
    </>
  );
}


