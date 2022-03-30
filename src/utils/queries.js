import { gql } from '@apollo/client';

export const QUERY_tshirts = gql`
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

export const QUERY_tshirt = gql`
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
            friendCount
            friends {
                _id
                username
            }
            tshirts {
                _id
                tshirtText
                createdAt
                reactionCount
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
            friendCount
            tshirts {
                _id
                tshirtText
                createdAt
                reactionCount 
                reactions {
                    _id
                    createdAt
                    reactionBody
                    username
                }
            }
            friends {
                _id
                username
            }
        }
    }
`;