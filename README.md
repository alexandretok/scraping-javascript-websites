# Extracting information from websites that load data through JavaScript (jQuery, Angular, React, etc...)
Searching for information in a page's source code is fairly simple and trivial and you've probably done that before. But it gets a lot harder when the desired information is loaded at runtime. This usually happens with websites that use JavaScript frameworks, such as Angular or React.

The problem at hand is caused by the fact that the information that we want to extract is not present in the page's source code. It is loaded afterwards and resides in your browser memory.

So... how can we get it?

This repository is a very simple example of how you can achieve this by using `jsdom` and `cheerio`.
