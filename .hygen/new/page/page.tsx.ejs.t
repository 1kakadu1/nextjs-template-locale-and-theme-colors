---
to: <%= absPath %>page.tsx
---
<% if (meta_dynamic) { %>
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug
 
  // fetch post information
 
  return {
    title: "",
    description: "",
  }
}
<% } else { %>
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
  description: '',
}
<% } %>

export default async function <%= `${component_name}Page` %>() {
	return (
		<div className="container">
        </div>
	);
}