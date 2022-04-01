Remove-Item -R -Force ts_helloworld_tryout

npx create-react-app ts_helloworld_tryout --template typescript

pushd ts_helloworld_tryout
  yarn add typescript @types/node @types/react @types/react-dom @types/jest

  yarn start
  