import { TAuthenticationToken } from "../../../src/models/user/TAuthenticationToken";

const Profiles: TAuthenticationToken[] = [
  {
    id: "c552403f-b2bf-4237-9599-22696104eb63",
    name: "sterling.archer",
    first_name: "Sterling",
    last_name: "Archer",
    audiences: [
      "900a6687-f66e-431a-8f23-87ef1ca836d3",
      "ce6cde44-062a-4db2-a6eb-8b7ed2f8e280"
    ],
    contexts: [
      "b1f93cd2-84bd-41ad-bb1a-12f63cfc9efb",
      "f9d8978c-9aff-41c5-ac13-61eff9b0da41"
    ],
    permissions: ["transactions.armoury", "transactions.expenses"],
    roles: ["field_agent"],
    iat: 1582145736
  },
  {
    id: "c552403f-b2bf-4237-9599-22696104eb63",
    name: "malory.archer",
    first_name: "Malory",
    last_name: "Archer",
    audiences: [
      "900a6687-f66e-431a-8f23-87ef1ca836d3",
      "ce6cde44-062a-4db2-a6eb-8b7ed2f8e280"
    ],
    contexts: [
      "b1f93cd2-84bd-41ad-bb1a-12f63cfc9efb",
      "f9d8978c-9aff-41c5-ac13-61eff9b0da41"
    ],
    permissions: [
      "transactions.armoury",
      "transactions.expenses",
      "transactions.bar",
      "access.payroll"
    ],
    roles: ["founder", "field_agent"],
    iat: 1582145736
  },
  {
    id: "c552403f-b2bf-4237-9599-22696104eb63",
    name: "cyril.figgis",
    first_name: "Cyril",
    last_name: "Figgis",
    audiences: [
      "900a6687-f66e-431a-8f23-87ef1ca836d3",
      "ce6cde44-062a-4db2-a6eb-8b7ed2f8e280"
    ],
    contexts: [
      "b1f93cd2-84bd-41ad-bb1a-12f63cfc9efb",
      "f9d8978c-9aff-41c5-ac13-61eff9b0da41"
    ],
    permissions: ["access.mainframe", "access.payroll"],
    roles: ["accountant"],
    iat: 1582145736
  }
];

export default Profiles;
