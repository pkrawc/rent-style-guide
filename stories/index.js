import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from './Button'
import Text from './Elements/Text'

storiesOf('Text', module)
  .addWithInfo('Basic', () => (
    <Text>Hello World</Text>
  ))
  .addWithInfo('Small', () => (
    <Text small>Hello World</Text>
  ))
  .addWithInfo('Title', () => (
    <Text title>Hello World</Text>
  ))
  .addWithInfo('Headline', () => (
    <Text headline>Hello World</Text>
  ))
  .addWithInfo('Hero', () => (
    <Text hero>Hello World</Text>
  ))

storiesOf('Button', module)
  .addWithInfo('Basic', () => (
    <Button>Hello World</Button>
  ))
  .addWithInfo('Primary', () => (
    <Button>Hello World</Button>
  ))
  .addWithInfo('Bare', () => (
    <Button>Hello World</Button>
  ))

storiesOf('Tooltip', module)
  .addWithInfo('Basic', () => (
    <Button>Hello World</Button>
  ))
  .addWithInfo('With Action', () => (<div></div>))

storiesOf('Icon', module)
  .addWithInfo('Basic', () => (
    <Button>Hello World</Button>
  ))
  .addWithInfo('Solid', () => (<div></div>))

storiesOf('Container', module)
  .addWithInfo('Basic', () => (
    <div>hello world</div>
  ))
