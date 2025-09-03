import Hero from './Hero';
import Journey from './Journey';
import Values from './Values';
import Culture from './Culture';
import HowWeWork from './HowWeWork';
import Explore from './Explore';


export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Journey />
      <Values />
      <Culture />
      <HowWeWork />
      <Explore />
    </main>
  );
}
