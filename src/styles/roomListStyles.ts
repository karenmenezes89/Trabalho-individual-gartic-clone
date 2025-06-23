import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0075ff',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 60,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
  },
  scrollContainer: {
    width: '100%',
  },
  roomItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  roomIcon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  roomText: {
    fontSize: 18,
    color: '#333',
  },
});