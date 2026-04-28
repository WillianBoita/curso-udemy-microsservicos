declare namespace NodeJS {
  interface ProcessEnv {
    PRODUCT_DATABASE: string
    PRODUCT_USER: string
    PRODUCT_PASSWORD: string
    RABBIT_URL: string
    DB_PORT: number
    PORT: number
    JWT_SECRET: string
    NODE_ENV: 'development' | 'production' | 'test'
  }
}