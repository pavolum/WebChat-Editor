import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { initializeIcons } from '@uifabric/icons';
import WebChatEditor from './packages/webchatEditor/components/webChatEditor';
import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    initializeIcons();
  }

  render() {
    return (
      <WebChatEditor />
    );
  }
}

export default App;
