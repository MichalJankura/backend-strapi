export default ({ env }: { env: any }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env('APP_KEYS', ['hj58Pd+xKz4r8tq9M3YWxA==', 'Bqm8PdXKz4r8tq9M3YWxA==', 'Hjm8Pd+xKz4r8tq9M3YWxA==', 'Kjm8Pd+xKz4r8tq9M3YWxA==']).split(','),
  },
});
