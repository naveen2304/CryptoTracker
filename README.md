# CryptoTracker(IOS)
1. Install node and watchman from brew using the following commands:\
`brew install node`\
`brew install watchman`
2. Install rbenv from brew using the following command:\
`brew install rbenv ruby-build`
3. Load rbenv in the shell using the following command:\
`rbenv init`
4. Close your terminal window and open a new terminal for changes to take effect.
5. Run the following command:\
`rbenv install 2.7.5`
6. Run the following commands to set this ruby version globally:\
`export PATH="$HOME/.rbenv/bin:$PATH"`\
`eval "$(rbenv init -)"`\
`rbenv global 2.7.5`
7. Install Xcode from the Mac App Store. You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.
8. Create a file named `.env` in the root folder of the cloned repository and add the following content to it:\
`CMC_PRO_API_KEY={YOUR_API_KEY_FROM_COIN_MARKET_CAP}`
9. Open a terminal in the root folder of the cloned repository and run the following commands to install the node modules and pods required for the project:\
`npm install`\
`cd ios`\
`pod install`
9. Start metro by running the following command in the terminal of the root folder of cloned repository:\
`npx react-native start`
10. Open a new terminal in the root folder of the cloned repository and run the following command to start the app on IOS Simulator:\
`npx react-native run-ios`
