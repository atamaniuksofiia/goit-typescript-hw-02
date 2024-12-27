interface ImportMetaEnv {
  readonly VITE_UNSPLASH_API_KEY: string;
  // Додайте інші змінні, якщо потрібні
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
