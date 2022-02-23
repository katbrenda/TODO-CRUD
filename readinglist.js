
const originalReadingList = [
    { id: 1, toread: "Book1", completed: false}, 
    { id: 2, toread: "Book2", completed: true},
];

const newRead = { id:3, toread: "Book3", completed: false }

let newReadingList = [...originalReadingList, newRead]

console.log(originalReadingList);
console.log(newReadingList);

let updatedTodos = originalReadingList.map((toRead)=>{

    if(toRead.id === 2){
        return{...toRead, completed: !toRead.completed}
    }
})