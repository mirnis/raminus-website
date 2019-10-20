### To run on Local
```docker-compose -f docker-compose-development.yml up```

### To run in prod
```docker-compose up```

### To create a new version tag
```
1. pull docker-compose-development.yml and change srimani/raminus-website:<tag-no> For example : srimani/raminus-website:3<br>
2. Do your code change and test your change
3. Then do the same in docker-compose.yml and change srimani/raminus-website:<tag-no> For example : srimani/raminus-website:3
docker-compose build
docker-compose push
```