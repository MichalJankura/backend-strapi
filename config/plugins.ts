module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', ['qV5I+RUAgwbcgnJiMFlOjA==']),
      },
    },
    // ... existing code ...
  });
