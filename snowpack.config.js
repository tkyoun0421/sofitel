module.exports = {
  mount:{
    public: {url: '/', static: true},
    src: {url:'/dist'}
  },
  optimized:{
    minify: true
  },
  plugin:[
    "@snowpack/plugin-sass"
  ]
}