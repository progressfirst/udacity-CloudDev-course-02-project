export const config = {
  "dev": {
    "username": process.env.PORTGRESS_USERNAME,
    "password":  process.env.PORTGRESS_PASSWORD,
    "database": process.env.PORTGRESS_DATEBASE,
    "host": process.env.PORTGRESS_HOST,
    "dialect": process.env.RDS_DIALEC,
    "aws_region":  process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
    "jwt_secret": process.env.JWT_SECRET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }

}


//"username": process.env.PORTGRESS_USERNAME"udaawsMH",
//    "password": process.env.PORTGRESS_PASSWORD"test-uda1",
//    "database": process.env.PORTGRESS_DATEBASE"udardstest",
//    "host": process.env.PORTGRESS_HOST"udatestrds.cykcmr09sv71.eu-central-1.rds.amazonaws.com",
//    "dialect": process.env.RDS_DIALECT"postgres",
//    "aws_region": process.env."eu-central-1",
//    "aws_profile": process.env."default",
//    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET"udacity-mho-dev"