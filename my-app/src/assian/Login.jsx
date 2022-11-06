import { Container, FormControl, FormHelperText, FormLabel, Input, StylesProvider, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./Main.module.css"
const Login = () => {
    const [data,setData] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
         if(data.email=="foo" && data.password=="bar"){
            localStorage.setItem("token",JSON.stringify("foo1Token2bar"))
            navigate("/")
        } 
      }
      const handleChange = (e)=>{
        
        const {name , value} = e.target;
        setData({
            ...data,
          [name]:value,
        })
        console.log(data)
      }

    return (
        <Container marginTop="50px">
            <form  onSubmit={handleSubmit} className={styles.FormDiv}>
                <Text fontSize="2xl" align="center">LOG IN</Text>
            <FormControl >
                <FormLabel>Email address</FormLabel>
                <Input name='email' onChange={handleChange}/>
                </FormControl>
                <FormControl >
                <FormLabel>Password</FormLabel>
                <Input type='password' name='password' onChange={handleChange}/>
                <FormHelperText>Please fill password in small charechter.</FormHelperText>
                </FormControl>
                <Input marginBottom="20px" type='submit' className={styles.bTn} value="Submit" />
            
            </form>
        </Container>
    )
}

export default Login
