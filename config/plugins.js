module.exports = () => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: process.env.AWS_KEY_ID,
      secretAccessKey: process.env.AWS_SECERT_ACCESS_KEY,
      region: 'us-east-2',
      params: {
        Bucket: process.env.AWS_S3_CDN_BUCKET,
      },
    },
  },
});
