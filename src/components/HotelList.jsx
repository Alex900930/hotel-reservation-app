import {useQuery} from "@tanstack/react-query";
import {Card, CardActions, CardMedia, Button, CardContent, Stack, Typography} from "@mui/material";
import {Link} from "wouter";

import hotelsData from '../../db.json';

/*const fetchHoteles = async () => {
  const res = await fetch("http://localhost:3001/hotels");
  if(!res.ok){
    throw new Error("Network response was not OK");
  }
  return res.json();
}*/

function HotelList(){
  /*const {
    data: hotels,
    isLoading,
    error,
  } =
  useQuery({
    queryKey: ["hotels"], queryFn: fetchHoteles
  });

  if(isLoading){
    return <di>Loading...</di>
  }

  if(error){
    return <div>Error fetching Hotels! {error.message}</div>
  }
*/
const hotels = hotelsData.hotels;
 return (
   <>
     <Typography variant="h4" component="h2">
       Booking App
     </Typography>
     <Stack spacing={2}>
       {hotels.map(hotel => (
         <Link key = {hotel.id} href={`/hotel/${hotel.id}`} >
           <Card sx={{maxWidth: 345, backgroundColor: "#e8e8e8"}}>
            <CardMedia
               sx= {{height: 140}}
              image = {hotel.img}
             title = {hotel.name}
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 {hotel.name}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                 { hotel.description}
               </Typography>
             </CardContent>
             <CardActions>
               <Button size= "small">See Details</Button>
             </CardActions>
           </Card>
         </Link>
       ))}
     </Stack>

   </>
 )
}

export default HotelList;