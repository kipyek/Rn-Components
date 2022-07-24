import { enableLogging } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import React, { createContext, useState } from 'react'
import { ActivityIndicator } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [userToken, setUserToken] = useState(null)

  const Login = () => {
    setUserToken("ygywfeuigd")
    setIsLoading(false)
  }

  const Logout = () => {
    setUserToken(null)
    setIsLoading(false)
  }
  return (
    <AuthContext.Provider value={{ Login, Logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  )
}


//App.tsx
<AuthProvider>
  <AppNav />
</AuthProvider>

//Navigation ...AppNav

const { isLoading, userToken } = React.useContext(AuthContext);
{
  isLoading ?
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size={'large'} />
    </View>
    :
    null
}

<NavigationContainer>
  {userToken !== null ? <RootNavigationScreen /> : <Drawer />}
</NavigationContainer>

//login
useContext from react

const () = useContext(AuthContext)