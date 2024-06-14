import { create } from 'zustand'

interface CounterState {
    count: number
    inc: () => void
}

const useStore = create<CounterState>()((set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
}))

const Counter = () => {
    const cnt = useStore((state) => state.count)

    const onClick = useStore((state) => state.inc)

    return (
        <div className="flex justify-center">
            <h3 className="text-xl p-3">Counter: {cnt}</h3>
            <button className="bg-slate-200 border-black border-1 rounded-lg m-2 p-1" onClick={onClick}> Click </button>
        </div>
    )
}

export default Counter