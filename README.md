# WebChat-Editor

## Description
This app provides a GUI where you can customize the look and feel of a bot framework web chat instance without touching code! After customizing the look and feel you can export a `StyleOptions` json object which you can use in your own webchat instance so it reflects the customizations selected in this app. 

## Resources
- [Bot Framework Web Chat Repo](https://github.com/microsoft/BotFramework-WebChat/)
- [List of available web chat customizations](https://github.com/microsoft/BotFramework-WebChat/blob/master/packages/component/src/Styles/defaultStyleOptions.js)
- [Figma Designs]()

## How To Run
- Pull the latest from repo `main` branch
- Run `npm install`
- Run `npm start`
  - This command allows for hot reload so as you save a file while running then a recompile should happen and the app refreshed with your changes

## Contribution Guidelines
- Pushing directly to main is prohibited, you must branch from main and submit a PR from your branch to main once the feature you are working on is ready for review. 
- Keep PRs concise and modular, each PR should consists of the changes for 1 logical feature (i.e. 'addition of completed config data structure', 'created Color UI selector', etc. )
- Follow coding standards set in existing files. 
  - Use `./utilities/ReduxClassComponentTemplate.txt` when you want to create a new redux class
  - Use `./components/fontForm.tsx` as an example for functional components 
  - Separate styling to dedicated area in the components file
  - Leverage TS as much as possible and avoid `:any` types

## Architecture approach
### State management
This is a simple app with a relatively small amount of application state. We leverage redux to centralize state management. State is defined in `reduxState.ts` and is mainly comprised of [available web chat customizations](https://github.com/microsoft/BotFramework-WebChat/blob/master/packages/component/src/Styles/defaultStyleOptions.js).

WebChat customization values are pushed to state and directly passed to the WebChat Rect component in `WebChat.tsx` so as the webchat customization state values change then the WebChat component automatically rerenders with the new UI changes. Webchat customization state values are changed when the user changes selection in the GUI. GUI components are given the ability to change state values because their parent component `WebChatEditor` has the following state change dispatch function which it passes to individual child selection 

```
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
    updateStyleOptions: (styleOptions: WebChatStyleOption) => {
        dispatch(genericSingleAction<any>(actionTypes.UPDATE_STYLE_OPTIONS, { styleOptions }));
    }
});
```

This allows individual customization selection components to change state with the following function call (Follow fontForm.tsx or any other selector component as an example)

```
props.updateStyleElement('hideUploadButton', !checked)
```

### Plans for V1
At current state (9/18/2020) the V0 app is a POC that has a handful (< 10) of GUI customizations components that, when changed, change the resulting UI in a sample WebChat instance visible to the user. 

The plans for next steps is to make this a production quality stand alone tool that has GUI customization components for most if not all the [available web chat customizations](https://github.com/microsoft/BotFramework-WebChat/blob/master/packages/component/src/Styles/defaultStyleOptions.js)

#### Proposed Refactor
The current state system will be kept as it serves its purpose well and is relatively straight forward. 

As we look to support 100+ customization widgets, we will refactor the app so all customization content is stored in state and the react pieces are purely UI.

I imagine a 'customizationOptions' object array stored in state where each object has all the data needed to render that particular customization object in the App.

A small instance of 'customizationOptions' would look something like this (using backgroundColor and bubbleBorderRadius as example from [available web chat customizations](https://github.com/microsoft/BotFramework-WebChat/blob/master/packages/component/src/Styles/defaultStyleOptions.js) ): 

```typescript
[{
  id: 'backgroundColor',
  displayName: 'Background Color',
  category: Categories.WebChatShell, //Create Categories string enum that represents different UI categories
  uiSelectorType: UISelectors.ColorSelector, //Create UISelectors string enum that represents different available UI selectors
  isAdvancedOption: true, 
  // corresponding Value can be attained using id and call to grab value for that ID from AppState.styleOptions
},
{
  id: 'bubbleBorderRadius',
  displayName: 'Bubble Border Radius',
  category: Categories.ChatBubble,
  uiSelectorType: UISelectors.NumberSelector,
}
...
]
```

We will create a data object like the one above but for most if not all the selections in [available web chat customizations](https://github.com/microsoft/BotFramework-WebChat/blob/master/packages/component/src/Styles/defaultStyleOptions.js). We will then build the app in such a way that it can parse through this structure and render each element as a UI element in the app.

So if the app were to parse through the above example data it would render the 'Background Color' (displayName attribute) customization widget under the WebChatShell header (category attribute). It would render the widget as a ColorSelector UI component (uiSelectorType attribute) with a default value of 'blue' (defaultValue attribute). When that widgets selection is changes the widget will know to update the 'bubbleBorderRadius'(id attribute) to the new value. Note it will change the value of 'bubbleBorderRadius' in that state.webChatStyleOptions object which is already passed to the WebChat component.

So the data structure should have all the necessary business logic and the app has an expectation of the structure of that business logic. Then the App will loop through the structure and mount different 'UI selector widgets' based on the uiSelectorType of the entry in question. 