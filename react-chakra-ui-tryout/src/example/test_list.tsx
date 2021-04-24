import React from 'react'
import { Stack } from '@chakra-ui/react'
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'

import { MdCheckCircle, MdSettings } from 'react-icons/md'

function ExampleTestList() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>

        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={MdSettings} color="green.500" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
        </List>
      </Stack>
    </>
  )
}

export default ExampleTestList
