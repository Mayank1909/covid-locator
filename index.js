function updateMap(){
fetch("./data.json")
.then(response=>response.json())
.then(rsp=>{
    console.log(rsp.data);
    rsp.data.forEach(element =>{
        latitude=element.latitude;
        longitude=element.longitude;
        cases=element.infected;
        if(cases>250){
        color="rgb(255,0,0)";}
        else{
        color=`rgb(${cases},200,0)`;}


   
     new mapboxgl.Marker({
        draggable: false,
        color:color
        })
        .setLngLat([longitude,latitude])
        .addTo(map);
    });
})
}
updateMap();