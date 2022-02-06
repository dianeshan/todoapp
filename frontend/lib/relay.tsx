import { OperationTypeNode } from 'graphql'
import { useMemo } from 'react'
import { Environment, Store, RecordSource, Network } from 'relay-runtime'

let relayEnvironment: any

//fetch data from graphql
async function fetchQuery(text: any, variables: any) {
    const res = await fetch('http://127.0.0.1:8000/graphql', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables
        }),
    })
    return await res.json()
}

//export a singleton instance of realy environment configured with network function 
export function createEnvironment(initial: any) {
    return new Environment({

        network: Network.create(fetchQuery),
        store: new Store(new RecordSource(initial)),
    })
}

export function newEnvironment(initial: any) {
    const environment = relayEnvironment ?? createEnvironment(initial)

    if (initial) {
        environment.getStore().publish(new RecordSource(initial))
    }
    //create relay environment if there is no relay environment
    if (!relayEnvironment) {
        relayEnvironment = environment
    }

    return relayEnvironment
}

export function useEnvironment(initial: any) {
    const store = useMemo(() => newEnvironment(initial), [initial])
    return store
}