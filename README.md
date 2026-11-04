# Binary Search Visualizer

A simple web page that shows how the binary search algorithm works, one step at a time.

Built with plain HTML and JavaScript. No libraries and nothing to install.

## How binary search works

Binary search finds a number in a **sorted** array by repeatedly cutting the search range in half.

1. Look at the middle element.
2. If it equals the target, you are done.
3. If it is smaller than the target, ignore the left half.
4. If it is bigger than the target, ignore the right half.
5. Repeat until the number is found or no elements are left.

Time complexity: **O(log n)**. Linear search is O(n).

## How to use

1. Type a number in the input box.
2. Click **Next step** to move through the search one step at a time.
3. Click **Reset** to start over.

Colors:
- Gold: the middle element being checked
- Gray: elements already ruled out
- Green: the number was found

## Run it locally

1. Download or clone this repo.
2. Open `index.html` in your browser.


## Project files

```
index.html   page layout and styling
script.js    binary search logic
README.md    this file
```

## Possible improvements

- Let the user enter their own array
- Add an auto-play button
- Compare with linear search

## License

MIT
