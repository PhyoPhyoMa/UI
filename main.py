from flask import Flask, render_template, url_for, request, jsonify

myapp=Flask(__name__)

@myapp.route("/")
def hello():
    return render_template("index.html")

@myapp.route("/convert", methods=["POST"])
def convert():
    myinput = request.form['myinput']
    myoutput = request.form['myoutput']
    output = "The Input is " + myinput +"\r\n" + "The Output is " +myoutput
    if myinput:
        return jsonify({'output': output})
    return jsonify({'output': "An error occured"})

if __name__ == "__main__":
    myapp.run(debug=True)
