foreach ($item in (gci -Name react*)) { 
  Write-Host $item 
  pushd $item
    yarn --dev
  popd

}                      

