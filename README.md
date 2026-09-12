# 🚀 DevStack

A modern and responsive technology stack management website built with **React and TypeScript**.

DevStack allows users to explore different technologies, view their details, and build their own personalized technology stack.

## 🌐 Live Website

🔗 **Live Demo:** https://devstack-project-ph.netlify.app/

## 📂 Repository

🔗 **GitHub:** https://github.com/jipunroy/DevStack-Project

---

## ✨ About The Project

**DevStack** is a React-based web application built with **TypeScript** where users can explore popular technologies and create their own personalized technology stack.

The project focuses on a clean UI, responsive design, reusable React components, type safety, and simple state management. Users can select technologies, add them to their stack, and remove them whenever they want.

---

## 🛠️ Technologies Used

* ⚛️ React.js
* 🔷 TypeScript
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 🔔 React-Toastify
* 📦 JSON
* ⚡ Vite

---

## 🎯 Key Features

### 1. 🔎 Explore Technologies

Users can browse different technologies and see useful information about each technology.

### 2. 🧩 Build Your Own Stack

Users can add technologies to their personal stack and manage the selected items easily.

### 3. 💬 Interactive User Experience

The project provides toast notifications and smooth interactions when users add or remove technologies.

---

## 🎨 Gradient Brand Theme

DevStack uses a single shared gradient throughout the application.

**Gradient:** Orange → Pink → Violet

The same gradient is used for:

* 🟠 Brand name
* 🟣 Hero heading highlight
* 🌈 Primary buttons

The gradient is defined in one place so the complete theme can be changed easily from a single location.

Example:

```css
:root {
  --brand-gradient: linear-gradient(
    90deg,
    #f97316,
    #ec4899,
    #8b5cf6
  );
}
```

---

# ⚛️ React & TypeScript Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

In this project, I use **TSX**, which allows me to write JSX with TypeScript. It makes the UI code easier to read and also gives the benefits of TypeScript type checking.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. Props are read-only.

**State** is data managed inside a component. State can change when the user interacts with the application.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage changing data inside a component.

I used `useState` in the **Navbar** to control the mobile menu. It keeps track of whether the hamburger menu is open or closed.

```tsx
const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
```

When the hamburger button is clicked, the state changes and the mobile menu opens or closes.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook used to perform side effects, such as loading data after a component renders.

I used `useEffect` to load the JSON data when the component starts. This allows the technology information to be loaded and displayed in the application.

Example:

```tsx
useEffect(() => {
  // Load JSON data
}, []);
```

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which items have changed, been added, or removed. This makes updating the UI more efficient.

Example:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, when the technology stack is empty, an empty stack message can be displayed.

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackItems items={stack} />
)}
```

Here, the empty message is shown only when there are no technologies in the stack.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

Example:

```tsx
<TechnologyCard technology={technology} />
```

A child can send information back to the parent by using a **callback function** passed through props.

Example:

```tsx
<TechnologyCard onSelect={handleSelect} />
```

When the child calls the `onSelect` function, the parent receives the information and can update its state.

---

## 📌 Project Summary

DevStack is a responsive technology stack management application built with **React and TypeScript**.

The project demonstrates important concepts such as:

* React Components
* TypeScript
* TSX
* Props
* State
* `useState`
* `useEffect`
* Conditional Rendering
* `.map()` and Unique Keys
* Parent-Child Communication
* Responsive Design

The main goal of this project is to provide a simple and interactive way for users to explore technologies and create their own personalized developer stack.

---

## 👨‍💻 Author

**Jepun Chandra Roy**

Built with ❤️ using **React, TypeScript, Tailwind CSS, and Vite**.
