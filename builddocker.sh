dateVersion=$(date +"%Y%m%d")
docker build -t tranbatungbk/nodejs-api:$dateVersion .
docker push tranbatungbk/nodejs-api:$dateVersion