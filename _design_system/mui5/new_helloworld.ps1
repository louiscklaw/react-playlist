remove-item -R -Force workbox-tryout

pushd helloworld-tryout
  remove-item -R -Force node_modules
popd

Robocopy  helloworld-tryout workbox-tryout /E
  