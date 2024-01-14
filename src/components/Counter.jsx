import { useState } from "preact/hooks"

export function Counter () {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Counter: {count}</p>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(counter => counter + 1)}>+</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(counter => counter - 1)}>-</button>
        </div>
    )
}