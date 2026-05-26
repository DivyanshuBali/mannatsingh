import Image from "next/image";
import type { AccordionSection } from "./Accordion";
import { Accordion } from "./Accordion";
import styles from "./page.module.css";

const sections: AccordionSection[] = [
  {
    title: "inquiry",
    content: (
      <div className={styles.prose}>
        <p>
          Studies on the contemporary Indian condition—through both the archive
          and the workshop—to understand how the historical persists within the
          present. Rather than reconstructing history or defining an essence,
          the inquiry focuses on tendencies that remain embedded in everyday
          constructions but often go unnoticed. Through processes of making,
          these tendencies are worked with, and engaged architecturally
        </p>
      </div>
    ),
  },
  {
    title: "about",
    content: (
      <div className={styles.prose}>
        <p>
          Mannat Singh is an architect based in Chandigarh. He graduated with a
          gold medal from the Faculty of Architecture at CEPT University, where
          he also served as a program ambassador and was the founding chief
          editor of the college newsletter. He is currently leading projects at
          Imarat Architects, a practice engaged with questions of material
          culture and construction.
        </p>
        <p>
          His work extends across buildings, furniture, objects, and garments he
          constructs for himself—approaching each as a way of thinking through
          material, construction, and use. Alongside this, his drawings and
          writings return to historical environments and their transformations
          over time, treating them as active sites of inquiry rather than static
          references.
        </p>
        <p>
          He is currently working with schools of architecture across the
          country and undertaking documentation of relevant sites, developing
          these inquiries through a self-directed research practice. This has
          taken form as MISAAL, a research-based making studio that brings
          together processes of redrawing and construction to study and rework
          architectural intelligence into contemporary projects and artefacts.
        </p>
      </div>
    ),
  },
  {
    title: "education & experience",
    content: (
      <div className={styles.experienceTable}>
        <div className={styles.experienceRow}>
          <span className={styles.year}>2023</span>
          <div>
            <span className={styles.role}>Exchange Program</span>
            <span className={styles.place}>ETSAM, Madrid</span>
          </div>
        </div>
        <div className={styles.experienceRow}>
          <span className={styles.year}>2018 - 2023</span>
          <div>
            <span className={styles.role}>Student of Architecture</span>
            <span className={styles.place}>FA, CEPT University, Ahmedabad</span>
          </div>
        </div>
        <div className={styles.experienceRow}>
          <span className={styles.year}>2021</span>
          <div>
            <span className={styles.role}>Internship</span>
            <span className={styles.place}>Studio Interweave, Gangtok</span>
          </div>
        </div>
        <div className={styles.experienceRow}>
          <span className={styles.year}>2018</span>
          <div>
            <span className={styles.role}>High School Graduation</span>
            <span className={styles.place}>Vivek High School</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "misaal",
    titleClassName: styles.misaalTitle,
    content: (
      <div className={styles.prose}>
        <p>
          misaal (modern indian studies on art architecture and life) attempts
          to discover architecture from outside the discipline, in objects,
          habits and fictions. The knowledge that surfaces is translated into
          design - across scales, from the intimate to the inhabitable.
        </p>
        <p>Misaal incorporates a two-pronged method of study and making.</p>
        <p>
          It studies the Indian imagination as it is located across paintings,
          places—both historical and contemporary—habits, and objects. And then
          examines them across five lenses: composition, construction, context,
          intent, and chromatics; in order to isolate the architectural
          intelligence embedded within them.
        </p>
        <p>
          These extracted intelligibilities are reworked into projects and
          artefacts, developed in close collaboration with artisans and informed
          equally by contemporary and historical material cultures; varying in
          scale but rooted in inquiry.
        </p>
        <a href="https://misaal.co" className={styles.misaalLink}>
          misaal.co
        </a>
      </div>
    ),
  },
  {
    title: "contact",
    content: (
      <div className={styles.contactInfo}>
        <p>1252/1 sector 43b, Chandigarh</p>
        <p>+91 9988111252</p>
        <div className={styles.contactLinks}>
          <a href="mailto:mannat@misaal.co">mannat@misaal.co</a>
          <a
            href="https://instagram.com/mannatarchive"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mannatarchive
          </a>
        </div>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className={styles.aboutRoot}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.leftContent}>
            <Accordion sections={sections} defaultOpenIndex={0} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imagesColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/mannat_studio.jpeg"
                alt="Mannat Singh in studio"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/mannatandchairs.jpeg"
                alt="Mannat Singh with chairs"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className={styles.image}
              />
            </div>
            <div
              className={`${styles.imageWrapper} ${styles.imageWrapperPortrait}`}
            >
              <Image
                src="/chairsandac.jpeg"
                alt="Chairs and air conditioning unit"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
