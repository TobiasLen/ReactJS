import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
return (
    <div>

<Flex bg='#b5838d'>
    <Box borderRadius='5' p='4' bg='#6d6875'>
        <Link to={"/"}>
        <h1>Un Ecommerce Más</h1>
        </Link>
    </Box>
    <Spacer />
    <Box borderRadius='5' p='4' bg='#6d6875'>
    <Menu>
        <MenuButton>
            Categoria
        </MenuButton>
        <MenuList borderRadius='5'  p='4' bg='#6d6875'>
            <MenuItem>Pantalones</MenuItem>
            <MenuItem>Camisas</MenuItem>
            <MenuItem>Zapatos</MenuItem>
            <MenuItem>Reloj</MenuItem>
        </MenuList>
    </Menu>

    </Box>
    <Spacer />
    <Box w='14' borderRadius='5' p='4' bg='#6d6875'>
        <Link to={"/Cart"}>
            <CartWidget />
        </Link>
    </Box>
</Flex>

    </div>
)
}

export default NavBar