![image](public/assets/logo.png)

> Be infinitely flexible and constantly amazed. - Jason Kravitz

A declarative React primitive Flex component that exposes the flexbox specification in JSX

Based on Styled System and Styled Components. Written in typescript to provide strict prop validation on css spec adherence.

## Usage

Import as follows:

`import Flex from 'react-flex-primitive';`

Then use the Flex component to define the desired flexbox layout:

e.g. for a Flex container that has vertically aligned flex-items, where the first flex item grows:

```
<Flex alignItems='center'>
 <Flex flexGrow={1}>
   This flex item grows!
 </Flex>
 <Flex>
  This flex item does not grow :(
 </Flex>
</Flex>
```

## Additional resources

- https://www.w3.org/TR/css-flexbox-1/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
