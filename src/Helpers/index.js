import AsyncStorage from '@react-native-community/async-storage';

export const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem("User");    
    if (value !== null) {
      return JSON.parse(value);      
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export const setUser = async user => {
  try {
    await AsyncStorage.setItem("User", JSON.stringify(user));
  } catch (e) {
    console.log("Async", e);
  }
};

export const clearUser = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log("Async Clear", e);
  }
};

export const getDateInfo = date => {
  const newDate = new Date(date); // 2009-11-10
  const month = newDate.toLocaleString("default", { month: "long" });
  const year = newDate.getFullYear();
  return `${month} ${year}`;
};
