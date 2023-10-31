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
            <Link to={`/category/${"men's clothing"}`}>
                <MenuItem>Pantalones</MenuItem>
            </Link>
            <Link to={`/category/${"women's clothing"}`}>
            <MenuItem>Camisas</MenuItem>
            </Link>
            <Link to={`/category/${"jewelery"}`}>
            <MenuItem>Zapatos</MenuItem>
            </Link>
            <Link to={`/category/${"electronics"}`}>
            <MenuItem>Reloj</MenuItem>
            </Link>
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