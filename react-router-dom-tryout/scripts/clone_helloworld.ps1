# Xcopy /E /I  helloworld restaurant_cms_helloworld

rmdir /s /q react_router_dom_helloworld
robocopy ts_helloworld_tryout react_router_dom_helloworld /MIR /XD "node_modules"

pushd react_router_dom_helloworld
  yarn --dev
  