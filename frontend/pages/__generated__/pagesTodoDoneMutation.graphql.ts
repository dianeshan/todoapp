/**
 * @generated SignedSource<<1ce8e65a7d9e149756c793ee509fd27a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type pagesTodoDoneMutation$variables = {
  input: string;
};
export type pagesTodoDoneMutationVariables = pagesTodoDoneMutation$variables;
export type pagesTodoDoneMutation$data = {
  readonly done: {
    readonly id: string;
    readonly title: string;
    readonly complete: boolean;
  };
};
export type pagesTodoDoneMutationResponse = pagesTodoDoneMutation$data;
export type pagesTodoDoneMutation = {
  variables: pagesTodoDoneMutationVariables;
  response: pagesTodoDoneMutation$data;
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
        "name": "id",
        "variableName": "input"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "done",
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
    "name": "pagesTodoDoneMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pagesTodoDoneMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ebbc59814a20d6e326f8586acdee8613",
    "id": null,
    "metadata": {},
    "name": "pagesTodoDoneMutation",
    "operationKind": "mutation",
    "text": "mutation pagesTodoDoneMutation(\n  $input: ID!\n) {\n  done(id: $input) {\n    id\n    title\n    complete\n  }\n}\n"
  }
};
})();

(node as any).hash = "4f01804a4dbf16e8772379e3129ef115";

export default node;
