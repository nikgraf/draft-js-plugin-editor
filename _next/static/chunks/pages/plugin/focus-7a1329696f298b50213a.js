(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{36154:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(2784),r=n(6277),a=(n(29911),n(16822)),l=n.n(a),s=o.createElement;function c(e){var t=e.code,n=e.className,o=e.name,a=(0,r.Z)(l().root,n),c=o?l().name:l().hiddenName,i=(0,r.Z)(l().code,"language-".concat(o&&o.endsWith("css")?"css":"js"));return s("div",{className:a},s("div",{className:c},o),s("pre",{className:i},s("code",null,t)))}},39646:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(2784),r=n(6277),a=(n(29911),n(7496)),l=n.n(a),s=o.createElement;function c(e){var t=e.code,n=e.className,o=(0,r.Z)(l().root,n);return s("span",{className:o},s("code",{dangerouslySetInnerHTML:{__html:t}}))}},93986:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(2784),r=n(18476),a=n.n(r),l=n(74157),s=n(47100),c=n(99428),i=n(62334),u=o.createElement;function d(e){var t=e.children;return(0,o.useEffect)((function(){a().highlightAll()}),[]),u("div",null,u(l.Z,null),u(s.Z,null),t,u(c.Z,null),u(i.Z,null))}},77183:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var o=n(84558),r=n(33831),a=n(64583),l=n(60942),s=n(10389),c=n(2784),i=n(76047),u=n(45565),d=n(26804),f=n(21239),g=n.n(f),p=n(36154),y=n(71520),m=n(77243),h=n(1503),v=n(64705),k=n(95597),S=n(9360),b=n(88488),C=c.createElement;function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=c.forwardRef((function(e,t){e.block,e.blockProps,e.customStyleMap,e.customStyleFn,e.decorator,e.forceSelection,e.offsetKey,e.selection,e.tree,e.contentState,e.blockStyleFn,e.preventScroll;var n=e.style,o=(0,b.Z)(e,["block","blockProps","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","contentState","blockStyleFn","preventScroll","style"]);return C("div",(0,S.Z)({ref:t},o,{style:_({width:200,height:80,backgroundColor:"#9bc0c7"},n)}))}));Z.displayName="ColorBlock";var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorator?e.decorator(Z):Z;return{blockRendererFn:function(e,n){var o=n.getEditorState;if("atomic"===e.getType()&&"colorBlock"===o().getCurrentContent().getEntity(e.getEntityAt(0)).getType())return{component:t,editable:!1};return null}}},B=n(4714),w=n.n(B),P=c.createElement;function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,s.Z)(e);if(t){var r=(0,s.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,l.Z)(this,n)}}var R=(0,k.Z)(),x=[R,K({decorator:(0,v.lM)(R.decorator)})],O={entityMap:{0:{type:"colorBlock",mutability:"IMMUTABLE",data:{}}},blocks:[{key:"9gm3s",text:"This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"More text here to demonstrate how inline left/right alignment works \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]},F=function(e){(0,a.Z)(n,e);var t=N(n);function n(){var e;(0,o.Z)(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return e=t.call.apply(t,[this].concat(a)),(0,m.Z)((0,y.Z)(e),"state",{editorState:h.EditorState.createWithContent((0,h.convertFromRaw)(O))}),(0,m.Z)((0,y.Z)(e),"onChange",(function(t){e.setState({editorState:t})})),(0,m.Z)((0,y.Z)(e),"focus",(function(){e.editor.focus()})),e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this;return P("div",{className:w().editor,onClick:this.focus},P(v.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:x,ref:function(t){e.editor=t}}))}}]),n}(c.Component),A=n(15702),j=n(39646),M=n(93986),T=c.createElement;function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,s.Z)(e);if(t){var r=(0,s.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,l.Z)(this,n)}}var L=function(e){(0,a.Z)(n,e);var t=D(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return T(M.Z,null,T(i.Z,null,T(d.Z,{level:2},"Focus"),T(d.Z,{level:3},"Prerequisite"),T("p",null,"This plugin exposes a decorator for blocks of the type `atomic`. You can use it in combination with any kind of plugin that manages a Draft.js block e.g. image or video. Keep in mind the plugin must accept a decorator for the block. The `Simple Focus Example` further down contains an example plugin rendering a colored div."),T(d.Z,{level:3},"Usage"),T("p",null,"Select (via mouse or keyboard) a block."),T(d.Z,{level:3},"Supported Environment"),T("ul",{className:g().list},T("li",{className:g().listEntry},"Desktop: Yes"),T("li",{className:g().listEntry},"Mobile: Yes"),T("li",{className:g().listEntry},"Screen-reader: No"))),T(u.Z,null,T(d.Z,{level:2},"Getting Started"),T(p.Z,{code:"npm install @draft-js-plugins/editor"}),T(p.Z,{code:"npm install @draft-js-plugins/focus"}),T(d.Z,{level:3},"Importing the default styles"),T("p",null,"The plugin ships with a default styling available at this location in the installed package: \xa0",T(j.Z,{code:"node_modules/@draft-js-plugins/focus/lib/plugin.css"})),T(d.Z,{level:4},"Webpack Usage"),T("ul",{className:g().list},T("li",{className:g().listEntry},"1. Install Webpack loaders: \xa0",T(j.Z,{code:"npm i style-loader css-loader --save-dev"})),T("li",{className:g().listEntry},"2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",T(p.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:g().guideCodeBlock})),T("li",{className:g().listEntry},"3. Add the below import line to your component to tell Webpack to inject the style to your component.",T(p.Z,{code:"import '@draft-js-plugins/focus/lib/plugin.css';",className:g().guideCodeBlock})),T("li",{className:g().listEntry},"4. Restart Webpack.")),T(d.Z,{level:4},"Browserify Usage"),T("p",null,"Please help, by submiting a Pull Request to the"," ",T(A.Z,{href:"https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Image/index.js"},"documentation"),".")),T(i.Z,null,T(d.Z,{level:2},"Configuration Parameters"),T("div",{className:g().param},T("span",{className:g().paramName},"theme"),T("span",null,"Object of CSS classes with the following keys:"),T("div",{className:g().subParams},T("div",{className:g().subParam},T("span",{className:g().subParamName},"focused:"),"CSS class for the focused item."),T("div",{className:g().subParam},T("span",{className:g().subParamName},"unfocused:"),"CSS class for the unfocused item.")))),T(i.Z,null,T(d.Z,{level:2},"Simple Focus Example"),T(F,null),T(p.Z,{code:"import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createColorBlockPlugin from './colorBlockPlugin';\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\n\nconst decorator = composeDecorators(focusPlugin.decorator);\n\nconst colorBlockPlugin = createColorBlockPlugin({ decorator });\nconst plugins = [focusPlugin, colorBlockPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'colorBlock',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text:\n        'More text here to demonstrate how inline left/right alignment works \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n      </div>\n    );\n  }\n}\n",name:"SimpleFocusEditor.js"}),T(p.Z,{code:"import React from 'react';\n\nconst ColorBlock = React.forwardRef(\n  (\n    {\n      block, // eslint-disable-line no-unused-vars\n      blockProps, // eslint-disable-line no-unused-vars\n      customStyleMap, // eslint-disable-line no-unused-vars\n      customStyleFn, // eslint-disable-line no-unused-vars\n      decorator, // eslint-disable-line no-unused-vars\n      forceSelection, // eslint-disable-line no-unused-vars\n      offsetKey, // eslint-disable-line no-unused-vars\n      selection, // eslint-disable-line no-unused-vars\n      tree, // eslint-disable-line no-unused-vars\n      contentState, // eslint-disable-line no-unused-vars\n      blockStyleFn, // eslint-disable-line no-unused-vars\n      preventScroll, // eslint-disable-line no-unused-vars\n      style,\n      ...elementProps\n    },\n    ref\n  ) => (\n    <div\n      ref={ref}\n      {...elementProps}\n      style={{ width: 200, height: 80, backgroundColor: '#9bc0c7', ...style }}\n    />\n  )\n);\n\nconst createColorBlockPlugin = (config = {}) => {\n  const component = config.decorator\n    ? config.decorator(ColorBlock)\n    : ColorBlock;\n  return {\n    blockRendererFn: (block, { getEditorState }) => {\n      if (block.getType() === 'atomic') {\n        const contentState = getEditorState().getCurrentContent();\n        const entity = contentState.getEntity(block.getEntityAt(0));\n        const type = entity.getType();\n        if (type === 'colorBlock') {\n          return {\n            component,\n            editable: false,\n          };\n        }\n      }\n      return null;\n    },\n  };\n};\nColorBlock.displayName = 'ColorBlock';\nexport default createColorBlockPlugin;\n",name:"colorBlockPlugin.js"}),T(p.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})))}}]),n}(c.Component)},1597:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/focus",function(){return n(77183)}])},16822:function(e){e.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},4714:function(e){e.exports={editor:"editorStyles_editor__2mo65",options:"editorStyles_options__3m5Bx"}},7496:function(e){e.exports={root:"InlineCode_root__1EGp7"}},21239:function(e){e.exports={root:"styles_root__17GJY",param:"styles_param__U8q04",paramBig:"styles_paramBig__3etsF",paramName:"styles_paramName__3YZJT",subParams:"styles_subParams__3cYYn",subParam:"styles_subParam__E1uNk",subParamName:"styles_subParamName__1RSzj",list:"styles_list__1TvAl",listEntry:"styles_listEntry__2B_3K",guideCodeBlock:"styles_guideCodeBlock__3CTZ2"}},95597:function(e,t,n){"use strict";var o=n(1503),r=n(46670),a=n(52358),l=n.n(a),s=n(2784),c=n(6277);function i(e){var t=function(e,t,n){var r=t.getStartKey(),a=[];return e.getBlockMap().forEach((function(e,t){a.push(e),t===r&&a.push(n)})),e.merge({blockMap:o.BlockMapBuilder.createFromArray(a),selectionBefore:t,selectionAfter:t.merge({anchorKey:n.getKey(),anchorOffset:n.getLength(),focusKey:n.getKey(),focusOffset:n.getLength(),isBackward:!1})})}(e.getCurrentContent(),e.getSelection(),new o.ContentBlock({key:(0,o.genKey)(),type:"unstyled",text:"",characterList:(0,r.List)()})),n=t.merge({selectionAfter:t.getSelectionAfter().set("hasFocus",!0)});return o.EditorState.push(e,n,"insert-fragment")}var u=function(e,t,n,r){var a=e(),s=a.getSelection().getAnchorKey(),c="up"===n?a.getCurrentContent().getBlockBefore(s):a.getCurrentContent().getBlockAfter(s);if((!c||c.get("key")!==s)&&c){var i=l().encode(c.getKey(),0,0),u=document.querySelectorAll('[data-offset-key="'+i+'"]')[0],d=window.getSelection(),f=document.createRange();f.setStart(u,0),f.setEnd(u,0),d.removeAllRanges(),d.addRange(f);var g="up"===n?c.getLength():0;r.preventDefault(),t(o.EditorState.forceSelection(a,new o.SelectionState({anchorKey:c.getKey(),anchorOffset:g,focusKey:c.getKey(),focusOffset:g,isBackward:!1})))}};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var f=function(e){var t=e.theme,n=e.blockKeyStore;return function(e){var o=s.forwardRef((function(o,r){(0,s.useEffect)((function(){return n.add(o.block.getKey()),function(){n.remove(o.block.getKey())}}),[]);var a=o.blockProps,l=o.className,i=a.isFocused?(0,c.Z)(l,t.focused):(0,c.Z)(l,t.unfocused);return s.createElement(e,d({},o,{ref:r,onClick:function(e){e.preventDefault(),o.blockProps.isFocused||o.blockProps.setFocusToBlock()},className:i}))}));return o.displayName="BlockFocus("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",o.WrappedComponent=e.WrappedComponent||e,o}};var g=function(e,t,n){return e.getBlockMap().keySeq().skipUntil((function(e){return e===t})).takeUntil((function(e){return e===n})).concat([n])},p=function(e,t){return function(e){var t=e.getSelection(),n=e.getCurrentContent();return g(n,t.getStartKey(),t.getEndKey())}(e).includes(t)};var y={unfocused:"uz5k6rs",focused:"f1vn2c6d"},m=function(e,t){var n=e.getSelection();if(n.getAnchorKey()!==n.getFocusKey())return!1;var o=e.getCurrentContent().getBlockForKey(n.getAnchorKey());return t.includes(o.getKey())},h=["backspace","backspace-word","backspace-to-start-of-line","delete","delete-word","delete-to-end-of-block"];function v(e){return o.EditorState.set(e,{selection:e.getSelection(),forceSelection:!0,nativelyRenderedContent:null,inlineStyleOverride:null})}t.Z=function(e){void 0===e&&(e={});var t,n,a=function(){var e=(0,r.List)();return{add:function(t){return e=e.push(t)},remove:function(t){return e=e.filter((function(e){return e!==t}))},includes:function(t){return e.includes(t)},getAll:function(){return e}}}(),s=e.theme?e.theme:y;return{handleReturn:function(e,t,n){var o=n.setEditorState;return m(t,a)?(o(i(t)),"handled"):"not-handled"},handleKeyCommand:function(e,t,n,r){var l=r.setEditorState;if(h.includes(e)&&m(t,a)){var s=t.getSelection().getStartKey(),c=function(e,t){var n=e.getCurrentContent(),r=n.getKeyBefore(t),a=n.getBlockForKey(r);if(void 0===a){var l=new o.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:1});n=o.Modifier.removeRange(n,l,"backward"),n=o.Modifier.setBlockType(n,l,"unstyled");var s=o.EditorState.push(e,n,"remove-range"),c=new o.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:0});return o.EditorState.forceSelection(s,c)}var i=new o.SelectionState({anchorKey:r,anchorOffset:a.getLength(),focusKey:t,focusOffset:1});n=o.Modifier.removeRange(n,i,"backward");var u=o.EditorState.push(e,n,"remove-range"),d=new o.SelectionState({anchorKey:r,anchorOffset:a.getLength(),focusKey:r,focusOffset:a.getLength()});return o.EditorState.forceSelection(u,d)}(t,s);if(c!==t)return l(c),"handled"}return"not-handled"},onChange:function(e){var o=e.getCurrentContent();if(!o.equals(n))return n=o,e;n=o;var r=e.getSelection();if(t&&r.equals(t))return t=e.getSelection(),e;var l=a.getAll();if(t&&g(o,t.getStartKey(),t.getEndKey()).some((function(e){return l.includes(e)})))return t=r,v(e);return g(o,r.getStartKey(),r.getEndKey()).some((function(e){return l.includes(e)}))?(t=r,v(e)):e},keyBindingFn:function(e,t){var n=t.getEditorState,o=t.setEditorState,r=n();if(m(r,a)&&(37===e.keyCode&&u(n,o,"up",e),39===e.keyCode&&u(n,o,"down",e),38===e.keyCode&&u(n,o,"up",e),40===e.keyCode))u(n,o,"down",e);else if(!e.shiftKey){if(37===e.keyCode){var l=r.getSelection(),s=l.getAnchorKey(),c=r.getCurrentContent().getBlockBefore(s);c&&0===l.getAnchorOffset()&&a.includes(c.getKey())&&u(n,o,"up",e)}if(39===e.keyCode){var i=r.getSelection(),d=i.getFocusKey(),f=r.getCurrentContent().getBlockForKey(d),g=r.getCurrentContent().getBlockAfter(d),p="atomic"!==f.getType()&&f.getLength()===i.getFocusOffset();g&&p&&a.includes(g.getKey())&&u(n,o,"down",e)}if(38===e.keyCode){var y=r.getSelection().getAnchorKey(),h=r.getCurrentContent().getBlockBefore(y);h&&a.includes(h.getKey())&&u(n,o,"up",e)}if(40===e.keyCode){var v=r.getSelection().getAnchorKey(),k=r.getCurrentContent().getBlockAfter(v);k&&a.includes(k.getKey())&&u(n,o,"down",e)}}},blockRendererFn:function(e,t){var n=t.getEditorState,r=t.setEditorState;if("atomic"===e.getType()){var a=n();return{props:{isFocused:a.getSelection().getHasFocus()&&p(a,e.getKey()),isCollapsedSelection:a.getSelection().isCollapsed(),setFocusToBlock:function(){!function(e,t,n){var r=e(),a=l().encode(n.getKey(),0,0),s=document.querySelectorAll('[data-offset-key="'+a+'"]')[0],c=window.getSelection(),i=document.createRange();i.setStart(s,0),i.setEnd(s,0),c.removeAllRanges(),c.addRange(i),t(o.EditorState.forceSelection(r,new o.SelectionState({anchorKey:n.getKey(),anchorOffset:0,focusKey:n.getKey(),focusOffset:0,isBackward:!1})))}(n,r,e)}}}}},decorator:f({theme:s,blockKeyStore:a})}}}},function(e){e.O(0,[774,69,476,145,888,179],(function(){return t=1597,e(e.s=t);var t}));var t=e.O();_N_E=t}]);