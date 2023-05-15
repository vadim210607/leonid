from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    data = {
        "title": "Головна сторінка",
    }
    return render_template('index.html', data=data)

@app.route('/about')
def about_page():
    return 'About Us Page'

if __name__ == '__main__':
    app.run()