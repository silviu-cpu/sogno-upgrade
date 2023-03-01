module.exports = {
    apps: [{
        script: 'npm start'
    }],

    deploy : {
        production : {
            key: 'key.pem',
            user : 'root',
            host : process.env.DB_HOST,
            ref : 'origin/main',
            repo :process.env.DB_REPO,
            path : '/home/root',
            'pre-deploy-local': '',
            'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
            'ssh-options': 'ForwardAgent=yes'
        }
    }
}      