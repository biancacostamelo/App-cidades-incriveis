import { Text, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.paragraph}>Cidades Brasileiras</Text>

        <View style= {styles.fundoCidades}>
          <Text style={styles.cidades}>São Paulo</Text>
            <Text style= {styles.pontoTuristicos}>------ Pontos Turísticos ------</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator= {false}>
                <View style= {styles.itensTuristicos}> <Text>Parque do Ibirapuera</Text> </View>
                <View style= {styles.itensTuristicos}> <Text>Pinacoteca</Text> </View>
                <View style= {styles.itensTuristicos}> <Text>Museu da Lingua Portuguesa</Text> </View>
              </ScrollView>
        </View>

        <View style= {styles.fundoCidades}>
          <Text style={styles.cidades}>Salvador</Text>
            <Text style= {styles.pontoTuristicos}>------ Pontos Turísticos ------</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator= {false}>
                <View style= {styles.itensTuristicos}> <Text>Pelourinho</Text> </View>
                <View style= {styles.itensTuristicos}> <Text>Igreja do Bonfim</Text> </View>
                <View style= {styles.itensTuristicos}> <Text>Praia da Barra</Text> </View>
             </ScrollView>
        </View>

        <View style= {styles.fundoCidades}>
          <Text style={styles.cidades}>Florianópolis</Text>
            <Text style= {styles.pontoTuristicos}>------ Pontos Turísticos ------</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator= {false}>
              <View style= {styles.itensTuristicos}> <Text>Pelourinho</Text> </View>
              <View style= {styles.itensTuristicos}> <Text>Igreja do Bonfim</Text> </View>
              <View style= {styles.itensTuristicos}> <Text>Praia da Barra</Text> </View>
            </ScrollView>
        </View>

        <View style= {styles.fundoCidades}>
          <Text style={styles.cidades}>Natal</Text>
            <Text style= {styles.pontoTuristicos}>------ Pontos Turísticos ------</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator= {false}>
              <View style= {styles.itensTuristicos}> <Text>Pelourinho</Text> </View>
              <View style= {styles.itensTuristicos}> <Text>Igreja do Bonfim</Text> </View>
              <View style= {styles.itensTuristicos}> <Text>Praia da Barra</Text> </View>
            </ScrollView>
        </View>

        <View style= {styles.fundoCidades}>
          <Text style={styles.cidades}>Vitória</Text>
            <Text style= {styles.pontoTuristicos}>------ Pontos Turísticos ------</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator= {false}>
              <View style= {styles.itensTuristicos}> <Text>Pelourinho</Text> </View>
              <View style= {styles.itensTuristicos}> <Text>Igreja do Bonfim</Text> </View>
              <View style= {styles.itensTuristicos}> <Text>Praia da Barra</Text> </View>
            </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cidades: {
    fontSize: 20,
    color: '#8c0f3f',
    fontWeight: 500
  },
  fundoCidades: {
    backgroundColor: '#fee5f3',
    margin: 15,
    borderRadius: 20,
    padding: 20,
    gap: 10
  },
  pontoTuristicos: {
    fontSize: 20,
    fontWeight: '300'
  },
  itensTuristicos: {
    marginRight: 15,
    fontSize: 20,
    height: 50,
    padding: 10,
    backgroundColor: '#ffcbe8',
    borderRadius: 10,
    justifyContent: 'center'
  }
});
