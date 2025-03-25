import Settings from "./Settings.jsx";
import QuoteGenerator from "./QuoteGenerator.jsx";
import TodoList from "./TodoList.jsx";

export default function Bottom(){
    return (
        <section className="flex justify-between mt-2 mx-2">
        <Settings/>
        <QuoteGenerator/>
        <TodoList/>
        </section>
    )
}