# If your code is splittable, you can make bundles

## Symptoms of Hell:
1. Resuing logic
    HOC, Render props
    => Wrapper hell, difficult for data flow throw the app
    You need stateful logic

2. Giant components:
    logic has to be distributed in
[Screenshot] multiple lifecycles

3. Classes. Aaah!!!!
    i)
     Even if its a small component, you fear to create it as a functional component coz what if it needs state logic in future.

    ii) Doesn't trash out unnecessary methods in compile time. Difficult to understand the scopes.

## Problem:
React doesn't provide a simpler solution for stateful logics

## So what are the hooks?
Reusable extensions which can be plugged into a callback/listener

================= React Hooks ===================

1. useState
Demo: Checkbox.
    * You need to bind handlers as well
    * Now add one more field, is it getting worse?

================
render crop API for ThemeContext

2. useContext

What is context?
Context provides a way to pass data through the component tree without having to pass props down manually at every level


Compare process of using theme and locale in class/hooks

You need to end LocaleContext.Consumer which makes nested components


3. useEffect

Problem? Component life cycles make you write behaviours in chunks in different methods. Makes it inconsistent. Difficult to understand, for testing, for debugging.

What if a single behaviour is only in one method?

How cleanup works? In useEffect(<function as like componentDidUpdate>, [stateVariable])

Solution: No need of componentDidUpdate or componentWillUnmount
==================

Custom Hooks? useXyz()
We want to pull out some generic behaviours from our components, and remove deduplication.
Create a custom hook for it.
Like blur effect. [Showcase]

  
Advantage: Custom hooks give you the ability to write your own abstraction, that simplifies your component tree and avoids wrappers



==================

useReducer


==================



Demo



















