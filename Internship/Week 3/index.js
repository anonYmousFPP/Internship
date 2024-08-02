// using callback
// fetch('https://retoolapi.dev/WgovZC/data')
//     .then(function(response){
//         response.json()
//             .then(function(finalData){
//                 console.log(finalData);
//             })
//     })


// using Promise
// const readApiThroughPromise = new Promise(function(resolve, reject) {
//     fetch('https://retoolapi.dev/WgovZC/data')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json(); // Assuming response is JSON data
//         })
//         .then(data => {
//             resolve(data); // Resolve the Promise with the fetched data
//         })
//         .catch(error => {
//             reject(error); // Reject the Promise if there's an error
//         });
// });

// readApiThroughPromise.then(function(data) {
//     console.log('Promise Consumed');
//     console.log(data); // Log the fetched data if needed
// }).catch(function(error) {
//     console.error('Error fetching data:', error);
// });


// using async and await
async function fetchData(){
    const data = await fetch('https://retoolapi.dev/WgovZC/data');
    const finalData = await data.json();
    console.log(finalData);
}
fetchData();