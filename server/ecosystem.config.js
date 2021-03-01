module.exports = {
  apps: [
    {
      name: "Open Recipes",
      script: "./index.js",
    },
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-18-216-123-80.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/open_recipe.pem",
      ref: "origin/master",
      repo: "git@github.com:AndreaUndecimo/opensource-recipes.git",
      path: "/home/ubuntu/opensource-recipes",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js",
    },
  },
};
