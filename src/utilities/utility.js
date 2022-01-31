export const months = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/*
nf -> Number Format
Takes a decimal number (as string) that could be either positive (1230.31123) or negative (-40.91031)
and returns a jsx tag representing the formatted version of the number as a string that:
1. Adds a + if the number is positive and removes the - if the number is negative
2. Limits the precision to 2 decimal plases
3. Adds separators (1000000 => +1,000,000)
4. Sets separators and currency as provided by user
*/
export const nf = (n, decimalSep, integerSep, currency) => {
  //from string to decimal with 2-digit precision
  let newNumber = parseFloat(n).toFixed(2);

  //back again to string type
  let newNumberString = newNumber.toString();

  //obtain the decimal part of the number
  let decimals = newNumberString.substring(newNumberString.length - 2);

  //obtain the integer part and check if negative or positive
  let integer;
  let sign;
  if (newNumberString[0] === "-") {
    integer = newNumberString.substring(1, newNumberString.length - 3);
    sign = "-";
  } else if (newNumberString === "0.00") {
    integer = newNumberString.substring(0, 1);
    sign = "";
  } else {
    integer = newNumberString.substring(0, newNumberString.length - 3);
    sign = "+";
  }

  //Perfor operation to add the separator
  let newInteger = "";
  for (let i = integer.length; i > 0; i--) {
    if ((integer.length - i) % 3 === 2 && i !== 1) {
      newInteger += integer[i - 1];
      newInteger += integerSep;
    } else {
      newInteger += integer[i - 1];
    }
  }
  newInteger = newInteger.split("").reverse().join("");

  //compose back the number, add a + if it's positive
  return (
    <>
      <span className="text-md">
        {sign}
        {newInteger + decimalSep}
      </span>
      <span className="text-sm">{decimals}</span>
      <span className="text-md">{currency}</span>
    </>
  );
};

/*
Return the number of days in a specific month + checks for lump years
*/
export const daysOfMonth = (year, month) => {
  let days = [];
  for (let i = 1; i <= 30; i++) days.push(i);
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    return days;
  } else if (month == 2) {
    if (year % 4 === 0) {
      if (!(year % 100 === 0)) {
        days.pop();
        return days;
      } else {
        if (year % 400) {
          days.pop();
          return days;
        } else {
          days.pop();
          days.pop();
          return days;
        }
      }
    } else {
      days.pop();
      days.pop();
      return days;
    }
  } else {
    days.push(31);
    return days;
  }
};

