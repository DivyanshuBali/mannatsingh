import { Suspense } from "react";
import { Loader } from "@/components/Loader/Loader";
import { getArtefacts } from "@/lib/firestore";
import { ArtefactsList } from "./ArtefactsList";
import styles from "./page.module.css";

async function ArtefactsContent() {
  const items = await getArtefacts();

  return <ArtefactsList items={items} />;
}

export default function ArtefactsPage() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loader />}>
        <ArtefactsContent />
      </Suspense>
    </main>
  );
}
