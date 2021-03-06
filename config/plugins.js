module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: 'AKIATMWFZZ4RQXXDN6VD',
      secretAccessKey: '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',
      region: 'us-east-2',
      params: {
        Bucket: 'portfolio-strapi-cdn',
      },
    },
  },
});
