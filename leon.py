from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about_us.html')


@app.route('/scania-higer-a80t')
def scania_49():
    return render_template('scania_49.html')


@app.route('/mersedes-benz-travego-rhd-l')
def mers_57():
    return render_template('mers_57.html')


@app.route('/setra-s-416-gt-hd')
def setra_53():
    return render_template('setra_53.html')


@app.route('/mersedes-benz-travego-0560')
def mers_53():
    return render_template('mers_53.html')


@app.route('/setra-s-415-hdh')
def setra_49():
    return render_template('setra_49.html')


if __name__ == '__main__':
    app.run(debug=True)

