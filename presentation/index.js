// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Appear,
    Deck,
    Heading,
    Image,
    Link,
    ListItem,
    List,
    Slide,
    Spectacle,
    Text,
    BlockQuote,
    Quote,
    Cite,
    Table,
    TableRow,
    TableHeaderItem,
    TableItem,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
    cat: require('../assets/cat.gif'),
    redux: require('../assets/redux.png'),
    launchpad: require('../assets/launchpad.png'),
    perspectives: require('../assets/perspectives.gif'),
};

preloader(images);

const theme = createTheme({
    primary: '#00AAFF',
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['zoom', 'slide']} transitionDuration={500}>
                    <Slide transition={['zoom']} bgColor="primary">
                        <Heading size={1} fit lineHeight={1} textColor="black">
                            GraphQL SDL
                        </Heading>
                        <Heading size={1} fit caps>
                            Basic introduction and discussion
                        </Heading>
                    </Slide>
                    <Slide transition={['slide']} bgColor="black">
                        <Heading size={1} textColor="primary" textFont="primary">
                            Talking points
                        </Heading>
                        <List textColor="tertiary">
                            <Appear><ListItem>What is GraphQL again?</ListItem></Appear>
                            <Appear><ListItem>What does SDL mean?</ListItem></Appear>
                            <Appear><ListItem>Communication is key</ListItem></Appear>
                            <Appear><ListItem>What does it look like?</ListItem></Appear>
                            <Appear><ListItem>Meet the fam</ListItem></Appear>
                            <Appear><ListItem>Examples</ListItem></Appear>
                            <Appear><ListItem>Let's build a feature!</ListItem></Appear>
                            <Appear><ListItem>Read more...</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">
                            What is GraphQL again?
                        </Heading>
                        <List textColor="tertiary">
                            <Appear><ListItem>Data query language developed by Facebook</ListItem></Appear>
                            <Appear><ListItem>Alternative to REST</ListItem></Appear>
                            <Appear><ListItem>More freedom for frontenders</ListItem></Appear>
                            <Appear><ListItem>Automatically documented API's</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide transition={['slide']} bgColor="black">
                        <Heading size={4} textColor="primary" textFont="primary">
                            What does SDL mean?
                        </Heading>
                        <Heading size={6} textColor="white">
                            Schema Definition Language
                        </Heading>
                        <Text textColor="white" size="8" margin="40px">
                            GraphQL SDL is a shorthand notation to express the basic shape of your GraphQL Schema and
                            its type system.
                        </Text>
                    </Slide>
                    <Slide transition={['slide']} bgColor="white">
                        <Heading size={4} textColor="primary" textFont="primary">
                            Communication is key!
                        </Heading>
                        <Text textColor="black" size="8" margin="40px">
                            GraphQL is for front- &aacute;nd backenders. Help eachother out!
                        </Text>
                        <Image width="100%" src={images.perspectives} />
                    </Slide>

                    <CodeSlide
                        transition={[]}
                        lang="graphql"
                        code={require('raw!../assets/code/basic.example')}
                        ranges={[
                            { loc: [0, 36], title: 'What does it look like?' },
                            {
                                loc: [0, 5],
                                note: 'Define your schema. GraphQL has Queries, Mutations and Subscriptions',
                            },
                            { loc: [6, 11], note: 'Define the Types your API wants to expose.' },
                            { loc: [12, 15], note: 'Define the Queries your API has.' },
                        ]}
                    />
                    <Slide transition={['slide']} bgColor="white">
                        <Heading size={5} caps textColor="primary" textFont="primary">
                            Meet the fam
                        </Heading>
                        <Heading size={6} textColor="black">
                            Schema
                        </Heading>
                        <Table textSize={8} style={{ marginTop: '40px' }}>
                            <TableRow>
                                <TableItem><code>schema</code></TableItem>
                                <TableItem>GraphQL schema definition</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>query</code></TableItem>
                                <TableItem>A read-only fetch operation</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>mutation</code></TableItem>
                                <TableItem>A write followed by fetch operation</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>subscription</code></TableItem>
                                <TableItem>A subscription operation</TableItem>
                            </TableRow>
                        </Table>
                    </Slide>
                    <Slide transition={['slide']} bgColor="white">
                        <Heading size={5} caps textColor="primary" textFont="primary">
                            Meet the fam
                        </Heading>
                        <Heading size={6} textColor="black">
                            Built-in Scalar Types
                        </Heading>
                        <Table textSize={8} style={{ marginTop: '40px' }}>
                            <TableRow>
                                <TableItem><code>Int</code></TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>Float</code></TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>String</code></TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>Boolean</code></TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>ID</code></TableItem>
                            </TableRow>
                        </Table>
                    </Slide>
                    <Slide transition={['slide']} bgColor="white">
                        <Heading size={5} caps textColor="primary" textFont="primary">
                            Meet the fam
                        </Heading>
                        <Heading size={6} textColor="black">
                            Type Definitions
                        </Heading>
                        <Table textSize={8} style={{ marginTop: '40px' }}>
                            <TableRow>
                                <TableItem><code>scalar</code></TableItem>
                                <TableItem>Scalar Type</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>type</code></TableItem>
                                <TableItem>Object Type</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>interface</code></TableItem>
                                <TableItem>Interface Type</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>union</code></TableItem>
                                <TableItem>Union Type</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>enum</code></TableItem>
                                <TableItem>Enum Type</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>input</code></TableItem>
                                <TableItem>Input Object Type</TableItem>
                            </TableRow>
                        </Table>
                    </Slide>
                    <Slide transition={['slide']} bgColor="white">
                        <Heading size={5} caps textColor="primary" textFont="primary">
                            Meet the fam
                        </Heading>
                        <Heading size={6} textColor="black">
                            Type Modifiers
                        </Heading>
                        <Table textSize={8} style={{ marginTop: '40px' }}>
                            <TableRow>
                                <TableItem><code>String</code></TableItem>
                                <TableItem>Nullable String</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>String!</code></TableItem>
                                <TableItem>Non-null String</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>[String]</code></TableItem>
                                <TableItem>List of nullable Strings</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>[String]!</code></TableItem>
                                <TableItem>Non-null list of nullable Strings</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem><code>[String!]!</code></TableItem>
                                <TableItem>Non-null list of non-null Strings</TableItem>
                            </TableRow>
                        </Table>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">
                            Examples
                        </Heading>
                        <List textColor="tertiary">
                            <Appear><ListItem>Input Arguments</ListItem></Appear>
                            <Appear><ListItem>Input Types</ListItem></Appear>
                            <Appear><ListItem>Custom Scalars</ListItem></Appear>
                            <Appear><ListItem>Interfaces</ListItem></Appear>
                            <Appear><ListItem>Unions</ListItem></Appear>
                        </List>
                    </Slide>
                    <CodeSlide
                        transition={[]}
                        lang="graphql"
                        code={require('raw!../assets/code/input-arguments.example')}
                        ranges={[
                            { loc: [0, 36], title: 'Input Arguments' },
                            { loc: [0, 4] },
                            { loc: [5, 9] },
                            { loc: [10, 14] },
                            { loc: [15, 19] },
                        ]}
                    />
                    <CodeSlide
                        transition={[]}
                        lang="graphql"
                        code={require('raw!../assets/code/input-types.example')}
                        ranges={[
                            { loc: [0, 9], title: 'Input Types' },
                            { loc: [0, 4], note: 'Input data for a new user.' },
                            { loc: [5, 8], note: 'The mutation to attach the input to.' },
                        ]}
                    />
                    <CodeSlide
                        transition={[]}
                        lang="graphql"
                        code={require('raw!../assets/code/custom-scalars.example')}
                        ranges={[
                            { loc: [0, 7], title: 'Custom Scalars' },
                            { loc: [0, 1], note: 'Define the scalar.' },
                            { loc: [2, 6], note: 'Use it in your types.' },
                        ]}
                    />
                    <CodeSlide
                        transition={[]}
                        lang="graphql"
                        code={require('raw!../assets/code/interfaces.example')}
                        ranges={[
                            { loc: [0, 24], title: 'Interfaces' },
                            { loc: [0, 9], note: 'Define your interfaces.' },
                            { loc: [10, 24], note: 'Use them in your types.' },
                        ]}
                    />
                    <CodeSlide
                        transition={[]}
                        lang="graphql"
                        code={require('raw!../assets/code/unions.example')}
                        ranges={[
                            { loc: [0, 20], title: 'Unions' },
                            { loc: [0, 2], note: 'Combine types into a union.' },
                            { loc: [3, 20], note: 'Use inline fragments to spread the data.' },
                        ]}
                    />
                    <Slide transition={['spin', 'slide']} bgColor="tertiary">
                        <Heading size={6} caps fit lineHeight={1.5} textColor="black">
                            Let's build a feature!
                        </Heading>
                        <Image width="100%" src={images.launchpad} />
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">
                            Read more
                        </Heading>
                        <List textColor="tertiary">
                            <ListItem>GraphQL Schema - http://graphql.org/learn/schema</ListItem>
                            <ListItem>GQLint - https://github.com/happylinks/gqlint</ListItem>
                            <ListItem>
                                Bynder Schema - https://github.com/Bynder/bynder-web/blob/master/schema/schema.gql
                            </ListItem>
                        </List>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
