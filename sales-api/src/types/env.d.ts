declare namespace NodeJS {
  interface ProcessEnv {
    SALES_DATABASE: string
    SALES_USER: string
    SALES_PASSWORD: string
    DB_PORT: number
    PORT: number
    JWT_SECRET: string
    NODE_ENV: 'development' | 'production' | 'test'
  }
}