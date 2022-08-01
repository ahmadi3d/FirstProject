import { StyleSheet, TextInput, View, Button } from 'react-native';

const InputGoal = ({ onClick, onChange, value }) => {
    return <View style={styles.inputContainer}>
        <TextInput style={{ width: '20%' }} placeholder='Please write a new item ...' onChangeText={onChange} value={value} />
        <Button title="Add" onPress={onClick} />
    </View>
}

export default InputGoal;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,    
    }    
})
