import { Box, Button, Flex, Heading, Image, Spinner, Text, VStack } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from "./Main.module.css"

import React, { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const navigate = useNavigate();
    const loginPath = () => {
        navigate("/login")
    }
    // const getData = async()=>{

    // }
    const PAGE_LIMIT = 10;
    const getData = async () => {
        let pageno = Math.ceil(data.length / PAGE_LIMIT) + 1;
        let res = await fetch(`https://randomuser.me/api/?page=${pageno}&results=10`);
        let d = await res.json();

        var dt = d.results
        const mdata = [...data, ...dt]
        setData(mdata)
        console.log(dt)
        
    }
    const fetchMoreData = async () => {

        setTimeout(() => {
            getData()
        }, 1000)
    }
    useEffect(() => {
        getData()
    }, [])
    var token = localStorage.getItem("token");
    console.log(token)
    return token ? (
        <Box w="100%">
            <InfiniteScroll
                w="100%"
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<Flex direction="column" justifyContent="center" align="center">
                    <Text>Please Wait...</Text>
                    <Spinner
                       
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </Flex>}
            >

                {data.map((el, index) => {
                    return (
                        <Flex p="2" borderBottom="solid 1px whitesmoke" key={index} align="center" justifyContent="space-between" w="100%">
                            <Flex borderRadius='full' align="center" justifyContent="center" boxSize='70px' bg="whitesmoke">
                                <Text textAlign="center">{el.name.first[0]}</Text>
                            </Flex>
                            <Box>
                                <Text>{el.name.title} {el.name.first} {el.name.last}</Text>
                            </Box>
                            <Box paddingRight="20px">
                                <Image borderRadius='full' boxSize='70px' src={el.picture.large} alt='Dan Abramov' />
                            </Box>
                        </Flex>
                    )
                })}
            </InfiniteScroll>
        </Box>
    ) : (
        <Flex m="50px" p='2' direction="column" align="center"  >
            <Heading size='md'>If you want to see the content then first login</Heading>
            <Button className={styles.bTn} colorScheme='teal' onClick={loginPath}>Log in</Button>
        </Flex>
    )
}

export default Home
