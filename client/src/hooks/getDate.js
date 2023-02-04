const getDate = (timeStamp) => {
  const post_date = new Date(timeStamp);
  const year = post_date.getFullYear();
  const month =
    post_date.getMonth() < 10
      ? `0${parseInt(post_date.getMonth()) + 1}`
      : parseInt(post_date.getMonth()) + 1;
  const date =
    post_date.getDate() < 10
      ? `0${post_date.getDate()}`
      : `${post_date.getDate()}`;
  // const hour =
  //   post_date.getHours() < 10
  //     ? `0${post_date.getHours()}`
  //     : `${post_date.getHours()}`;
  // const minute =
  //   post_date.getMinutes() < 10
  //     ? `0${post_date.getMinutes()}`
  //     : `${post_date.getMinutes()}`;
  return `${year.toString().substring(2, 4)}.${month}.${date}`;
};

export default getDate;
