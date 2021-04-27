# React Native App for Vaccine Passport
this app supports and runs along with the Vaccine Passport web application (found at https://github.com/Derek229/vaccine-passport )

this RN project is a demo prototype independent of the Vaccine Passport web system
Vaccine App Native is not intended for actual use - fully functional Vaccine Passport RN app available at : https://github.com/tvonhake/VaccinePassport-ReactNativeWebView

Setup:
1. git clone git@github.com:tvonhake/vaccine-app-native.git [your project name here]
2. cd into cloned project folder
3. yarn
4. cd ios/
5. pod install

6. open vaccine-passport project and run rails server for vaccine-passport 
  (When running this app you can run vaccine-passport yarn start as well. To see any changes made in the web app reflect in the ios app, reload the ios app in terminal Metro console or RN Debugger UI in browser)
  
7. in vaccine-app-native folder: npx react-native run-ios

Note: This app is for demo purposes only. By default app user is logged into user-level account 'user1@test.com' in the vaccine-passport system. 
