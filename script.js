const currencyDatabaseMetadata = { 
 { country: "United States", currency: "Dollar", flag: "🇺🇸" },
        "NGN": { country: "Nigeria", currency: "Naira", flag: "🇳🇬" },
        "ZAR": { country: "South Africa", currency: "Rand", flag: "🇿🇦" },
        "EUR": { country: "Eurozone", currency: "Euro", flag: "🇪🇺" },
        "GBP": { country: "United Kingdom", currency: "Pound Sterling", flag: "🇬🇧" },
        "GHS": { country: "Ghana", currency: "Cedi", flag: "🇬🇭" },
        "KES": { country: "Kenya", currency: "Shilling", flag: "🇰🇪" },
        "AED": { country: "United Arab Emirates", currency: "Dirham", flag: "🇦🇪" },
        "ZMW": { country: "Zambia", currency: "Kwacha", flag: "🇿🇲" },
        "CAD": { country: "Canada", currency: "Dollar", flag: "🇨🇦" },
        "AUD": { country: "Australia", currency: "Dollar", flag: "🇦🇺" },
        "JPY": { country: "Japan", currency: "Yen", flag: "🇯🇵" },
        "CNY": { country: "China", currency: "Yuan", flag: "🇨🇳" },
        "INR": { country: "India", currency: "Rupee", flag: "🇮🇳" },
        "BTC": { country: "Bitcoin Ledger Network", currency: "Crypto Token", flag: "₿" },
        "ETH": { country: "Ethereum Network", currency: "Ether Token", flag: "♦️" },
        "XAU": { country: "Gold Ounce Index", currency: "Precious Metal", flag: "🪙" },
        "AFN": { country: "Afghanistan", currency: "Afghani", flag: "🇦🇫" },
        "ALL": { country: "Albania", currency: "Lek", flag: "🇦🇱" },
        "AMD": { country: "Armenia", currency: "Dram", flag: "🇦🇲" },
        "ANG": { country: "Netherlands Antilles", currency: "Guilder", flag: "🇳🇱" },
        "AOA": { country: "Angola", currency: "Kwanza", flag: "🇦🇴" },
        "ARS": { country: "Argentina", currency: "Peso", flag: "🇦🇷" },
        "AWG": { country: "Aruba", currency: "Florin", flag: "🇦🇼" },
        "AZN": { country: "Azerbaijan", currency: "Manat", flag: "🇦🇿" },
        "BAM": { country: "Bosnia and Herzegovina", currency: "Convertible Mark", flag: "🇧🇦" },
        "BBD": { country: "Barbados", currency: "Dollar", flag: "🇧🇧" },
        "BDT": { country: "Bangladesh", currency: "Taka", flag: "🇧🇩" },
        "BGN": { country: "Bulgaria", currency: "Lev", flag: "🇧🇬" },
        "BHD": { country: "Bahrain", currency: "Dinar", flag: "🇧🇭" },
        "BIF": { country: "Burundi", currency: "Franc", flag: "🇧🇮" },
        "BMD": { country: "Bermuda", currency: "Dollar", flag: "🇧🇲" },
        "BND": { country: "Brunei", currency: "Dollar", flag: "🇧🇳" },
        "BOB": { country: "Bolivia", currency: "Boliviano", flag: "🇧🇴" },
        "BRL": { country: "Brazil", currency: "Real", flag: "🇧🇷" },
        "BSD": { country: "Bahamas", currency: "Dollar", flag: "🇧🇸" },
        "BTN": { country: "Bhutan", currency: "Ngultrum", flag: "🇧🇹" },
        "BWP": { country: "Botswana", currency: "Pula", flag: "🇧🇼" },
        "BYN": { country: "Belarus", currency: "Ruble", flag: "🇧🇾" },
        "BZD": { country: "Belize", currency: "Dollar", flag: "🇧🇿" },
        "CHF": { country: "Switzerland", currency: "Franc", flag: "🇨🇭" },
        "CLP": { country: "Chile", currency: "Peso", flag: "🇨🇱" },
        "COP": { country: "Colombia", currency: "Peso", flag: "🇨🇴" },
        "CRC": { country: "Costa Rica", currency: "Colón", flag: "🇨🇷" },
        "CUP": { country: "Cuba", currency: "Peso", flag: "🇨🇺" },
        "CVE": { country: "Cape Verde", currency: "Escudo", flag: "🇨🇻" },
        "CZK": { country: "Czech Republic", currency: "Koruna", flag: "🇨🇿" },
        "DJF": { country: "Djibouti", currency: "Franc", flag: "🇩🇯" },
        "DKK": { country: "Denmark", currency: "Krone", flag: "🇩🇰" },
        "DOP": { country: "Dominican Republic", currency: "Peso", flag: "🇩🇴" },
        "DZD": { country: "Algeria", currency: "Dinar", flag: "🇩🇿" },
        "EGP": { country: "Egypt", currency: "Pound", flag: "🇪🇬" },
        "ERN": { country: "Eritrea", currency: "Nakfa", flag: "🇪🇷" },
        "ETB": { country: "Ethiopia", currency: "Birr", flag: "🇪🇹" },
        "FJD": { country: "Fiji", currency: "Dollar", flag: "🇫🇯" },
        "FKP": { country: "Falkland Islands", currency: "Pound", flag: "🇫🇰" },
        "FOK": { country: "Faroe Islands", currency: "Króna", flag: "🇫🇴" },
        "GEL": { country: "Georgia", currency: "Lari", flag: "🇬🇪" },
        "GGP": { country: "Guernsey", currency: "Pound", flag: "🇬🇬" },
        "GMD": { country: "Gambia", currency: "Dalasi", flag: "🇬🇲" },
        "GNF": { country: "Guinea", currency: "Franc", flag: "🇬🇳" },
        "GTQ": { country: "Guatemala", currency: "Quetzal", flag: "🇬🇹" },
        "GYD": { country: "Guyana", currency: "Dollar", flag: "🇬🇾" },
        "HKD": { country: "Hong Kong", currency: "Dollar", flag: "🇭🇰" },
        "HNL": { country: "Honduras", currency: "Lempira", flag: "🇭🇳" },
        "HRK": { country: "Croatia", currency: "Kuna", flag: "🇭🇷" },
        "HTG": { country: "Haiti", currency: "Gourde", flag: "🇭🇹" },
        "HUF": { country: "Hungary", currency: "Forint", flag: "🇭🇺" },
        "IDR": { country: "Indonesia", currency: "Rupiah", flag: "🇮🇩" },
        "ILS": { country: "Israel", currency: "Shekel", flag: "🇮🇱" },
        "IMP": { country: "Isle of Man", currency: "Pound", flag: "🇮🇲" },
        "IQD": { country: "Iraq", currency: "Dinar", flag: "🇮🇶" },
        "IRR": { country: "Iran", currency: "Rial", flag: "🇮🇷" },
        "ISK": { country: "Iceland", currency: "Krona", flag: "🇮🇸" },
        "JEP": { country: "Jersey", currency: "Pound", flag: "🇯🇪" },
        "JMD": { country: "Jamaica", currency: "Dollar", flag: "🇯🇲" },
        "JOD": { country: "Jordan", currency: "Dinar", flag: "🇯🇴" },
        "KGD": { country: "Kyrgyzstan", currency: "Som", flag: "🇰🇬" },
        "KHR": { country: "Cambodia", currency: "Riel", flag: "🇰🇭" },
        "KMF": { country: "Comoros", currency: "Franc", flag: "🇰🇲" },
        "KPW": { country: "North Korea", currency: "Won", flag: "🇰🇵" },
        "KRW": { country: "South Korea", currency: "Won", flag: "🇰🇷" },
        "KWD": { country: "Kuwait", currency: "Dinar", flag: "🇰🇼" },
        "KYD": { country: "Cayman Islands", currency: "Dollar", flag: "🇰🇾" },
        "KZT": { country: "Kazakhstan", currency: "Tenge", flag: "🇰🇿" },
        "LAK": { country: "Laos", currency: "Kip", flag: "🇱🇦" },
        "LBP": { country: "Lebanon", currency: "Pound", flag: "🇱🇧" },
        "LKR": { country: "Sri Lanka", currency: "Rupee", flag: "🇱🇰" },
        "LRD": { country: "Liberia", currency: "Dollar", flag: "🇱🇷" },
        "LSL": { country: "Lesotho", currency: "Loti", flag: "🇱🇸" },
        "LYD": { country: "Libya", currency: "Dinar", flag: "🇱🇾" },
        "MAD": { country: "Morocco", currency: "Dirham", flag: "🇲🇦" },
        "MDL": { country: "Moldova", currency: "Leu", flag: "🇲🇩" },
        "MGA": { country: "Madagascar", currency: "Ariary", flag: "🇲🇬" },
        "MKD": { country: "North Macedonia", currency: "Denar", flag: "🇲🇰" },
        "MMK": { country: "Myanmar", currency: "Kyat", flag: "🇲🇲" },
        "MNT": { country: "Mongolia", currency: "Tughrik", flag: "🇲🇳" },
        "MOP": { country: "Macau", currency: "Pataca", flag: "🇲🇴" },
        "MRU": { country: "Mauritania", currency: "Ouguiya", flag: "🇲🇷" },
        "MUR": { country: "Mauritius", currency: "Rupee", flag: "🇲🇺" },
        "MVR": { country: "Maldives", currency: "Rufiyaa", flag: "🇲🇻" },
        "MWK": { country: "Malawi", currency: "Kwacha", flag: "🇲🇼" },
        "MXN": { country: "Mexico", currency: "Peso", flag: "🇲🇽" },
        "MYR": { country: "Malaysia", currency: "Ringgit", flag: "🇲🇾" },
        "MZN": { country: "Mozambique", currency: "Metical", flag: "🇲🇿" },
        "NAD": { country: "Namibia", currency: "Dollar", flag: "🇳🇦" },
        "NIO": { country: "Nicaragua", currency: "Córdoba", flag: "🇳🇮" },
        "NOK": { country: "Norway", currency: "Krone", flag: "🇳🇴" },
        "NPR": { country: "Nepal", currency: "Rupee", flag: "🇳🇵" },
        "NZD": { country: "New Zealand", currency: "Dollar", flag: "🇳🇿" },
        "OMR": { country: "Oman", currency: "Rial", flag: "🇴🇲" },
        "PAB": { country: "Panama", currency: "Balboa", flag: "🇵🇦" },
        "PEN": { country: "Peru", currency: "Sol", flag: "🇵🇪" },
        "PGK": { country: "Papua New Guinea", currency: "Kina", flag: "🇵🇬" },
        "PHP": { country: "Philippines", currency: "Peso", flag: "🇵🇭" },
        "PKR": { country: "Pakistan", currency: "Rupee", flag: "🇵🇰" },
        "PLN": { country: "Poland", currency: "Zloty", flag: "🇵🇱" },
        "PYG": { country: "Paraguay", currency: "Guaraní", flag: "🇵🇾" },
        "QAR": { country: "Qatar", currency: "Riyal", flag: "🇶🇦" },
        "RON": { country: "Romania", currency: "Leu", flag: "🇷🇴" },
        "RSD": { country: "Serbia", currency: "Dinar", flag: "🇷🇸" },
        "RUB": { country: "Russia", currency: "Ruble", flag: "🇷🇺" },
        "RWF": { country: "Rwanda", currency: "Franc", flag: "🇷🇼" },
        "SAR": { country: "Saudi Arabia", currency: "Riyal", flag: "🇸🇦" },
        "SBD": { country: "Solomon Islands", currency: "Dollar", flag: "🇸🇧" },
        "SCR": { country: "Seychelles", currency: "Rupee", flag: "🇸🇨" },
        "SDG": { country: "Sudan", currency: "Pound", flag: "🇸🇩" },
        "SEK": { country: "Sweden", currency: "Krona", flag: "🇸🇪" },
        "SGD": { country: "Singapore", currency: "Dollar", flag: "🇸🇬" },
        "SHP": { country: "Saint Helena", currency: "Pound", flag: "🇸🇭" },
        "SLL": { country: "Sierra Leone", currency: "Leone", flag: "🇸🇱" },
        "SOS": { country: "Somalia", currency: "Shilling", flag: "🇸🇴" },
        "SRD": { country: "Suriname", currency: "Dollar", flag: "🇸🇷" },
        "SSP": { country: "South Sudan", currency: "Pound", flag: "🇸🇸" },
        "STN": { country: "São Tomé and Príncipe", currency: "Dobra", flag: "🇸🇹" },
        "SVC": { country: "El Salvador", currency: "Colón", flag: "🇸🇻" },
        "SYP": { country: "Syria", currency: "Pound", flag: "🇸🇾" },
        "SZL": { country: "Eswatini", currency: "Lilangeni", flag: "🇸🇿" },
        "THB": { country: "Thailand", currency: "Baht", flag: "🇹🇭" },
        "TJS": { country: "Tajikistan", currency: "Somoni", flag: "🇹🇯" },
        "TMT": { country: "Turkmenistan", currency: "Manat", flag: "🇹🇲" },
        "TND": { country: "Tunisia", currency: "Dinar", flag: "🇹🇳" },
        "TOP": { country: "Tonga", currency: "Paʻanga", flag: "🇹🇴" },
        "TRY": { country: "Turkey", currency: "Lira", flag: "🇹🇷" },
        "TTD": { country: "Trinidad and Tobago", currency: "Dollar", flag: "🇹🇹" },
        "TVD": { country: "Tuvalu", currency: "Dollar", flag: "🇹🇻" },
        "TWD": { country: "Taiwan", currency: "New Dollar", flag: "🇹🇼" },
        "TZS": { country: "Tanzania", currency: "Shilling", flag: "🇹🇿" },
        "UAH": { country: "Ukraine", currency: "Hryvnia", flag: "🇺🇦" },
        "UGX": { country: "Uganda", currency: "Shilling", flag: "🇺🇬" },
        "UYU": { country: "Uruguay", currency: "Peso", flag: "🇺🇾" },
        "UZS": { country: "Uzbekistan", currency: "Som", flag: "🇺🇿" },
        "VES": { country: "Venezuela", currency: "Bolívar", flag: "🇻🇪" },
        "VND": { country: "Vietnam", currency: "Dong", flag: "🇻🇳" },
        "VUV": { country: "Vanuatu", currency: "Vatu", flag: "🇻🇺" },
        "WST": { country: "Samoa", currency: "Tala", flag: "🇼🇸" },
        "XAF": { country: "Central African CFA", currency: "Franc BEAC", flag: "🇨🇲" },
        "XCD": { country: "East Caribbean", currency: "Dollar", flag: "🇩🇲" },
        "XDR": { country: "International Monetary Fund", currency: "SDR", flag: "🇺🇳" },
        "XOF": { country: "West African CFA", currency: "Franc BCEAO", flag: "🇸🇳" },
        "XPF": { country: "CFP", currency: "Franc", flag: "🇵🇫" },
        "YER": { country: "Yemen", currency: "Rial", flag: "🇾🇪" },
        "ZW_": { country: "Zimbabwe", currency: "Gold Asset", flag: "🇿🇼" }
    };

    let activeSourceAsset = "USD";
    let activeTargetAsset = "NGN";
    let currentTargetScope = 'source';

    function buildAssetProfile(code) { return currencyDatabaseMetadata[code] || { country: "Global", currency: code, flag: "🌐" }; }
    function formatFinancialValue(v) { return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v); }

    async function runJavaAssetConversion() {
        const amount = parseFloat(document.getElementById('fromAmount').value);
        const fromProfile = buildAssetProfile(activeSourceAsset);
        const toProfile = buildAssetProfile(activeTargetAsset);
        
        try {
            // REPLACE THIS URL WITH YOUR LIVE RAILWAY URL
            const res = await fetch(`https://web-production-26951.up.railway.app `)
            const data = await res.json();
            const result = formatFinancialValue(data.resultAmount);
            document.getElementById('toAmount').value = result;
            document.getElementById('statusMessage').innerHTML = `${formatFinancialValue(amount)} ${fromProfile.currency} to ${toProfile.currency} is <span style="color:var(--neon-glow-cyan);">${result}</span>`;
        } catch(e) {
            document.getElementById('statusMessage').innerText = "Backend connection error. Check Railway logs.";
        }
    }

    function launchSearchModal(scope) { currentTargetScope = scope; document.getElementById('search-modal-viewport').style.display = 'flex'; evaluateSearchFiltering(); }
    function terminateSearchModal() { document.getElementById('search-modal-viewport').style.display = 'none'; }
    function evaluateSearchFiltering() {
        const query = document.getElementById('modalSearchField').value.toUpperCase();
        const container = document.getElementById('modalItemsGrid');
        container.innerHTML = '';
        Object.keys(currencyDatabaseMetadata).forEach(code => {
            const p = currencyDatabaseMetadata[code];
            if(code.includes(query) || p.country.toUpperCase().includes(query)) {
                const row = document.createElement('div');
                row.className = 'currency-row-option';
                row.innerHTML = `<div>${p.flag} <strong>${code}</strong> - ${p.country}</div>`;
                row.onclick = () => {
                    if(currentTargetScope === 'source') { activeSourceAsset = code; document.getElementById('fromCurrencyLabel').innerText = `${p.flag} ${code}`; }
                    else { activeTargetAsset = code; document.getElementById('toCurrencyLabel').innerText = `${p.flag} ${code}`; }
                    terminateSearchModal();
                };
                container.appendChild(row);
            }
        });
    }
