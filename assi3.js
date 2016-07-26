var myObj =

[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},

{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},

{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},

{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},

{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},

{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var len	=	myObj.length;

var i;
function One(){
  this.teamleader=[];
  this.programmer=[];
};
var one	= new One();
var p=0;
var t=0;
for (i=0;i<len;i++)
  {
    if(myObj[i].occupation==="Programmer")
      {
        one.programmer[p++]={'name':myObj[i].name,'age':myObj[i].age};
      }
    else if(myObj[i].occupation==="Team Leader")
      {
        one.teamleader[t++]={'name':myObj[i].name,'age':myObj[i].age};
      }
  }
    console.log(one);
