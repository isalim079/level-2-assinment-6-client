// ClientWrapper.tsx
"use client"; // Marking this as a Client Component

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import { Toaster } from "react-hot-toast";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
      <Toaster />
    </Provider>
  );
};

export default ClientWrapper;
