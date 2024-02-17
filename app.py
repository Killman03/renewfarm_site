from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

app.config['SECRET_KEY'] = 'flkasjfkjoifjoisajef832u8rewif'
app.config['MAIL_SERVER'] = "smtp.googlemail.com"
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = "tg3381234@gmail.com"
app.config['MAIL_PASSWORD'] = "qfkj jcdj fufa nxsb"

mail = Mail(app)


@app.route('/', methods=["POST", "GET"])
def index():
    return render_template('index.html', footer_text=[{'one': 'Contact us here for more information', 'two': 'inform'}])


@app.route('/about', methods=["POST", "GET"])
def about():
    return render_template('about.html', footer_text = [{'one': 'Contact us here for more information', 'two': 'inform'}])


@app.route('/pasture-Raised-Chicken', methods=["POST", "GET"])
def chicken_pasture():
    return render_template('chick.html', footer_text = [{'one': 'Contact us here to place an order!', 'two': 'order'}])


@app.route('/contact', methods=["POST", "GET"])
def contacts():
    return render_template('contacts.html', footer_text = [{'one': 'Contact us here for more information', 'two': 'inform'}])


@app.route('/send_email', methods=['POST'])
def send_email():
    name = request.form['name']
    phone_number = request.form['phone']
    email = request.form['email']
    comment = request.form['comment']
    subject = 'Subject_1'
    msg = Message(subject=subject, sender=email, recipients=['tg3381234@gmail.com'])
    msg.body = f'Name: {name}\nPhone: {phone_number}\nEmail: {email}\nComment: {comment}'
    mail.send(msg)
    return 'Email sent seccessfully'


@app.route('/farming-club')
def farming_club():
    return render_template('club.html', footer_text = [{'one': 'Contact us here to join our club', 'two': 'club-join'}])


if __name__ == '__main__':
    app.run(debug=True)
