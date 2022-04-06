import { gql } from '@apollo/client';

export const QUERY_ALLTSHIRTS = gql`
   query tshirts {
        tshirts {
            _id
            title
            brand
            description
            username
            createdAt
            imageLink
            comments {
            _id
            }
        }
    }
`;

export const QUERY_TSHIRTSBYUSER = gql`
    query tshirts($username: String) {
        tshirts(username: $username) {
            _id
            tshirtText
            createdAt
            username
            reactionCount
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;

export const QUERY_TSHIRT = gql`
    query tshirt($id: ID!) {
        tshirt(_id: $id) {
            _id
            tshirtText
            createdAt
            username
            reactionCount
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            tshirts {
                _id
                title
                brand
                description
                username
                createdAt
                imageLink
                comments {
                    _id
                    commentBody
                    createdAt
                }
            }
        }
    }
`;

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            tshirts {
                _id
                title
                brand
                description
                username
                createdAt
                imageLink
                comments {
                    _id
                    commentBody
                    createdAt
                }
            }
        }
    }
`;