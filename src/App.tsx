import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewtransactionModal';

import { GlobalStyle } from "./styles/global";
import { TransactionsContext, TrasactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

//export e não export default para não esquecer de renomear componentes, para que na hora de debugar não sejam encontrados problemas
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransacrionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransacrionModal(){
      setIsNewTransactionModalOpen(false)
  }


  return (
    <TrasactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransacrionModal}/>
      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransacrionModal}
      />

      <GlobalStyle/>
    </TrasactionsProvider>   
  );
}


