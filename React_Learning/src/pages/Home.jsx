import Card from "../components/Card";
import Counter from "../components/Counter";
import Toggle from "../components/Toggle";
import QuoteBox from "../components/QuoteBox";
import SkillsList from "../components/SkillsList";

function Home() {
  return (
    <div className="home-dashboard">
      <section className="tech-grid">
        <Card title="React" description="JS library for UIs" color="#A78BFA" />
        <Card title="Vite" description="Fast build tool" color="#00C864" />
        <Card
          title="Tailwind"
          description="Utility-first CSS"
          color="#00B4D8"
        />
      </section>

      <Counter />
      <Toggle />
      <QuoteBox />
      <SkillsList />
    </div>
  );
}

export default Home;
