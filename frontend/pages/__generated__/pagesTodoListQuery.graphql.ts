/**
 * @generated SignedSource<<67257823d14eae14ec1e5ab5b9dce369>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesTodoListQuery$variables = {};
export type pagesTodoListQueryVariables = pagesTodoListQuery$variables;
export type pagesTodoListQuery$data = {
  readonly todoList: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
    readonly complete: boolean;
  }>;
};
export type pagesTodoListQueryResponse = pagesTodoListQuery$data;
export type pagesTodoListQuery = {
  variables: pagesTodoListQueryVariables;
  response: pagesTodoListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todoList",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesTodoListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesTodoListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "afd499d2ed80beb8af2b06cd11e3fdd5",
    "id": null,
    "metadata": {},
    "name": "pagesTodoListQuery",
    "operationKind": "query",
    "text": "query pagesTodoListQuery {\n  todoList {\n    id\n    title\n    complete\n  }\n}\n"
  }
};
})();

(node as any).hash = "0d8f1886b478641036ae03d33c58fd37";

export default node;
