module.exports = {
    apps: [{
        script: 'npm start'
    }],

    deploy : {
        production : {
            user : 'ubuntu',
            host : '89.44.137.23',
            ref : 'origin/main',
            repo :'git@github.com:silviu-cpu/sogno-upgrade.git',
            path : '/home/ubuntu',
            'pre-deploy-local': '',
            'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
            'ssh-options': 'ForwardAgent=yes'
        }
    }
}