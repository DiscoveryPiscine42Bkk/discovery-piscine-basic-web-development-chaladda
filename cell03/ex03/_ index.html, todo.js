<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Mini To Do List</title>
  <style>
    #ft_list { min-width:220px; min-height:40px; border:1px solid #aaa; padding:10px; margin:20px 0; background:#f9f9f9;}
    .todo { background:#ffe; margin-bottom:6px; padding:8px; border-radius:5px; cursor:pointer; border:1px solid #ccc;}
    #new { padding:6px 16px; }
  </style>
</head>
<body>
  <button id="new">New</button>
  <div id="ft_list"></div>
  <script>
    function save() {
      document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
    }
    function load() {
      let m = document.cookie.match(/(?:^|;) *todos=([^;]*)/);
      return m ? JSON.parse(decodeURIComponent(m[1])) : [];
    }
    function render() {
      ft_list.innerHTML = '';
      todos.forEach((t, i) => {
        let d = document.createElement('div');
        d.className = 'todo';
        d.textContent = t;
        d.onclick = () => {
          if (confirm('Remove this TO DO?')) {
            todos.splice(i,1); save(); render();
          }
        };
        ft_list.insertBefore(d, ft_list.firstChild);
      });
    }
    let ft_list = document.getElementById('ft_list');
    let todos = load();
    render();
    document.getElementById('new').onclick = function() {
      let t = prompt('New TO DO:');
      if (t && t.trim()) {
        todos.push(t.trim());
        save(); render();
      }
    };
  </script>
</body>
</html>