# jquery.form.restore.js
Restore form value by JSON data

# Sample
````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="http://code.jquery.com/jquery-1.11.3.js"></script>
    <script src="jquery.form.restore.js"></script>
    <script>
    $(function() {
        var data = {
            "username": "admin",
            "content": "my content",
            "on": "2",
            "checked": "checked",
            "opts[]": "oa##oc",
            "sel": "b",
            "hidden": 1,
            "sel_m": "a1##c1##d1"
        }

        $('#modify_form').formRestore({
            data: data,
            separate: '##'
        })
    });
    </script>
</head>
<body>
<form name="modify_form" id="modify_form">
    <div>
        <input type="text" name="username" placeholder="username">
    </div>
    <div>
        <textarea name="content" cols="30" rows="10" placeholder="content"></textarea>
    </div>
    <div>
        <input type="radio" name="on" value="1" checked> 1
        <input type="radio" name="on" value="2"> 2
    </div>
    <div>
        <input type="checkbox" name="checked" value="checked"> checked
    </div>
    <div>
        <input type="checkbox" name="opts[]" value="oa" /> ca
        <input type="checkbox" name="opts[]" value="ob" /> cb
        <input type="checkbox" name="opts[]" value="oc" /> cc
    </div>
    <div>
        <select name="sel">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
        </select>
    </div>
    <div>
        <select name="sel_m" multiple>
            <option value="a1">a1</option>
            <option value="b1">b1</option>
            <option value="c1">c1</option>
            <option value="d1">d1</option>
        </select>
    </div>
    <div>
        <input type="hidden" name="hidden">
    </div>
</form>
</body>
</html>

````
