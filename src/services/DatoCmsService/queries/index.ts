import { gql } from "@apollo/client";

export const GetExperiences = gql`
  query {
    allExperiences(orderBy: endDate_ASC) {
      company
      startDate
      endDate
      description
    }
  }
`;
