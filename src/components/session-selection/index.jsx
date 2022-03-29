import Topbar from "../topbar";
import Header from "../header"
import Sessions from "./sessions";

export default function SessionSelection() {
    return (
        <>
            <Topbar />
            <Header text='Selecione o horário'/>
            <Sessions />
        </>
    )
}