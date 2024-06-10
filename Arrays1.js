// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

let favouriteSongs=[];
favouriteSongs.push("stay with me","shape of you","dandelions")
console.log(favouriteSongs)
console.log(favouriteSongs[favouriteSongs.length-1])
favouriteSongs.pop();
console.log(favouriteSongs)






//output
['stay with me', 'shape of you', 'dandelions']
dandelions
['stay with me', 'shape of you']
