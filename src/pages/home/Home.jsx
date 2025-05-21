import Compositions from "./compositions/Compositions";
import Hero from "./hero/Hero";
import News from "./news/News";

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <Compositions />
    </>
  );
}
