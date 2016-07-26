var lin;
var fs = require('fs'),
   readline = require('readline');

var rd = readline.createInterface({
   input: fs.createReadStream('Indicators.csv'),
   output: process.stdout,
   terminal: false
});
var delta=1,k=0;
var obj1=[];
var obj=[];
rd.on('line', function(line) {
        lin=line;
       temp=lin.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
       if(delta==1)
       {
           header=temp;
           delta=0;
       }
       if(temp[4]==2010)
       {
          if(temp[2]=='"Life expectancy at birth, total (years)"')
          {
            //   console.log(temp[0]);
              var camp=new Object();
              camp.cname=temp[0];
              camp.LE_total=temp[5];
              obj1[obj1.length]=camp;
          }
       }
   });
rd.on('close',function(){
    obj1.sort(function(a,b){
        return b.LE_total-a.LE_total;
    });

    for(i=0;i<5;i++)
    {
        obj[i]=obj1[i];
    }
    console.log(obj);
    var random=JSON.stringify(obj);
    fs.appendFile('out1.json',random);
});
