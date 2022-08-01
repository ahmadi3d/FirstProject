import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListGoal = ({ data }) => {
    return <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={(item) => {
            return <View style={styles.itemListContainer}>
                <Text style={{ color: 'white' }}>{String(item.index + 1).padStart(3, "0")} - {item.item.text}</Text>
            </View>
        }}
    />
}

export default ListGoal;

const styles = StyleSheet.create({
    itemListContainer: {
        borderRadius: 6,
        backgroundColor: '#4c0164',
        margin: 8,
        padding: 4
    }
})