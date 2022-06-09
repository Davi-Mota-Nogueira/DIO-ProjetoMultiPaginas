import React, {useState, useEffect} from "react";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";


const Flashlight = ()=> {

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(()=> {
    /***
     * Usando a lanterna do celular
     */
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(()=>{
    /***
     * Quando chacoalhoar o celular, troca toggle
     */
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });

    return ()=> subscription.remove();
  },[]);

  return(
    <View>
      <TouchableOpacity onPress={handleToggle}>
        <View style={toggle?style.containerLight:style.container}>
          <Image
          style={toggle?style.lightOn:style.lightOff}
          source={toggle?require('./icons/eco-light.png'):require('./icons/eco-light-off.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );

};

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightOn:{
    height: 200,
    width: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  lightOff:{
    height: 200,
    width: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    tintColor: 'white',
  },
});

export default Flashlight;
