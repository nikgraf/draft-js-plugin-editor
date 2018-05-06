/* @flow */

import escapeRegExp from 'lodash/escapeRegExp';

const findWithRegex = (regex, contentBlock, callback) => {
  const contentBlockText = contentBlock.getText();

  // exclude entities, when matching
  contentBlock.findEntityRanges(
    (character) => !character.getEntity(),
    (nonEntityStart, nonEntityEnd) => {
      const text = contentBlockText.slice(nonEntityStart, nonEntityEnd);
      let matchArr;
      let start;

      // Go through all matches in the text and return the indices to the callback
      while ((matchArr = regex.exec(text)) !== null) { // eslint-disable-line
        start = nonEntityStart + matchArr.index;
        callback(start, start + matchArr[0].length);
      }
    }
  );
};

export default (mentionTrigger: string, supportWhiteSpace: boolean, maxSuggestionsCharacters: number) => {
  const MENTION_REGEX = supportWhiteSpace ?
    new RegExp(`${escapeRegExp(mentionTrigger)}[\\w\\s]{0,${maxSuggestionsCharacters}}`, 'g') :
    new RegExp(`(\\s|^)${escapeRegExp(mentionTrigger)}[\\w]*`, 'g');

  return (contentBlock: Object, callback: Function) => {
    findWithRegex(MENTION_REGEX, contentBlock, callback);
  };
};

// /* @flow */
// import escapeRegExp from 'lodash.escaperegexp';
// export default (trigger: string, regExp: string) => (contentBlock: Object, callback: Function) => {
//   const reg = new RegExp(String.raw({
//     raw: `(\\s|^)${escapeRegExp(trigger)}${regExp}` // eslint-disable-line no-useless-escape
//   }), 'g');
//   findWithRegex(reg, contentBlock, callback);
// };
// //
