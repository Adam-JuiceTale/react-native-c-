var mailer = require('nodemailer')

var transporter = mailer.createTransport(
	{
	host: 'smtp.ethereal.email',
    //host: 'smtp.mail.ru',
	port: 587,
   // port: 465,
	secure: false, // use SSL
	//secure: true, // use SSL
    auth: {
		user: 'carolyne.bosco@ethereal.email',
        //user: 'r.o.a.d@bk.ru',
		pass: 'P2F7yPvfpXZXPgnwMx'
        //pass: 'FbVxEUeZNyorWFItD2mb'
		}
    },
	{
	from: 'Mailer Test <carolyne.bosco@ethereal.email>',
	//from: 'R.O.A.D. Game <r.o.a.d@bk.ru>',
	}
)
//doteAlieset
//todaerFalredtes
//Emhh5wvkreuFjnn5rp
var maler = message =>{
transporter.sendMail(message, (err, info) =>{
if(err) return console.log(err)
console.log('asd',info)
})
}

module.exports = maler
/*
var mailOptions = {
from: "vadim78ig@gmail.com",
to: "mmmxashnik@mail.ru",
subject:"tst",
text: "you are text here nodemailer",
}

transporter.sendMail(mailOptions, function (err,done){
if(err){
console.log(err);
}else{
console.log('donesend');
}
});
*/