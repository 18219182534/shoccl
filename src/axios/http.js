import axios from "axios"
// export function request(config) {
//
//     const instance=axios.create({
//         baseURL:"http://112.74.99.5:3000/web/api",
//         //baseURL:"https://danceimgdev.xvfin.com",
//         timeout:5000,
//         method:'post'
//     })
//     return instance(config)
// }
const http=axios.create({
  baseURL:"http://danceimgdev.xvfin.com"
})
http.interceptors.response.use(res=>{
  //console.log(res);
  return res

},err=>{
  console.log(err);

})
export default http
