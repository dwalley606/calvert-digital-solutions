import type { Metadata } from "next";
import Image from "next/image";
import { aboutPage } from "@/content/aboutPage";
import HomeCTA from "@/components/sections/HomeCTA";
import styles from "./AboutPage.module.css";

export const metadata: Metadata = aboutPage.metadata;

export default function AboutPage() {
  const { hero, story, philosophy, working, local } = aboutPage;

  return (
    <>
      <section className={styles.hero} aria-labelledby="about-heading">
        <div className={`site-container section-spacing ${styles.heroGrid}`}>
          <div>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1 id="about-heading" className={`cds-display ${styles.heroTitle}`}>
              {hero.lines.map((line) => <span key={line}>{line}</span>)}
            </h1>
            <p className={styles.introduction}>{hero.introduction}</p>
            <p className={styles.bodyCopy}>{hero.description}</p>
          </div>
          <figure className={styles.portrait}>
            <div className={styles.portraitImage}>
              <Image src={hero.photo.src} alt={hero.photo.alt} fill sizes="(min-width: 1024px) 390px, (min-width: 768px) 36vw, 90vw" className={styles.photo} priority />
            </div>
            <figcaption className={styles.portraitCaption}>
              <span className="cds-display text-3xl tracking-wide">{hero.photo.caption}</span>
              <span className="mt-1 block text-xs leading-5 text-sand">{hero.photo.detail}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.story} aria-labelledby="story-heading">
        <div className="site-container section-spacing">
          <div className={styles.storyGrid}>
            <header>
              <p className={styles.eyebrow}>{story.eyebrow}</p>
              <h2 id="story-heading" className={`cds-display ${styles.storyTitle}`}>
                {story.lines.map((line) => <span key={line}>{line}</span>)}
              </h2>
            </header>
            <div className={styles.storyCopy}>
              {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className={styles.mediaRow}>
            <figure className={styles.media}>
              {/* Replace this still with the real video player when available; keep the media frame and caption. */}
              <div className={styles.mediaFrame}>
                <Image src={story.media.src} alt={story.media.alt} fill sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw" className={styles.mediaPhoto} />
              </div>
              <figcaption className={styles.mediaCaption}>
                <span className="cds-display text-3xl">{story.media.label}</span>
                <span className="text-xs leading-5">{story.media.caption}</span>
              </figcaption>
            </figure>
            <p className={`cds-display ${styles.conclusion}`}>{story.conclusion}</p>
          </div>
        </div>
      </section>

      <section className={styles.philosophy} aria-labelledby="philosophy-heading">
        <div className="site-container section-spacing">
          <p className={styles.eyebrow}>{philosophy.eyebrow}</p>
          <h2 id="philosophy-heading" className={`cds-display ${styles.sectionTitle}`}>{philosophy.title}</h2>
          <div className={styles.pillars}>
            {philosophy.pillars.map((pillar) => (
              <article key={pillar.title}>
                <h3 className="cds-display text-5xl text-sand">{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.working} aria-labelledby="working-heading">
        <div className={`site-container section-spacing ${styles.workingGrid}`}>
          <header>
            <p className={styles.eyebrow}>{working.eyebrow}</p>
            <h2 id="working-heading" className={`cds-display ${styles.sectionTitle}`}>{working.title}</h2>
          </header>
          <ol className={styles.commitments}>
            {working.points.map((point) => (
              <li key={point.number}>
                <span className={`cds-display ${styles.number}`} aria-hidden="true">{point.number}</span>
                <div><h3 className="cds-display text-3xl sm:text-4xl">{point.title}</h3><p>{point.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.local} aria-labelledby="local-heading">
        <div className={`site-container ${styles.localGrid}`}>
          <Image src="/brand/production/cds-shield-simplified-color.svg" alt="" width={112} height={132} className={styles.localMark} />
          <div><p className={styles.eyebrow}>{local.eyebrow}</p><h2 id="local-heading" className="cds-display mt-4 text-5xl sm:text-6xl">{local.title}</h2></div>
          <p className="max-w-xl leading-7 text-slate-200">{local.description}</p>
        </div>
      </section>
      <HomeCTA />
    </>
  );
}