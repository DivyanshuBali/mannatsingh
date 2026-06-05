import { BottomNav } from "@/components/NavBar/BottomNav";
import NavBar from "@/components/NavBar/NavBar";
import styles from "./layout.module.css";

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className={styles.aboutLayout}>
			<NavBar fullWidth />
			{children}
			<BottomNav />
		</div>
	);
}
