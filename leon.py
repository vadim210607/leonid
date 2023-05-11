from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World! And Tanya'

@app.route('/about')
def about_page():
    return 'About Us Page'

if __name__ == '__main__':
    app.run()