foreach ($item in (gci -Name *tryout)) { 
  Write-Host $item 
  pushd $item
    # yarn --dev
    yarn add @mui/material @emotion/react @emotion/styled
    yarn add @mui/icons-material
  popd

}                      
