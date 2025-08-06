module.exports = {
  apps: [
    {
      name: 'ceri-handycraft-web',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      // PM2 logs
      log_file: './logs/app.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // Restart options
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      max_memory_restart: '1G',
      
      // Advanced options
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
      
      // Auto restart when file changes (set to true for development)
      ignore_watch: ['node_modules', 'logs', '.git'],
      
      // Additional environment variables (customize as needed)
      env_vars: {
        // Add your custom environment variables here
        // DATABASE_URL: 'your-database-url',
        // API_URL: 'your-api-url',
      }
    }
  ],

  // Deployment configuration (optional)
  deploy: {
    production: {
      user: 'deploy',
      host: ['your-server.com'],
      ref: 'origin/main',
      repo: 'https://github.com/sagitarisandy/next-cerihandycraft.git',
      path: '/var/www/ceri-handycraft',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
};
