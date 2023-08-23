import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import Button from '@mui/material/Button';

import Divider from '@mui/material/Divider';
import axios from 'axios';



const Form1 = () => {

  const defaultValues =  {
       
        prefix: "",

        first_name: "" ,

        middle_name: "",

        last_name: "",

        suffix: "",

        ssn: "",

        home_number: "",

        mobile_number: "",

        email: "",

        address_line_2: "1063 Casitas Pass Rd ",

        address_line_1: "1063 Casitas Pass Rd ",

            city: "Carpinteria",

            state_id: 1,

            state_name: "",

            zip_code: 93013,

            county: "pak",

            move_in_duration: "",

            address_type: "Mailing",

            move_in_date: {

                "month": 12,

                "year": 14

            }
    }
    

  useEffect(()=>{
    
    const getData =  async() =>{
      try{  let resp = await axios.get('https://jsonplaceholder.typicode.com/users/1' )
                //  setdefaultValues(prev=> ({...prev,first_name:resp.data.name } ))

                //  console.log(resp)

                reset({...defaultValues,first_name:resp.data.name})


        
    }
 catch(e){
            // console.log(e);
        }
    }
  getData()

  // console.log(defaultValues)
  },[])

  


    const {
        handleSubmit,
        register,
        reset,
        control,
        formState: { errors }
      } = useForm({defaultValues });

      console.log(errors)

      const onSubmit = (data) => {
        // console.log(data)

   let payload = {

    customer_profile: {

        prefix: data.prefix,

        first_name: data.first_name,

        middle_name: data.middle_name,

        last_name: data.last_name,

        suffix: data.suffix,

        ssn: data.ssn,

        home_number: data.home_number,

        mobile_number: data.mobile_number,

        email: data.email,

        created_by: "Netsol",

        updated_by: "Netsol"

    },

    customer_addresses: [

        {

            address_line_1:data.address_line_1,

            city: data.city,

            state_id: data.state_id,

            state_name: "California",

            zip_code: data.zip_code,

            county: data.county,

            move_in_duration: "",

            address_type: "Mailing",

            move_in_date: {

                month: 12,

                year: 14

            }

        },

        {

            address_line_1: data.address_line_1,

            city: data.city,

            state_id: data.state_id,

            state_name: "California",

            zip_code: data.zip_code,

            county: data.county,

            move_in_duration: "",

            address_type:"Garaging"

        }

    ]

}



        async function addData(payload){
           try{
            
            let resp = await axios.post('https://dummy.restapiexample.com/api/v1/create',{name:data.first_name,salary:"123",age:"23"});
         
        // console.log(resp)
        }
        catch(e){
            console.log(e);
        }
        }
        addData(payload)
      };
    
  return (
    <><Box sx={{mx:5}}>

    <form onSubmit={handleSubmit(onSubmit)}>
    <Grid container rowSpacing={1} >
        <Grid item xs={12} justifyContent="flex-start"> 
        <Typography variant='h5'> Contact details </Typography>
        </Grid>


<Grid container item columnSpacing={1} columns={15}>
        <Grid item xs={3}>
            <Box >

       <Box> <label>Prefix (Optional)</label> </Box>
            <Controller
              render={({ field }) => (
                <Select {...field} size="small" fullWidth>
                  <MenuItem value={"10"}>Ten</MenuItem>
                  <MenuItem value={"20"}>Twenty</MenuItem>
                  <MenuItem value={"30"}>Thirty</MenuItem>
                </Select>
              )}
              name="prefix"
              control={control}
            />

</Box></Grid>

<Grid item xs={3}> 
    <Box>
    <Box>
<label>First Name</label> </Box>
            <Controller
              render={({ field: { ref, ...field } }) => <TextField {...field} inputRef={ref} size="small" fullWidth error={!!errors.first_name} helperText={(!!errors.first_name)? "Field Required":'' }  />}
              name="first_name"
              control={control}
              rules={{
                required:true
              }}  />

</Box>     
</Grid>

<Grid item xs={3}> 
    <Box>
    <Box>
<label>Middle Name</label> </Box>
            <Controller
              render={({ field }) => <TextField {...field} size="small" fullWidth/>}
              name="middle_name"
              control={control}
            />

</Box>     
</Grid>


<Grid item xs={3}> 
    <Box>
    <Box>
<label>Last Name</label> </Box>
            <Controller
              render={({ field }) => <TextField {...field} size="small" fullWidth/>}
              name="last_name"
              control={control}
            />

</Box>     
</Grid>


<Grid item xs={3}> 
    <Box>
    <Box>
<label>Suffix (Optional)</label> </Box>
            <Controller
              render={({ field }) => <TextField {...field} size="small" fullWidth/>}
              name="suffix"
              control={control}
            />

</Box>     
</Grid>

</Grid>


<Grid container item columnSpacing={1}>

<Grid item xs={12}> 
    <Box>
    <Box>
<label>Security Contact</label> </Box>
            <Controller
              render={({ field }) => <TextField {...field} size="small" fullWidth/>}
              name="ssn"
              control={control}
            />

</Box>     
</Grid>

</Grid>


<Grid container item columnSpacing={1}>

<Grid item xs={3}> 
    <Box>
    <Box>
<label>Home phone Number</label> </Box>
            <Controller
              render={({ field }) => <TextField {...field} size="small" fullWidth/>}
              name="home_number"
              control={control}
            />

</Box>     
</Grid>


<Grid item xs={3}> 
    <Box>
    <Box>
<label>Mobile Phone Number</label> </Box>
            <Controller
              render={({ field }) => <TextField {...field} size="small" fullWidth/>}
              name="mobile_number"
              control={control}
            />

</Box>     
</Grid>

</Grid>


<Grid container item> 
<Grid item xs={12}> 
    <Box>
    <Box>
<label>Email</label> </Box>
            <Controller
              render={({ field }) => <TextField {...field} size="small" fullWidth/>}
              name="email"
              control={control}
            />

</Box>     
</Grid>
</Grid>


<Grid item xs={12}> <Divider></Divider></Grid> 


<Grid container item> 
<Grid item xs={12}> 
    <Box>
    <Box>
<label>Address Line 1</label> </Box>
            <Controller
              render={({ field }) => <TextField {...field} size="small" fullWidth/>}
              name="address_line_1"
              control={control}
            />

</Box>     
</Grid>
</Grid>




<Grid container item> 
<Grid item xs={12}> 
    <Box>
    <Box>
<label>Address line 2</label> </Box>
            <Controller
              render={({ field }) => <TextField {...field} size="small" fullWidth/>}
              name="address_line_2"
              control={control}
            />

</Box>     
</Grid>
</Grid>


<Grid container item columnSpacing={1}>
<Grid item xs={3}> 
    <Box>
    <Box>
<label>City</label> </Box>
            <Controller
              render={({ field }) => <TextField {...field} size="small" fullWidth/>}
              name="city"
              control={control}
            />

</Box>     
</Grid>

<Grid item xs={3}>
            <Box >

       <Box> <label>State</label> </Box>
            <Controller
              render={({ field }) => (
                <Select {...field} size="small" fullWidth>
                  <MenuItem value={1}>one</MenuItem>
                  <MenuItem value={2}>two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                </Select>
              )}
              name="state_id"
              control={control}
            />

</Box></Grid>

<Grid item xs={3}> 
    <Box>
    <Box>
<label>Zip Code</label> </Box>
            <Controller
              render={({ field }) => <TextField {...field} size="small" fullWidth/>}
              name="zip_code"
              control={control}
            />

</Box>     
</Grid>

</Grid>

<Grid container item>
<Grid item xs={3}>
            <Box >

       <Box> <label>Country</label> </Box>
            <Controller
              render={({ field }) => (
                <Select {...field} size="small" fullWidth>
                  <MenuItem value="pak">Ten</MenuItem>
                  <MenuItem value="us">Twenty</MenuItem>
                  <MenuItem value="uk">Thirty</MenuItem>
                </Select>
              )}
              name="county"
              control={control}
            />

</Box></Grid>


    
</Grid>

<Grid container  justifyContent="flex-end">
    <Grid item > <Button variant="contained" type="submit"> Save & Continue</Button></Grid>

</Grid>


    </Grid>
    </form>
    </Box>
    </>
  )
}

export default Form1