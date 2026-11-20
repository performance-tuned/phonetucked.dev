import Image from "next/image";
import { connection } from "next/server";
import type { CSSProperties } from "react";
import type { Photo } from "@/content/galleries";
import styles from "./gallery.module.css";

function scatter() {
  return { "--x": Math.random(), "--y": Math.random() } as CSSProperties;
}

export default async function Gallery({
  slug,
  photos,
}: {
  slug: string;
  photos: Photo[];
}) {
  await connection();
  return (
    <div className={styles.field}>
      {photos.map((photo) => (
        <a
          key={photo.file}
          href={`/${slug}/${photo.file}`}
          target="_blank"
          className={styles.photo}
          style={scatter()}
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
