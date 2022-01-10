import React from 'react';
import { FormControl, FormLabel, Text, Input, Button } from '@chakra-ui/react'

function RegisterForm() {
    const [firstname, setFirstname] = React.useState("");
    const [firsterror, setFirstError] = React.useState(null);

    const [lastname, setLastname] = React.useState("");
    const [lasterror, setLastError] = React.useState(null);

    const [email, setEmail] = React.useState("");
    const [emailerror, setEmailError] = React.useState(null);

    const [mobile, setMobile] = React.useState("");
    const [mobileerror, setMobileError] = React.useState(null);
  
    function handleSubmit(event) {
      event.preventDefault();
      setFirstError(null);
      setFirstname("");
      setLastError(null);
      setLastname("");
      setEmailError(null);
      setEmail("");
      setMobileError(null);
      setMobile("");
    }
  
    function firtnameHandleChange(event) {
      const firstnamevalue = event.target.value;
      if (!firstnamevalue.match(/^[a-zA-Z ]*$/)) setFirstError("Please input valid characters in your first name.");
      else setFirstError(null);
      setFirstname(firstnamevalue);
    }
  
    function lastnameHandleChange(event) {
        const lastnamevalue = event.target.value;
        if (!lastnamevalue.match(/^[a-zA-Z ]*$/)) setLastError("Please input valid characters in your last name.");
        else setLastError(null);
        setLastname(lastnamevalue);
    }

    function emailHandleChange(event) {
        const emailvalue = event.target.value;
        if (!emailvalue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) setEmailError("Please input a valid email address.");
        else setEmailError(null);
        setEmail(emailvalue);
    }

    function mobileHandleChange(event) {
        const mobilevalue = event.target.value;
        if (!mobilevalue.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im)) setMobileError("Please input a valid mobile number.");
        else setMobileError(null);
        setMobile(mobilevalue);
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
            
            <FormControl isRequired>
                <FormLabel htmlFor="firstname" mt={5}>First Name</FormLabel>  
                <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    onChange={firtnameHandleChange}
                    value={firstname}
                />
                {firsterror && (
                    <Text style={{ color: "red" }} htmlFor="firstname">
                    {firsterror}
                    </Text>
                )}
            </FormControl>
            

            <FormControl isRequired>
                <FormLabel htmlFor="lastname" mt={5}>Last Name</FormLabel>  
                <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    onChange={lastnameHandleChange}
                    value={lastname}
                />
                {lasterror && (
                    <Text style={{ color: "red" }} htmlFor="lastname">
                    {lasterror}
                    </Text>
                )}
            </FormControl>
            
            <FormControl isRequired>
                <FormLabel htmlFor="email" mt={5}>Email</FormLabel>  
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={emailHandleChange}
                    value={email}
                />
                {emailerror && (
                    <Text style={{ color: "red" }} htmlFor="email">
                    {emailerror}
                    </Text>
                )}
            </FormControl>
            
            
            <FormControl isRequired>
                <FormLabel htmlFor="mobile" mt={5}>Mobile Number</FormLabel>  
                <Input
                    id="mobile"
                    name="mobile"
                    type="text"
                    onChange={mobileHandleChange}
                    value={mobile}
                />
                {mobileerror && (
                    <Text style={{ color: "red" }} htmlFor="mobile">
                    {mobileerror}
                    </Text>
                )}
            </FormControl>

            <div className="text-sm mt-6 text-gray-600">
                <p><span className="text-red-700">*</span> Field is required.</p>
            </div>

            <div className="flex justify-center items-center mt-8 mb-4">
                <Button variant='solid' className="bg-red-700" colorScheme="red-700" px={20} py={5}>
                    SUBMIT
                </Button>
            </div>
        </form>
      </>
    );
  }


export default RegisterForm