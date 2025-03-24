export default ({ env }: { env: any }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['DZ28dTCf/VwbcYhixNM2j1JiZ0t8PrCarxSoEPFgpGg=']),
  },
});
