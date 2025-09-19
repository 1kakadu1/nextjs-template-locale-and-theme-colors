---
to: <%= absPath %>/<%= folder_name %>.context.tsx
---
'use client';
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
  <% if (is_dynamic) { %>useEffect<% } %>
} from 'react';
<% if (is_dynamic) { %>
import dynamic from 'next/dynamic';

const Client<%= component_name %> = dynamic(() => import('./<%= folder_name %>.component'), {
	ssr: false,
});
<% } %>

export interface I<%= component_name %>Ctx{

}

export const <%= component_name %>Context = createContext<I<%= component_name %>Ctx | null>(null);

export const <%= component_name %>ContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
  <% if (is_dynamic) { %>
	const [init, setInit] = useState(false);
  <% } %>
	const contextValue = {

	};

<% if (is_dynamic) { %>
	useEffect(() => {
		setInit(true);
	}, []);
<% } %>

	return (
		<<%= component_name %>Context.Provider value={contextValue}>
			{children}
      <% if (is_dynamic) { %>
			{init && <Client<%= component_name %> />}
      <% } %>
		</<%= component_name %>Context.Provider>
	);
};

export const use<%= component_name %>Context = () => {
	const context = useContext(<%= component_name %>Context);
	if (!context) {
		throw new Error('<%= component_name %> was not provided');
	}
	return { ...context };
};