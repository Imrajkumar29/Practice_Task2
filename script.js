const fetchdata =async() =>{

    const response =await fetch('https://www.anapioficeandfire.com/api/books');
    const bookdetails =await response.json();
    console.log(bookdetails);
    return bookdetails;
  }
window.addEventListener('DOMContentLoaded',async()=>{
    let bookdata = {};
    let tableData=" ";
    let tableHead=" ";
    try{
        bookdata =await fetchdata();


        Object.keys(bookdata[0]).forEach(function printhead(cvalue,cindex){
          tableHead=`<tr><th>${cindex}</th></tr>`;
        }
          );


        
        bookdata.map((values)=>{
          tableData+=`<tr>
          <td>${values.name}</td>
          <td>${values.isbn}</td>
          <td>${values.numberOfPages}</td>
          <td>${values.authors}</td>
          <td>${values.publisher}</td>
          <td>${values.released}</td>
      </tr>`;
          console.log(`tableData is ${tableData}`);
      });
    
      document.getElementById("table_body").innerHTML=tableData;

        for (var key1 in bookdata)
        {
          for (var key2 in bookdata[key1])
          {
            console.log('The value of '+key2+ ' is '+bookdata[key1][key2]);
          }
        }
    }
    catch(e)
    {
        console.log("Error");
        console.log(e);
    }
});
