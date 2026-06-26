import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getArtefactById } from "@/lib/firestore";
import { ArtefactDetail } from "./ArtefactDetail";
import styles from "./page.module.css";

async function ArtefactContent({ id }: { id: string }) {
	const item = await getArtefactById(id);

	if (!item) notFound();

	return <ArtefactDetail item={item} />;
}

export default async function ArtefactPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	return (
		<>
			<main className={styles.detailRoot}>
				<Suspense>
					<ArtefactContent id={id} />
				</Suspense>
			</main>
			<div className={styles.backLink}>
				<Link href="/artefacts">back</Link>
			</div>
		</>
	);
}
