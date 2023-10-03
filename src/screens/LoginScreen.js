import { View, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity , Image} from "react-native";
import { Entypo } from '@expo/vector-icons'; 

const LoginScreen = ({navigation}) => {
  const { container, titulo, form, input, inputSymb, icon, btn, msgRegistro, textRegistro, btnRegistro } = styles;
  return (
    <View style= {container}>
      <Text style={titulo}>Faça seu Login</Text>
      <Image source={require("../../assets/tasks2.png")} style={{width: 200, height: 300, marginTop: 12}}/>
        <View style={form}>
          <View style={inputSymb}>
            <Entypo name="email" size={24} color="white" style={icon} />
            <TextInput placeholder="Digite seu email" style={input}/>
          </View>
          <View style={inputSymb}>
            <Entypo name="key" size={24} color="white" style={icon} />
            <TextInput placeholder="Digite sua senha" secureTextEntry={true} style={input} />
          </View>
          <TouchableOpacity style={btn}>
            <Text style={{color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: 20}}>Entrar</Text>
          </TouchableOpacity>

          <View style={msgRegistro}>
            <Text style={textRegistro}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate("RegisterScreen")}>
              <Text style={btnRegistro}> Registre-se</Text>
            </TouchableOpacity>
          </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1c24",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: StatusBar.currentHeight || 10,
  },
  titulo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff"
  },
  input: {
    width: 300,
    height: 35,
    padding: 7,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 10
  },
  inputSymb : {
    flexDirection: "row",
    textAlign: "center"
  },
  icon: {
    marginRight: 8,
    marginTop: 5
  },
  btn: {
    width: 310,
    height: 40,
    backgroundColor: "red",
    borderRadius: 12,
    justifyContent: "center",
    marginLeft: 20,
    marginTop: 20
  },
  msgRegistro: {
    display: "flex",
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  textRegistro: {
    color: "#fff",
  },
  btnRegistro: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16
  }
})

export default LoginScreen;