var fs = require('fs');

var content =[];

var ns=fs.createReadStream('Indicator.csv','utf-8');

var ws=fs.createWriteStream('new3.csv');

ns.on('data',function(test){

  var lines=test.toString().split(/\s*\r\n\s*/);

  for(var i=0;i<lines.length;i++){
      content.push(lines[i].toString().split(","));
  }
  console.log(content);

  ns.pipe(ws);
})


.on("end",function(){

  console.log("Finish");

});







//backup on 25/7 morning

         temp=lin.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
         console.log(temp);

        if(temp[2]=='"Life expectancy at birth, male (years)"')
        {
           obj1.forEach(function(m){
               if((m.year==temp[4])&&((m instanceof Con_m)==true))

                     m.lemale+=temp[5];
           });

           obj1[k++]= new Con_m(temp[5],temp[4]);
        }
   /* else if (temp[2]=='"Life expectancy at birth, female (years)"')
    {
        obj[k++]={ 'CountryName':temp[0], 'Life expectancy at birth, female (years)' :temp[5], 'Year' :temp[4]}
    }
    else if (temp[2]=='"Life expectancy at birth, total (years)"')
    {
        //obj[k++]={ 'CountryName':temp[0], temp[2] :temp[5], header[4] :temp[4]}
    }*/
