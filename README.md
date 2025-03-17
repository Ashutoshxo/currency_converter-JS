# Currency Converter

A simple web-based currency converter built using HTML, CSS, and JavaScript. The app allows users to convert an amount from one currency to another using real-time exchange rates fetched from an API.

## Features
- Convert currency between multiple options.
- Fetches live exchange rates via API.
- Responsive and easy-to-use interface.

## Technologies Used
- HTML
- CSS
- JavaScript
- API: [ExchangeRate-API](https://www.exchangerate-api.com/)

## Setup

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/currency-converter.git
    cd currency-converter
    ```

2. Open `index.html` in your browser to view the app.

3. The app fetches exchange rates from `https://api.exchangerate-api.com/v4/latest/USD`. You do not need to provide an API key for this API.

## How It Works

- The user inputs an amount, selects the currencies (from and to), and clicks the "Convert" button.
- The app fetches the exchange rates and performs the conversion based on the live data from the API.
- The result is displayed on the page, showing the converted amount and the selected target currency.

### Files Structure
- `index.html`: Contains the structure of the Currency Converter app.
- `styles.css`: Contains the styles for the page layout.
- `js.js`: Contains JavaScript to handle the API request and conversion logic.

## Contributing

Feel free to fork this project, create a branch, and submit a pull request for any improvements or suggestions. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify and enhance this basic Currency Converter according to your needs.
