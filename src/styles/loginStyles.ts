import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0075ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
  },
  inputBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    color: '#000',
  },
  playButton: {
    backgroundColor: '#f9c300',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },
  roomButton: {
    backgroundColor: '#00b9f1',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});