module.exports = {

  "presets": [
    ["@babel/preset-env", {
      "targets": { "browsers": ["last 2 chrome versions"] },
      "useBuiltIns": "usage",
      "corejs": '3.0.0'
    }],
  ]
}
