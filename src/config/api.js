// Configuration file for API endpoints
// Change the API_BASE_URL to switch between Node.js and Flask backends

const config = {
  // Node.js backend
  NODE_API_URL: 'http://localhost:8000',
  
  // Flask backend  
  FLASK_API_URL: 'http://localhost:5000',
  
  // Current backend (change this to switch between backends)
  API_BASE_URL: 'http://localhost:5000', // Flask backend by default
};

export default config;
