# Section 03 - *NextJS Essentials (AppRouter)*

<br>

## 🔧 88. Lesson 088 — *Understanding File-based Routing & React Server Components*

### 🧠 88.1 Context:

**Next.js File-based Routing** is a system where the directory structure inside the `app` folder directly determines the routes available in the web application. Instead of defining routes in a central configuration file, you create folders and files; for example, `app/about/page.js` automatically maps to the `/about` URL.

**React Server Components (RSC)** are a new paradigm where components are executed exclusively on the server. In the Next.js App Router, all components within the `app` directory are Server Components by default.

*   **When it occurs/is used**: Every time you create a `page.js`, `layout.js`, or other reserved files within the `app` directory without specifically adding a `'use client'` directive.
*   **Examples from the project**:
    *   [app/page.js](file:///Users/luismedina/Desktop/WORKSPACE/NEXT/second-app/app/page.js): The main entry point for the root `/` route.
    *   [app/about/page.js](file:///Users/luismedina/Desktop/WORKSPACE/NEXT/second-app/app/about/page.js): Defines the `/about` route.
*   **Advantages**:
    *   **Improved Performance**: Less JavaScript is sent to the client, leading to faster Time to Interactive (TTI).
    *   **SEO Optimization**: Content is fully rendered on the server, making it easily indexable by search engines.
    *   **Data Fetching**: Database queries and API calls can happen directly on the server, closer to the data source.
*   **Disadvantages**:
    *   **No Interactivity**: Cannot use browser-only APIs or React hooks like `useState` or `useEffect`.
    *   **Server-side Logs**: Debugging logs (`console.log`) appear in the terminal/server logs rather than the browser console.
*   **When to consider alternatives**: Use **Client Components** (by adding `'use client'`) when you need event listeners, state management, or browser-specific APIs (like `localStorage`).

### ⚙️ 88.2 Updating code/theory according the context:

**Section Summary**
This section demonstrates how to create a basic page using the App Router and highlights the server-side nature of these components. It shows that code inside these components runs on the backend during the rendering process.

#### 88.2.1 React component function in `page.jsx` file:
**Subsection Summary**
*   Defines a standard React functional component exported as default.
*   Uses `console.log` to prove server-side execution (visible in terminal, not browser).
*   Returns semantic HTML elements (`main`, `img`, `h1`, `p`) for the homepage.

```jsx
export default function Home() {
  console.log("Executing..."); // it will be seen from terminal
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
```
![console log from terminal - server side](../img/section03-lecture088-001.png)

### 🐞 88.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| **Log Visibility** | ✅ Explained | `console.log("Executing...")` does not appear in the browser's developer tools. It only prints to the server terminal because it's a Server Component. |
| **Missing Interactivity** | ⚠️ Identified | Attempting to use `onClick` or `useState` in this file will trigger a runtime error unless converted to a Client Component. |

### 🧱 88.4 Pending Fixes (TODO)

- [ ] Check terminal output to verify "Executing..." is printed during navigation to root.
- [ ] Add more routes to the `app` directory to practice file-based routing.
- [ ] Identify which components in the future will require `'use client'` due to state needs.


<br>

## 🔧 89. Lesson 089 — *Adding Another Route via the File System*

### 🧠 89.1 Context:

**Next.js File-based Routing** is the core mechanism for defining routes in a Next.js application. Instead of using a central configuration or an external library like React Router, you create a folder structure inside the `app` directory. A folder represents a route segment, and a `page.js` file inside that folder makes the route publicly accessible.

*   **When it occurs/is used**: Every time you want to add a new page or section to your application (e.g., adding `/about`, `/meals`, or `/community`).
*   **Examples from the project**:
    *   `app/about/page.js` defines the [http://localhost:3000/about](http://localhost:3000/about) route.
*   **Advantages**:
    *   **Predictability**: The URL structure is visually mirrored by the code directory structure.
    *   **Automation**: No need to manually register routes in a central file.
    *   **Isolation**: Each route can have its own layouts, loading states, and error handlers.
*   **Disadvantages**:
    *   **Naming Constraints**: You must use specific reserved filenames like `page.js`.
    *   **Deep Nesting**: Large applications can end up with very deep directory structures.
*   **When to consider alternatives**: Use **Catch-all Segments** (e.g., `[...slug]`) when you have dynamic content or want more control over a set of sub-pages without creating individual folders.


### ⚙️ 89.2 Updating code/theory according the context:

**Section Summary**
This section walks through the practical implementation of creating a new route. It emphasizes the "convention over configuration" approach of Next.js, where directory names and specific filenames (like `page.js`) are critical for the router to function correctly.

#### 89.2.1 Creating `About` route:
**Subsection Summary**
*   Demonstrates creating a new directory `app/about`.
*   Adds a `page.js` file to export a basic React component.
*   Focuses on the component returning simple semantic HTML for the new route.
```jsx
// app/about/page.jsx
export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
    </main>
  );
}
```

> Reach out **`http://localhost:30000/about`**


#### 89.2.2 Expected Project structure:
**Subsection Summary**
*   Visualizes the internal directory structure under the `app` folder.
*   Highlights the nesting required for the `/about` route.
*   Confirms the presence of other essential Next.js configuration files.

```
second-app/
├── app/
│   ├── about/              # 👈🏽 ✅
│   │   └── page.js         # 👈🏽 ✅
│   ├── globals.css
│   ├── icon.png
│   ├── layout.js
│   └── page.js
├── public/
│   └── logo.png
├── next-env.d.ts
├── next.config.js
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── yarn.lock
├── README.md
└── tsconfig.json
```


#### 89.2.3 Filenames Matter:
**Subsection Summary**
*   Lists the reserved filenames recognized by the Next.js App Router.
*   Briefly explains the specific purpose of `page.js`, `layout.js`, `not-found.js`, and `error.js`.
*   States that these conventions allow Next.js to automatically handle common UI patterns.
```tsx
1️⃣ page.js => define page content.
2️⃣ layout.js => define wrapper around pages.
3️⃣ not-found.js => define "Not Found" fallback page.
4️⃣ error.js => Define "Error" fallback page.
```

### 🐞 89.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| **Case Sensitivity** | ⚠️ Identified | Folders like `About` vs `about` may work on macOS but fail on Linux-based production servers. Always use lowercase for folder routes. |
| **Missing `page.js`** | ⚠️ Identified | If you create `app/about/about.js` instead of `app/about/page.js`, Next.js will return a 404 because it doesn't recognize the route. |

### 🧱 89.4 Pending Fixes (TODO)

- [ ] Verify the `/about` route is correctly rendering in the local development environment.
- [ ] Rename any uppercase folder names to lowercase to ensure cross-platform compatibility.
- [ ] Add a basic navigation link from the home page to the new about page to test accessibility.

<br>

## 🔧 90. Lesson 90 — *Navigating Between Pages - Wrong & Right Solution*

### 🧠 90.1 Context:

**Client-side Navigation vs. Server-side Reloads** is a fundamental concept in modern web frameworks. In traditional web applications, using a standard `<a href="...">` tag triggers a full page reload, causing the entire application state to be lost and the browser to re-download all resources.

Next.js provides the **`Link` component** to enable **Client-side Navigation**. This allows the application to transition between pages without a full refresh, providing a faster and smoother "Single Page Application" (SPA) experience.

*   **When it occurs/is used**: Used whenever you need to navigate between internal pages of your Next.js application.
*   **Examples from the project**:
    *   [app/page.js](file:///Users/luismedina/Desktop/WORKSPACE/NEXT/second-app/app/page.js): Navigating to `/about`, `/meals`, and `/community`.
*   **Advantages**:
    *   **Seamless Transitions**: No flickering or white screens between pages.
    *   **Faster Loading**: Only the necessary page data is fetched, often prefetched automatically.
    *   **State Retention**: React state is preserved (unless the user manually refreshes).
*   **Disadvantages**:
    *   **Client JavaScript**: Requires the React runtime to be active (Next.js handles this).
*   **When to consider alternatives**: Use standard `<a>` tags for external links or file downloads.


### ⚙️ 90.2 Updating code/theory according the context:

**Section Summary**
This section compares the standard HTML navigation method with the optimized Next.js approach. It demonstrates how to transition from full-page reloads to smooth, client-side transitions using the `Link` component.

#### 90.2.1 Adding `<a href="/about">About Us</a>` tag for `About:`
**Subsection Summary**
*   Uses a standard HTML anchor tag for navigation.
*   Highlights the "Wrong" solution for internal links.
*   Identifies the drawback: triggers a full browser refresh on every click.

```jsx
export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <a href="/about">About us</a> {/* 👈🏽 ✅ (1) Reload the page */}
      </p>
    </main>
  );
}
```
![](../img/section03-lecture090-001.png)

#### 90.2.2 Adding/Using **`Link`** `next` component:
**Subsection Summary**
*   Imports the `Link` component from `'next/link'`.
*   Replaces the anchor tag to enable "Client-side Navigation".
*   Achieves the "Right" solution: instantaneous transitions without refreshing the entire page.

```jsx
import Link from "next/link";  // 👈🏽 ✅ (2)
export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* <a href="/about">About us</a> */ }  {/* 👈🏽 ✅ (1) Reload the page */}
        <Link href="/about">About us</Link>  {/* 👈🏽 ✅ (2) */}
      </p>
    </main>
  );
}
```

### 🐞 90.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| **Full Page Reload** | ✅ Fixed | Using `<a>` tags causes the browser to download the entire app again, which is inefficient. |
| **State Reset** | ✅ Fixed | Anchor tags wipe out existing React state, which is solved by using `<Link>`. |

### 🧱 90.4 Pending Fixes (TODO)

- [x] Integrate `Link` component in the main entry point.
- [ ] Review other pages to ensure no legacy `<a>` tags are used for internal routing.
- [ ] Observe the "Network" tab in DevTools to confirm that navigation is not triggering full document downloads.


<br>

## Lecture 091: Working with Pages & Layouts

Layout page is a wrapper around one or more pages.
```
second-app/
├── app/
│   ├── about/              
│   │   └── page.js         
│   ├── globals.css
│   ├── icon.png
│   ├── layout.js. 👈🏽👈🏽
│   └── page.js
├── public/
│   └── logo.png
├── next-env.d.ts
├── next.config.js
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── yarn.lock
├── README.md
└── tsconfig.json
```
Its code:
```js
import "./globals.css";
export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## Lecture 092: Reserved File Names, Custom Components & How To Organize A NextJS Project

```txt
second-app/
├── app/
│   ├── about/
│   │   └── page.js
│   ├── globals.css
│   ├── icon.png
│   ├── layout.js
│   └── page.js
├── components/    👈🏽
│   └── header.js  👈🏽
├── public/
│   └── logo.png
├── next-env.d.ts
├── next.config.js
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── yarn.lock
├── README.md
├── STEP_README.md
└── tsconfig.json
```

### **`header.js`**
```js
export default function Header(){
  return (
    <>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
    </>
  )
}
```


### Meanwhile in **`./app/page.js`**:
```js
import Link from "next/link";
import Header from './component/header'  // 👈🏽
export default function Home() {
  return (
    <main>
      <Header />  {/* 👈🏽 */}
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About us</Link>
      </p>
    </main>
  );
}
```





---
<br>
<br>
<br>
<br>

🔥 🔥 🔥 

<br>

## 🔧 XX. Lesson YYY — *{{TITLE_NAME}}*

### 🧠 XX.1 Context:


### ⚙️ XX.2 Updating code/theory according the context:

#### XX.2.1
```tsx
/*  */

```

#### XX.2.2
```tsx
/*  */

```

### 🐞 XX.3 Issues:
- **first issue**: something..

| Issue | Status | Log/Error |
|---|---|---|

### 🧱 XX.4 Pending Fixes (TODO)

- [ ]
