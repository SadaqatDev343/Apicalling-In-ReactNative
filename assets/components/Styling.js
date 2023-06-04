import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        paddingTop:10,
        paddingHorizontal:5,
        flexDirection: 'row',
        borderColor: '#000',
      },
      cell1: {
        flex: 1,
        padding: 10,
        paddingTop:10,
        borderWidth: 1,
        borderColor: '#000',
      },
      cell2: {
        flex: 2,
        padding: 10,
        borderWidth:1 ,
        borderColor: '#000',
      },
      cell3: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
      },
});

export default styles;