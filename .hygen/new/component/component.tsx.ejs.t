---
to: <%= absPath %>/<%= folder_name %>.component.tsx
---
<% if (is_create_model) { %>
import <%= `{ I${component_name}Props }` %> from './<%= `${folder_name}` %>.model';
import cl from './<%= `${folder_name}` %>.module.scss';

export const <%= component_name %> = ({ className="" }:I<%= component_name %>Props) => {
  return (
    <div className={cl.main+" "+className}>

    </div>
  );
};
<% } else { %>import cl from './<%= `${folder_name}` %>.module.scss';

export const <%= component_name %> = () => {
  return (
    <div className={cl.class}>

    </div>
  );
};
<% } %>
