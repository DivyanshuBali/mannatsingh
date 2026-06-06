import { BottomNav } from "@/components/NavBar/BottomNav";
import NavBar from "@/components/NavBar/NavBar";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.rootLayout}>
      <NavBar fullWidth />
      {children}
      <BottomNav />
    </div>
  );
}
