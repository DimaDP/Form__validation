import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './Card.scss';

function numberLunaCheck(value) {
  if (/[^0-9-\s]+/.test(value)) {
    return false;
  }

  let nCheck = 0;
  let bEven = false;
  const number = value.replace(/\D/g, '');

  for (let n = number.length - 1; n >= 0; n -= 1) {
    const cDigit = number.charAt(n);
    let nDigit = parseInt(cDigit, 10);

    if (bEven) {
      nDigit *= 2;
      if ((nDigit) > 9) {
        nDigit -= 9;
      }
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}

const dataCheck = (date) => {
  const dateList = date.split('/');

  if (dateList[0] > 12 || dateList[0] < 1) {
    return false;
  }

  return new Date() < new Date(+`20${dateList[1]}`, +dateList[0] - 1);
};

export const Card = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [isCardNumberValid, setIsCardNumberValid] = useState(true);
  const [date, setDate] = useState('');
  const [isDateValid, setDateValid] = useState(true);
  const [cvv, setCvv] = useState('');
  const [isCvvValid, setIsCvvValid] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);
  let preparedCardNumber;

  const handleCardNumberInput = (e) => {
    const { value } = e.target;

    preparedCardNumber = value.replace(/\D/g, '').substr(0, 16);
    let number = '';

    for (let i = 0; i < preparedCardNumber.length; i += 1) {
      if (i % 4 === 0) {
        number += ` ${preparedCardNumber[i]}`;
      } else {
        number += preparedCardNumber[i];
      }
    }

    setCardNumber(number);
  };

  const handleDateInput = (event) => {
    const { value } = event.target;
    const preparedDate = value.replace(/\D/g, '').substr(0, 4);
    let divideDdate = '';

    for (let i = 0; i < preparedDate.length; i += 1) {
      if (i === 2) {
        divideDdate += `/${preparedDate[i]}`;
      } else {
        divideDdate += preparedDate[i];
      }
    }

    setDate(divideDdate);
  };

  const handleCvv = (event) => {
    const { value } = event.target;
    const preparedCvv = value.replace(/\D/g, '').substr(0, 3);

    setCvv(preparedCvv);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      if (numberLunaCheck(cardNumber)) {
        setIsCardNumberValid(true);
      } else {
        setIsCardNumberValid(false);
      }

      if (dataCheck(date)) {
        setDateValid(true);
      } else {
        setDateValid(false);
      }

      if (cvv.length < 3) {
        setIsCvvValid(false);
      } else {
        setIsCvvValid(true);
      }

      setIsSubmited(true);

      setIsProcessing(false);
    }, 1500);
  };

  return (
    <section className="section">
      <h1>{`${isCardNumberValid}`}</h1>
      <form className="card__form" onSubmit={handleSubmit}>
        <span className="card__heading">Номер карты</span>
        <input
          onChange={handleCardNumberInput}
          value={cardNumber}
          className={isCardNumberValid
            ? 'card__input' : 'card__input card__input--error'}
          placeholder="enter card number"
        />
        <span>{isCardNumberValid ? '' : 'Введите валидный номер карты'}</span>
        <span>
          {(cardNumber === '' && isSubmited)
            ? '* Поле обязательно для ввода' : ''}
        </span>
        <div className="card__wrapper">
          <input
            onChange={handleDateInput}
            value={date}
            name="date"
            className="card__input card__input--small"
            placeholder="date"
          />
          <input
            type="password"
            value={cvv}
            onChange={handleCvv}
            className="card__input card__input--small"
          />
        </div>
        <span>
          {(date === '' && isSubmited) ? '* Поле обязательно для ввода' : ''}
        </span>
        <span>{isDateValid ? '' : 'enter valid date'}</span>
        <span>
          {(cvv === '' && isSubmited)
            ? '* Поле cvv обязательно для ввода' : ''}
        </span>
        <span>{isCvvValid ? '' : 'enter valid CVV'}</span>
        <span className="card__info">
          Для привязки карты мы проведем платеж в
          размере 1.00 UAH, который будет возвращен
          в течении 30 минут
        </span>
        <button
          type="submit"
          className="card__button"
        >
          {isProcessing ? (
            <ClipLoader
              size={30}
              color="#fff"
            />
          ) : 'Получить деньги'}
        </button>
      </form>

    </section>
  );
};
