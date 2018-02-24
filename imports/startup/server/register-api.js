import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import merge from 'lodash/merge';
const testData = `
type Query{
  hi: String
  resolutions:[Resolution]
}
`;
const typeDefs = [testData, ResolutionsSchema];

const resolver = {
  Query: {
    hi() {
      return 'Hello App';
    }
  }
};
const resolvers = merge(resolver, ResolutionsResolvers);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
createApolloServer({ schema });
