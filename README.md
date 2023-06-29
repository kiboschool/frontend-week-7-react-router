# Instructions

1. **Setting Up Basic Routing:**
    - Go to the folder `testing-react-router` in this repo
    - Install `react-router-dom`.
    - Set up basic routing for three pages: Home, About, and Contact. 
    - Ensure that the app renders the correct page based on the URL.

2. **Using `Link` and `NavLink`:**
    - Replace the traditional `<a>` tags with `Link` or `NavLink` from `react-router-dom` in your application.
    - Notice the difference between `Link` and `NavLink` (hint: active styling). Implement an active style with `NavLink`.

3. **Creating a 404 Page:**
    - Create a new component for a 404 page.
    - Update your router setup so that if the user enters a route that is not defined, they are directed to the 404 page.

4. **Nested Routing:**
    - Create a page that has its own sub-navigation. For example, you might have a About page, and under that page, there are separate routes and views for "Mission"," "Vision," and "open-hours"
    - Implement the nested routing needed for this setup.

5. **Using Route Parameters:**
    - Create a Blog component that displays blog post content.
    - Update your router so that the specific blog post displayed changes based on the route parameter (e.g., `/blog/:postId`).

6. **Programmatic Navigation:**
    - In one of your components, add a button that, when clicked, redirects the user to a different page using programmatic navigation (use the `useHistory` hook).