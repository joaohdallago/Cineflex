import Topbar from '../topbar'
import Header from '../header'
import SuccessMain from './success-main'

export default function Success({ purchaseDataState }) {
    return (
        <>
            <Topbar />
            <Header text='Pedido feito com sucesso!' isSuccess={true}/>
            <SuccessMain {...{purchaseDataState}}/>
        </>
    )
}