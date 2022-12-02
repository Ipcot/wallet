import axios from 'axios';
import Gradient from 'components/Gradient/Gradient';
import { useState, useEffect } from 'react';
import {
  CurrencyWrapper,
  CurrencyTable,
  CurrencyTableTr,
  CurrencyTableHead,
  CurrencyTableTd,
  GradientStyle,
  CurrencyTableHeadTr,
  CurrencyErrorMasage,
  CurrencyHead,
} from './Currency.styled';

async function getCCurrency() {
  const { data } = await axios.get('https://api.monobank.ua/bank/currency');
  return data;
}
const cc = require('currency-codes');

const Currency = () => {
  const [rates, setRates] = useState(
    JSON.parse(window.localStorage.getItem('rates')) ?? []
  );

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await getCCurrency();
        const res = response.filter(
          obj =>
            (obj.currencyCodeA === 985 ||
              obj.currencyCodeA === 978 ||
              obj.currencyCodeA === 840) &&
            obj.currencyCodeB === 980
        );
        setRates(res);
      } catch (error) {
        Error('Oops! Something went wrong!');
      }
    };
    getRates();
  }, []);

  useEffect(() => {
    window.localStorage.setItem('rates', JSON.stringify(rates));
  }, [rates]);
  return (
    <CurrencyWrapper>
      {rates.length === 0 ? (
        <CurrencyErrorMasage>
          Exchange rate is not available now!
        </CurrencyErrorMasage>
      ) : (
        <CurrencyTable cellpadding="0" cellspacing="0">
          <CurrencyHead>
            <CurrencyTableHeadTr>
              <CurrencyTableHead style={{ borderTopLeftRadius: 30 }}>
                Currency
              </CurrencyTableHead>
              <CurrencyTableHead>Purchase</CurrencyTableHead>
              <CurrencyTableHead style={{ borderTopRightRadius: 30 }}>
                Sale
              </CurrencyTableHead>
            </CurrencyTableHeadTr>
          </CurrencyHead>
          <tbody>
            {rates.map(element => (
              <CurrencyTableTr key={element.currencyCodeA}>
                <CurrencyTableTd>
                  {cc.number(element.currencyCodeA).code}
                </CurrencyTableTd>
                <CurrencyTableTd>
                  {element.rateBuy || element.rateCross}
                </CurrencyTableTd>
                <CurrencyTableTd>
                  {element.rateSell || element.rateCross}
                </CurrencyTableTd>
              </CurrencyTableTr>
            ))}
          </tbody>
        </CurrencyTable>
      )}
      <Gradient></Gradient>
    </CurrencyWrapper>
  );
};

export default Currency;
