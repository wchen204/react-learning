# Custom Hooks in React

## What are Custom Hooks?

Custom hooks are JavaScript functions whose names start with "use" and that may call other hooks. They allow you to extract component logic into reusable functions.

## Why Use Custom Hooks?

- **Reusability**: Custom hooks allow you to reuse stateful logic across multiple components.
- **Separation of Concerns**: They help in separating logic from UI, making the code cleaner and more maintainable.
- **Abstraction**: Custom hooks can abstract complex logic, making components simpler and easier to understand.

## Creating a Custom Hook

To create a custom hook, follow these steps:

1. **Name the Hook**: The function name should start with "use" to indicate that it is a hook.
2. **Use Other Hooks**: Inside the custom hook, you can use other hooks like `useState`, `useEffect`, etc.
3. **Return Values**: Return the necessary values or functions from the custom hook.

### Example: `useFetch` Custom Hook

The `useFetch` custom hook fetches data from a function and handles loading and error states.

```javascript
import { useEffect, useState } from "react";

/**
 * Custom hook to fetch data from a function and handle loading and error states.
 * @param fetchFn Function to fetch data
 * @param initialValue Initial value for the fetched data
 * @returns {Object} Object containing isFetching, error, fetchedData, and setFetchedData
 */
export function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);
    const [fetchedData, setFetchedData] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            }
            setIsFetching(false);
        }

        fetchData();
    }, [fetchFn]);

    return {
        isFetching,
        error,
        fetchedData,
        setFetchedData
    };
}
```

### Using the `useFetch` Hook

You can use the `useFetch` hook in your components to fetch data and handle loading and error states.

```javascript
import { useFetch } from "./hooks/useFetch";
import { fetchUserPlaces } from "./http";

function App() {
    const { isFetching, error, fetchedData: userPlaces, setFetchedData: setUserPlaces } = useFetch(fetchUserPlaces, []);

    // Component logic...

    return (
        // JSX...
    );
}
```

## Best Practices

- **Keep it Simple**: Custom hooks should be simple and focused on a single task.
- **Use Descriptive Names**: Name your custom hooks descriptively to indicate their purpose.
- **Return Only Necessary Values**: Return only the values and functions that are necessary for the component.

## Conclusion

Custom hooks are a powerful feature in React that allow you to encapsulate and reuse stateful logic. By following best practices, you can create clean, maintainable, and reusable custom hooks.

