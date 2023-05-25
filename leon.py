from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about_page():
    return 'About Us Page'

@app.route('/scania')
def scania():
    return render_template('scania.html')

if __name__ == '__main__':
    app.run(debug=True)
