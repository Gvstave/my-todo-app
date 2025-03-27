# To-Do List Application - React

## Project Description

This is a simple to-do list application built using React. The app allows users to:

- Add new items to the to-do list.
- Remove items from the list.
- Edit contents of the to-do item in the list

## Features

1. **Add Item**: Enter a to-do item in the input field and click "ADD" to add it to the list.
2. **Edit**: Click the edit icon to edit the contents of the selected to-do item
3. **Remove Item**: Click the trash icon to remove a to-do item.

## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **CSS** - For styling the application.
- **lucide-react** - For icons to use in the project.

## How It Works

1. **State Management**: The app uses React's `useState` hook to manage the state of the to-do items (`list`) and the input field (`userInput`).
2. **Adding Items**: When the user types in the input field and clicks the "ADD" button, the new item is added to the `list` array.
3. **Removing Items**: When the user clicks the trash icon, the `deleteItem` function filters out the item from the list by its ID.

## Challenges Faced

- **State Management**: The most challenging part was managing the state of the items and ensuring updates were properly reflected.
- **Styling**: Deciding on the layout, design, simpleness yet responsiveness of the app was a challenge.

## Future Improvements

- **Mark as Completed**: Click the "Mark Completed" button to toggle the completion status of the item.
- **Local Storage**: Implement functionality to store to-do items in `localStorage` so that the list persists even after the browser is refreshed/closed.
- **Filtering**: Add filtering options to view tasks based on their completion status.

## Tutorials Followed

No tutorial was directly followed, but I researched React state management concepts and how to use `useState` to manage an array of items. 
