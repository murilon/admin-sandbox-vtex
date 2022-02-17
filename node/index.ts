import{ Service } from '@vtex/api'

export default new Service({
    graphql:{
        resolvers:{
            Query:{
                helloWorld: () => `Teste - Numero Gerado ${Math.random()}`            }
        }
    }
})