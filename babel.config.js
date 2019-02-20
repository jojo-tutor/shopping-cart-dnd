module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'react-hot-loader/babel',
    ['@babel/plugin-transform-runtime',
      {
        corejs:  false,
        helpers:  true,
        regenerator:  true,
        useESModules: true,
      }
    ]
  ]
}