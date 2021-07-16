/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom GraphQL resolver functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/8base-console/custom-functions/resolvers
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    toggleCompletedResolver:
 *      ...
 *
 * Data that is sent to this function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * There are two ways to invoke this function locally:
 *
 *  (1) Explicit file mock file path using '-p' flag:
 *    8base invoke-local toggleCompletedResolver -p src/resolvers/toggleCompletedResolver/mocks/request.json
 *
 *  (2) Default mock file location using -m flag:
 *    8base invoke-local toggleCompletedResolver -m request
 *
 *  Add new mocks to this function to test different input arguments. Mocks can easily be generated
 *  the following generator command:
 *    8base generate mock toggleCompletedResolver -m [MOCK_FILE_NAME]
 */

import { gql } from "graphql-tag";

const TOGGLE_COMPLETED_MUTATION = gql`
  mutation ToggleCompletedMutation($id: ID!, $completed: Boolean!) {
    taskUpdate(data: { id: $id, completed: $completed }) {
      id
      name
      completed
      createdAt
    }
  }
`;

module.exports = async (event, ctx) => {
  const { id, completed } = event.data;

  let success = true;

  try {
    await ctx.api.gqlRequest(TOGGLE_COMPLETED_MUTATION, {
      id,
      completed,
    });
  } catch {
    success = false;
  }

  return { data: { success } };
};
