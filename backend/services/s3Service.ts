export interface S3GetSignedURLInterface {
    bucketName: string;
    bucketRegion: string;
    bucketAccessKeyId: string;
    bucketSecretAccessKey: string;
    key: string;
  }