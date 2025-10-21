// utils/prefetchImages.ts
export function prefetchImages(urls: string[]) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}
