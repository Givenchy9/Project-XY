<!DOCTYPE html>
<html>
    <head>
        <style>
           #demo1{
            color: red;
            border-bottom: solid red 2px;
           }
           #demo2{
            color: red;
            border-top: solid red 2px;
           }
        </style>
        
    </head>
    <body>
      <!-- <?php
      $talen = array("PHP", "C#", "HTML", "JavaScript", "Java", "C++", "C");
      echo "I like " .$talen[3] . ", " . $talen[2] . " and " . $talen[6] . ".<br><br>";

      foreach ($talen as $value) {
          echo "$value <br>";
        }
      ?> -->
      <p id="demo2">This is a Javacript array: </p><p id="demo1"></p>
      <script>
        const talen =["PHP", "C#", "HTML", "JavaScript", "Java", "C++", "C"]
        document.getElementById("demo1").innerHTML = talen
      </script>
      <p>To do:</p>
      <p>1. Make a const, let or var</p>
      <p>2. Put a name directly after the const, let or var</p>
      <p>3. Put names in it like this: ["name1" "name2"]</p>
      <p>4. Make output where you can see your code</p>
    </body>
</html>
