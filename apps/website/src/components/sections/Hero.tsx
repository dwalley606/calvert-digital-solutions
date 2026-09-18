import Image from "next/image";
import { hero } from "@/content/hero";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="hero-heading" className={`${styles.heading} cds-display`}>
            <span>{hero.headline[0]}</span>{" "}
            <span>{hero.headline[1]}</span>
          </h1>
          <p className={styles.description}>{hero.description}</p>
          <div className={styles.actions}>
            <a href={hero.primaryCta.href} className={`${styles.button} ${styles.primary}`}>
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className={`${styles.button} ${styles.secondary}`}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className={styles.note}>{hero.note}</p>
        </div>
        <div className={styles.brand}>
          <Image
            src="/brand/hero/cds-shield-primary-hero-corrected.svg"
            alt={hero.markAlt}
            width={240}
            height={280}
            priority
            className={styles.shield}
          />
        </div>
      </div>
    </section>
  );
}
