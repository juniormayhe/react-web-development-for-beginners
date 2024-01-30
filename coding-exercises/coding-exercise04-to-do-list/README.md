This app allows users to add tasks, removes tasks, and displays appropriate messages based on the list's state. You can see that the app structure follows a clear separation of concerns, where each component focuses on a specific task—`TodoItem` for displaying an item, TodoList for managing the list, and `App` as the entry point.

# TodoItem Component

This component represents an individual to-do item. It renders a task with a "Remove" button. The `handleRemove` function is triggered when the button is clicked. You notice the id contains the index position in array, starting from 0 to `N` tasks. To number it correctly we must add `1` as in `{id + 1}`. Next we render the task text.

# TodoList Component

This is the main component that manages the list of tasks. It uses the `useState` hook to maintain state:

- `tasks`: Keeps track of the list of tasks. It is an array.

- `inputTask`: Manages the user input for adding new tasks.

- `duplicateTaskError`: Tracks whether a duplicate task error occurs.

The component includes:

- An input field and an "Add Task" button to add new tasks to the list.

- Conditional rendering for error messages when attempting to add a duplicate task or displaying informative messages when the list is empty or populated.

- Mapping through the `tasks` array to render individual `TodoItem` components, passing task details and a remove function.

# App Component

This is the entry point which renders the `TodoList` component within a simple header.

