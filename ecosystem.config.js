module.exports = {
    apps: [{
        script: 'npm start'
    }],

    deploy : {
        production : {
            user : 'ubuntu',
            host : process.env.DB_HOST,
            ref : 'origin/main',
            repo : process.env.DB_REPO,
            path : '/home/ubuntu',
            'pre-deploy-local': '',
            'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '' 
        }
    }
}