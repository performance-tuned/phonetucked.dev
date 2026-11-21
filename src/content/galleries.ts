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
  standards: [
    { file: "IMG_0205.jpg", width: 2000, height: 1500 },
    { file: "IMG_0207.jpg", width: 2000, height: 1500 },
    { file: "IMG_0209.jpg", width: 2000, height: 1500 },
    { file: "IMG_0218.jpg", width: 2000, height: 1500 },
    { file: "IMG_0220.jpg", width: 2000, height: 1500 },
    { file: "IMG_0225.jpg", width: 1500, height: 2000 },
    { file: "IMG_0230.jpg", width: 1500, height: 2000 },
    { file: "IMG_0235.jpg", width: 1500, height: 2000 },
    { file: "IMG_0238.jpg", width: 2000, height: 1500 },
    { file: "IMG_0241.jpg", width: 2000, height: 1500 },
    { file: "IMG_0245.jpg", width: 1500, height: 2000 },
    { file: "IMG_0248.jpg", width: 1500, height: 2000 },
    { file: "IMG_0249.jpg", width: 1500, height: 2000 },
  ],
  "phonetucked-benchmark": [
    { file: "FullSizeRender-7.JPEG", width: 1750, height: 1345 },
    { file: "IMG_6248.JPEG", width: 1750, height: 1313 },
    { file: "IMG_6263.JPEG", width: 1536, height: 2048 },
    { file: "IMG_6275.JPEG", width: 1750, height: 1313 },
    { file: "IMG_6282.JPEG", width: 1750, height: 1313 },
    { file: "IMG_6250.JPEG", width: 1350, height: 2328 },
    { file: "IMG_7505.JPEG", width: 1750, height: 1313 },
    { file: "image001.JPG", width: 1428, height: 842 },
    { file: "IMG_6030.JPG", width: 1750, height: 1891 },
  ],
};
