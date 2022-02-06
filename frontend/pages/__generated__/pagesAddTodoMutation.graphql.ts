/**
 * @generated SignedSource<<77bb37abfb5bce6ba910e5a905db9374>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type pagesAddTodoMutation$variables = {
  input: string;
};
export type pagesAddTodoMutationVariables = pagesAddTodoMutation$variables;
export type pagesAddTodoMutation$data = {
  readonly add: {
    readonly id: string;
    readonly title: string;
    readonly complete: boolean;
  };
};
export type pagesAddTodoMutationResponse = pagesAddTodoMutation$data;
export type pagesAddTodoMutation = {
  variables: pagesAddTodoMutationVariables;
  response: pagesAddTodoMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "input"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "add",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "complete",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesAddTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pagesAddTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a8482876150afc9373cd1e483ccb29e0",
    "id": null,
    "metadata": {},
    "name": "pagesAddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation pagesAddTodoMutation(\n  $input: String!\n) {\n  add(title: $input) {\n    id\n    title\n    complete\n  }\n}\n"
  }
};
})();

(node as any).hash = "ea94da75a5339f8b94bae2a0e2a5bfdd";

export default node;
