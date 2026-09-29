import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {
  const [selected, setSelected] = useState();
  return (
    <ImageBackground  source={require('./src/assets/images/photo.png')} style={styles.container}>
      <StatusBar style="auto" />

<View style={{backgroundColor:'#00000071', ...StyleSheet.absoluteFillObject}}/>

      <View style={{ flexDirection: 'row', gap: 15 }}>
        <View style={styles.littleBox}>
          <Image source={require('./src/assets/icons/flag.png')} style={styles.boxImage} />
        </View>
        <View style={styles.littleBox}>
          <Image source={require('./src/assets/icons/boxing.png')} style={styles.boxImage} />
        </View>
        <View style={styles.littleBox}>
          <Image source={require('./src/assets/icons/light.png')} style={styles.boxImage} />
        </View>

      </View>

      <View>
        <Text style={{ marginTop: 15, color: 'white', fontWeight: '900', fontSize: 50 }}>Register</Text>
        <Text style={{ color: 'white', fontWeight: '500', fontSize: 20, marginTop: 5 }}>Join the grid. Start clean. Drive fast</Text>
      </View>

      <View style={styles.blackBox}>

        <View>
          <Text style={styles.boxText}>Email</Text>
          <View style={styles.textInput}>
            <Image source={require('./src/assets/icons/mail.png')} style={{ height: 35, width: 35 }} />
            <TextInput
              placeholder='you@example.com'
              placeholderTextColor={'white'}
              style={{ fontSize: 18, color: 'white', width: '100%' }} />
          </View>
        </View>

        <View>
          <Text style={styles.boxText}>Full Name</Text>
          <View style={styles.textInput}>
            <Image source={require('./src/assets/icons/person.png')} style={{ height: 35, width: 35 }} />
            <TextInput
              placeholder='Dumitru Gotca'
              placeholderTextColor={'white'}
              style={{ fontSize: 18, color: 'white', width: '100%' }} />
          </View>
        </View>

        <View>
          <Text style={styles.boxText}>Password</Text>
          <View style={styles.textInput}>
            <Image source={require('./src/assets/icons/lock.png')} style={{ height: 35, width: 35 }} />
            <TextInput
              placeholder='Password'
              placeholderTextColor={'white'}
              secureTextEntry={true}
              style={{ fontSize: 18, color: 'white', width: '100%' }} />
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

          <TouchableOpacity onPress={() => setSelected(!selected)}>
            {selected ? <MaterialIcons name="check-box-outline-blank" size={30} color="#ffffff7d" /> : <MaterialIcons name="check-box" size={30} color="#ffffff7d" />}
          </TouchableOpacity>
          <Text style={{ color: "white" }}>I agree to the Terms and Privacy Policy</Text>
        </View>

        <View style={styles.button}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '800' }}>Create account</Text>
          <Entypo name="dots-two-horizontal" size={24} color="white" />
        </View>

        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>

          <View style={{ borderWidth: 0.5, width: "45%", borderColor: '#ffffff24', height:0.9 }} />
          <Text style={{color:'white', fontWeight:'800', fontSize:18}}>or</Text>
          <View style={{ borderWidth: 0.5, width: "45%", borderColor: '#ffffff24', height: 0.9 }} />
        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 70
  },
  littleBox: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.49)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ffffff7a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxImage: {
    height: 30,
    width: 30
  },
  blackBox: {
    width: '100%',
    backgroundColor: '#000000b6',
    // height: 100, 
    borderRadius: 30,
    marginTop: 30,
    padding: 20,
    gap: 25
  },
  boxText: {
    color: 'white',
    fontWeight: '600',
    letterSpacing: 2,
    fontSize: 15,
  },
  textInput: {
    height: 60,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ffffff54',
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#c84343',
    width: '100%',
    height: 55,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff75',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  }
});
