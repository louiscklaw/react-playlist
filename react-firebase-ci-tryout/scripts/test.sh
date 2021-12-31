#!/usr/bin/env bash

BROWSER=none
CI=1

set -e


installFirebaseTools(){
  killall firebase | true
  
  curl -sL https://firebase.tools | upgrade=true bash
  curl -sL firebase.tools | upgrade=true bash
}


kill_ports () {
    echo "Clearing ports... $1"
    fuser -k -n tcp $1/tcp | true 
    fuser -k -n udp $1/udp | true 
}

wait_ports () {
  echo "wait ports... $1"
  ./scripts/wait-for-it.sh -t 120 $1
}

kill_all_ports () {
  kill_ports 3000
  kill_ports 9199
  kill_ports 9099
  kill_ports 9000
  kill_ports 8080
  kill_ports 5001
  kill_ports 5000
  kill_ports 4000

  sleep 3

  echo 'port cleared'
}

wait_all_ports () {
  wait_ports localhost:3000
  wait_ports localhost:9199
  wait_ports localhost:9099
  wait_ports localhost:9000
  wait_ports localhost:8080
  wait_ports localhost:5001
  wait_ports localhost:5000
  wait_ports localhost:4000
  
  sleep 3
  
  echo 'ports are up'
}


prepare_test () {
  pushd App
    yarn --dev
    yarn start &
  popd

  pushd firebase
    pushd functions
      npm install
    popd

    npm install
    nice firebase emulators:start &
  popd
}

test_body (){
  echo 'test here ?'
  pushd App
    yarn --dev
    yarn test
  popd
  echo 'test done'
}

main () {
  installFirebaseTools

  kill_all_ports
  prepare_test
  wait_all_ports

  test_body

  kill_all_ports
}

# main flow here
main
