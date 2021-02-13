module.exports = {
  "plugins": [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        },
        overrideBrowserslist: [
          "last 3 version",
          "Chrome >= 35",
          "Firefox >= 38",
          "Edge >= 10",
          "Explorer >= 10",
          "ie >= 10",
          "iOS >= 8",
          "Safari >= 8",
          "Android 2.3",
          "Android >= 4",
          "Opera >= 12"
        ]
      }
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        // enabled: false,
        content: [
          './config/**/*.{js,jsx,ts,tsx}',
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
          './layouts/**/*.{js,jsx,ts,tsx}'
        ],
        keyframes: true,
        // defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
          return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
        },
        safelist: ["html", "body"],
        whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/],
      }
    ],
  ]
}