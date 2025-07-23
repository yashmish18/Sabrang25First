// Configuration for API endpoints
const config = {
  development: {
    API_BASE_URL: 'http://localhost:5000',
  },
  production: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://sabrangselfbackend-production.up.railway.app',
  }
};

const environment = process.env.NODE_ENV || 'development';

export const API_BASE_URL = config[environment as keyof typeof config].API_BASE_URL;

export default config;
