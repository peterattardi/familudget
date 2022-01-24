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
    return days;
  }
};

export const currencies =
  // length 164
  [
    { name: "Afghan Afghani", code: "AFA", symbol: "؋" },
    { name: "Albanian Lek", code: "ALL", symbol: "Lek" },
    { name: "Algerian Dinar", code: "DZD", symbol: "دج" },
    { name: "Angolan Kwanza", code: "AOA", symbol: "Kz" },
    { name: "Argentine Peso", code: "ARS", symbol: "$" },
    { name: "Armenian Dram", code: "AMD", symbol: "֏" },
    { name: "Aruban Florin", code: "AWG", symbol: "ƒ" },
    { name: "Australian Dollar", code: "AUD", symbol: "$" },
    { name: "Azerbaijani Manat", code: "AZN", symbol: "m" },
    { name: "Bahamian Dollar", code: "BSD", symbol: "B$" },
    { name: "Bahraini Dinar", code: "BHD", symbol: ".د.ب" },
    { name: "Bangladeshi Taka", code: "BDT", symbol: "৳" },
    { name: "Barbadian Dollar", code: "BBD", symbol: "Bds$" },
    { name: "Belarusian Ruble", code: "BYR", symbol: "Br" },
    { name: "Belgian Franc", code: "BEF", symbol: "fr" },
    { name: "Belize Dollar", code: "BZD", symbol: "$" },
    { name: "Bermudan Dollar", code: "BMD", symbol: "$" },
    { name: "Bhutanese Ngultrum", code: "BTN", symbol: "Nu." },
    { name: "Bitcoin", code: "BTC", symbol: "฿" },
    { name: "Bolivian Boliviano", code: "BOB", symbol: "Bs." },
    { name: "Bosnia-Herzegovina Convertible Mark", code: "BAM", symbol: "KM" },
    { name: "Botswanan Pula", code: "BWP", symbol: "P" },
    { name: "Brazilian Real", code: "BRL", symbol: "R$" },
    { name: "British Pound Sterling", code: "GBP", symbol: "£" },
    { name: "Brunei Dollar", code: "BND", symbol: "B$" },
    { name: "Bulgarian Lev", code: "BGN", symbol: "Лв." },
    { name: "Burundian Franc", code: "BIF", symbol: "FBu" },
    { name: "Cambodian Riel", code: "KHR", symbol: "KHR" },
    { name: "Canadian Dollar", code: "CAD", symbol: "$" },
    { name: "Cape Verdean Escudo", code: "CVE", symbol: "$" },
    { name: "Cayman Islands Dollar", code: "KYD", symbol: "$" },
    { name: "CFA Franc BCEAO", code: "XOF", symbol: "CFA" },
    { name: "CFA Franc BEAC", code: "XAF", symbol: "FCFA" },
    { name: "CFP Franc", code: "XPF", symbol: "₣" },
    { name: "Chilean Peso", code: "CLP", symbol: "$" },
    { name: "Chinese Yuan", code: "CNY", symbol: "¥" },
    { name: "Colombian Peso", code: "COP", symbol: "$" },
    { name: "Comorian Franc", code: "KMF", symbol: "CF" },
    { name: "Congolese Franc", code: "CDF", symbol: "FC" },
    { name: "Costa Rican ColÃ³n", code: "CRC", symbol: "₡" },
    { name: "Croatian Kuna", code: "HRK", symbol: "kn" },
    { name: "Cuban Convertible Peso", code: "CUC", symbol: "$, CUC" },
    { name: "Czech Republic Koruna", code: "CZK", symbol: "Kč" },
    { name: "Danish Krone", code: "DKK", symbol: "Kr." },
    { name: "Djiboutian Franc", code: "DJF", symbol: "Fdj" },
    { name: "Dominican Peso", code: "DOP", symbol: "$" },
    { name: "East Caribbean Dollar", code: "XCD", symbol: "$" },
    { name: "Egyptian Pound", code: "EGP", symbol: "ج.م" },
    { name: "Eritrean Nakfa", code: "ERN", symbol: "Nfk" },
    { name: "Estonian Kroon", code: "EEK", symbol: "kr" },
    { name: "Ethiopian Birr", code: "ETB", symbol: "Nkf" },
    { name: "Euro", code: "EUR", symbol: "€" },
    { name: "Falkland Islands Pound", code: "FKP", symbol: "£" },
    { name: "Fijian Dollar", code: "FJD", symbol: "FJ$" },
    { name: "Gambian Dalasi", code: "GMD", symbol: "D" },
    { name: "Georgian Lari", code: "GEL", symbol: "ლ" },
    { name: "German Mark", code: "DEM", symbol: "DM" },
    { name: "Ghanaian Cedi", code: "GHS", symbol: "GH₵" },
    { name: "Gibraltar Pound", code: "GIP", symbol: "£" },
    { name: "Greek Drachma", code: "GRD", symbol: "₯, Δρχ, Δρ" },
    { name: "Guatemalan Quetzal", code: "GTQ", symbol: "Q" },
    { name: "Guinean Franc", code: "GNF", symbol: "FG" },
    { name: "Guyanaese Dollar", code: "GYD", symbol: "$" },
    { name: "Haitian Gourde", code: "HTG", symbol: "G" },
    { name: "Honduran Lempira", code: "HNL", symbol: "L" },
    { name: "Hong Kong Dollar", code: "HKD", symbol: "$" },
    { name: "Hungarian Forint", code: "HUF", symbol: "Ft" },
    { name: "Icelandic KrÃ³na", code: "ISK", symbol: "kr" },
    { name: "Indian Rupee", code: "INR", symbol: "₹" },
    { name: "Indonesian Rupiah", code: "IDR", symbol: "Rp" },
    { name: "Iranian Rial", code: "IRR", symbol: "﷼" },
    { name: "Iraqi Dinar", code: "IQD", symbol: "د.ع" },
    { name: "Israeli New Sheqel", code: "ILS", symbol: "₪" },
    { name: "Italian Lira", code: "ITL", symbol: "L,£" },
    { name: "Jamaican Dollar", code: "JMD", symbol: "J$" },
    { name: "Japanese Yen", code: "JPY", symbol: "¥" },
    { name: "Jordanian Dinar", code: "JOD", symbol: "ا.د" },
    { name: "Kazakhstani Tenge", code: "KZT", symbol: "лв" },
    { name: "Kenyan Shilling", code: "KES", symbol: "KSh" },
    { name: "Kuwaiti Dinar", code: "KWD", symbol: "ك.د" },
    { name: "Kyrgystani Som", code: "KGS", symbol: "лв" },
    { name: "Laotian Kip", code: "LAK", symbol: "₭" },
    { name: "Latvian Lats", code: "LVL", symbol: "Ls" },
    { name: "Lebanese Pound", code: "LBP", symbol: "£" },
    { name: "Lesotho Loti", code: "LSL", symbol: "L" },
    { name: "Liberian Dollar", code: "LRD", symbol: "$" },
    { name: "Libyan Dinar", code: "LYD", symbol: "د.ل" },
    { name: "Lithuanian Litas", code: "LTL", symbol: "Lt" },
    { name: "Macanese Pataca", code: "MOP", symbol: "$" },
    { name: "Macedonian Denar", code: "MKD", symbol: "ден" },
    { name: "Malagasy Ariary", code: "MGA", symbol: "Ar" },
    { name: "Malawian Kwacha", code: "MWK", symbol: "MK" },
    { name: "Malaysian Ringgit", code: "MYR", symbol: "RM" },
    { name: "Maldivian Rufiyaa", code: "MVR", symbol: "Rf" },
    { name: "Mauritanian Ouguiya", code: "MRO", symbol: "MRU" },
    { name: "Mauritian Rupee", code: "MUR", symbol: "₨" },
    { name: "Mexican Peso", code: "MXN", symbol: "$" },
    { name: "Moldovan Leu", code: "MDL", symbol: "L" },
    { name: "Mongolian Tugrik", code: "MNT", symbol: "₮" },
    { name: "Moroccan Dirham", code: "MAD", symbol: "MAD" },
    { name: "Mozambican Metical", code: "MZM", symbol: "MT" },
    { name: "Myanmar Kyat", code: "MMK", symbol: "K" },
    { name: "Namibian Dollar", code: "NAD", symbol: "$" },
    { name: "Nepalese Rupee", code: "NPR", symbol: "₨" },
    { name: "Netherlands Antillean Guilder", code: "ANG", symbol: "ƒ" },
    { name: "New Taiwan Dollar", code: "TWD", symbol: "$" },
    { name: "New Zealand Dollar", code: "NZD", symbol: "$" },
    { name: "Nicaraguan CÃ³rdoba", code: "NIO", symbol: "C$" },
    { name: "Nigerian Naira", code: "NGN", symbol: "₦" },
    { name: "North Korean Won", code: "KPW", symbol: "₩" },
    { name: "Norwegian Krone", code: "NOK", symbol: "kr" },
    { name: "Omani Rial", code: "OMR", symbol: ".ع.ر" },
    { name: "Pakistani Rupee", code: "PKR", symbol: "₨" },
    { name: "Panamanian Balboa", code: "PAB", symbol: "B/." },
    { name: "Papua New Guinean Kina", code: "PGK", symbol: "K" },
    { name: "Paraguayan Guarani", code: "PYG", symbol: "₲" },
    { name: "Peruvian Nuevo Sol", code: "PEN", symbol: "S/." },
    { name: "Philippine Peso", code: "PHP", symbol: "₱" },
    { name: "Polish Zloty", code: "PLN", symbol: "zł" },
    { name: "Qatari Rial", code: "QAR", symbol: "ق.ر" },
    { name: "Romanian Leu", code: "RON", symbol: "lei" },
    { name: "Russian Ruble", code: "RUB", symbol: "₽" },
    { name: "Rwandan Franc", code: "RWF", symbol: "FRw" },
    { name: "Salvadoran ColÃ³n", code: "SVC", symbol: "₡" },
    { name: "Samoan Tala", code: "WST", symbol: "SAT" },
    { name: "Saudi Riyal", code: "SAR", symbol: "﷼" },
    { name: "Serbian Dinar", code: "RSD", symbol: "din" },
    { name: "Seychellois Rupee", code: "SCR", symbol: "SRe" },
    { name: "Sierra Leonean Leone", code: "SLL", symbol: "Le" },
    { name: "Singapore Dollar", code: "SGD", symbol: "$" },
    { name: "Slovak Koruna", code: "SKK", symbol: "Sk" },
    { name: "Solomon Islands Dollar", code: "SBD", symbol: "Si$" },
    { name: "Somali Shilling", code: "SOS", symbol: "Sh.so." },
    { name: "South African Rand", code: "ZAR", symbol: "R" },
    { name: "South Korean Won", code: "KRW", symbol: "₩" },
    { name: "Special Drawing Rights", code: "XDR", symbol: "SDR" },
    { name: "Sri Lankan Rupee", code: "LKR", symbol: "Rs" },
    { name: "St. Helena Pound", code: "SHP", symbol: "£" },
    { name: "Sudanese Pound", code: "SDG", symbol: ".س.ج" },
    { name: "Surinamese Dollar", code: "SRD", symbol: "$" },
    { name: "Swazi Lilangeni", code: "SZL", symbol: "E" },
    { name: "Swedish Krona", code: "SEK", symbol: "kr" },
    { name: "Swiss Franc", code: "CHF", symbol: "CHf" },
    { name: "Syrian Pound", code: "SYP", symbol: "LS" },
    { name: "São Tomé and Príncipe Dobra", code: "STD", symbol: "Db" },
    { name: "Tajikistani Somoni", code: "TJS", symbol: "SM" },
    { name: "Tanzanian Shilling", code: "TZS", symbol: "TSh" },
    { name: "Thai Baht", code: "THB", symbol: "฿" },
    { name: "Tongan Pa'anga", code: "TOP", symbol: "$" },
    { name: "Trinidad & Tobago Dollar", code: "TTD", symbol: "$" },
    { name: "Tunisian Dinar", code: "TND", symbol: "ت.د" },
    { name: "Turkish Lira", code: "TRY", symbol: "₺" },
    { name: "Turkmenistani Manat", code: "TMT", symbol: "T" },
    { name: "Ugandan Shilling", code: "UGX", symbol: "USh" },
    { name: "Ukrainian Hryvnia", code: "UAH", symbol: "₴" },
    { name: "United Arab Emirates Dirham", code: "AED", symbol: "إ.د" },
    { name: "Uruguayan Peso", code: "UYU", symbol: "$" },
    { name: "US Dollar", code: "USD", symbol: "$" },
    { name: "Uzbekistan Som", code: "UZS", symbol: "лв" },
    { name: "Vanuatu Vatu", code: "VUV", symbol: "VT" },
    { name: "Venezuelan BolÃvar", code: "VEF", symbol: "Bs" },
    { name: "Vietnamese Dong", code: "VND", symbol: "₫" },
    { name: "Yemeni Rial", code: "YER", symbol: "﷼" },
    { name: "Zambian Kwacha", code: "ZMK", symbol: "ZK" },
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
