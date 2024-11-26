import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {React.Children.map(children, (child) => {
          if (child.type.name === 'TabsTrigger') {
            return (
              <button
                className={`px-4 py-2 font-medium ${
                  child.props.value === activeTab
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(child.props.value)}
              >
                {child.props.children}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div className="mt-4">
        {React.Children.map(children, (child) => {
          if (child.type.name === 'TabsContent') {
            return child.props.value === activeTab && child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const TabsTrigger = ({ value, children }) => children;

const TabsContent = ({ value, children }) => children;

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Gestão Financeira</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="categories">Categorias</TabsTrigger>
          <TabsTrigger value="payment-methods">Métodos de Pagamento</TabsTrigger>
          <TabsTrigger value="transactions">Transações</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>

          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>

          <TabsContent value="categories">
            <Categories />
          </TabsContent>

          <TabsContent value="payment-methods">
            <PaymentMethods />
          </TabsContent>

          <TabsContent value="transactions">
            <Transactions />
          </TabsContent>

          <TabsContent value="settings">
            <Settings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default App;