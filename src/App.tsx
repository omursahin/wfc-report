import './App.css'
import {Dashboard} from "@/components/Dashboard.tsx";
import data from "./report.json";

function App() {

    return (
        <main className="min-h-screen p-4 bg-gray-100">
            { data && <Dashboard {...data} />}
        </main>
    )
}

export default App
