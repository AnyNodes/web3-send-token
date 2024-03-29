![CI/CD](https://github.com/AnyNodes/web3-send-token/actions/workflows/cicd.yml/badge.svg)

## web3-send-token

This npm package, `web3-send-token`, is designed create web3 wallet address and save to your local file.

## Installation

To install `web3-send-token` as a package, simply use pip:

```
npm install web3-send-token
```

This command installs `web3-send-token` along with all required dependencies. Ensure you have Nodejs installed on your system (version 20 or later is recommended).

## Configuration

Beofore use this package, you need to prepare the config.json. It contains the sender and receiver information.

## Usage

### As a NPM Package

After installing `web3-send-token` via npm, you can use it in your project as follows:

```javascript
const createWallet = require('web3-send-token');
```

### As a script

Fetch the repository, install dependency and execute the script

```shell
git clone https://github.com/AnyNodes/web3-send-token.git
cd web3-send-token
npm i
node src/sendToken.js
```

## Community Contribution

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

## Note

This package/script is intended for educational and demonstration purposes. It showcases how to interact with web APIs, process data in nodejs, and write output to a JSON file. Ensure you have the necessary permissions to use the API and data.
