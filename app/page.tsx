import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="home-hero">
        <h1>Arms of Deliverance Learning Series</h1>
        <p>
          Professional homeschool curriculum resources based on{" "}
          <em>Arms of Deliverance</em> by Tricia Goyer. Three complete
          curriculum packages — ready to use, ready to print.
        </p>
      </div>

      <div className="home-cards">
        <div className="home-card">
          <h2>Cultural &amp; Historical Companion</h2>
          <p>
            A 50-page companion workbook exploring the history, geography, and
            culture of World War II Europe as depicted in the novel. Ten units,
            six historical spotlights, map activities, vocabulary, and three
            final project options.
          </p>
          <p>
            <em>Recommended ages: 12+</em>
          </p>
          <div className="hc-links">
            <Link href="/workbook" className="hc-link">Open Workbook</Link>
            <Link href="/workbook/answers" className="hc-link secondary">Answer Key</Link>
          </div>
        </div>

        <div className="home-card">
          <h2>Introduction to Avionics</h2>
          <p>
            A 6-week curriculum (5 days × 35–40 min) on the principles of
            flight, aircraft anatomy, navigation, radio communication, weather,
            and mission safety — all woven through the B-17 Flying Fortress
            story.
          </p>
          <p>
            <em>Recommended ages: 12–18 · No prior knowledge needed</em>
          </p>
          <div className="hc-links">
            <Link href="/avionics" className="hc-link">Open Curriculum</Link>
            <Link href="/avionics/answers" className="hc-link secondary">Answer Key</Link>
          </div>
        </div>

        <div className="home-card">
          <h2>A Story of Promise — Bible Study</h2>
          <p>
            A 6-week KJV Bible study connecting the novel&rsquo;s themes to
            Scripture: Identity, Courage, Evil &amp; Sovereignty, Sacrifice,
            Redemption, and Providence. Memory verses, journal prompts, and
            deep discussion questions each day.
          </p>
          <p>
            <em>Recommended ages: 12+ · All scripture KJV</em>
          </p>
          <div className="hc-links">
            <Link href="/bible-study" className="hc-link">Open Bible Study</Link>
            <Link href="/bible-study/answers" className="hc-link secondary">Discussion Guide</Link>
          </div>
        </div>
      </div>

      <footer style={{
        textAlign: "center",
        padding: "2rem",
        borderTop: "2px solid var(--gold)",
        color: "var(--ink-soft)",
        fontSize: "0.9rem",
        fontStyle: "italic"
      }}>
        <em>Arms of Deliverance</em> by Tricia Goyer &bull; Curriculum materials
        produced with full author permission &bull; Arms of Deliverance Learning
        Series
      </footer>
    </>
  );
}
