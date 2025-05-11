---
to: <%= absPath %>/<%= folder_name %>.component.tsx
---
import <%= `{ I${component_name}Props }` %> from './<%= `${folder_name}` %>.model';
import cl from './<%= `${folder_name}` %>.module.scss';

export const <%= component_name %> = ({ className="" }:I<%= component_name %>Props) => {
  return (
    <div className={cl.class+" "+className}>

    </div>
  );
};