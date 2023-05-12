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
    allProjects(filter: { isDraftMode: { eq: false } }) {
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

export const GetUniqueProject = (projectSlug: string) => gql`
  query {
    project(filter: { slug: { eq: "${projectSlug}" }}) {
      id
      title
      coverImage {
        url
      }
      projectType
      language
      description
      frameworks
      packages
      github
      url
      appStoreUrl
      playStoreUrl
      isPublic
      reproduce
    }
  }
`;
