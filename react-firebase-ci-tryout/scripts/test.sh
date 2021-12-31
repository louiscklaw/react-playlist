#!/usr/bin/env bash

BROWSER=none
CI=1

set -e


installFirebaseTools(){
  killall firebase | true
  
  curl -sL https://firebase.tools | upgrade=true bash
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
  kill_ports 8002
  kill_ports 8003
  kill_ports 8004

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
  wait_ports localhost:8002
  wait_ports localhost:8003
  wait_ports localhost:8004

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

start_react_client () {
  export PORT=8002
  export BROWSER=none

  pushd client
    yarn --dev
    yarn start &
  popd

}

start_react_CMS () {
  export PORT=8003
  export BROWSER=none

  pushd CMS
    yarn --dev
    yarn start &
  popd

}

start_react_admin () {
  export PORT=8004
  export BROWSER=none

  pushd admin
    yarn --dev
    yarn start &
  popd

}

prepare_test () {
  start_react_client
  start_react_admin
  start_react_CMS

  pushd firebase
    pushd functions
      npm install
    popd

    npm install
    nice firebase emulators:start &
  popd
}

test_client (){
  echo 'test here ?'
  pushd client
    yarn --dev
    yarn test
  popd
  echo 'test done'
}

test_admin (){
  echo 'test here ?'
  pushd admin
    yarn --dev
    yarn test
  popd
  echo 'test done'
}

test_CMS (){
  echo 'test here ?'
  pushd CMS
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

  test_client
  test_admin
  test_CMS

  # e2e
  pushd tests/e2e
    scripts/test.sh
  popd

  kill_all_ports
}

# main flow here
main
