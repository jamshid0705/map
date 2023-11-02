// import { User } from "./User";
// import { Company } from "./Company";
// console.log(new User())
// console.log(new Company())
///<reference types="@types/google.maps" />
new google.maps.Map(document.getElementById('map') as HTMLElement,{
    zoom:1,
    center:{
        lat:0,
        lng:0
    }
})