---
to: <%= absPath %>/index.ts
---
export * from './<%= folder_name %>.component';
<% if (is_create_model) { %>export * from './<%= folder_name %>.model';<% } %>