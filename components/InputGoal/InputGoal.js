import { StyleSheet, TextInput, View, Button } from 'react-native';

const InputGoal = ({ onClick, onChange, value }) => {
    return <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Please write a new item ...' onChangeText={onChange} value={value} />
        <View style={styles.button}>
            <Button color={'#00aa55'} title="Add" onPress={onClick} />
        </View>
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
    },
    textInput: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 4,
        marginRight: 6,
    },
    button: {
        width: '30%',
        paddingRight: 6,
    }
})
