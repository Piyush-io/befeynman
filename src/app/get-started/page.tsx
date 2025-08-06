import Link from "next/link";

export const metadata = {
  title: "Get Started — Be Feynman",
  description: "Begin learning by teaching with Be Feynman.",
};

export default function GetStartedPage() {
  return (
    <main style={{ padding: "48px 16px", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 16 }}>Get Started</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
        Welcome! This is your starting point. You can add topic entry,
        onboarding, or a quick-start flow here to begin teaching a concept and
        challenging your understanding.
      </p>
      <ul style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
        <li>Pick a topic you want to master.</li>
        <li>Explain it simply—pretend you’re teaching a complete beginner.</li>
        <li>Identify gaps and refine until it’s crystal clear.</li>
      </ul>
      <div style={{ marginTop: 32 }}>
        <Link
          href="/"
          style={{ color: "var(--text-primary)", textDecoration: "underline" }}
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
