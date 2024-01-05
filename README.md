# Personal Blogs

## Overview:
- A simple web application to maintain personal blogs, built on `SpringBoot` and `NextJS`.
- A blogger can add maintainers to maintain and edit his/her personal blogs.
- A maintainer can only edit existing blogs of a fellow blogger.
- Only verified users can add blogs, but viewing them is publicly available.

## Screenshots:
### Main page(visible to everyone):

![alt](assets/1.png)

### Login screen:

![alt](assets/2.png)

### Blog management and blog adding pages:

![alt](assets/3.png)
![alt](assets/5.png)

### User management page:

![alt](assets/4.png)

## Usage:

- Using native dependencies(with Java 17, gradle, postgresql and node installed in system):
  - Build the backend:
  ```bash
  ./gradlew build -x test
  ``` 
  - Build the frontend:
  ```bash
  cd frontend/ && npm install && npm run build
  ```
  - Run the backend with java:
  ```bash
  java -jar {path_to_the_build_jarfile}
  ```
  - Run the frontend with node:
  ```bash
  node frontend/.next/standalone/server.js
  ```
- Using docker:
  ```
  docker compose up
  ```
- The jar file can also be downloaded from github assets.
