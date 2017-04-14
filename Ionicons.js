import glyphMap from 'react-native-vector-icons/glyphmaps/Ionicons.json';
import createIconSet from './createIconSet';

export default createIconSet(
  glyphMap,
  'ionicons',
  require('./fonts/Ionicons.ttf')
);
