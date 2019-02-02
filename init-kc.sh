#!/usr/bin/env bash

#Auth with admin account
docker exec -ti auth /opt/jboss/keycloak/bin/kcadm.sh config credentials --server http://localhost:8080/auth --realm master --user admin

#Create realm = dev
docker exec -ti auth /opt/jboss/keycloak/bin/kcadm.sh create realms -s realm=dev -s enabled=true

#Create a new role for user
docker exec -ti auth /opt/jboss/keycloak/bin/kcadm.sh create roles -r dev -s name=user

#Create a new test user
docker exec -ti auth /opt/jboss/keycloak/bin/kcadm.sh create users -r dev -s username=testuser -s enabled=true

#Create new client for api
docker exec -ti auth /opt/jboss/keycloak/bin/kcadm.sh create clients -r dev -s clientId=rest-app -s protocol=openid-connect -s publicClient=false -s bearerOnly=true

#Create new client for front
docker exec -ti auth /opt/jboss/keycloak/bin/kcadm.sh create clients -r dev -s clientId=front -s protocol=openid-connect -s publicClient=true -s 'redirectUris=["http://localhost:8888/*"]'

