import { StyleSheet } from "react-native";

 export const appStyle = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#D9EAF9',
        alignItems: 'center',
        margin:16
    },
    title : {   
        fontSize: 30,
        color: 'blue',
      
        
    },    
    
    subTitle : {
        fontSize: 20,
        color: 'orange',
        marginTop: 4,
        
    },

    input : {
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginTop: 16,
        borderRadius:4,
        borderColor: '#ddd',
        borderWidth: 1,
        fontSize: 18,
        backgroundColor: 'white'
        
    },

    buttonContainer : {
        margin: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius:4,
        borderColor: 'blue',
        backgroundColor: '#85C88A',
        alignItems: 'center',
        marginTop: 8,

    },

    buttonText : {
        fontSize: 16
    },

    divider : {
        height: 4,
        width: '100%',
        backgroundColor: '#ddd',
        marginVertical: 32,
    },

    taskContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 12
       
    },

    taskText : {
        fontSize: 18,
    },

    taskDelete : {
        width: 32,
        height: 32,
        borderRadius: 4,
        backgroundColor: '#85C88A',
        justifyContent: 'center',
        alignItems: 'center',
    
    },

    taskDeleteTask : {
        fontSize: 18,
        color: 'white',
    }

       
});


