import { RectButtonProperties } from 'react-native-gesture-handler';
import { Products } from '../../requests/types';

export interface ICardProps extends RectButtonProperties {
    item: Products;
}
