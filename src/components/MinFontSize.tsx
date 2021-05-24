import * as React from 'react';
import {NativeSyntheticEvent, Text, TextLayoutEventData} from 'react-native';
import {AutoSizeTextProps} from '../types';

const MinFontSize = (props: AutoSizeTextProps) => {
  const {fontSize, children, style, numberOfLines, minFontSize} = props;

  const [currentFont, setCurrentFont] = React.useState(fontSize);
  const handleTextMode = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const {lines} = e.nativeEvent;
    if (
      lines.length > (numberOfLines as number) &&
      (currentFont as number) > (minFontSize as number)
    ) {
      setCurrentFont((currentFont as number) - 1);
    }
  };

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        style,
        {
          fontSize: currentFont,
        },
      ]}
      onTextLayout={e => {
        handleTextMode(e);
      }}>
      {children}
    </Text>
  );
};

export default MinFontSize;
