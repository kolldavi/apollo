import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
const testData = `
type Query{
  hi: String
  resolutions:[Resolution]
}
`;
const typeDefs = [testData, ResolutionsSchema];

const resolvers = {
  Query: {
    hi() {
      return 'Hello App';
    },
    resolutions() {
      return [
        {
          _id: 'anyString',
          name: "Let's see if this works"
        },
        {
          _id: 'anyString2',
          name: "Let's see if this works2"
        }
      ];
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
createApolloServer({ schema });
