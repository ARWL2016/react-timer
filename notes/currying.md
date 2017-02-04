See Controls.jsx

1. The onlick handlers call the onStatusChange function (not just trigger it)
2. This allows us to use the same handler but pass in 3 different values
3. This is called currying - passing a function to another function (or dividing the functionality across functions)