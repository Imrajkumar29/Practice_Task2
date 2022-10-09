var jsonStudentMarks = {
    Student1:{
    Maths: [11, 12, 13, 14, 15],
    English: [21, 22, 23,24,25],
    History: [31, 32,33,34,35]
    },
    Student2:{
        Maths: [41, 42, 43, 44, 45],
        English: [51, 52, 53,54,55],
        History: [61, 62,63,64,65]
        }
 };
 var tempvar='';
 
 console.log('length of  key jsonStudentMarks '+Object.keys(jsonStudentMarks).length);
console.log('printing values using for,for in loop')
 // for loop
 for (var i =0; i<Object.keys(jsonStudentMarks).length;i++)
 {
    tempvar = Object.keys(jsonStudentMarks)[i];
    console.log('printing marks of'+tempvar);
    for(var key in jsonStudentMarks[tempvar]){    
    for(var j=0;j<jsonStudentMarks[tempvar][key].length;j++)
    {
        console.log(j+1 +' term '+key+ ' mark is '+ jsonStudentMarks[tempvar][key][j]);
    }
}
 }

console.log('print values using for in, for each');
function printmarks(cvalue,cindex)
{
    console.log(cindex+1 + ' term '+key2+ ' mark is ' + cvalue);
}
for (var key1 in jsonStudentMarks)
{
    //Object.values(jsonStudentMarks[key1]).forEach(printmarks);
    console.log('printing marks of'+key1);
    for (var key2 in jsonStudentMarks[key1])
    {
        jsonStudentMarks[key1][key2].forEach(printmarks);
    }
}

console.log('print values using for of loop');
var k=0;
var positr=0;
var keypos='';
for (var x of Object.keys(jsonStudentMarks))
{
console.log(x);
positr=0;
for (var y of Object.values(jsonStudentMarks[x]))
{
    keypos =Object.keys(jsonStudentMarks[x])[positr];
        console.log(y);
        k=0;
    for (var z of y)
    {
        console.log(k+1+' term '+ keypos +' marks '+z)
        k++
    }
    positr++;    
}
}
