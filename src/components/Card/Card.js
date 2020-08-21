/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './Card.scss';
import { lunaCheck, dateCheck } from '../validators';
import { cardCodes, cardLogos } from '../cardsInfo';

export const Card = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [isNumberValid, setIsNumberValid] = useState(true);
  const [date, setDate] = useState('');
  const [isDateValid, setDateValid] = useState(true);
  const [cvv, setCvv] = useState('');
  const [isCvvValid, setIsCvvValid] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);
  const [currentImage, setCurentImage] = useState('');
  let formValid;
  let formSumbited;

  const handleCardNumberInput = (event) => {
    setIsNumberValid(true);
    const { value } = event.target;
    const payId = value[0];
    const preparedCardNumber = value.replace(/\D/g, '').substr(0, 16);
    let number = '';
    const paymentType = cardCodes[payId];
    const image = cardLogos[paymentType];

    setCurentImage(image);

    for (let i = 0; i < preparedCardNumber.length; i += 1) {
      if (i % 4 === 0 && i !== 0) {
        number += ` ${preparedCardNumber[i]}`;
      } else {
        number += preparedCardNumber[i];
      }
    }

    setCardNumber(number);
  };

  const handleDateInput = (event) => {
    setDateValid(true);
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
    setIsCvvValid(true);
    const { value } = event.target;
    const preparedCvv = value.replace(/\D/g, '').substr(0, 3);

    setCvv(preparedCvv);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      if (lunaCheck(cardNumber)) {
        setIsNumberValid(true);
        formValid = true;
      } else {
        setIsNumberValid(false);
        formValid = false;
      }

      if (dateCheck(date)) {
        setDateValid(true);
        formValid = formValid && true;
      } else {
        setDateValid(false);
        formValid = formValid && false;
      }

      if (cvv.length < 3) {
        setIsCvvValid(false);
        formValid = formValid && false;
      } else {
        setIsCvvValid(true);
        formValid = formValid && true;
      }

      setIsSubmited(true);
      formSumbited = true;
      setIsProcessing(false);
    }, 500);
    setTimeout(() => {
      if (formValid && formSumbited) {
        // eslint-disable-next-line no-alert
        alert('Processed');
        window.location.reload();
      }
    }, 600);
  };

  const errorMessage = (window.screen.width > 600)
    ? '* Поле обязательно для ввода' : '* Поле обязательно';

  return (
    <section className="section card__section">
      <form className="card__form" onSubmit={handleSubmit} autoComplete="off">
        <span className="card__heading">Номер карты</span>
        <input
          onChange={handleCardNumberInput}
          value={cardNumber}
          className={
            (!isSubmited || isNumberValid) ? 'card__input'
              : 'card__input card__input--error'
          }
          style={{ backgroundImage: `url(${currentImage})` }}
          placeholder="Номер карты"
        />
        <span className="card__error">
          {
            (!isSubmited || isNumberValid) ? ''
              : (date.length === 0) ? '* Поле обязательно для ввода'
                : '* Введите валидный номер карты'
          }
        </span>
        <div className="card__wrapper">
          <input
            onChange={handleDateInput}
            value={date}
            name="date"
            className={
              (!isSubmited || isDateValid) ? 'card__input card__input--small'
                : 'card__input card__input--small card__input--error'
            }
            placeholder="Срок действия"
          />
          <input
            type="password"
            value={cvv}
            onChange={handleCvv}
            className={
              (!isSubmited || isCvvValid) ? 'card__input card__input--small'
                : 'card__input card__input--small card__input--error'
            }
            placeholder="CVV код"
          />
        </div>
        <div className="card__errors-wrapper">
          <span className="card__error--small card__error">
            {
              (!isSubmited || isDateValid) ? ''
                : (date.length === 0) ? errorMessage : '* Дата невалидная'
            }
          </span>
          <span className="card__error--small card__error">
            {(cvv === '' && isSubmited) ? errorMessage
              : isCvvValid ? '' : '* CVV невалидный'
            }
          </span>
        </div>
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
