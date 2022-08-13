import axios from "axios";
export const Getdata = async () => {
  const response = await axios.get('http://localhost:5000/api/photos')
  .then(response =>{
    console.log(response)
  })
  .catch(err => {
    console.log(err.message)
  })
    return response;
}
 