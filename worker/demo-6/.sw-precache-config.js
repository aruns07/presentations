module.exports = {
  staticFileGlobs: [
    './main.css',
    './index.html',
    './main.js'
  ],
  runtimeCaching: [{
    urlPattern: '/worker/demo-6/pages/(.*)',
    handler: 'networkFirst' 
  },{
    urlPattern: '/worker/demo-6/data/(.*)',
    handler: 'networkOnly' 
  }]
};

/* runtime caching handler options: cacheFirst, networkFirst, fastest, networkOnly, cacheOnly */