module.exports = {
  rules: [
    {
      test: /\.css$/.i,
      use: [
        {
          loader: "css-loader",
          options: { url: false },
        },
      ],
    },
  ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
