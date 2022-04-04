# Xcopy /E /I  helloworld restaurant_cms_helloworld

rmdir /s /q tailwind_elements_helloworld_tryout

robocopy react-tailwind-helloworld-tryout tailwind_elements_helloworld_tryout /MIR /XD "node_modules"
