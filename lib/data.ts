/* eslint-disable prettier/prettier */
import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      date
      tags
      title
      slug
      coverImage {
        url
      }
      excerpt
      category {
        id
        name
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

export const GET_ABOUT_HOME = gql`
  query AboutHome {
    page(where: { slug: "home" }) {
      content {
        html
      }
    }
  }
`;

export const GET_HOME_POSTS = gql`
  query getPosts {
    posts(first: 3) {
      id
      date
      tags
      title
      slug
      excerpt
      coverImage {
        url
      }
    }
  }
`;

export const GET_POSTS_SLUG = gql`
  query getPostsSlug {
    posts {
      slug
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query getSinglePost($slug: String!) {
    post(where: { slug: $slug }) {
      date
      title
      tags
      slug
      content {
        html
      }
      coverImage {
        url
      }
    }
  }
`;

export const GET_CAREER_PAGE = gql`
  query Career {
    page(where: { slug: "carreira" }) {
      content {
        html
      }
    }
  }
`;

export const GET_CONTACT_PAGE = gql`
  query Contact {
    page(where: { slug: "contato" }) {
      content {
        html
      }
    }
  }
`;

export const GET_COMPANIES = gql`
  query Companies {
    companies {
      id
      endYear
      startYear
      companyName
      currentJob
    }
  }
`;

export const GET_SOBRE = gql`
  query Sobre {
    page(where: { slug: "sobre" }) {
      title
      subtitle
      content {
        html
      }
    }
  }
`;
