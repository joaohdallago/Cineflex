import Topbar from "../topbar";
import Header from "../header";
import Movies from "./movies";

export default function MovieSelection() {


    return (
        <>
            <Topbar />
            <Header text='Selecione o filme'/>
            <Movies />
        </>
    )
}