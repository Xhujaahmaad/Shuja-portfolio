import shopifyLogo from "./assets/shopify.svg";
import wordpressLogo from "./assets/wordpress.svg";
import reactLogo from "./assets/react.svg";

const skills = [
  {
    title: "Shopify",
    logo: shopifyLogo,
    summary: "Custom Shopify storefronts, theme edits, and conversion-focused sections.",
  },
  {
    title: "WordPress",
    logo: wordpressLogo,
    summary: "Business websites with clean structure, fast loading, and easy content updates.",
  },
  {
    title: "React",
    logo: reactLogo,
    summary: "Modern frontends with reusable components and responsive user interfaces.",
  },
];

function SkillsPortfolio() {
  return (
    <section className="skills-portfolio">
      <p className="skills-portfolio__eyebrow">Portfolio</p>
      <h2 className="skills-portfolio__title">My Skill Set</h2>
      <p className="skills-portfolio__intro">
        I build production-ready projects using Shopify, WordPress, and React.
      </p>

      <div className="skills-portfolio__grid">
        {skills.map((skill) => (
          <article key={skill.title} className="skills-portfolio__card">
            <img src={skill.logo} alt={`${skill.title} logo`} />
            <h3>{skill.title}</h3>
            <p>{skill.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsPortfolio;
