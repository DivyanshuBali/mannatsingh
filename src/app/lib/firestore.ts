import "server-only";

import type { DocumentReference } from "firebase-admin/firestore";
import type { ArtefactsItem, LogItem, LogItem_V2 } from "@/_utils/types";
import { db } from "./firebase-admin";

// ─── Helpers ─────────────────────────────────────────────────

function normalizeRef(ref: DocumentReference): DocumentReference {
  const trimmedId = ref.id.trim();
  if (trimmedId === ref.id) return ref;
  return ref.parent.doc(trimmedId);
}

async function resolveRefs(
  refs: DocumentReference[],
): Promise<Record<string, unknown>[]> {
  if (refs.length === 0) return [];

  const snapshots = await db.getAll(...refs.map(normalizeRef));

  return snapshots
    .filter((snap) => snap.exists)
    .map((snap) => ({ id: snap.id, ...snap.data() }));
}

// ─── Artefacts ───────────────────────────────────────────────

export async function getArtefacts(): Promise<ArtefactsItem[]> {
  const snapshot = await db.collection("artefacts").get();

  const items = await Promise.all(
    snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const tagRefs: DocumentReference[] = data.tags ?? [];
      const tags = await resolveRefs(tagRefs);

      return { id: doc.id, ...data, tags } as ArtefactsItem;
    }),
  );

  return items;
}

export async function getArtefactById(
  id: string,
): Promise<ArtefactsItem | null> {
  const doc = await db.collection("artefacts").doc(id).get();

  if (!doc.exists) return null;

  const data = doc.data() as FirebaseFirestore.DocumentData;
  const tagRefs: DocumentReference[] = data.tags ?? [];
  const tags = await resolveRefs(tagRefs);

  return { id: doc.id, ...data, tags } as ArtefactsItem;
}

// ─── Studies ────────────────────────────────────────────────────

export async function getStudies(): Promise<LogItem[]> {
  const snapshot = await db.collection("studies").get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as LogItem[];
}

// ─── Logs ────────────────────────────────────────────────────

export async function getLogs(): Promise<LogItem_V2[]> {
  const snapshot = await db.collection("logs").get();

  const items = await Promise.all(
    snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const tagRefs: DocumentReference[] = data.tags ?? [];
      const tags = await resolveRefs(tagRefs);

      return {
        id: doc.id,
        ...data,
        tags,
      } as LogItem_V2;
    }),
  );

  return items;
}

export async function getLogById(id: string): Promise<LogItem | null> {
  const doc = await db.collection("studies").doc(id).get();

  if (!doc.exists) return null;

  return { id: doc.id, ...doc.data() } as LogItem;
}
