type RegexObject = {
	[key: string]: RegExp;
};

export const regex: RegexObject = {
	firstName: new RegExp('^[a-zA-Zа-яА-Я]+(?: [a-zA-Zа-яА-Я]+)*$'),
	lastName: new RegExp('^[a-zA-Zа-яА-Я]+(?: [a-zA-Zа-яА-Я]+)*$'),
	userName: new RegExp('^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$'),
  email: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),
	password: new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,32}$'),
};
