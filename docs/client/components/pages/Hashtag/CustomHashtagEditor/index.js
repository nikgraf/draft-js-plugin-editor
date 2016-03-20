import React, { Component } from 'react';
import { Map } from 'immutable';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import styles from './styles.css';

const theme = Map({
  hashtag: styles.hashtag,
});
const hashtagPluginInstance = hashtagPlugin({ theme });
const plugins = [hashtagPluginInstance];

export default class CustomHashtagEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    return (
      <div className={ styles.root }>
        <div className={ styles.editor } onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref="editor"
          />
        </div>
      </div>
    );
  }
}
