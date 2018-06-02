# TCONCHIE.COM Front-End

https://www.tconchie.com is my personal website.

## In Brief

I want this site to be my portfolio as well as a blog.

## Technologies

* React.js
* Redux
* Redux-Sagas
* Docker
* Reactstrap

## Structure

Since this is only a front-end, and I have yet to build the API/Database (although it is modelled), therefore all content is hard-coded, with the exception of static assets for projects, which are currently being served from an S3 bucket with permissions to only allow requests from `tconchie.com` and `localhost`.

## Deployment

Currently the app is deployed through [Now](https://zeit.co/now) which is probably my favorite small-scale deployment CLI. It is so simple to use (two commands: `now` for deployment to a generated URL and `now alias [generated url] [target url]` for adding a pseudo-CNAME to your own domain) and also provides free SSL through Let's Encrypt which is fantastic. When you point the domain's name servers at zeit's then the aliasing is extremely fast. The best part is that it can accept dockerfiles for building, therefore it can easily be used for any project (front-ends, APIs, you name it).