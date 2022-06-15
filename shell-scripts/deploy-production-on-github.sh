aws s3 sync build s3://masai-resume-builder-production/current --exclude "index.html" --cache-control max-age=3153600

aws s3 cp build/index.html s3://masai-resume-builder-production/current/index.html

aws cloudfront create-invalidation --distribution-id E1X4WWT46I0FQO --paths "/*"
