export type Photo = { file: string; width: number; height: number };

export const galleries: Record<string, Photo[]> = {
  "protocol-accessories": [
    { file: "IMG_4138.jpeg", width: 399, height: 600 },
    { file: "IMG_4140.jpeg", width: 1170, height: 779 },
    { file: "IMG_4217.jpeg", width: 720, height: 512 },
    { file: "IMG_4218.jpeg", width: 3072, height: 2048 },
    { file: "IMG_4219.jpeg", width: 650, height: 900 },
    { file: "IMG_4221.jpeg", width: 1000, height: 1000 },
    { file: "IMG_5034.jpeg", width: 1649, height: 1649 },
  ],
};
