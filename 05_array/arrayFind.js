// array.find(callback function): return first matching element

let booksList = [
    {title:'Elequent Javascript',Author:'Marjin haverbeke'},
    {title:'JavaScript & JQuery',Author:'Jon Duckett'},
    {title:'JavaScript: The Good Parts',Author:'Douglas Crockford'},
    {title:'Learn JavaScript VISUALLY',Author:'Ivelin Demirov'},
    {title:'JavaScript: The Definitive Guide',Author:'David Flanagan'},
    {title:'Effective JavaScript',Author:'David Herman'},
    {title:'JavaScript for Kids',Author:'Nick Morgan'},
    {title:'Programming JavaScript Applications',Author:'Eric Elliott'},
    {title:'High-Performance Browser Networking',Author:'Ilya Grigorik'},
    {title:'You Don’t Know JS',Author:'Kyle Simpson'},
    {title:'Beginning JavaScript',Author:'Jeremy McPeak'},
  ]
  
let kyleBook = booksList.find((book) => {
    return book.Author == "Kyle Simpson";
  })

console.log(kyleBook); // {title: 'You Don’t Know JS', Author: 'Kyle Simpson'}