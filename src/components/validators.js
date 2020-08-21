export const lunaCheck = (value) => {
  if (value === '') {
    return false;
  }

  if (/[^0-9-\s]+/.test(value)) {
    return false;
  }

  let nCheck = 0;
  let bEven = false;
  const number = value.replace(/\D/g, '');

  if (number.length < 16) {
    return false;
  }

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
};

export const dateCheck = (date) => {
  const dateList = date.split('/');

  if (dateList[0] > 12 || dateList[0] < 1) {
    return false;
  }

  return new Date() < new Date(+`20${dateList[1]}`, +dateList[0] - 1);
};
