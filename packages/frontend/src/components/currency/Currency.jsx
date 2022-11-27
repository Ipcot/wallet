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
} from './Currency.styled';

const getRatesApi = [
  {
    currencyCodeA: 840,
    currencyCodeB: 980,
    date: 1669327811,
    rateBuy: 36.65,
    rateSell: 37.4406,
  },
  {
    currencyCodeA: 978,
    currencyCodeB: 980,
    date: 1669327811,
    rateBuy: 38.1,
    rateSell: 39.1497,
  },
  {
    currencyCodeA: 985,
    currencyCodeB: 980,
    date: 1669411471,
    rateCross: 8.3268,
  },
];

const currencyCode = [
  { name: 'USD', code: 840 },
  { name: 'EUR', code: 978 },
  { name: 'PLN', code: 985 },
];
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
        // await getCCurrency()
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
          <CurrencyTableHeadTr>
            <CurrencyTableHead>Currency</CurrencyTableHead>
            <CurrencyTableHead>Purchase</CurrencyTableHead>
            <CurrencyTableHead>Sale</CurrencyTableHead>
          </CurrencyTableHeadTr>
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
        </CurrencyTable>
      )}
      <Gradient></Gradient>
    </CurrencyWrapper>
  );
};

export default Currency;
