var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function(){

        var data = JSON.parse(request.response);
        //console.log(data); 

        for(var i in data){
            //write the code to get all the countries name.
           
            console.log(data[i].name);

            //write the code to get continents of all the countries.
            //console.log(data[i].continents);

        }



    //Day 4 task
    //2nd Question Answer in task  

     for(var i in data)
        {
        
        console.log(data[i].flags);

        }
    
    //3rd Question Answer in task

   /*  for(var i=0; i<data.length; i++){

        console.log(data[i].capital, data[i].region, data[i].subregion, data[i].population);

    } */
     
}