import React from 'react'
import { Stack } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function ExampleTestIconButton() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
      </Stack>
    </>
  )
}

export default ExampleTestIconButton
