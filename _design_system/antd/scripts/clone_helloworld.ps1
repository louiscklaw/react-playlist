# Xcopy /E /I  helloworld restaurant_cms_helloworld

rmdir /s /q ts_craco_helloworld_tryout
robocopy ts_helloworld_tryout ts_craco_helloworld_tryout /MIR /XD "node_modules"
