import type { LogItem } from "@/_utils/types";

export function LogsLayout({ logs }: { logs: readonly LogItem[] }) {
  return <div>{logs.map((log) => log.title)}</div>;
}
