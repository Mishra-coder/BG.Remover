# Background Remover

This is a simple tool I built to remove backgrounds from images directly in the browser. I wanted something that didn't require uploading my photos to a remote server for privacy reasons, so this runs entirely on the client side.

## How it works

It uses `@imgly/background-removal` which runs a WASM (WebAssembly) module to process the image right on your device. This means:
- **Privacy:** Your images never leave your computer.
- **Speed:** No upload/download wait times (after the initial model load).

I also added **Clerk** for authentication because I wanted to experiment with user sessions, though the core removal feature works client-side.

## Tech Stack

- **React & Vite**: For the frontend framework and build tool.
- **@imgly/background-removal**: The heavy lifter for the AI processing.
- **Clerk**: Handling user sign-ups and sign-ins.
- **Tailwind CSS** (via standard CSS variables): For styling. I tried to keep the UI clean and dark-themed.

## Running it locally

If you want to poke around the code or run it yourself:

1.  Clone the repo.
2.  Go into the `client` folder (that's where the React app lives).
    ```bash
    cd client
    ```
3.  Install dependencies.
    ```bash
    npm install
    ```
4.  You'll need a Clerk publishable key in a `.env` file inside `client/`:
    ```
    VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
    ```
5.  Start the dev server.
    ```bash
    npm run dev
    ```

## Features

- Drag and drop images.
- Instant preview of the original vs. processed image.
- A slider to compare the before and after results.
- Dark mode interface.

Feel free to fork it or open an issue if you find something broken.
