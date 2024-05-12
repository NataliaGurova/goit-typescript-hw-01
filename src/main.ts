import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// console.log(add(1, 2));

// type Person = { name: string; age?: number; }
// let user: Person = { name: 'Alice', };
// user.age = 27;

// type MyType = { [key: string]: number; } let obj: MyType = { "one": 1, "two": 2, "three": "three" };
// console.log(user.age);
// class MyClass<T> { ... }
// const instance = new MyClass<number>();

// type User = { id: number; name: string; email: string; };
// let userUpdate: Partial<User>;
// { id?: number, name?: string, email?: string }

// type Point = { x: number; y: number; };
// const p1: Readonly<Point> = { x: "10", y: 20 };
// console.log(p1);

// type Animal = { id: number; name: string; type: string; age: number; };
// const dog: Pick<Animal, 'name' | 'age'> = { name: 'Rex', type: 'Dog', age: 5 };

// type ExampleType = { details: Record<'name' | 'age', string>; };
//  details: { name: any; age: any; } 

//  type ErrorType = Partial<Record<keyof InitialFormType, string[]>>;

