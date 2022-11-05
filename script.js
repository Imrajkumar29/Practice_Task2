const fetchdata =async() =>{
    const response =await fetch('https://www.anapioficeandfire.com/api/books');
    const bookdetails =await response.json();
    console.log(bookdetails);
    return bookdetails;
  }
window.addEventListener('DOMContentLoaded',async()=>{
    let bookdata = {};
    try{
        bookdata =await fetchdata();
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

