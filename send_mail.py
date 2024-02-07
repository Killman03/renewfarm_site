from flask import Flask, render_template
from flask_mail import Mail, Message

app = Flask(__name__)

app.config['SECRET_KEY'] = "tsfyguaistyatuis589566875623568956"

app.config['MAIL_SERVER'] = "smtp.googlemail.com"

app.config['MAIL_PORT'] = 587

app.config['MAIL_USE_TLS'] = True

app.config['MAIL_USERNAME'] = "tg3381234@gmail.com"

app.config['MAIL_PASSWORD'] = "qfkj jcdj fufa nxsb"

mail = Mail(app)


@app.route('/')
def index():
    return 'Index'


@app.route('/send_email/<email>', methods=["GET"])
def send_email(email):
    msg_title = "This is a test email"
    sender = 'noreply@app.com'
    msg = Message(msg_title, sender=sender, recipients=[email])
    msg_body = "Test123"
    msg_body = ""
    data = {
        'app_name': "REBWAR AI",
        'title': msg_title,
        'body': msg_body,
    }

    msg.html = render_template("email.html", data=data)

    try:
        mail.send(msg)
        return 'Email sent'

    except Exception as e:
        print(e)
        return f'The mail was not sent {e}'


if __name__ == "__main__":
    app.run(debug=True)
