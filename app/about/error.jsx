"use client";

export default function Error({ error, reset }) {
    return (
        <div>
            <h1> This is the error page {error.message}</h1>
            <button onClick={() => reset()}> reset</button>
        </div>
    );
}
