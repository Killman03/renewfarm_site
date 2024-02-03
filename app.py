from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/pasture-Raised-Chicken')
def chicken_pasture():
    return render_template('chick.html')


@app.route('/contact')
def contacts():
    return render_template('contacts.html')


@app.route('/farming-club')
def farming_club():
    return render_template('club.html')


if __name__ == '__main__':
    app.run(debug=True)
