console.log('Створити розпорядок дня, двома способами');

// console.log('Timetable:');
// setTimeout(() => {
//     console.log('8.00 - Wake up')
//     setTimeout(() => {
//         console.log('8.15 - Have a shower')
//         setTimeout(() => {
//             console.log('8.30 - Breakfast')
//             setTimeout(() => {
//                 console.log('9.00 - Go at the work')
//                 setTimeout(() => {
//                     console.log('14.00 - Dinner')
//                     setTimeout(() => {
//                         console.log('18.00 - Go home')
//                         setTimeout(() => {
//                             console.log('19.00 - Supper')
//                             setTimeout(() => {
//                                 console.log('21.00 - Joga')
//                                 setTimeout(() => {
//                                     console.log('22.30 - Have a shower')
//                                     setTimeout(() => {
//                                         console.log('23.00 - Go to sleep')
//                                     }, 2000);
//                                 }, 2000);
//                             }, 2000);
//                         }, 2000);
//                     }, 2000);
//                 }, 2000);
//                 }, 2000);
//         },2000);
//         },2000);
// },2000);





function timeoutFn(task, mls) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(task);
            resolve(task);
        }, mls);
    });
}

console.log('Timetable:');
timeoutFn('8.00 - Wake up', 2000)
    .then(value => timeoutFn('8.15 - Have a shower', 2000))
    .then(value => timeoutFn('8.30 - Breakfast', 2000))
    .then(value => timeoutFn('9.00 - Go at the work', 2000))
    .then(value => timeoutFn('14.00 - Dinner', 2000))
    .then(value => timeoutFn('18.00 - Go home', 2000))
    .then(value => timeoutFn('19.00 - Supper', 2000))
    .then(value => timeoutFn('21.00 - Joga', 2000))
    .then(value => timeoutFn('22.30 - Have a shower', 2000))
    .then(value => timeoutFn('23.00 - Go to sleep', 2000))