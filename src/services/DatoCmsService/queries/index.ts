import { gql } from "@apollo/client";

export const GetExperiences = gql`
  query {
    allExperiences(orderBy: endDate_DESC) {
      company
      startDate
      endDate
      description
    }
  }
`;
