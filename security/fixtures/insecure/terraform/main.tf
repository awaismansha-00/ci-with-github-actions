# TRAINING ONLY: deliberately public and unencrypted.
resource "aws_s3_bucket" "insecure_training_bucket" {
  bucket = "insecure-training-fixture-not-for-deployment"
}

resource "aws_s3_bucket_public_access_block" "insecure_training_bucket" {
  bucket                  = aws_s3_bucket.insecure_training_bucket.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

