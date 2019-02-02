# JAVA-WebServices

## To Deploy all
 
`docker-compose up -d`

## ⚠ keycloak init

After the first keycloak deployment:\
Don't forget to run the script to init realm (dev), clients (front and rest-app) and users (testuser).

`./init-kc.sh`

## ⚠ keycloak server address

Because we need the same auth server address in container and on your system, you need to add the keycloak server in your host  

Go to `/etc/hosts` and add the line `127.0.0.1 keycloak`

##To test the app

Go to `http://localhost:8888` \
Sign in with `testuser` username and `toto` password
Go to `hotels&vols` and check if there is rows in table.

##To rebuild container

`docker-compose build`

## To compile the soap server

`mvn clean install`

## To import soap contrat in client soap

#### 1) cd in right directory

`cd ServerRest/src/main/java`

#### 2) Run server-soap


#### 3) ws import to generate contracts from wsdl
`wsimport -keep -p ìnfres.ws.soap http://localhost:8001/reservations?wsdl`

## To compile the rest server

`mvn clean install`

