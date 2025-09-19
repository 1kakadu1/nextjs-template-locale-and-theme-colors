---
to: <%= absPath %>/<%= folder_name %>.model.ts
skip_if: <%= !is_create_model %>
---

export interface I<%= component_name %>Props{
    className?: string;
}
