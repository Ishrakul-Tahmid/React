// export default function Todo({task, isDone}) {
//     return (
//         <li>To do: {task}</li>
//     )
// }

// Conditional rendering in React option 1
// export default function Todo({task, isDone}) {
//     if(isDone) {
//         return (
//             <li>To do: {task}</li>
//         )
//     }
//     else {
//         return (
//             <li>Work one: {task}</li>
//         )
//     }
// }

// Conditional rendering in React option 2
// export default function Todo({task, isDone}) {
//     if (isDone) {
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }

// Conditional rendering in React option 3: ternary operator
// export default function Todo({task, isDone}) {
//     return (
//         <li> {isDone? 'Finished: ': 'Work on: '} {task}</li>
//     )
// }

// Conditional rendering in React option 4: logical operator
// export default function Todo({task, isDone}) {
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

// Conditional rendering in React option 4: logical operator
// export default function Todo({task, isDone}) {
//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }

// conditional rendering option 6
export default function Todo({ task, isDone }) {
  let listItem;
  
  if (isDone) {
    listItem = <li>Finish: {task}</li>;
  } else {
    listItem = <li>Work on: {task}</li>;
  }
  
  return listItem;
}
