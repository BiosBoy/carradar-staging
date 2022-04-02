module.exports = {
  apps: [
    {
      name: 'carradar',
      script: 'yarn start:server',
      instances: 1,
      cron_restart: '0 0 * * *',
      watch: ['server'],
      watch_delay: 1000,
      max_restarts: 5,
      restart_delay: 4000,
      autorestart: true,
      max_memory_restart: '300M',
      ignore_watch: ['node_modules', 'assets', 'public'],
      env_production: {
        NODE_ENV: 'production'
      },
      env_development: {
        NODE_ENV: 'development'
      }
    }
  ]
};
