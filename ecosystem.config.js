module.exports = {
  apps: [
    {
      name: "app",
      script: "./server/index.js",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    production: {
      key: ~/.ssh/,
      user: "root",
      host: "104.155.232.100",
      ref: "origin/master",
      repo: "git@github.com:jinxin479/react-notebook.git",
      path: "/home/jinxin479_gmail_com/home/www",
      "pre-deploy-local": "echo 'Deploy Done'",
      "post-deploy": "npm install"
    }
  }
};
