import React from "react";
import { RootNavigation } from "./src/screens/RootNavigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { ContextManager } from "./src/utils/Store/contextManager";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ContextManager>
      <QueryClientProvider client={queryClient}>
        <RootNavigation />
      </QueryClientProvider>
    </ContextManager>
  );
};
