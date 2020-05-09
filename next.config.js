const withCss = require('@zeit/next-css');
const withFonts = require('next-fonts');
const Dotenv = require('dotenv-webpack');

module.exports = withFonts(
  withCss({
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style\/css.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }

      config.plugins.push(new Dotenv({ silent: true }));

      return config;
    },
    env: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      EMAIL_ADRESS: process.env.EMAIL_ADRESS,
      TEST_ENV: process.env.TEST_ENV,
    },
  }),
);
