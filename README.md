# GoFile Uploader

This is a Node.js script to upload files to [GoFile.io](https://gofile.io/) using their API.

## Prerequisites

- Node.js installed on your machine.
- `axios` and `form-data` npm packages.

## Usage

1. Clone the repository and navigate to its directory.
2. Install dependencies by running `npm install`.
3. Run the script by running `node index.js`.
4. Enter the file path of the file you want to upload when prompted.

If the file path is valid, the script will upload the file to GoFile.io and print the download link. If the file path is invalid, the script will print an error message and prompt you to enter a valid file path.

Note that this script uses the built-in `fs` and `readline` modules of Node.js, as well as the `clear` package for clearing the console.

Feel free to modify the script and use it in your own projects.
