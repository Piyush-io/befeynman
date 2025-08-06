import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";

export default function Home() {
  const featureCards = [
    {
      title: "1. Pick Your Topic",
      description:
        'Anything from "why is the sky blue" to "derive the Black-Scholes equation."',
    },
    {
      title: "2. Start Explaining",
      description:
        "Talk, type, or sketch. The AI listens and asks clarifying questions.",
    },
    {
      title: "3. Get Challenged",
      description:
        "The AI probes gaps in your understanding and helps you dive deeper.",
    },
    {
      title: "4. Master It",
      description: "Once you can explain it clearly, you've truly learned it.",
    },
  ];

  return (
    <div className="container">
      <Header />

      <Hero />

      <main>
        <section className="content-section">
          <p className="body-copy">
            You are <strong>Feynman</strong>—the master of making complex ideas
            simple. Pick a topic and explain it to a student. The student asks
            questions that reveal your gaps. You fill those gaps. By the end,
            you've taught the student and, more importantly, yourself.
          </p>
          <p className="body-copy">
            No scheduling. No performance anxiety. Just you, the topic, and a
            conversation that ends when you can explain it without hesitation.
          </p>
        </section>

        <section className="content-section" id="method">
          <h2 className="section-heading">The Feynman Method</h2>
          <div className="feature-grid">
            {featureCards.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-heading">What Makes This Different</h2>
          <p className="body-copy">
            Unlike passively consuming content, this method forces you to
            articulate and defend your ideas. You're actively building knowledge
            like Feynman himself did.
          </p>
          <p className="body-copy">
            Each session ends with a summary—your words distilled into crisp
            review notes, searchable and yours forever.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
