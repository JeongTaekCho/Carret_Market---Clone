import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  ApolloLink,
} from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";

interface IApollo {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

const ApolloSetting = (props: IApollo) => {
  //   const [accessToken, setAccessToken] = useRecoilState(accessTokenData);

  //   useEffect(() => {
  //     void getAccessToken().then((newAccessToken) => {
  //       setAccessToken(newAccessToken);
  //     });
  //   }, []);

  //   const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //     if (graphQLErrors) {
  //       for (const err of graphQLErrors) {
  //         if (err.extensions.code === "UNAUTHENTICATED") {
  //           return fromPromise(
  //             getAccessToken().then((newAccessToken) => {
  //               setAccessToken(newAccessToken);

  //               operation.setContext({
  //                 headers: {
  //                   ...operation.getContext().headers,
  //                   Authorization: `Bearer ${newAccessToken}`,
  //                 },
  //               });
  //             })
  //           ).flatMap(() => forward(operation));
  //         }
  //       }
  //     }
  //   });

  const uploadLink = createUploadLink({
    uri: "https://backend09.codebootcamp.co.kr/graphql",
    headers: {
      // Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
