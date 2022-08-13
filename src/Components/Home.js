import React,{useState} from 'react';
import {AppBar,ListItem,Toolbar,Typography,TextField,Container,Card,CardContent,CardMedia,CssBaseline,Grid} from '@mui/material'
import FileBase64 from 'react-file-base64';
const Home = () => {
    const [listingData,setListingData]=useState([])
    const add=(base64) => {
      console.log(base64[0].base64)
        var msgs=base64[0].base64
        console.log(msgs)
        setListingData([ ...listingData, {
            selectedFile: base64,
            message:msgs
        }])
    }
    console.log(listingData[0])
    return ( 
        <Container>
       <CssBaseline/>
       <AppBar   maxwidth="md"  >
        <Toolbar>
    <Typography variant="h3" color="inherit" component="div"  m={2}>
      PHOTOS-ALBUMS
    </Typography>
  </Toolbar>
</AppBar>
<Grid item mt={15} sm={12} md={12} xs={12}>
<Grid >
<TextField 
id="standard-basic" 
label="Message" 
variant="standard" 

className='Msg' 
margin="dense"/>
</Grid>
<Grid mt={2}>
<FileBase64 
type="file" 
multiple={true} 
onDone={add}/>
</Grid>
</Grid>
<Grid mt={4}>
<Grid container spacing={{ xs: 2, md: 3 }} rows={{ xs: 4, sm: 6, md:12  }} direction='row' >
  {listingData.map((_, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card>
         <CardMedia />
         <CardContent>
  
        </CardContent>  
      </Card>
    </Grid>
  ))}
</Grid>
</Grid>
</Container>
);
}
export default Home;