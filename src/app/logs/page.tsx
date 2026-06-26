import { Suspense } from "react";
import { Loader } from "@/components/Loader/Loader";
import { getStudies } from "@/lib/firestore";
import { LogsLayout } from "./LogsLayout";
import styles from "./page.module.css";

async function LogsContent() {
	const logs = await getStudies();

	return <LogsLayout logs={logs} />;
}

export default function LogsPage() {
	return (
		<main className={styles.logsRoot}>
			<Suspense fallback={<Loader />}>
				<LogsContent />
			</Suspense>
		</main>
	);
}