export const currencies =
  // length 164
  [
    { name: "Afghan Afghani", code: "AFA", symbol: "؋" },
    { name: "Argentine Peso", code: "ARS", symbol: "$" },
    { name: "Australian Dollar", code: "AUD", symbol: "$" },
    { name: "Belarusian Ruble", code: "BYR", symbol: "Br" },
    { name: "Bitcoin", code: "BTC", symbol: "฿" },
    { name: "Bolivian Boliviano", code: "BOB", symbol: "Bs." },
    { name: "Bosnia-Herzegovina Convertible Mark", code: "BAM", symbol: "KM" },

    { name: "Brazilian Real", code: "BRL", symbol: "R$" },

    { name: "Canadian Dollar", code: "CAD", symbol: "$" },
    { name: "Chinese Yuan", code: "CNY", symbol: "¥" },
    { name: "Czech Republic Koruna", code: "CZK", symbol: "Kč" },
    { name: "Danish Krone", code: "DKK", symbol: "Kr." },
    { name: "Egyptian Pound", code: "EGP", symbol: "ج.م" },
    { name: "Eritrean Nakfa", code: "ERN", symbol: "Nfk" },
    { name: "Estonian Kroon", code: "EEK", symbol: "kr" },
    { name: "Ethiopian Birr", code: "ETB", symbol: "Nkf" },
    { name: "Euro", code: "EUR", symbol: "€" },
    { name: "Hong Kong Dollar", code: "HKD", symbol: "$" },
    { name: "Hungarian Forint", code: "HUF", symbol: "Ft" },
    { name: "Icelandic Krana", code: "ISK", symbol: "kr" },
    { name: "Indian Rupee", code: "INR", symbol: "₹" },
    { name: "Indonesian Rupiah", code: "IDR", symbol: "Rp" },
    { name: "Iranian Rial", code: "IRR", symbol: "﷼" },
    { name: "Iraqi Dinar", code: "IQD", symbol: "د.ع" },
    { name: "Israeli New Sheqel", code: "ILS", symbol: "₪" },
    { name: "Italian Lira", code: "ITL", symbol: "L,£" },
    { name: "Jamaican Dollar", code: "JMD", symbol: "J$" },
    { name: "Japanese Yen", code: "JPY", symbol: "¥" },
    { name: "Kazakhstani Tenge", code: "KZT", symbol: "лв" },
    { name: "Latvian Lats", code: "LVL", symbol: "Ls" },
    { name: "Lebanese Pound", code: "LBP", symbol: "£" },
    { name: "Liberian Dollar", code: "LRD", symbol: "$" },
    { name: "Libyan Dinar", code: "LYD", symbol: "د.ل" },
    { name: "Lithuanian Litas", code: "LTL", symbol: "Lt" },
    { name: "Mauritanian Ouguiya", code: "MRO", symbol: "MRU" },
    { name: "Mauritian Rupee", code: "MUR", symbol: "₨" },
    { name: "Mexican Peso", code: "MXN", symbol: "$" },
    { name: "Moroccan Dirham", code: "MAD", symbol: "MAD" },
    { name: "Netherlands Antillean Guilder", code: "ANG", symbol: "ƒ" },
    { name: "New Taiwan Dollar", code: "TWD", symbol: "$" },
    { name: "New Zealand Dollar", code: "NZD", symbol: "$" },
    { name: "Nigerian Naira", code: "NGN", symbol: "₦" },
    { name: "North Korean Won", code: "KPW", symbol: "₩" },
    { name: "Norwegian Krone", code: "NOK", symbol: "kr" },
    { name: "Pakistani Rupee", code: "PKR", symbol: "₨" },
    { name: "Polish Zloty", code: "PLN", symbol: "zł" },
    { name: "Qatari Rial", code: "QAR", symbol: "ق.ر" },
    { name: "Romanian Leu", code: "RON", symbol: "lei" },
    { name: "Russian Ruble", code: "RUB", symbol: "₽" },
    { name: "Samoan Tala", code: "WST", symbol: "SAT" },
    { name: "Saudi Riyal", code: "SAR", symbol: "﷼" },
    { name: "Serbian Dinar", code: "RSD", symbol: "din" },
    { name: "Singapore Dollar", code: "SGD", symbol: "$" },
    { name: "South African Rand", code: "ZAR", symbol: "R" },
    { name: "South Korean Won", code: "KRW", symbol: "₩" },
    { name: "Swedish Krona", code: "SEK", symbol: "kr" },
    { name: "Swiss Franc", code: "CHF", symbol: "CHf" },
    { name: "Thai Baht", code: "THB", symbol: "฿" },
    { name: "Tunisian Dinar", code: "TND", symbol: "ت.د" },
    { name: "Turkish Lira", code: "TRY", symbol: "₺" },
    { name: "Ukrainian Hryvnia", code: "UAH", symbol: "₴" },
    { name: "United Arab Emirates Dirham", code: "AED", symbol: "إ.د" },
    { name: "US Dollar", code: "USD", symbol: "$" },
  ];

export const yearsOptions = [
  "1970",
  "1971",
  "1972",
  "1973",
  "1974",
  "1975",
  "1976",
  "1977",
  "1978",
  "1979",
  "1980",
  "1981",
  "1982",
  "1983",
  "1984",
  "1985",
  "1986",
  "1987",
  "1988",
  "1989",
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
  "2032",
  "2033",
  "2034",
  "2035",
  "2036",
  "2037",
  "2038",
  "2039",
  "2040",
  "2041",
  "2042",
  "2043",
  "2044",
  "2045",
  "2046",
  "2047",
  "2048",
  "2049",
  "2050",
];
