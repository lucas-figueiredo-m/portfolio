import { gql } from "@apollo/client";

export const GetExperiences = gql`
  query {
    allExperiences(orderBy: endDate_DESC) {
      id
      company
      startDate
      endDate
      description
    }
  }
`;

export const GetWorks = gql`
  query {
    allWorks {
      id
      company
      role
      slug
      responsability
      jobType
      coverImage {
        url
      }
      topImage {
        url
      }
      bottomImage {
        url
      }
    }
  }
`;

export const GetUniqueWork = (workSlug: string) => gql`
  query {
    work(filter: { slug: { eq: "${workSlug}" }}) {
      id
      company
      role
      slug
      responsability
      description
      jobType
      coverImage {
        url
      }
      topImage {
        url
      }
      bottomImage {
        url
      }
    }
  }
`;

export const GetAllProjects = gql`
  query {
    allProjects {
      id
      title
      slug
      coverImage {
        url
      }
      projectType
    }
  }
`;
