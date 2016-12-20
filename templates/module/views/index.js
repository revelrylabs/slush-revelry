import React, {Children} from 'react'
import Button from 'revelry-components/lib/Button'
import Layout from 'app/shared/components/Layout'

function Item({id}) {
  return (
    <li><a href={`/<%= pluralName %>/${id}`}><%= singularName %> {id}</a></li>
  )
}

export default function({<%= pluralName %>, ...props}) {
  return (
    <Layout>
      <h1><%= pluralName %></h1>
      <Button href={`/<%= pluralName %>/new`}>Create a new <%= singularName %></Button>
      {<%= pluralName %>.map((<%= singularName %>) => <Item key={<%= singularName %>.id} {...<%= singularName %>} />)}
    </Layout>
  )
}

// export default function({<%= pluralName %>=[], ...props}) {
//   return (
//     <Layout>
//       <h1><%= pluralName %></h1>
//       <a href={`/<%= pluralName %>/${id}/edit`}>Create a new <%= singularName %></a>
//       <ul>
//         {<%= pluralName %>.map(({id}) => (
//           <li key={id}>
//             <a href={`<%= pluralName %>/${id}`}>
//               <%= pluralName %>/{id}
//             </a>
//           </li>
//         )}
//       </ul>
//     </Layout>
//   )
// }
