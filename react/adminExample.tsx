import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'
import helloWorld from './graphql/helloWorld.gql'


const AdminExample: FC = () => {
    const { data } = useQuery(helloWorld)
    return (
        <Layout>
            <PageBlock
                title="Titulo"
                subtitle="Alguma explicação"
                variation="full">
                <h1>Hello, world!</h1>
                <p>{data?.helloWorld}</p>
            </PageBlock>
        </Layout>
    )
}

export default AdminExample