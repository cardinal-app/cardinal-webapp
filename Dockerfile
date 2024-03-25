FROM node:alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g @angular/cli
RUN npm install
ARG profile
# FixMe : "--configuration=${profile}" not interpolating
ENTRYPOINT ["ng", "serve", "--configuration=docker", "--host", "0.0.0.0"]
