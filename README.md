# Extracting information from websites that load data through JavaScript (jQuery, Angular, React, etc...)
Searching for information in a page's source code is fairly simple and trivial and you've probably done that before. But it gets a lot harder when the desired information is loaded at runtime. This usually happens with websites that use JavaScript frameworks, such as Angular or React.

The problem at hand is caused by the fact that the information that we want to extract is not present in the page's source code. It is loaded afterwards and resides in your browser memory.

So... how can we get it?

This repository is a very simple example of how you can achieve this by using `jsdom` and `cheerio`.

Let's get started. We are going to use the `dummy.html` file as a dummy website.
If you load the [file](https://rawgit.com/alexandretok/scraping-javascript-websites/master/dummy.html) in your browser you'll see the text `This text was loaded dynamically and is not present in the page's source code.`. That's the information we want to extract.

If you check its source code, I'll see the following:

```
<html>
<head>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript">
  $(function() {
    $.get("dummy.json", function (data) {
      $("li").text(data.text);
    });
  });
</script>
</head>

<body>
  <ul>
    <li>This is a static text.</li>
  </ul>
</body>
</html>
```

The information we want is not on the source code, because after the page loads, it fetches the `dummy.json` file and changes the content of the `li` dynamically.
