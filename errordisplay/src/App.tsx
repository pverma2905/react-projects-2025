import React, { useState, useEffect } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page } from '@syncfusion/ej2-react-grids';
import { QueryClient, QueryClientProvider, useQuery, QueryCache } from '@tanstack/react-query';

interface Order { OrderID: number; CustomerName: string; Freight: number; }

const fetchOrders = async (): Promise<Order[]> => {
  await new Promise(res => setTimeout(res, 1000));
  throw new Error('API failed to load orders');
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.error('Global Error:', (error as Error).message);
    },
  }),
});

const OrdersGrid: React.FC = () => {
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const query = useQuery({ queryKey: ['orders'], queryFn: fetchOrders });

  useEffect(() => {
    if (query.error) {
      setErrorMsg((query.error as Error).message);
      setErrorVisible(true);
    }
  }, [query.error]);

  return (
    <>
      {/* Error Modal */}
      <DialogComponent
        width="400px"
        isModal={true} // ✅ makes it a modal
        visible={errorVisible}
        header="Error"
        showCloseIcon={true}
        close={() => setErrorVisible(false)}
        animationSettings={{ effect: 'Zoom' }}
        buttons={[
          {
            click: () => setErrorVisible(false),
            buttonModel: { content: 'OK', isPrimary: true }
          }
        ]}
      >
        <p>{errorMsg}</p>
      </DialogComponent>

      {/* Data Grid */}
      <GridComponent
        dataSource={query.data ?? []}
        allowPaging={true}
        pageSettings={{ pageSize: 5 }}
        loadingIndicator={{ indicatorType: 'Spinner' }}
      >
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" width="120" textAlign="Right" />
          <ColumnDirective field="CustomerName" headerText="Customer Name" width="150" />
          <ColumnDirective field="Freight" headerText="Freight" width="120" textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <OrdersGrid />
    </QueryClientProvider>
  );
}
