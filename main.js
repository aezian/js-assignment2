/************* Home Work 1*********************************************************************************************************/
const date = new Date();
const dayIndex = date.getDay();

const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const today = weekDays[dayIndex];


  function myFunction() {
      let x = Number(document.getElementById("myNumber").value);
      const meetingDateIndex = (x+dayIndex)%7;
      document.getElementById("demo1").innerHTML = 'Today is : ' +today;
      document.getElementById("demo2").innerHTML = 'How many days to meet : ' +x;
      document.getElementById("demo3").innerHTML = 'We are meeting on : ' +weekDays[meetingDateIndex];
  }


/**********************Home Work2*******************************************************************************************************/
/*const student = {address:'Copenhagen', postCode:'2700', course: 'Java Script', grade(){return Math.floor((Math.random() *(35)) + 60);}}*/

const std1 = {firstName: 'Ehsan', lastName:'Mansoor', grade:'', telephone:'71727407',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std2 = {firstName: 'Anas', lastName:'Aqrabawi', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std3 = {firstName: 'Anuradha', lastName:'Mohanti', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std4 = {firstName: 'Gary', lastName:'Aldahoul', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std5 = {firstName: 'Hareetha', lastName:'Alsheikh', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std6 = {firstName: 'Krishna', lastName:'Rana', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std7 = {firstName: 'Marco', lastName:'De-Cara', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std8 = {firstName: 'Muhammad', lastName:'Subiyeh', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std9 = {firstName: 'Muhammad', lastName:'Azizul', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std10 = {firstName: 'Muhammad', lastName:'Rehman', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std11 = {firstName: 'Sajid', lastName:'Nazir', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std12 = {firstName: 'Samara', lastName:'Sallam', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std13 = {firstName: 'Zoey', lastName:'Zou', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std14 = {firstName: 'Syed Zeeshan', lastName:'Haider', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}
const std15 = {firstName: 'Vignesh', lastName:'Ram', grade:'', telephone:'',address:'Copenhagen', postCode:'2700', course: 'Java Script'}

const HYF06 = [std1,std2,std3,std4,std5,std6,std7,std8,std9,std10,std11,std12,std13,std14,std15];//student Array List
function grade(){return Math.floor((Math.random() *(35)) + 60);}// assigning grades on student array list
for(i=0; i<HYF06.length; i++){HYF06[i].grade = grade()}
/*****getting F-NAMES HYF06 objects array list***************/

var fnam = [];
for (var i = 0; i < HYF06.length; i++)
{fnam.push(HYF06[i].firstName);}

/*****getting  L-Name HYF06 objects array list***************/

var lnam = [];
for (var i = 0; i < HYF06.length; i++)
{lnam.push(HYF06[i].lastName);}

/*****getting grades HYF06 objects array list***************/
var z = [];
for (var i = 0; i < HYF06.length; i++)
{z.push(HYF06[i].grade);}

/****printing array of grades******code taken from w3school*/
var text, i;
text = "<ul>";
for (i = 0; i < z.length; i++) {
    text += "<li>" + fnam[i]+' '+lnam[i]+' grade is :'+z[i] + "</li>";
}
text += "</ul>";
document.getElementById("gradedemo").innerHTML = text;

/**********Average Function*************/

function mean(z) {
const total = z.reduce((a, b) => a + b);
return total/z.length;
}
const averge = mean(z);

document.getElementById('averagedemo').innerHTML = averge;

/************Lowest value in greades*************/

const min = z.reduce((a,b)=>Math.min(a,b));
document.getElementById('averagelowestdemo').innerHTML = min+' showing with (reduce and math.min) Function';

     /**Another Way****/

const newGradeArray = [];
for (var i = 0; i < HYF06.length; i++)
{newGradeArray.push(HYF06[i].grade);}
function numerically(a,b){return a-b;}
newGradeArray.sort(numerically);
document.getElementById('averagelowestdemo1').innerHTML = newGradeArray[0]+' showing with (sort) method';

/********displaying student name with lowest grade******/


  for (var i = 0; i < HYF06.length; i++){
    if (HYF06[i].grade== min) {
        var x =  HYF06[i].firstName+' '+HYF06[i].lastName+' has a lowest grade in class with grade : '+HYF06[i].grade +' (good work.. will be future star i guess)';
    }
  }
document.getElementById('stdlg').innerHTML = x;

/************highest value in greades*************/

const max = z.reduce((a,b)=>Math.max(a,b));
document.getElementById('averagehighestdemo').innerHTML = max+' showing with (reduce and math.min) Function';

/********displaying student name with highest grade******/


  for (var i = 0; i < HYF06.length; i++){
    if (HYF06[i].grade== max) {
        var x =  HYF06[i].firstName+' '+HYF06[i].lastName+' has a highest grade in class with grade : '+HYF06[i].grade +' (Excellent! superb work)';
    }
  }
document.getElementById('stdhg').innerHTML = x;

/**********************Home Work3*******************************************************************************************************/
var number = [];
number=(Array(1000).fill(0).map((e,i)=>i+1));
for(var i=1; i<=number.length; i++){
  if(number[i]%3==0 && number[i]%15!==0)
  {number[i]='fizz';}
  else if(number[i]%5==0 && number[i]%15!==0)
  {number[i]='buzz';}
  else if(number[i]%15==0)
  {number[i]='buzzfizz';}
}
var numstring = number.join();
document.getElementById('getNum').innerHTML= numstring;

/**********************Home Work3*******************************************************************************************************/

for(var i = 1; i <= 6; i++) {

      for(var j = 1; j<= i; j++) {

        document.write("*");

      }

      document.write("<br/>");
}
