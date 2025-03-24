export default ({ env }: { env: any }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',['WioFXrYKyMXhOITKVplKbw==']),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', ['1nMTWrPa/ZQ8+30mnMQAbQ==']),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', ['n9nPkYaEqPIgEo2VeE3vkw==']),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
