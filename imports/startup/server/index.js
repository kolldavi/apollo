import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import './register-api';
const typeDefs = `
type Query{
  hi: String
}
`;

const resolvers = {
  Query: {
    hi() {
      return 'Hello App';
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
createApolloServer({ schema });
