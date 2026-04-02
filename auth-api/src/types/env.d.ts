declare namespace NodeJS {
  interface ProcessEnv {
    AUTH_DATABASE: string
    AUTH_USER: string
    AUTH_PASSWORD: string
    DB_PORT: number
    PORT: number
    JWT_SECRET: string
    NODE_ENV: 'development' | 'production' | 'test'
  }
}