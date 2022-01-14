import React from 'react';
import ReactDOM from 'react-dom';
//impota miragejs
import {createServer, Model} from 'miragejs';
import {App} from './App';
//chama a função createserver
createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        }
      ]
    })
  },
  //rotas api ficticia
  routes(){
    //todas as chamadas vão estar a partir da chamada no index do TransactionsTable
    this.namespace = 'api';
    
    //para cada uma das rotas
    //quando ouver uma requisição do tipo get para a rota transactions, sera retornado alguma coisa
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
