import Image from "next/image";
import { connection } from "next/server";
import type { CSSProperties } from "react";
import type { Photo } from "@/content/galleries";
import styles from "./gallery.module.css";

function shuffle(count: number) {
  return Array.from({ length: Math.ceil(count / 4) * 4 }, (_, i) => i)
    .map((cell) => ({ cell, key: Math.random() }))
    .sort((a, b) => a.key - b.key)
    .map(({ cell }) => cell);
}

function place(cell: number, photo: Photo) {
  return {
    "--c": cell % 4,
    "--r": Math.floor(cell / 4),
    "--c2": cell % 2,
    "--r2": Math.floor(cell / 2),
    "--x": Math.random(),
    "--y": Math.random(),
    "--ratio": photo.height / photo.width,
  } as CSSProperties;
}

export default async function Gallery({
  slug,
  photos,
}: {
  slug: string;
  photos: Photo[];
}) {
  await connection();
  const cells = shuffle(photos.length);
  return (
    <div
      className={styles.field}
      style={
        {
          "--rows": Math.ceil(photos.length / 4),
          "--rows2": Math.ceil(photos.length / 2),
        } as CSSProperties
      }
    >
      {photos.map((photo, index) => (
        <a
          key={photo.file}
          href={`/${slug}/${photo.file}`}
          target="_blank"
          className={styles.photo}
          style={place(cells[index] ?? index, photo)}
        >
          <Image
            src={`/${slug}/${photo.file}`}
            width={photo.width}
            height={photo.height}
            alt=""
            sizes="240px"
          />
        </a>
      ))}
    </div>
  );
}
