remove-item -R -Force react-mui5-tryout

pushd react-helloworld-tryout
  remove-item -R -Force node_modules
popd

Robocopy  react-helloworld-tryout react-mui5-tryout /E
  