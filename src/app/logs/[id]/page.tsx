import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Loader } from "@/components/Loader/Loader";
import { getLogById } from "@/lib/firestore";
import styles from "./page.module.css";

async function StudyContent({ id }: { id: string }) {
	const item = await getLogById(id);

	if (!item) notFound();

	return (
		<div className={styles.content}>
			<div className={styles.imageFrame}>
				<Image src={item.bannerImage} alt={item.title} fill className={styles.studyImage} />
			</div>

			<div className={styles.info}>
				<h1 className={styles.title}>{item.title}</h1>
				<p className={styles.code}>{item.code}</p>

				{item.description.length > 0 && (
					<div className={styles.description}>
						{item.description.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default async function StudyPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	return (
		<main className={styles.detailRoot}>
			<Suspense fallback={<Loader />}>
				<Loader />
				<StudyContent id={id} />
			</Suspense>
		</main>
	);
}
